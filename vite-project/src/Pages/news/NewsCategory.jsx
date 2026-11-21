import React, { useState, useEffect } from "react";
import {
  getNewsCategoriesApi,
  createNewsCategoryApi,
  deleteNewsCategoryApi,
  getNewsCountriesApi,
  createNewsCountryApi,
  deleteNewsCountryApi,
} from "./news.api.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FolderPlus,
  Trash2,
  Tag,
  Loader2,
  RefreshCw,
  Globe,
  PlusCircle,
  Sparkles,
} from "lucide-react";

export default function NewsCategory() {
  const [activeTab, setActiveTab] = useState("categories"); // "categories" | "countries"

  // Categories state
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [loadingCategory, setLoadingCategory] = useState(false);
  const [fetchingCategories, setFetchingCategories] = useState(true);

  // Countries state
  const [countries, setCountries] = useState([]);
  const [countryName, setCountryName] = useState("");
  const [loadingCountry, setLoadingCountry] = useState(false);
  const [fetchingCountries, setFetchingCountries] = useState(true);

  // Fetch Categories
  const fetchCategories = async () => {
    try {
      setFetchingCategories(true);
      const res = await getNewsCategoriesApi();
      setCategories(res.data?.categories || res.data?.data || []);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load news categories");
    } finally {
      setFetchingCategories(false);
    }
  };

  // Fetch Countries
  const fetchCountries = async () => {
    try {
      setFetchingCountries(true);
      const res = await getNewsCountriesApi();
      setCountries(res.data?.countries || res.data?.data || []);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load countries/regions");
    } finally {
      setFetchingCountries(false);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchCountries();
  }, []);

  const handleRefresh = () => {
    if (activeTab === "categories") {
      fetchCategories();
    } else {
      fetchCountries();
    }
  };

  // Create Category
  const handleCreateCategory = async (e) => {
    e.preventDefault();
    if (!categoryName.trim()) {
      toast.warn("Please enter a category name");
      return;
    }

    try {
      setLoadingCategory(true);
      await createNewsCategoryApi({ name: categoryName.trim() });
      toast.success("Category created successfully!");
      setCategoryName("");
      fetchCategories();
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Failed to create category");
    } finally {
      setLoadingCategory(false);
    }
  };

  // Delete Category
  const handleDeleteCategory = async (id, catName) => {
    if (!window.confirm(`Are you sure you want to delete category "${catName}"?`)) return;

    try {
      await deleteNewsCategoryApi(id);
      toast.success("Category deleted");
      setCategories((prev) => prev.filter((c) => c._id !== id));
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete category");
    }
  };

  // Create Country
  const handleCreateCountry = async (e) => {
    e.preventDefault();
    if (!countryName.trim()) {
      toast.warn("Please enter a country or region name");
      return;
    }

    try {
      setLoadingCountry(true);
      await createNewsCountryApi({ name: countryName.trim() });
      toast.success("Country / Region added successfully!");
      setCountryName("");
      fetchCountries();
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Failed to add country/region");
    } finally {
      setLoadingCountry(false);
    }
  };

  // Delete Country
  const handleDeleteCountry = async (id, cName) => {
    if (!window.confirm(`Are you sure you want to delete country/region "${cName}"?`)) return;

    try {
      await deleteNewsCountryApi(id);
      toast.success("Country / Region deleted");
      setCountries((prev) => prev.filter((c) => c._id !== id));
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete country/region");
    }
  };

  const isCurrentFetching = activeTab === "categories" ? fetchingCategories : fetchingCountries;

  return (
    <div className="space-y-6">
      <ToastContainer position="top-right" autoClose={2500} />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
            News Categories &amp; Regions
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Create, manage and organize categories and country/region tags for your news circulars.
          </p>
        </div>
        <button
          type="button"
          onClick={handleRefresh}
          disabled={isCurrentFetching}
          className="inline-flex items-center gap-2 px-3.5 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-xl shadow-xs hover:bg-gray-50 focus:outline-none transition cursor-pointer"
        >
          <RefreshCw size={16} className={isCurrentFetching ? "animate-spin text-blue-600" : ""} />
          Refresh
        </button>
      </div>

      {/* Tab Switcher */}
      <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
        <button
          type="button"
          onClick={() => setActiveTab("categories")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition cursor-pointer ${
            activeTab === "categories"
              ? "bg-blue-600 text-white shadow-sm"
              : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
          }`}
        >
          <Tag size={16} />
          <span>Categories</span>
          <span
            className={`ml-1 px-2 py-0.5 text-xs rounded-full ${
              activeTab === "categories"
                ? "bg-white/25 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {categories.length}
          </span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("countries")}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition cursor-pointer ${
            activeTab === "countries"
              ? "bg-blue-600 text-white shadow-sm"
              : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
          }`}
        >
          <Globe size={16} />
          <span>Countries &amp; Regions</span>
          <span
            className={`ml-1 px-2 py-0.5 text-xs rounded-full ${
              activeTab === "countries"
                ? "bg-white/25 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {countries.length}
          </span>
        </button>
      </div>

      {/* ─── TAB 1: CATEGORIES ──────────────────────────────────────────────── */}
      {activeTab === "categories" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Create Category Form */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs h-fit">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
              <FolderPlus className="text-blue-600" size={20} />
              <h2 className="text-base font-semibold text-gray-800">Add New Category</h2>
            </div>

            <form onSubmit={handleCreateCategory} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5">
                  Category Name *
                </label>
                <input
                  type="text"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  placeholder="e.g. Visa Updates, Regulatory Alerts"
                  className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition"
                />
              </div>

              <button
                type="submit"
                disabled={loadingCategory}
                className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl shadow-xs transition flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
              >
                {loadingCategory ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Creating...
                  </>
                ) : (
                  <>
                    <FolderPlus size={16} />
                    Add Category
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right: Category List */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200/80 shadow-xs overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Tag className="text-gray-500" size={20} />
                <h2 className="text-base font-semibold text-gray-800">
                  All Categories ({categories.length})
                </h2>
              </div>
            </div>

            {fetchingCategories ? (
              <div className="py-12 flex flex-col items-center justify-center text-gray-500 gap-2">
                <Loader2 size={24} className="animate-spin text-blue-600" />
                <p className="text-sm">Loading categories...</p>
              </div>
            ) : categories.length === 0 ? (
              <div className="py-12 text-center text-gray-500 text-sm">
                No categories found. Create one using the form on the left.
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {categories.map((cat) => (
                  <div
                    key={cat._id}
                    className="p-4 sm:px-6 flex items-center justify-between hover:bg-gray-50/70 transition"
                  >
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">{cat.name}</h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleDeleteCategory(cat._id, cat.name)}
                      className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition cursor-pointer"
                      title="Delete Category"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* ─── TAB 2: COUNTRIES & REGIONS ────────────────────────────────────── */}
      {activeTab === "countries" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Create Country Form */}
          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs h-fit">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
              <Globe className="text-blue-600" size={20} />
              <h2 className="text-base font-semibold text-gray-800">Add New Country / Region</h2>
            </div>

            <form onSubmit={handleCreateCountry} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5">
                  Country / Region Name *
                </label>
                <input
                  type="text"
                  value={countryName}
                  onChange={(e) => setCountryName(e.target.value)}
                  placeholder="e.g. USA, UK, Singapore, Central Asia"
                  className="w-full px-3.5 py-2.5 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition"
                />
              </div>

              <button
                type="submit"
                disabled={loadingCountry}
                className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl shadow-xs transition flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
              >
                {loadingCountry ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Adding...
                  </>
                ) : (
                  <>
                    <PlusCircle size={16} />
                    Add Country / Region
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right: Country List */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200/80 shadow-xs overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Globe className="text-gray-500" size={20} />
                <h2 className="text-base font-semibold text-gray-800">
                  All Countries &amp; Regions ({countries.length})
                </h2>
              </div>
            </div>

            {fetchingCountries ? (
              <div className="py-12 flex flex-col items-center justify-center text-gray-500 gap-2">
                <Loader2 size={24} className="animate-spin text-blue-600" />
                <p className="text-sm">Loading countries...</p>
              </div>
            ) : countries.length === 0 ? (
              <div className="py-12 text-center text-gray-500 text-sm">
                No countries or regions found. Add one using the form on the left.
              </div>
            ) : (
              <div className="divide-y divide-gray-100 max-h-[600px] overflow-y-auto">
                {countries.map((cnt) => (
                  <div
                    key={cnt._id}
                    className="p-4 sm:px-6 flex items-center justify-between hover:bg-gray-50/70 transition"
                  >
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">{cnt.name}</h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleDeleteCountry(cnt._id, cnt.name)}
                      className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition cursor-pointer"
                      title="Delete Country / Region"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
