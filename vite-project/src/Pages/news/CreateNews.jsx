import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  createNewsApi,
  updateNewsApi,
  getNewsBySlugApi,
  getNewsCategoriesApi,
  getNewsCountriesApi,
} from "./news.api.js";
import DescriptionEditor from "../Home/DescriptionEditor.jsx";
import {
  Newspaper,
  ImagePlus,
  Loader2,
  CheckCircle2,
  Eye,
  X,
  Monitor,
  Smartphone,
  Globe,
  FolderTree,
  Send,
  RotateCcw,
  FileText,
  Trash2,
  Building2,
  ArrowLeft,
  Sparkles,
  User,
} from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DOMPurify from "dompurify";

const COUNTRIES = [
  "Global",
  "India",
  "Russia",
  "Georgia",
  "Kazakhstan",
  "Kyrgyzstan",
  "Uzbekistan",
  "Philippines",
  "Egypt",
  "Nepal",
  "Bangladesh",
];

const DEFAULT_CATEGORIES = [
  { name: "Admissions" },
  { name: "NMC & Medical Alerts" },
  { name: "Visa Updates" },
  { name: "Scholarships" },
  { name: "Guidelines" },
];

export default function CreateNews() {
  const navigate = useNavigate();
  const location = useLocation();
  const editId = location.state?.editId || null;

  // Form State
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Admissions");
  const [country, setCountry] = useState("Global");
  const [author, setAuthor] = useState("");
  const [summary, setSummary] = useState("");
  const [body, setBody] = useState("");
  const [status, setStatus] = useState("published");

  // Image State
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [existingImageUrl, setExistingImageUrl] = useState("");

  // Categories & Countries State
  const [categories, setCategories] = useState([]);
  const [fetchingCategories, setFetchingCategories] = useState(true);
  const [countries, setCountries] = useState([]);
  const [fetchingCountries, setFetchingCountries] = useState(true);
  const [fetchingEditData, setFetchingEditData] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Live Preview Modal
  const [showPreview, setShowPreview] = useState(false);
  const [previewDevice, setPreviewDevice] = useState("desktop");

  // 1. Fetch categories and countries
  useEffect(() => {
    const fetchCats = async () => {
      try {
        setFetchingCategories(true);
        const res = await getNewsCategoriesApi();
        if (res.data?.categories?.length > 0) {
          setCategories(res.data.categories);
        } else if (res.data?.data?.length > 0) {
          setCategories(res.data.data);
        } else {
          setCategories(DEFAULT_CATEGORIES);
        }
      } catch (err) {
        console.warn("Could not load categories, using defaults:", err);
        setCategories(DEFAULT_CATEGORIES);
      } finally {
        setFetchingCategories(false);
      }
    };

    const fetchCountries = async () => {
      try {
        setFetchingCountries(true);
        const res = await getNewsCountriesApi();
        const list = res.data?.countries || res.data?.data || [];
        if (list.length > 0) {
          setCountries(list);
        } else {
          setCountries(COUNTRIES.map((c) => ({ name: c })));
        }
      } catch (err) {
        console.warn("Could not load countries, using defaults:", err);
        setCountries(COUNTRIES.map((c) => ({ name: c })));
      } finally {
        setFetchingCountries(false);
      }
    };

    fetchCats();
    fetchCountries();
  }, []);

  // 2. Fetch existing news if editing
  useEffect(() => {
    if (!editId) return;

    const fetchDetail = async () => {
      try {
        setFetchingEditData(true);
        const res = await getNewsBySlugApi(editId);
        const n = res.data?.news || res.data?.data;
        if (n) {
          setTitle(n.title || "");
          setCategory(n.category || "Admissions");
          setCountry(n.country || "Global");
          setAuthor(n.author || n.source || "");
          setSummary(n.summary || "");
          setBody(n.body || "");
          setStatus(n.status || "published");
          if (n.image) {
            setExistingImageUrl(n.image);
            setPreviewUrl(n.image);
          }
        }
      } catch (err) {
        console.error("Error fetching news details:", err);
        toast.error("Failed to load article for editing.");
      } finally {
        setFetchingEditData(false);
      }
    };

    fetchDetail();
  }, [editId]);

  // 3. Image Handlers
  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.warn("Please select a valid image file.");
      return;
    }

    if (file.size > 8 * 1024 * 1024) {
      toast.warn("Image file is too large. Max size is 8MB.");
      return;
    }

    setImageFile(file);
    if (previewUrl && !existingImageUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleRemoveImage = () => {
    if (previewUrl && !existingImageUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setImageFile(null);
    setPreviewUrl("");
    setExistingImageUrl("");
  };

  const handleResetForm = () => {
    setTitle("");
    setCategory("Admissions");
    setCountry("Global");
    setAuthor("");
    setSummary("");
    setBody("");
    setStatus("published");
    handleRemoveImage();
  };

  // 4. Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      toast.warn("Please enter a news headline/title.");
      return;
    }
    if (!author.trim()) {
      toast.warn("Please enter your name as author.");
      return;
    }
    if (!summary.trim()) {
      toast.warn("Please enter a short summary for the news.");
      return;
    }
    if (!body || body.trim().length < 15) {
      toast.warn("Please write the full news article body.");
      return;
    }
    if (!previewUrl && !existingImageUrl) {
      toast.warn("Please upload a featured cover image for the news article.");
      return;
    }

    const data = new FormData();
    data.append("title", title.trim());
    data.append("category", category);
    data.append("country", country);
    data.append("author", author.trim());
    data.append("source", author.trim());
    data.append("summary", summary.trim());
    data.append("body", body);
    data.append("status", status);

    if (imageFile) {
      data.append("image", imageFile);
    } else if (existingImageUrl) {
      data.append("image", existingImageUrl);
    }

    try {
      setSubmitting(true);
      let res;
      if (editId) {
        res = await updateNewsApi(editId, data);
        toast.success("News article updated successfully!");
      } else {
        res = await createNewsApi(data);
        toast.success("News article created successfully!");
        handleResetForm();
      }

      setTimeout(() => {
        navigate("/news-list");
      }, 900);
    } catch (err) {
      console.error("News submit error:", err);
      toast.error(err.response?.data?.message || "Failed to save news article.");
    } finally {
      setSubmitting(false);
    }
  };

  if (fetchingEditData) {
    return (
      <div className="flex min-h-[500px] items-center justify-center">
        <div className="flex flex-col items-center gap-3 text-slate-500">
          <Loader2 size={36} className="animate-spin text-indigo-600" />
          <p className="text-sm font-medium">Loading news article details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-slate-50/70 p-4 sm:p-6 lg:p-8">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="mx-auto max-w-7xl">
        {/* Top Header */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="mb-1.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-indigo-600">
              <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
              Newsroom Studio
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              {editId ? "Edit News Article" : "Create News Article"}
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Draft, style, and create notices and alerts with rich tables, formatting, and live preview.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => navigate("/news-list")}
              className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 shadow-2xs hover:bg-slate-50 transition cursor-pointer"
            >
              <ArrowLeft size={14} />
              View All News
            </button>
          </div>
        </div>

        {/* Full Width Unified Form */}
        <form onSubmit={handleSubmit} className="w-full">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-7">
            {/* 1. News Title */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-slate-800 flex items-center gap-1.5">
                  <FileText size={16} className="text-indigo-600" />
                  News Headline / Title <span className="text-rose-500">*</span>
                </label>
                <span className="text-xs text-slate-400">
                  {title.length}/150 characters
                </span>
              </div>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter clear and official news headline (e.g. NMC Extends MBBS Abroad 2026-27 Admission Deadline)..."
                required
                maxLength={150}
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-base font-medium text-slate-800 outline-none transition placeholder:text-slate-400 placeholder:font-normal focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
              />
            </div>

            {/* 2. Metadata & Classification (Category, Country, Source) */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 rounded-xl border border-slate-100 bg-slate-50/60 p-4 sm:p-5">
              {/* Category */}
              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                  <FolderTree size={14} className="text-indigo-600" />
                  Category <span className="text-rose-500">*</span>
                </label>
                {fetchingCategories ? (
                  <div className="flex h-11 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 text-xs text-slate-500">
                    <Loader2 size={14} className="animate-spin" />
                    Loading categories...
                  </div>
                ) : (
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                    className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 cursor-pointer"
                  >
                    {categories.map((c, idx) => (
                      <option key={c._id || idx} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                )}
              </div>

              {/* Country */}
              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                  <Globe size={14} className="text-indigo-600" />
                  Country / Region <span className="text-rose-500">*</span>
                </label>
                {fetchingCountries ? (
                  <div className="flex h-11 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 text-xs text-slate-500">
                    <Loader2 size={14} className="animate-spin" />
                    Loading countries...
                  </div>
                ) : (
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 cursor-pointer"
                  >
                    {countries.map((cnt, idx) => {
                      const cName = cnt.name || cnt;
                      return (
                        <option key={cnt._id || idx} value={cName}>
                          {cName}
                        </option>
                      );
                    })}
                  </select>
                )}
              </div>

              {/* Author */}
              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                  <User size={14} className="text-indigo-600" />
                  Author / Written By <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="e.g. your name"
                  required
                  className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>
            </div>

            {/* 3. Short Summary */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-slate-800 flex items-center gap-1.5">
                  <Sparkles size={16} className="text-indigo-600" />
                  Brief Summary / Subtitle <span className="text-rose-500">*</span>
                </label>
                <span className="text-xs text-slate-400">
                  {summary.length}/300 characters
                </span>
              </div>
              <textarea
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                placeholder="Write a crisp 2-3 line summary that will be highlighted on news cards and search previews..."
                required
                maxLength={300}
                rows={3}
                className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3.5 text-sm font-normal text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
              />
            </div>

            {/* 4. Full Article Body (Rich Text with CKEditor 5) */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-slate-800 flex items-center gap-1.5">
                  <Newspaper size={16} className="text-indigo-600" />
                  Full Article Content &amp; Tables <span className="text-rose-500">*</span>
                </label>
                <span className="text-xs text-slate-400">
                  Use table tools, headers, lists &amp; formatted text
                </span>
              </div>

              <div className="overflow-hidden rounded-xl border border-slate-200 shadow-2xs">
                <DescriptionEditor
                  value={body}
                  onChange={setBody}
                  placeholder="Write the full news announcement here... Insert tables, bold highlights, guidelines and official circular details."
                />
              </div>
            </div>

            {/* 5. Featured Cover Media */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-slate-800 flex items-center gap-1.5">
                  <ImagePlus size={16} className="text-indigo-600" />
                  Featured Cover Image <span className="text-rose-500">*</span>
                </label>
                {previewUrl && (
                  <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                    <CheckCircle2 size={13} />
                    Cover image ready
                  </span>
                )}
              </div>

              {previewUrl ? (
                <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 group shadow-xs">
                  <img
                    src={previewUrl}
                    alt="Cover"
                    className="w-full h-full object-cover transition duration-300 group-hover:scale-[1.01]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-black/30 pointer-events-none" />

                  <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600/90 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold text-white shadow-xs">
                      Cover Image Active
                    </span>
                  </div>

                  <div className="absolute top-3.5 right-3.5 flex items-center gap-2">
                    <label
                      className="inline-flex items-center gap-1.5 rounded-xl bg-white/90 backdrop-blur-sm px-3.5 py-2 text-xs font-semibold text-slate-800 shadow-md hover:bg-white transition cursor-pointer"
                      title="Change image"
                    >
                      <ImagePlus size={14} className="text-indigo-600" />
                      <span>Change Image</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </label>

                    <button
                      type="button"
                      onClick={handleRemoveImage}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-rose-600/90 backdrop-blur-sm px-3.5 py-2 text-xs font-semibold text-white shadow-md hover:bg-rose-600 transition cursor-pointer"
                      title="Remove image"
                    >
                      <Trash2 size={14} />
                      <span className="hidden sm:inline">Remove</span>
                    </button>
                  </div>
                </div>
              ) : (
                <label className="group flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/50 p-8 sm:p-12 transition hover:border-indigo-400 hover:bg-indigo-50/30">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition group-hover:scale-105 shadow-2xs">
                    <ImagePlus size={24} />
                  </div>
                  <p className="text-sm font-semibold text-slate-700">
                    Set Featured News Cover Image
                  </p>
                  <p className="mt-1 text-xs text-slate-400 text-center max-w-sm">
                    PNG, JPG, WEBP • Click or drag your article cover photo here
                  </p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              )}
            </div>

            {/* 6. Bottom Action Bar */}
            <div className="border-t border-slate-100 pt-6 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <label className="text-xs font-semibold text-slate-600">Status:</label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-700 outline-none"
                  >
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                  </select>
                </div>

                {!editId && (
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-medium text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition cursor-pointer"
                  >
                    <RotateCcw size={13} />
                    Reset
                  </button>
                )}
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setShowPreview(true)}
                  className="flex h-12 items-center justify-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50/70 px-5 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-100 cursor-pointer shadow-2xs"
                >
                  <Eye size={17} />
                  Preview Article
                </button>

                <button
                  type="submit"
                  disabled={submitting}
                  className="flex h-12 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-7 text-sm font-semibold text-white shadow-md shadow-indigo-500/20 transition hover:bg-indigo-700 active:scale-[0.99] disabled:opacity-60 cursor-pointer"
                >
                  {submitting ? (
                    <>
                      <Loader2 size={17} className="animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      {editId ? "Update News Article" : "Create News Article"}
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Full News Article Preview Modal */}
      {showPreview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setShowPreview(false)}
        >
          <div
            className="flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                  <Eye size={18} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">
                    Live News Article Preview
                  </h3>
                  <p className="text-xs text-slate-500">
                    How your notice will appear on the Edu-Hawk website
                  </p>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2">
                <div className="hidden sm:flex items-center rounded-lg border border-slate-200 bg-white p-0.5 text-xs">
                  <button
                    type="button"
                    onClick={() => setPreviewDevice("desktop")}
                    className={`flex items-center gap-1 rounded-md px-2.5 py-1 font-medium transition cursor-pointer ${
                      previewDevice === "desktop"
                        ? "bg-indigo-600 text-white shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <Monitor size={13} />
                    Desktop
                  </button>
                  <button
                    type="button"
                    onClick={() => setPreviewDevice("mobile")}
                    className={`flex items-center gap-1 rounded-md px-2.5 py-1 font-medium transition cursor-pointer ${
                      previewDevice === "mobile"
                        ? "bg-indigo-600 text-white shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <Smartphone size={13} />
                    Mobile
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setShowPreview(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-400 hover:bg-slate-200/60 hover:text-slate-700 transition cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto bg-slate-100/70 p-4 sm:p-6">
              <div
                className={`mx-auto rounded-2xl bg-white shadow-sm transition-all duration-300 ${
                  previewDevice === "desktop"
                    ? "max-w-3xl p-6 sm:p-10"
                    : "max-w-sm p-4 sm:p-6 border-4 border-slate-800 rounded-3xl"
                }`}
              >
                {/* Meta */}
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-3">
                  <span className="rounded-md bg-indigo-50 px-2 py-0.5 text-indigo-700">
                    {category}
                  </span>
                  <span>•</span>
                  <span>{country}</span>
                  <span>•</span>
                  <span>By : {author.trim() || "your name"}</span>
                </div>

                {/* Title */}
                <h1 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug mb-3">
                  {title || "Untitled News Notice"}
                </h1>

                {/* Summary */}
                {summary && (
                  <p className="text-sm font-medium text-slate-600 mb-5 p-3 rounded-xl bg-slate-50 border-l-4 border-indigo-500">
                    {summary}
                  </p>
                )}

                {/* Cover Image */}
                {previewUrl && (
                  <div className="mb-6 overflow-hidden rounded-xl border border-slate-100 shadow-2xs">
                    <img
                      src={previewUrl}
                      alt="News Cover"
                      className="h-56 sm:h-80 w-full object-cover"
                    />
                  </div>
                )}

                {/* Rich Body */}
                <div
                  className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      body || "<p class='text-slate-400 italic'>Article body preview will appear here...</p>"
                    ),
                  }}
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-slate-200 bg-slate-50 px-6 py-3 flex items-center justify-between text-xs text-slate-500">
              <span>Preview Mode: Live rendering</span>
              <button
                type="button"
                onClick={() => setShowPreview(false)}
                className="rounded-lg bg-slate-200 px-3 py-1.5 font-semibold text-slate-700 hover:bg-slate-300 transition cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
