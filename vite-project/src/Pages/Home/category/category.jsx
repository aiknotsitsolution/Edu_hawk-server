

// import { useEffect, useState } from "react";
// import {
//   createCategoryApi,
//   getCategoriesApi,
//   updateCategoryApi,
//   deleteCategoryApi,
// } from "./categoryApi";

// // Toastify
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const CategoryBlog = () => {
//   const [categories, setCategories] = useState([]);
//   const [name, setName] = useState("");
//   const [editId, setEditId] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [fetching, setFetching] = useState(true);

//   const fetchCategories = async () => {
//     try {
//       setFetching(true);
//       const res = await getCategoriesApi();
//       setCategories(res.data?.data || res.data || []);
//     } catch (error) {
//       toast.error("Failed to load categories");
//     } finally {
//       setFetching(false);
//     }
//   };

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!name.trim()) {
//       toast.warn("Please enter category name");
//       return;
//     }

//     try {
//       setLoading(true);
//       if (editId) {
//         await updateCategoryApi(editId, { name: name.trim() });
//         toast.success("Category updated successfully!");
//       } else {
//         await createCategoryApi({ name: name.trim() });
//         toast.success("Category created successfully!");
//       }
//       setName("");
//       setEditId(null);
//       fetchCategories();
//     } catch (error) {
//       toast.error(editId ? "Failed to update" : "Failed to create");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleEdit = (cat) => {
//     setName(cat.name);
//     setEditId(cat._id);
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Delete this category?")) return;
//     try {
//       await deleteCategoryApi(id);
//       toast.success("Category deleted successfully");
//       fetchCategories();
//     } catch (error) {
//       toast.error("Delete failed");
//     }
//   };

//   return (
//     <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-5xl mx-auto">
//       <ToastContainer position="top-right" autoClose={2500} />

//       {/* Create / Edit Form */}
//       <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-10">
//         <h2 className="text-2xl font-semibold text-center mb-8 text-gray-900">
//           {editId ? "Edit Category" : "Create New Category"}
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="space-y-2">
//             <label className="block text-sm font-medium text-gray-700">
//               Category Name
//             </label>
//             <input
//               type="text"
//               placeholder="Enter category name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               disabled={loading}
//               className="w-full h-12 px-5 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-base"
//             />
//           </div>

//           <div className="flex gap-3 pt-4">
//             <button
//               type="submit"
//               disabled={loading}
//               className="flex-1 h-12 text-base font-semibold rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white transition-all disabled:opacity-70"
//             >
//               {loading
//                 ? "Processing..."
//                 : editId
//                 ? "Update Category"
//                 : "Create Category"}
//             </button>

//             {editId && (
//               <button
//                 type="button"
//                 onClick={() => {
//                   setName("");
//                   setEditId(null);
//                 }}
//                 className="h-12 px-8 border border-gray-300 hover:bg-gray-100 rounded-2xl text-gray-700 font-medium transition"
//               >
//                 Cancel
//               </button>
//             )}
//           </div>
//         </form>
//       </div>

//       {/* Categories Table */}
//       <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
//         <div className="px-8 py-6 border-b flex justify-between items-center">
//           <h3 className="text-xl font-semibold text-gray-900">
//             All Categories ({categories.length})
//           </h3>
//         </div>

//         {fetching ? (
//           <div className="py-20 text-center text-gray-500">Loading categories...</div>
//         ) : categories.length === 0 ? (
//           <div className="py-20 text-center text-gray-500">No categories found</div>
//         ) : (
//           <div className="overflow-x-auto">
//             <table className="w-full">
//               <thead>
//                 <tr className="bg-gray-50 border-b">
//                   <th className="w-16 py-5 px-6 text-left font-medium text-gray-600">#</th>
//                   <th className="py-5 px-6 text-left font-medium text-gray-600">Category Name</th>
//                   <th className="py-5 px-6 text-right font-medium text-gray-600">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {categories.map((cat, index) => (
//                   <tr key={cat._id} className="border-b hover:bg-gray-50 transition">
//                     <td className="py-5 px-6 font-medium text-gray-500">{index + 1}</td>
//                     <td className="py-5 px-6 font-semibold text-gray-900">{cat.name}</td>
//                     <td className="py-5 px-6 text-right">
//                       <div className="flex gap-3 justify-end">
//                         <button
//                           onClick={() => handleEdit(cat)}
//                           className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white text-sm font-medium rounded-2xl transition"
//                         >
//                           Edit
//                         </button>
//                         <button
//                           onClick={() => handleDelete(cat._id)}
//                           className="px-5 py-2.5 bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white text-sm font-medium rounded-2xl transition"
//                         >
//                           Delete
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CategoryBlog;

import { useEffect, useState } from "react";
import {
  createCategoryApi,
  getCategoriesApi,
  updateCategoryApi,
  deleteCategoryApi,
} from "./categoryApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Plus,
  Pencil,
  Trash2,
  Loader2,
  FolderOpen,
  X,
} from "lucide-react";

