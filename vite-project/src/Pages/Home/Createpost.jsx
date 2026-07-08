import React, { useState, useEffect } from "react";
import { createProductApi } from "./product.api";
import DescriptionEditor from "./DescriptionEditor.jsx";

const CreateProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchingCategories, setFetchingCategories] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setFetchingCategories(true);
        const response = await fetch(
          "https://eduhawk-server-urpn.onrender.com/api/blogcategory",
        );
        if (!response.ok) throw new Error("Failed to load categories");
        const result = await response.json();
        if (result.success) {
          setCategories(result.data);
        } else {
          alert("Could not load categories: " + result.message);
        }
      } catch (err) {
        console.error("Error fetching categories:", err);
        alert("Failed to load categories. Please try again later.");
      } finally {
        setFetchingCategories(false);
      }
    };
    fetchCategories();
  }, []);

  const handleImageChange = (e) => {
    setImages(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!category) {
      alert("Please select a category");
      return;
    }
    if (!author.trim()) {
      alert("Please enter author name");
      return;
    }
    if (images.length === 0) {
      alert("Please select at least one image");
      return;
    }

    const formData = new FormData();
    formData.append("name", name.trim());
    formData.append("description", description.trim());
    formData.append("author", author.trim());
    formData.append("category", category);

    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }

    try {
      setLoading(true);
      const response = await createProductApi(formData);
      if (response.data?.success) {
        alert("Product created successfully!");
        setName("");
        setDescription("");
        setAuthor("");
        setCategory("");
        setImages([]);
      } else {
        alert(response.data?.message || "Failed to create product");
      }
    } catch (error) {
      console.error("Create product error:", error);
      alert(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
        Create New Product
      </h2>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Product Name */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter product title"
            required
            className="w-full h-12 px-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-base"
          />
        </div>

        {/* Author */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Author
          </label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter author name"
            required
            className="w-full h-12 px-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-base"
          />
        </div>

        {/* Description — custom DescriptionEditor */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <DescriptionEditor
            value={description}
            onChange={setDescription}
            placeholder="Write a detailed product description..."
          />
        </div>

        {/* Category */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          {fetchingCategories ? (
            <div className="h-12 flex items-center px-4 border border-gray-300 rounded-2xl text-gray-500">
              Loading categories...
            </div>
          ) : categories.length === 0 ? (
            <div className="h-12 flex items-center px-4 border border-red-300 rounded-2xl text-red-600 bg-red-50">
              No categories available
            </div>
          ) : (
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="w-full h-12 px-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-base bg-white"
            >
              <option value="">-- Select Category --</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name}
                </option>
              ))}
            </select>
          )}
        </div>

        {/* Images */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Product Images (Multiple allowed)
          </label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="w-full h-12 px-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-base file:mr-4 file:py-2.5 file:px-6 file:rounded-lg file:border-0 file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100 cursor-pointer"
          />
          {images.length > 0 && (
            <p className="text-sm text-emerald-600 font-medium">
              {images.length} file(s) selected
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading || fetchingCategories}
          className="w-full h-14 text-base font-semibold rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white transition-all disabled:opacity-70"
        >
          {loading ? "Creating Product..." : "Create Product"}
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
