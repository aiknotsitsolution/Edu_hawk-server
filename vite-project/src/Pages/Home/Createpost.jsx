import React, { useState, useEffect } from "react";
import { createProductApi } from "./product.api";
import DescriptionEditor from "./DescriptionEditor.jsx";
import {
  ImagePlus,
  Loader2,
  CheckCircle2,
  Eye,
  X,
  Monitor,
  Smartphone,
  Sparkles,
  User,
  FolderTree,
  Send,
  RotateCcw,
  FileText,
  Lightbulb,
  Trash2,
} from "lucide-react";
import { toast } from "react-toastify";
import DOMPurify from "dompurify";

const CreateProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchingCategories, setFetchingCategories] = useState(true);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [showPostPreview, setShowPostPreview] = useState(false);
  const [previewDevice, setPreviewDevice] = useState("desktop");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setFetchingCategories(true);
        const response = await fetch(
          "https://edu-hawk-server.onrender.com/api/blogcategory",
        );
        if (!response.ok) throw new Error("Failed to load categories");
        const result = await response.json();
        if (result.success) {
          setCategories(result.data || []);
        } else {
          toast.error("Could not load categories: " + result.message);
        }
      } catch (err) {
        console.error("Error fetching categories:", err);
        toast.error("Failed to load categories. Please try again later.");
      } finally {
        setFetchingCategories(false);
      }
    };
    fetchCategories();
  }, []);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files || []);
    setImages(files);

    // Create preview URLs
    const urls = files.map((file) => URL.createObjectURL(file));
    setPreviewUrls(urls);
  };

  const handleRemoveImage = (indexToRemove) => {
    setImages((prev) => prev.filter((_, idx) => idx !== indexToRemove));
    setPreviewUrls((prev) => {
      if (prev[indexToRemove]) {
        URL.revokeObjectURL(prev[indexToRemove]);
      }
      return prev.filter((_, idx) => idx !== indexToRemove);
    });
  };

  const handleResetForm = () => {
    setName("");
    setDescription("");
    setAuthor("");
    setCategory("");
    setImages([]);
    previewUrls.forEach((url) => URL.revokeObjectURL(url));
    setPreviewUrls([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!category) {
      toast.warn("Please select a category");
      return;
    }
    if (!author.trim()) {
      toast.warn("Please enter author name");
      return;
    }
    if (images.length === 0) {
      toast.warn("Please select at least one image");
      return;
    }

    const formData = new FormData();
    formData.append("name", name.trim());
    formData.append("description", description.trim());
    formData.append("author", author.trim());
    formData.append("category", category);

    images.forEach((file) => {
      formData.append("images", file);
    });

    try {
      setLoading(true);
      const response = await createProductApi(formData);

      if (response.data?.success) {
        toast.success("Blog created successfully!");
        handleResetForm();
      } else {
        toast.error(response.data?.message || "Failed to create blog");
      }
    } catch (error) {
      console.error("Create blog error:", error);
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-full bg-slate-50/70 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Top Header */}
        <div className="mb-6">
          <div className="mb-1.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-indigo-600">
            <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
            Content Studio
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Create New Blog
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Draft, style, and publish articles with rich tables, formatting, and live preview.
          </p>
        </div>

        {/* Full Width Unified Blog Form */}
        <form onSubmit={handleSubmit} className="w-full">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs space-y-7">
            {/* 1. Featured Media (Top) */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-slate-800 flex items-center gap-1.5">
                  <ImagePlus size={16} className="text-indigo-600" />
                  Featured Media <span className="text-rose-500">*</span>
                </label>
                {previewUrls.length > 0 && (
                  <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                    <CheckCircle2 size={13} />
                    {previewUrls.length} image(s) selected
                  </span>
                )}
              </div>

              {/* Featured Media Box: Sets directly inside the box */}
              {previewUrls.length > 0 ? (
                <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 group shadow-xs">
                  {/* Cover Image */}
                  <img
                    src={previewUrls[0]}
                    alt="Cover"
                    className="w-full h-full object-cover transition duration-300 group-hover:scale-[1.01]"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-black/30 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600/90 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold text-white shadow-xs">
                      Cover Image
                    </span>
                    {previewUrls.length > 1 && (
                      <span className="inline-flex items-center rounded-lg bg-slate-900/80 backdrop-blur-sm px-2.5 py-1.5 text-xs font-medium text-white shadow-xs">
                        +{previewUrls.length - 1} more
                      </span>
                    )}
                  </div>

                  {/* Top Action Buttons (Change / Remove) */}
                  <div className="absolute top-3.5 right-3.5 flex items-center gap-2">
                    <label
                      className="inline-flex items-center gap-1.5 rounded-xl bg-white/90 backdrop-blur-sm px-3.5 py-2 text-xs font-semibold text-slate-800 shadow-md hover:bg-white transition cursor-pointer"
                      title="Change image"
                    >
                      <ImagePlus size={14} className="text-indigo-600" />
                      <span>Change Image</span>
                      <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </label>

                    <button
                      type="button"
                      onClick={() => handleRemoveImage(0)}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-rose-600/90 backdrop-blur-sm px-3.5 py-2 text-xs font-semibold text-white shadow-md hover:bg-rose-600 transition cursor-pointer"
                      title="Remove cover image"
                    >
                      <Trash2 size={14} />
                      <span className="hidden sm:inline">Remove</span>
                    </button>
                  </div>

                  {/* Bottom Image Info */}
                  <div className="absolute bottom-3.5 left-4 text-white text-xs">
                    <p className="font-semibold drop-shadow-xs">Cover photo active for blog</p>
                  </div>
                </div>
              ) : (
                /* Empty Upload Dropzone */
                <label className="group flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/50 p-8 sm:p-12 transition hover:border-indigo-400 hover:bg-indigo-50/30">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition group-hover:scale-105 shadow-2xs">
                    <ImagePlus size={24} />
                  </div>
                  <p className="text-sm font-semibold text-slate-700">
                    Set Featured Cover Image
                  </p>
                  <p className="mt-1 text-xs text-slate-400 text-center max-w-sm">
                    PNG, JPG, WEBP • Click or drag your cover image here
                  </p>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              )}

              {/* Extra Gallery Images Strip (If user uploaded > 1 image) */}
              {previewUrls.length > 1 && (
                <div className="mt-3">
                  <p className="text-xs font-medium text-slate-500 mb-2">
                    Additional Gallery Images:
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {previewUrls.slice(1).map((url, idx) => (
                      <div
                        key={idx + 1}
                        className="group relative h-16 w-20 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-2xs"
                      >
                        <img
                          src={url}
                          alt={`gallery-${idx}`}
                          className="h-full w-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveImage(idx + 1)}
                          className="absolute top-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-slate-900/80 text-white opacity-0 transition group-hover:opacity-100 hover:bg-rose-600 cursor-pointer"
                          title="Remove this image"
                        >
                          <X size={11} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 2. Blog Title */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-slate-800 flex items-center gap-1.5">
                  <FileText size={16} className="text-indigo-600" />
                  Blog Title <span className="text-rose-500">*</span>
                </label>
                <span className="text-xs text-slate-400">
                  {name.length}/120 characters
                </span>
              </div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter an engaging and clear blog title..."
                required
                maxLength={120}
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-base font-medium text-slate-800 outline-none transition placeholder:text-slate-400 placeholder:font-normal focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
              />
            </div>

            {/* 3. Metadata & Classification (Author & Category - Below Title) */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 rounded-xl border border-slate-100 bg-slate-50/60 p-4 sm:p-5">
              {/* Author Field */}
              <div>
                <label className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                  <User size={14} className="text-indigo-600" />
                  Author Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="e.g. Dr. Rajesh Kumar"
                  required
                  className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              {/* Category Field */}
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
                ) : categories.length === 0 ? (
                  <div className="flex h-11 items-center rounded-xl border border-rose-200 bg-rose-50 px-3.5 text-xs text-rose-600">
                    No categories found
                  </div>
                ) : (
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                    className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-800 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 cursor-pointer"
                  >
                    <option value="">-- Choose Category --</option>
                    {categories.map((cat) => (
                      <option key={cat._id} value={cat._id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            </div>

            {/* 4. Blog Description / Rich Text Editor */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-semibold text-slate-800">
                  Article Content & Tables <span className="text-rose-500">*</span>
                </label>
                <span className="text-xs text-slate-400">
                  Use table stretch handles to resize columns
                </span>
              </div>

              <div className="overflow-hidden rounded-xl border border-slate-200 shadow-2xs">
                <DescriptionEditor
                  value={description}
                  onChange={setDescription}
                  placeholder="Write your article here... Insert tables, stretch columns, add headings, and preview anytime."
                />
              </div>
            </div>

            {/* 5. Bottom Action Bar */}
            <div className="border-t border-slate-100 pt-6 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200/50">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  Ready to draft
                </span>
                <button
                  type="button"
                  onClick={handleResetForm}
                  className="flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-medium text-slate-500 hover:bg-slate-100 hover:text-slate-800 transition cursor-pointer"
                >
                  <RotateCcw size={13} />
                  Reset Form
                </button>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setShowPostPreview(true)}
                  className="flex h-12 items-center justify-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50/70 px-5 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-100 cursor-pointer shadow-2xs"
                >
                  <Eye size={17} />
                  Preview Blog
                </button>

                <button
                  type="submit"
                  disabled={loading || fetchingCategories}
                  className="flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-8 text-sm font-semibold text-white shadow-md shadow-indigo-200 transition hover:from-indigo-700 hover:to-violet-700 disabled:cursor-not-allowed disabled:opacity-70 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Creating Blog...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Create Blog
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Full Blog Post Preview Modal */}
      {showPostPreview && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setShowPostPreview(false)}
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
                    Full Blog Post Preview
                  </h3>
                  <p className="text-xs text-slate-500">
                    Live preview of how your article will appear to visitors
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
                  onClick={() => setShowPostPreview(false)}
                  className="rounded-lg p-2 text-slate-400 hover:bg-slate-200 hover:text-slate-700 transition cursor-pointer"
                  title="Close preview"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Modal Scrollable Content (Seamless Full Preview) */}
            <div className="flex-1 overflow-y-auto bg-white p-6 sm:p-10">
              <div
                className={`mx-auto space-y-6 transition-all duration-200 ${
                  previewDevice === "mobile"
                    ? "max-w-sm rounded-2xl border border-slate-200 p-5 shadow-xs"
                    : "max-w-3xl"
                }`}
              >
                {/* Category & Date */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                    {categories.find((c) => c._id === category)?.name ||
                      "Category"}
                  </span>
                  <span className="text-xs text-slate-400">• Today</span>
                </div>

                {/* Title */}
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                  {name.trim() || "Untitled Blog Post"}
                </h1>

                {/* Author Info */}
                <div className="flex items-center gap-3 border-y border-slate-100 py-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white uppercase">
                    {(author.trim() || "A")[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      {author.trim() || "Author Name"}
                    </p>
                    <p className="text-xs text-slate-400">Author</p>
                  </div>
                </div>

                {/* Cover Image(s) */}
                {previewUrls.length > 0 && (
                  <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-2xs">
                    <img
                      src={previewUrls[0]}
                      alt="Cover"
                      className="w-full max-h-[460px] object-cover"
                    />
                  </div>
                )}

                {/* Blog Content / Description */}
                <div className="pt-2">
                  {description && description.trim() ? (
                    <div
                      className="ck-content"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(description, {
                          ADD_ATTR: ["style", "target"],
                          ADD_TAGS: ["iframe"],
                        }),
                      }}
                    />
                  ) : (
                    <div className="py-8 text-center text-slate-400 italic text-sm">
                      No blog description content written yet.
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between border-t border-slate-200 bg-white px-6 py-3 text-xs text-slate-500">
              <span>Full Blog Post Preview</span>
              <button
                type="button"
                onClick={() => setShowPostPreview(false)}
                className="rounded-lg bg-slate-100 px-4 py-2 font-medium text-slate-700 hover:bg-slate-200 transition cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateProduct;