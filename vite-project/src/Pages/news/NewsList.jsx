import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAllNewsApi,
  deleteNewsApi,
  getNewsCategoriesApi,
} from "./news.api.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Plus,
  Search,
  Edit2,
  Trash2,
  Eye,
  ExternalLink,
  Loader2,
  RefreshCw,
  Calendar,
  Globe,
  Tag,
  CheckCircle2,
  X,
} from "lucide-react";

export default function NewsList() {
  const navigate = useNavigate();

  const [news, setNews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [previewArticle, setPreviewArticle] = useState(null);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const params = {};
      if (selectedCategory !== "All") params.category = selectedCategory;
      if (search.trim()) params.search = search.trim();

      const res = await getAllNewsApi(params);
      setNews(res.data?.news || []);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load news articles");
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await getNewsCategoriesApi();
      setCategories(res.data?.categories || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchNews();
  }, [selectedCategory, search]);

  const handleDelete = async (id, title) => {
    if (!window.confirm(`Are you sure you want to delete "${title}"?`)) return;

    try {
      await deleteNewsApi(id);
      toast.success("News article deleted");
      setNews((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete news article");
    }
  };

  return (
    <div className="space-y-6">
      <ToastContainer position="top-right" autoClose={2500} />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
            News &amp; Official Circulars
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage global medical admissions announcements, NMC advisories, and visa alerts.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate("/create-news")}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl shadow-xs transition"
          >
            <Plus size={18} />
            Create Article
          </button>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="bg-white p-4 rounded-2xl border border-gray-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative w-full sm:w-80">
          <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search headline, country, keyword..."
            className="w-full pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full sm:w-auto px-3.5 py-2 text-sm border border-gray-200 rounded-xl bg-gray-50 text-gray-700 focus:outline-none focus:bg-white focus:border-blue-500"
          >
            <option value="All">All Categories</option>
            {categories.map((c) => (
              <option key={c.name} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>

          <button
            onClick={fetchNews}
            className="p-2.5 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-xl transition"
            title="Refresh List"
          >
            <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
          </button>
        </div>
      </div>

      {/* Articles Table */}
      <div className="bg-white rounded-2xl border border-gray-200/80 shadow-xs overflow-hidden">
        {loading ? (
          <div className="py-20 flex flex-col items-center justify-center text-gray-500 gap-2">
            <Loader2 size={28} className="animate-spin text-blue-600" />
            <p className="text-sm">Loading news articles...</p>
          </div>
        ) : news.length === 0 ? (
          <div className="py-20 text-center px-4">
            <p className="text-gray-500 text-sm">No news articles found.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-600">
              <thead className="bg-gray-50/80 text-xs font-semibold uppercase text-gray-500 border-b border-gray-100">
                <tr>
                  <th className="px-6 py-4">Article</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Region</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {news.map((item) => (
                  <tr key={item._id} className="hover:bg-gray-50/60 transition">
                    {/* Article column */}
                    <td className="px-6 py-4 max-w-sm">
                      <div className="flex items-center gap-3.5">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt=""
                            className="w-12 h-12 rounded-xl object-cover shrink-0 border border-gray-200"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center shrink-0 text-gray-400">
                            📰
                          </div>
                        )}
                        <div className="min-w-0">
                          <span
                            className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold text-white mb-1 ${
                              item.badgeColor || "bg-blue-500"
                            }`}
                          >
                            {item.badge || "News"}
                          </span>
                          <h3
                            className="font-semibold text-gray-900 text-sm truncate hover:text-blue-600 cursor-pointer"
                            onClick={() => setPreviewArticle(item)}
                            title={item.title}
                          >
                            {item.title}
                          </h3>
                          <p className="text-xs text-gray-400 truncate mt-0.5">
                            {item.summary}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-gray-100 text-gray-800">
                        <Tag size={12} className="text-gray-400" />
                        {item.category}
                      </span>
                    </td>

                    {/* Region */}
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-600">
                      <span className="inline-flex items-center gap-1">
                        <Globe size={13} className="text-gray-400" />
                        {item.country || "Global"}
                      </span>
                    </td>

                    {/* Date */}
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-gray-500">
                      {new Date(item.publishedAt || item.createdAt).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                          item.status === "published"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : "bg-amber-50 text-amber-700 border border-amber-200"
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            item.status === "published" ? "bg-emerald-500" : "bg-amber-500"
                          }`}
                        />
                        {item.status === "published" ? "Live" : "Draft"}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => setPreviewArticle(item)}
                          className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition"
                          title="Preview Article"
                        >
                          <Eye size={16} />
                        </button>
                        <button
                          onClick={() => navigate("/create-news", { state: { editId: item._id } })}
                          className="p-2 text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition"
                          title="Edit Article"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(item._id, item.title)}
                          className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
                          title="Delete Article"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Preview Modal */}
      {previewArticle && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 shadow-2xl">
            <div className="relative">
              {previewArticle.image && (
                <img
                  src={previewArticle.image}
                  alt=""
                  className="w-full h-56 object-cover rounded-t-3xl"
                />
              )}
              <button
                onClick={() => setPreviewArticle(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                    previewArticle.badgeColor || "bg-blue-500"
                  }`}
                >
                  {previewArticle.badge}
                </span>
                <span className="text-xs text-gray-500 font-medium">
                  {previewArticle.category} • {previewArticle.country}
                </span>
                {previewArticle.readTime && (
                  <span className="text-xs text-gray-400">• {previewArticle.readTime}</span>
                )}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 leading-snug">
                {previewArticle.title}
              </h2>

              <p className="text-sm text-gray-600 italic bg-gray-50 p-4 rounded-xl border border-gray-100">
                "{previewArticle.summary}"
              </p>

              {previewArticle.keyHighlights?.length > 0 && (
                <div className="bg-blue-50/50 border border-blue-100 p-4 rounded-2xl">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-2">
                    Key Highlights
                  </h4>
                  <ul className="space-y-1.5 text-xs text-blue-950">
                    {previewArticle.keyHighlights.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-blue-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-line pt-2">
                {previewArticle.body}
              </div>

              {previewArticle.officialSource && (
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-500">By : {previewArticle.author || previewArticle.source}</span>
                  <a
                    href={previewArticle.officialSource}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:underline"
                  >
                    View Official Circular <ExternalLink size={12} />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