const CategoryBlog = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  const fetchCategories = async () => {
    try {
      setFetching(true);
      const res = await getCategoriesApi();
      setCategories(res.data?.data || res.data || []);
    } catch (error) {
      toast.error("Failed to load categories");
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.warn("Please enter category name");
      return;
    }

    try {
      setLoading(true);
      if (editId) {
        await updateCategoryApi(editId, { name: name.trim() });
        toast.success("Category updated successfully!");
      } else {
        await createCategoryApi({ name: name.trim() });
        toast.success("Category created successfully!");
      }
      setName("");
      setEditId(null);
      fetchCategories();
    } catch (error) {
      toast.error(editId ? "Failed to update" : "Failed to create");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (cat) => {
    setName(cat.name);
    setEditId(cat._id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCancelEdit = () => {
    setName("");
    setEditId(null);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this category?")) return;
    try {
      await deleteCategoryApi(id);
      toast.success("Category deleted successfully");
      fetchCategories();
    } catch (error) {
      toast.error("Delete failed");
    }
  };

  return (
    <div className="min-h-full bg-slate-50/70 p-4 sm:p-6 lg:p-8">
      <ToastContainer position="top-right" autoClose={2500} theme="light" />

      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-indigo-600">
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            Content
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Blog Categories
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Create and manage categories for your blog posts.
          </p>
        </div>

        {/* Create / Edit Card */}
        <div className="mb-8 rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 px-6 py-5">
            <h2 className="text-lg font-semibold text-slate-900">
              {editId ? "Edit Category" : "Create New Category"}
            </h2>
            <p className="mt-0.5 text-sm text-slate-500">
              {editId
                ? "Update the category name below"
                : "Add a new category to organise your blogs"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
              <div className="flex-1">
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Category Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Technology, Design, Marketing..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={loading}
                  className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 disabled:opacity-60"
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 text-sm font-semibold text-white shadow-md shadow-indigo-200 transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      {editId ? "Updating..." : "Creating..."}
                    </>
                  ) : (
                    <>
                      {editId ? (
                        <>
                          <Pencil size={16} />
                          Update
                        </>
                      ) : (
                        <>
                          <Plus size={18} />
                          Create
                        </>
                      )}
                    </>
                  )}
                </button>

                {editId && (
                  <button
                    type="button"
                    onClick={handleCancelEdit}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                  >
                    <X size={16} />
                    Cancel
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>

        {/* Categories List */}
        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
            <div className="flex items-center gap-2">
              <FolderOpen size={18} className="text-indigo-500" />
              <h3 className="text-base font-semibold text-slate-900">
                All Categories
              </h3>
              <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                {categories.length}
              </span>
            </div>
          </div>

          {fetching ? (
            <div className="flex flex-col items-center justify-center py-20 text-slate-400">
              <Loader2 size={28} className="mb-3 animate-spin" />
              <p className="text-sm">Loading categories...</p>
            </div>
          ) : categories.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-slate-400">
              <FolderOpen size={36} className="mb-3 opacity-40" />
              <p className="text-sm font-medium">No categories found</p>
              <p className="mt-1 text-xs">Create your first category above</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50/80">
                    <th className="w-16 px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                      #
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Category Name
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {categories.map((cat, index) => (
                    <tr
                      key={cat._id}
                      className="transition hover:bg-slate-50/70"
                    >
                      <td className="px-6 py-4 text-sm font-medium text-slate-500">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-medium text-slate-900">
                          {cat.name}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleEdit(cat)}
                            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                            title="Edit"
                          >
                            <Pencil size={15} />
                          </button>
                          <button
                            onClick={() => handleDelete(cat._id)}
                            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600"
                            title="Delete"
                          >
                            <Trash2 size={15} />
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
      </div>
    </div>
  );
};

export default CategoryBlog;