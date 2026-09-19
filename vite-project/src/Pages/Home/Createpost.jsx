// import React, { useState, useEffect } from "react";
// import { createProductApi } from "./product.api";
// import DescriptionEditor from "./DescriptionEditor.jsx";

// const CreateProduct = () => {
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [author, setAuthor] = useState("");
//   const [category, setCategory] = useState("");
//   const [images, setImages] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [fetchingCategories, setFetchingCategories] = useState(true);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         setFetchingCategories(true);
//         const response = await fetch("https://eduhawk-server-urpn.onrender.com/api/blogcategory");
//         if (!response.ok) throw new Error("Failed to load categories");
//         const result = await response.json();
//         if (result.success) {
//           setCategories(result.data);
//         } else {
//           alert("Could not load categories: " + result.message);
//         }
//       } catch (err) {
//         console.error("Error fetching categories:", err);
//         alert("Failed to load categories. Please try again later.");
//       } finally {
//         setFetchingCategories(false);
//       }
//     };
//     fetchCategories();
//   }, []);

//   const handleImageChange = (e) => {
//     setImages(e.target.files);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!category) {
//       alert("Please select a category");
//       return;
//     }
//     if (!author.trim()) {
//       alert("Please enter author name");
//       return;
//     }
//     if (images.length === 0) {
//       alert("Please select at least one image");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("name", name.trim());
//     formData.append("description", description.trim());
//     formData.append("author", author.trim());
//     formData.append("category", category);

//     for (let i = 0; i < images.length; i++) {
//       formData.append("images", images[i]);
//     }

//     try {
//       setLoading(true);
//       const response = await createProductApi(formData);
//       if (response.data?.success) {
//         alert("Product created successfully!");
//         setName("");
//         setDescription("");
//         setAuthor("");
//         setCategory("");
//         setImages([]);
//       } else {
//         alert(response.data?.message || "Failed to create product");
//       }
//     } catch (error) {
//       console.error("Create product error:", error);
//       alert(error.response?.data?.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
//       <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
//         Create New Product
//       </h2>

//       <form onSubmit={handleSubmit} className="space-y-8">
//         {/* Product Name */}
//         <div className="space-y-2">
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Title
//           </label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Enter product title"
//             required
//             className="w-full h-12 px-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-base"
//           />
//         </div>

//         {/* Author */}
//         <div className="space-y-2">
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Author
//           </label>
//           <input
//             type="text"
//             value={author}
//             onChange={(e) => setAuthor(e.target.value)}
//             placeholder="Enter author name"
//             required
//             className="w-full h-12 px-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-base"
//           />
//         </div>

//         {/* Description — custom DescriptionEditor */}
//         <div className="space-y-2">
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Description
//           </label>
//           <DescriptionEditor
//             value={description}
//             onChange={setDescription}
//             placeholder="Write a detailed product description..."
//           />
//         </div>

//         {/* Category */}
//         <div className="space-y-2">
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Category
//           </label>
//           {fetchingCategories ? (
//             <div className="h-12 flex items-center px-4 border border-gray-300 rounded-2xl text-gray-500">
//               Loading categories...
//             </div>
//           ) : categories.length === 0 ? (
//             <div className="h-12 flex items-center px-4 border border-red-300 rounded-2xl text-red-600 bg-red-50">
//               No categories available
//             </div>
//           ) : (
//             <select
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               required
//               className="w-full h-12 px-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-base bg-white"
//             >
//               <option value="">-- Select Category --</option>
//               {categories.map((cat) => (
//                 <option key={cat._id} value={cat._id}>
//                   {cat.name}
//                 </option>
//               ))}
//             </select>
//           )}
//         </div>

//         {/* Images */}
//         <div className="space-y-2">
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Product Images (Multiple allowed)
//           </label>
//           <input
//             type="file"
//             multiple
//             accept="image/*"
//             onChange={handleImageChange}
//             className="w-full h-12 px-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-base file:mr-4 file:py-2.5 file:px-6 file:rounded-lg file:border-0 file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100 cursor-pointer"
//           />
//           {images.length > 0 && (
//             <p className="text-sm text-emerald-600 font-medium">
//               {images.length} file(s) selected
//             </p>
//           )}
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           disabled={loading || fetchingCategories}
//           className="w-full h-14 text-base font-semibold rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white transition-all disabled:opacity-70"
//         >
//           {loading ? "Creating Product..." : "Create Product"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateProduct;

import React, { useState, useEffect } from "react";
import { createProductApi } from "./product.api";
import DescriptionEditor from "./DescriptionEditor.jsx";
import { ImagePlus, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "react-toastify";

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
        toast.success("Product created successfully!");
        setName("");
        setDescription("");
        setAuthor("");
        setCategory("");
        setImages([]);
        setPreviewUrls([]);
      } else {
        toast.error(response.data?.message || "Failed to create product");
      }
    } catch (error) {
      console.error("Create product error:", error);
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-full bg-slate-50/70 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-indigo-600">
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            Content
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Create New Blog
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Fill in the details below to publish a new blog post.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-7">
            {/* Title & Author */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Title <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter blog title"
                  required
                  className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Author <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="Enter author name"
                  required
                  className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>
            </div>

            {/* Category */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Category <span className="text-rose-500">*</span>
              </label>
              {fetchingCategories ? (
                <div className="flex h-12 items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-500">
                  <Loader2 size={16} className="animate-spin" />
                  Loading categories...
                </div>
              ) : categories.length === 0 ? (
                <div className="flex h-12 items-center rounded-xl border border-rose-200 bg-rose-50 px-4 text-sm text-rose-600">
                  No categories available
                </div>
              ) : (
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                  className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm text-slate-800 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
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

            {/* Description */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Description <span className="text-rose-500">*</span>
              </label>
              <div className="overflow-hidden rounded-xl border border-slate-200">
                <DescriptionEditor
                  value={description}
                  onChange={setDescription}
                  placeholder="Write a detailed blog description..."
                />
              </div>
            </div>

            {/* Images */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                Product Images <span className="text-rose-500">*</span>
              </label>

              <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-200 bg-slate-50/50 px-6 py-10 transition hover:border-indigo-300 hover:bg-indigo-50/30">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                  <ImagePlus size={22} />
                </div>
                <p className="text-sm font-medium text-slate-700">
                  Click to upload images
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  PNG, JPG, WEBP up to multiple files
                </p>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>

              {previewUrls.length > 0 && (
                <div className="mt-4">
                  <p className="mb-3 flex items-center gap-1.5 text-sm font-medium text-emerald-600">
                    <CheckCircle2 size={16} />
                    {previewUrls.length} image(s) selected
                  </p>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                    {previewUrls.map((url, index) => (
                      <div
                        key={index}
                        className="relative aspect-square overflow-hidden rounded-xl border border-slate-200"
                      >
                        <img
                          src={url}
                          alt={`preview-${index}`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => {
                  setName("");
                  setDescription("");
                  setAuthor("");
                  setCategory("");
                  setImages([]);
                  setPreviewUrls([]);
                }}
                className="h-12 rounded-xl border border-slate-200 px-6 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                Reset
              </button>

              <button
                type="submit"
                disabled={loading || fetchingCategories}
                className="flex h-12 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-8 text-sm font-semibold text-white shadow-md shadow-indigo-200 transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Creating...
                  </>
                ) : (
                  "Create Blog"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
