

// // // // // // import { useEffect, useState } from "react";
// // // // // // import {
// // // // // //   createCategoryApi,
// // // // // //   getCategoriesApi,
// // // // // //   updateCategoryApi,
// // // // // //   deleteCategoryApi,
// // // // // // } from "./categoryApi";

// // // // // // // Toastify
// // // // // // import { ToastContainer, toast } from "react-toastify";
// // // // // // import "react-toastify/dist/ReactToastify.css";

// // // // // // const CategoryBlog = () => {
// // // // // //   const [categories, setCategories] = useState([]);
// // // // // //   const [name, setName] = useState("");
// // // // // //   const [editId, setEditId] = useState(null);
// // // // // //   const [loading, setLoading] = useState(false);
// // // // // //   const [fetching, setFetching] = useState(true);

// // // // // //   // FETCH ALL CATEGORIES
// // // // // //   const fetchCategories = async () => {
// // // // // //     try {
// // // // // //       setFetching(true);
// // // // // //       const res = await getCategoriesApi();
// // // // // //       setCategories(res.data.data || res.data || []);
// // // // // //     } catch (error) {
// // // // // //       console.error("Error fetching categories:", error);
// // // // // //       toast.error("Failed to load categories");
// // // // // //     } finally {
// // // // // //       setFetching(false);
// // // // // //     }
// // // // // //   };

// // // // // //   useEffect(() => {
// // // // // //     fetchCategories();
// // // // // //   }, []);

// // // // // //   // CREATE or UPDATE
// // // // // //   const handleSubmit = async (e) => {
// // // // // //     e.preventDefault();

// // // // // //     if (!name.trim()) {
// // // // // //       toast.warn("Please enter category name");
// // // // // //       return;
// // // // // //     }

// // // // // //     try {
// // // // // //       setLoading(true);

// // // // // //       if (editId) {
// // // // // //         await updateCategoryApi(editId, { name: name.trim() });
// // // // // //         toast.success("Category updated successfully!");
// // // // // //       } else {
// // // // // //         await createCategoryApi({ name: name.trim() });
// // // // // //         toast.success("Category created successfully!");
// // // // // //       }

// // // // // //       setName("");
// // // // // //       setEditId(null);
// // // // // //       fetchCategories();
// // // // // //     } catch (error) {
// // // // // //       console.error(error);
// // // // // //       toast.error(
// // // // // //         editId ? "Failed to update category" : "Failed to create category"
// // // // // //       );
// // // // // //     } finally {
// // // // // //       setLoading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   // EDIT
// // // // // //   const handleEdit = (cat) => {
// // // // // //     setName(cat.name);
// // // // // //     setEditId(cat._id);
// // // // // //     toast.info("Now editing: " + cat.name);
// // // // // //   };

// // // // // //   // DELETE
// // // // // //   const handleDelete = async (id) => {
// // // // // //     if (!window.confirm("Are you sure you want to delete this category?")) {
// // // // // //       return;
// // // // // //     }

// // // // // //     try {
// // // // // //       await deleteCategoryApi(id);
// // // // // //       toast.success("Category deleted successfully");
// // // // // //       fetchCategories();
// // // // // //     } catch (error) {
// // // // // //       console.error(error);
// // // // // //       toast.error("Failed to delete category");
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
// // // // // //       <div className="max-w-4xl mx-auto">
// // // // // //         {/* Header */}
// // // // // //         <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center">
// // // // // //           Manage Categories
// // // // // //         </h1>

// // // // // //         {/* FORM CARD */}
// // // // // //         <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-10 border border-gray-100">
// // // // // //           <form onSubmit={handleSubmit} className="space-y-6">
// // // // // //             <div>
// // // // // //               <label
// // // // // //                 htmlFor="categoryName"
// // // // // //                 className="block text-sm font-medium text-gray-700 mb-2"
// // // // // //               >
// // // // // //                 Category Name
// // // // // //               </label>
// // // // // //               <input
// // // // // //                 id="categoryName"
// // // // // //                 type="text"
// // // // // //                 placeholder="Enter category name"
// // // // // //                 value={name}
// // // // // //                 onChange={(e) => setName(e.target.value)}
// // // // // //                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
// // // // // //               />
// // // // // //             </div>

// // // // // //             <button
// // // // // //               type="submit"
// // // // // //               disabled={loading}
// // // // // //               className={`
// // // // // //                 w-full py-3 px-6 rounded-lg font-semibold text-white transition-all
// // // // // //                 ${
// // // // // //                   editId
// // // // // //                     ? "bg-amber-600 hover:bg-amber-700"
// // // // // //                     : "bg-indigo-600 hover:bg-indigo-700"
// // // // // //                 }
// // // // // //                 disabled:opacity-50 disabled:cursor-not-allowed
// // // // // //                 shadow-md hover:shadow-lg transform hover:-translate-y-0.5
// // // // // //               `}
// // // // // //             >
// // // // // //               {loading ? (
// // // // // //                 <span className="flex items-center justify-center">
// // // // // //                   <svg
// // // // // //                     className="animate-spin h-5 w-5 mr-2 text-white"
// // // // // //                     viewBox="0 0 24 24"
// // // // // //                   >
// // // // // //                     <circle
// // // // // //                       className="opacity-25"
// // // // // //                       cx="12"
// // // // // //                       cy="12"
// // // // // //                       r="10"
// // // // // //                       stroke="currentColor"
// // // // // //                       strokeWidth="4"
// // // // // //                     />
// // // // // //                     <path
// // // // // //                       className="opacity-75"
// // // // // //                       fill="currentColor"
// // // // // //                       d="M4 12a8 8 0 018-8v8z"
// // // // // //                     />
// // // // // //                   </svg>
// // // // // //                   Processing...
// // // // // //                 </span>
// // // // // //               ) : editId ? (
// // // // // //                 "Update Category"
// // // // // //               ) : (
// // // // // //                 "Create Category"
// // // // // //               )}
// // // // // //             </button>
// // // // // //           </form>
// // // // // //         </div>

// // // // // //         {/* TABLE CARD */}
// // // // // //         <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
// // // // // //           <div className="p-6 md:p-8">
// // // // // //             <h2 className="text-xl font-semibold text-gray-800 mb-4">
// // // // // //               All Categories
// // // // // //             </h2>

// // // // // //             {fetching ? (
// // // // // //               <div className="text-center py-10 text-gray-500">
// // // // // //                 Loading categories...
// // // // // //               </div>
// // // // // //             ) : categories.length === 0 ? (
// // // // // //               <div className="text-center py-10 text-gray-500">
// // // // // //                 No categories found
// // // // // //               </div>
// // // // // //             ) : (
// // // // // //               <div className="overflow-x-auto">
// // // // // //                 <table className="min-w-full divide-y divide-gray-200">
// // // // // //                   <thead className="bg-gray-50">
// // // // // //                     <tr>
// // // // // //                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // //                         #
// // // // // //                       </th>
// // // // // //                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // //                         Name
// // // // // //                       </th>
// // // // // //                       <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
// // // // // //                         Actions
// // // // // //                       </th>
// // // // // //                     </tr>
// // // // // //                   </thead>
// // // // // //                   <tbody className="bg-white divide-y divide-gray-200">
// // // // // //                     {categories.map((cat, index) => (
// // // // // //                       <tr key={cat._id} className="hover:bg-gray-50">
// // // // // //                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// // // // // //                           {index + 1}
// // // // // //                         </td>
// // // // // //                         <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
// // // // // //                           {cat.name}
// // // // // //                         </td>
// // // // // //                         <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
// // // // // //                           <button
// // // // // //                             onClick={() => handleEdit(cat)}
// // // // // //                             className="text-amber-600 hover:text-amber-900 mr-4 font-medium"
// // // // // //                           >
// // // // // //                             Edit
// // // // // //                           </button>
// // // // // //                           <button
// // // // // //                             onClick={() => handleDelete(cat._id)}
// // // // // //                             className="text-red-600 hover:text-red-900 font-medium"
// // // // // //                           >
// // // // // //                             Delete
// // // // // //                           </button>
// // // // // //                         </td>
// // // // // //                       </tr>
// // // // // //                     ))}
// // // // // //                   </tbody>
// // // // // //                 </table>
// // // // // //               </div>
// // // // // //             )}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Toast Container */}
// // // // // //       <ToastContainer
// // // // // //         position="top-right"
// // // // // //         autoClose={3000}
// // // // // //         hideProgressBar={false}
// // // // // //         newestOnTop
// // // // // //         closeOnClick
// // // // // //         rtl={false}
// // // // // //         pauseOnFocusLoss
// // // // // //         draggable
// // // // // //         pauseOnHover
// // // // // //         theme="light"
// // // // // //       />
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default CategoryBlog;

// // // // // import { useEffect, useState } from "react";
// // // // // import {
// // // // //   createCategoryApi,
// // // // //   getCategoriesApi,
// // // // //   updateCategoryApi,
// // // // //   deleteCategoryApi,
// // // // // } from "./categoryApi";

// // // // // // Shadcn UI Components
// // // // // import { Button } from "@/components/ui/button";
// // // // // import { Input } from "@/components/ui/input";
// // // // // import { Label } from "@/components/ui/label";
// // // // // import {
// // // // //   Table,
// // // // //   TableBody,
// // // // //   TableCell,
// // // // //   TableHead,
// // // // //   TableHeader,
// // // // //   TableRow,
// // // // // } from "@/components/ui/table";
// // // // // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// // // // // // Toastify
// // // // // import { ToastContainer, toast } from "react-toastify";
// // // // // import "react-toastify/dist/ReactToastify.css";

// // // // // const CategoryBlog = () => {
// // // // //   const [categories, setCategories] = useState([]);
// // // // //   const [name, setName] = useState("");
// // // // //   const [editId, setEditId] = useState(null);
// // // // //   const [loading, setLoading] = useState(false);
// // // // //   const [fetching, setFetching] = useState(true);

// // // // //   // FETCH ALL CATEGORIES
// // // // //   const fetchCategories = async () => {
// // // // //     try {
// // // // //       setFetching(true);
// // // // //       const res = await getCategoriesApi();
// // // // //       setCategories(res.data?.data || res.data || []);
// // // // //     } catch (error) {
// // // // //       console.error("Error fetching categories:", error);
// // // // //       toast.error("Failed to load categories");
// // // // //     } finally {
// // // // //       setFetching(false);
// // // // //     }
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     fetchCategories();
// // // // //   }, []);

// // // // //   // CREATE or UPDATE
// // // // //   const handleSubmit = async (e) => {
// // // // //     e.preventDefault();

// // // // //     if (!name.trim()) {
// // // // //       toast.warn("Please enter category name");
// // // // //       return;
// // // // //     }

// // // // //     try {
// // // // //       setLoading(true);

// // // // //       if (editId) {
// // // // //         await updateCategoryApi(editId, { name: name.trim() });
// // // // //         toast.success("Category updated successfully!");
// // // // //       } else {
// // // // //         await createCategoryApi({ name: name.trim() });
// // // // //         toast.success("Category created successfully!");
// // // // //       }

// // // // //       setName("");
// // // // //       setEditId(null);
// // // // //       fetchCategories();
// // // // //     } catch (error) {
// // // // //       console.error(error);
// // // // //       toast.error(editId ? "Failed to update category" : "Failed to create category");
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   // EDIT
// // // // //   const handleEdit = (cat) => {
// // // // //     setName(cat.name);
// // // // //     setEditId(cat._id);
// // // // //     toast.info(`Editing: ${cat.name}`);
// // // // //   };

// // // // //   // DELETE
// // // // //   const handleDelete = async (id) => {
// // // // //     if (!window.confirm("Are you sure you want to delete this category?")) return;

// // // // //     try {
// // // // //       await deleteCategoryApi(id);
// // // // //       toast.success("Category deleted successfully");
// // // // //       fetchCategories();
// // // // //     } catch (error) {
// // // // //       console.error(error);
// // // // //       toast.error("Failed to delete category");
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="min-h-screen bg-gray-50 py-10 px-4">
// // // // //       <div className="max-w-4xl mx-auto space-y-8">
// // // // //         {/* Header */}
// // // // //         <div className="text-center">
// // // // //           <h1 className="text-4xl font-bold text-gray-900">Manage Categories</h1>
         
// // // // //         </div>

// // // // //         {/* Create / Update Form */}
// // // // //         <Card>
// // // // //           <CardHeader>
// // // // //             <CardTitle>{editId ? "Edit Category" : "Create New Category"}</CardTitle>
// // // // //           </CardHeader>
// // // // //           <CardContent>
// // // // //             <form onSubmit={handleSubmit} className="space-y-5">
// // // // //               <div className="space-y-2">
// // // // //                 <Label htmlFor="categoryName">Category Name</Label>
// // // // //                 <Input
// // // // //                   id="categoryName"
// // // // //                   type="text"
// // // // //                   placeholder="Enter category name"
// // // // //                   value={name}
// // // // //                   onChange={(e) => setName(e.target.value)}
// // // // //                   disabled={loading}
// // // // //                 />
// // // // //               </div>

// // // // //               <div className="flex gap-3">
// // // // //                 <Button
// // // // //                   type="submit"
// // // // //                   disabled={loading}
// // // // //                   className="flex-1"
// // // // //                   variant={editId ? "default" : "default"}
// // // // //                 >
// // // // //                   {loading ? (
// // // // //                     <>
// // // // //                       <span className="animate-spin mr-2">⟳</span>
// // // // //                       Processing...
// // // // //                     </>
// // // // //                   ) : editId ? (
// // // // //                     "Update Category"
// // // // //                   ) : (
// // // // //                     "Create Category"
// // // // //                   )}
// // // // //                 </Button>

// // // // //                 {editId && (
// // // // //                   <Button
// // // // //                     type="button"
// // // // //                     variant="outline"
// // // // //                     onClick={() => {
// // // // //                       setName("");
// // // // //                       setEditId(null);
// // // // //                     }}
// // // // //                     disabled={loading}
// // // // //                   >
// // // // //                     Cancel
// // // // //                   </Button>
// // // // //                 )}
// // // // //               </div>
// // // // //             </form>
// // // // //           </CardContent>
// // // // //         </Card>

// // // // //         {/* Categories Table */}
// // // // //         <Card>
// // // // //           <CardHeader>
// // // // //             <CardTitle>All Categories ({categories.length})</CardTitle>
// // // // //           </CardHeader>
// // // // //           <CardContent>
// // // // //             {fetching ? (
// // // // //               <div className="text-center py-12 text-gray-500">
// // // // //                 Loading categories...
// // // // //               </div>
// // // // //             ) : categories.length === 0 ? (
// // // // //               <div className="text-center py-12 text-gray-500">
// // // // //                 No categories found
// // // // //               </div>
// // // // //             ) : (
// // // // //               <div className="overflow-x-auto">
// // // // //                 <Table>
// // // // //                   <TableHeader>
// // // // //                     <TableRow>
// // // // //                       <TableHead className="w-16">#</TableHead>
// // // // //                       <TableHead>Category Name</TableHead>
// // // // //                       <TableHead className="text-right">Actions</TableHead>
// // // // //                     </TableRow>
// // // // //                   </TableHeader>
// // // // //                   <TableBody>
// // // // //                     {categories.map((cat, index) => (
// // // // //                       <TableRow key={cat._id} className="hover:bg-gray-50">
// // // // //                         <TableCell className="font-medium text-gray-500">
// // // // //                           {index + 1}
// // // // //                         </TableCell>
// // // // //                         <TableCell className="font-semibold text-gray-900">
// // // // //                           {cat.name}
// // // // //                         </TableCell>
// // // // //                         <TableCell className="text-right">
// // // // //                           <div className="flex gap-2 justify-end">
// // // // //                             <Button
// // // // //                               variant="outline"
// // // // //                               size="sm"
// // // // //                               onClick={() => handleEdit(cat)}
// // // // //                             >
// // // // //                               Edit
// // // // //                             </Button>
// // // // //                             <Button
// // // // //                               variant="destructive"
// // // // //                               size="sm"
// // // // //                               onClick={() => handleDelete(cat._id)}
// // // // //                             >
// // // // //                               Delete
// // // // //                             </Button>
// // // // //                           </div>
// // // // //                         </TableCell>
// // // // //                       </TableRow>
// // // // //                     ))}
// // // // //                   </TableBody>
// // // // //                 </Table>
// // // // //               </div>
// // // // //             )}
// // // // //           </CardContent>
// // // // //         </Card>
// // // // //       </div>

// // // // //       <ToastContainer
// // // // //         position="top-right"
// // // // //         autoClose={3000}
// // // // //         hideProgressBar={false}
// // // // //         newestOnTop
// // // // //         closeOnClick
// // // // //         rtl={false}
// // // // //         pauseOnFocusLoss
// // // // //         draggable
// // // // //         pauseOnHover
// // // // //         theme="light"
// // // // //       />
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default CategoryBlog;

// // // // import { useEffect, useState } from "react";
// // // // import {
// // // //   createCategoryApi,
// // // //   getCategoriesApi,
// // // //   updateCategoryApi,
// // // //   deleteCategoryApi,
// // // // } from "./categoryApi";

// // // // // Shadcn UI Components
// // // // import { Button } from "@/components/ui/button";
// // // // import { Input } from "@/components/ui/input";
// // // // import { Label } from "@/components/ui/label";
// // // // import {
// // // //   Table,
// // // //   TableBody,
// // // //   TableCell,
// // // //   TableHead,
// // // //   TableHeader,
// // // //   TableRow,
// // // // } from "@/components/ui/table";
// // // // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// // // // // Toastify
// // // // import { ToastContainer, toast } from "react-toastify";
// // // // import "react-toastify/dist/ReactToastify.css";

// // // // const CategoryBlog = () => {
// // // //   const [categories, setCategories] = useState([]);
// // // //   const [name, setName] = useState("");
// // // //   const [editId, setEditId] = useState(null);
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [fetching, setFetching] = useState(true);

// // // //   // FETCH ALL CATEGORIES
// // // //   const fetchCategories = async () => {
// // // //     try {
// // // //       setFetching(true);
// // // //       const res = await getCategoriesApi();
// // // //       setCategories(res.data?.data || res.data || []);
// // // //     } catch (error) {
// // // //       console.error("Error fetching categories:", error);
// // // //       toast.error("Failed to load categories");
// // // //     } finally {
// // // //       setFetching(false);
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     fetchCategories();
// // // //   }, []);

// // // //   // CREATE or UPDATE
// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     if (!name.trim()) {
// // // //       toast.warn("Please enter category name");
// // // //       return;
// // // //     }

// // // //     try {
// // // //       setLoading(true);
// // // //       if (editId) {
// // // //         await updateCategoryApi(editId, { name: name.trim() });
// // // //         toast.success("Category updated successfully!");
// // // //       } else {
// // // //         await createCategoryApi({ name: name.trim() });
// // // //         toast.success("Category created successfully!");
// // // //       }

// // // //       setName("");
// // // //       setEditId(null);
// // // //       fetchCategories();
// // // //     } catch (error) {
// // // //       toast.error(editId ? "Failed to update category" : "Failed to create category");
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const handleEdit = (cat) => {
// // // //     setName(cat.name);
// // // //     setEditId(cat._id);
// // // //     toast.info(`Editing: ${cat.name}`);
// // // //   };

// // // //   const handleDelete = async (id) => {
// // // //     if (!window.confirm("Are you sure you want to delete this category?")) return;

// // // //     try {
// // // //       await deleteCategoryApi(id);
// // // //       toast.success("Category deleted successfully");
// // // //       fetchCategories();
// // // //     } catch (error) {
// // // //       toast.error("Failed to delete category");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-10 px-4">
// // // //       <div className="max-w-4xl mx-auto space-y-8">
        
// // // //         {/* Header */}
// // // //         <div className="text-center mb-8">
// // // //           <h1 className="text-4xl font-bold text-gray-900">Manage Categories</h1>
// // // //           <p className="text-gray-600 mt-2">Create, edit and organize your blog categories</p>
// // // //         </div>

// // // //         {/* Create / Update Form */}
// // // //         <Card className="shadow-lg border border-gray-200">
// // // //           <CardHeader>
// // // //             <CardTitle className="text-xl">
// // // //               {editId ? "Edit Category" : "Create New Category"}
// // // //             </CardTitle>
// // // //           </CardHeader>
// // // //           <CardContent>
// // // //             <form onSubmit={handleSubmit} className="space-y-5">
// // // //               <div className="space-y-2">
// // // //                 <Label htmlFor="categoryName">Category Name</Label>
// // // //                 <Input
// // // //                   id="categoryName"
// // // //                   type="text"
// // // //                   placeholder="Enter category name"
// // // //                   value={name}
// // // //                   onChange={(e) => setName(e.target.value)}
// // // //                   disabled={loading}
// // // //                   className="h-12"
// // // //                 />
// // // //               </div>

// // // //               <div className="flex gap-3 pt-2">
// // // //                 <Button
// // // //                   type="submit"
// // // //                   disabled={loading}
// // // //                   className="flex-1 h-12 text-base font-medium"
// // // //                 >
// // // //                   {loading ? (
// // // //                     <>
// // // //                       <span className="animate-spin mr-2">⟳</span>
// // // //                       Processing...
// // // //                     </>
// // // //                   ) : editId ? (
// // // //                     "Update Category"
// // // //                   ) : (
// // // //                     "Create Category"
// // // //                   )}
// // // //                 </Button>

// // // //                 {editId && (
// // // //                   <Button
// // // //                     type="button"
// // // //                     variant="outline"
// // // //                     onClick={() => {
// // // //                       setName("");
// // // //                       setEditId(null);
// // // //                     }}
// // // //                     disabled={loading}
// // // //                     className="h-12"
// // // //                   >
// // // //                     Cancel
// // // //                   </Button>
// // // //                 )}
// // // //               </div>
// // // //             </form>
// // // //           </CardContent>
// // // //         </Card>

// // // //         {/* Categories Table */}
// // // //         <Card className="shadow-lg border border-gray-200">
// // // //           <CardHeader>
// // // //             <CardTitle>All Categories ({categories.length})</CardTitle>
// // // //           </CardHeader>
// // // //           <CardContent>
// // // //             {fetching ? (
// // // //               <div className="text-center py-20 text-gray-500">
// // // //                 Loading categories...
// // // //               </div>
// // // //             ) : categories.length === 0 ? (
// // // //               <div className="text-center py-20 text-gray-500">
// // // //                 No categories found
// // // //               </div>
// // // //             ) : (
// // // //               <div className="overflow-x-auto">
// // // //                 <Table>
// // // //                   <TableHeader>
// // // //                     <TableRow>
// // // //                       <TableHead className="w-16">#</TableHead>
// // // //                       <TableHead>Category Name</TableHead>
// // // //                       <TableHead className="text-right">Actions</TableHead>
// // // //                     </TableRow>
// // // //                   </TableHeader>
// // // //                   <TableBody>
// // // //                     {categories.map((cat, index) => (
// // // //                       <TableRow key={cat._id} className="hover:bg-gray-50">
// // // //                         <TableCell className="font-medium text-gray-500">
// // // //                           {index + 1}
// // // //                         </TableCell>
// // // //                         <TableCell className="font-semibold text-gray-900">
// // // //                           {cat.name}
// // // //                         </TableCell>
// // // //                         <TableCell className="text-right">
// // // //                           <div className="flex gap-2 justify-end">
// // // //                             <Button
// // // //                               variant="outline"
// // // //                               size="sm"
// // // //                               onClick={() => handleEdit(cat)}
// // // //                             >
// // // //                               Edit
// // // //                             </Button>
// // // //                             <Button
// // // //                               variant="destructive"
// // // //                               size="sm"
// // // //                               onClick={() => handleDelete(cat._id)}
// // // //                             >
// // // //                               Delete
// // // //                             </Button>
// // // //                           </div>
// // // //                         </TableCell>
// // // //                       </TableRow>
// // // //                     ))}
// // // //                   </TableBody>
// // // //                 </Table>
// // // //               </div>
// // // //             )}
// // // //           </CardContent>
// // // //         </Card>
// // // //       </div>

// // // //       <ToastContainer
// // // //         position="top-right"
// // // //         autoClose={3000}
// // // //         hideProgressBar={false}
// // // //         newestOnTop
// // // //         closeOnClick
// // // //         rtl={false}
// // // //         pauseOnFocusLoss
// // // //         draggable
// // // //         pauseOnHover
// // // //         theme="light"
// // // //       />
// // // //     </div>
// // // //   );
// // // // };

// // // // export default CategoryBlog;

// // // import { useEffect, useState } from "react";
// // // import {
// // //   createCategoryApi,
// // //   getCategoriesApi,
// // //   updateCategoryApi,
// // //   deleteCategoryApi,
// // // } from "./categoryApi";

// // // // Shadcn UI
// // // import { Button } from "@/components/ui/button";
// // // import { Input } from "@/components/ui/input";
// // // import { Label } from "@/components/ui/label";
// // // import {
// // //   Table,
// // //   TableBody,
// // //   TableCell,
// // //   TableHead,
// // //   TableHeader,
// // //   TableRow,
// // // } from "@/components/ui/table";
// // // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// // // // Toastify
// // // import { ToastContainer, toast } from "react-toastify";
// // // import "react-toastify/dist/ReactToastify.css";

// // // const CategoryBlog = () => {
// // //   const [categories, setCategories] = useState([]);
// // //   const [name, setName] = useState("");
// // //   const [editId, setEditId] = useState(null);
// // //   const [loading, setLoading] = useState(false);
// // //   const [fetching, setFetching] = useState(true);

// // //   const fetchCategories = async () => {
// // //     try {
// // //       setFetching(true);
// // //       const res = await getCategoriesApi();
// // //       setCategories(res.data?.data || res.data || []);
// // //     } catch (error) {
// // //       toast.error("Failed to load categories");
// // //     } finally {
// // //       setFetching(false);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchCategories();
// // //   }, []);

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     if (!name.trim()) {
// // //       toast.warn("Please enter category name");
// // //       return;
// // //     }

// // //     try {
// // //       setLoading(true);
// // //       if (editId) {
// // //         await updateCategoryApi(editId, { name: name.trim() });
// // //         toast.success("Category updated successfully!");
// // //       } else {
// // //         await createCategoryApi({ name: name.trim() });
// // //         toast.success("Category created successfully!");
// // //       }
// // //       setName("");
// // //       setEditId(null);
// // //       fetchCategories();
// // //     } catch (error) {
// // //       toast.error(editId ? "Failed to update" : "Failed to create");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const handleEdit = (cat) => {
// // //     setName(cat.name);
// // //     setEditId(cat._id);
// // //   };

// // //   const handleDelete = async (id) => {
// // //     if (!window.confirm("Delete this category?")) return;
// // //     try {
// // //       await deleteCategoryApi(id);
// // //       toast.success("Category deleted");
// // //       fetchCategories();
// // //     } catch (error) {
// // //       toast.error("Delete failed");
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-10 px-4">
// // //       <div className="max-w-4xl mx-auto space-y-8">
// // //         <div className="text-center">
// // //           <h1 className="text-4xl font-bold text-gray-900">Manage Categories</h1>
// // //           <p className="text-gray-600 mt-2">Create, edit and organize your blog categories</p>
// // //         </div>

// // //         {/* Form Card */}
// // //         <Card className="shadow-xl border-0">
// // //           <CardHeader>
// // //             <CardTitle>{editId ? "Edit Category" : "Create New Category"}</CardTitle>
// // //           </CardHeader>
// // //           <CardContent>
// // //             <form onSubmit={handleSubmit} className="space-y-5">
// // //               <div className="space-y-2">
// // //                 <Label>Category Name</Label>
// // //                 <Input
// // //                   type="text"
// // //                   placeholder="Enter category name"
// // //                   value={name}
// // //                   onChange={(e) => setName(e.target.value)}
// // //                   disabled={loading}
// // //                   className="h-12 text-base"
// // //                 />
// // //               </div>

// // //               <div className="flex gap-3">
// // //                 {/* Primary Button - Gradient */}
// // //                 <Button
// // //                   type="submit"
// // //                   disabled={loading}
// // //                   className="flex-1 h-12 text-base font-semibold bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 shadow-lg shadow-indigo-500/30"
// // //                 >
// // //                   {loading ? (
// // //                     <>Processing...</>
// // //                   ) : editId ? (
// // //                     "Update Category"
// // //                   ) : (
// // //                     "Create Category"
// // //                   )}
// // //                 </Button>

// // //                 {editId && (
// // //                   <Button
// // //                     type="button"
// // //                     variant="outline"
// // //                     onClick={() => {
// // //                       setName("");
// // //                       setEditId(null);
// // //                     }}
// // //                     className="h-12 border-2 hover:bg-gray-100"
// // //                   >
// // //                     Cancel
// // //                   </Button>
// // //                 )}
// // //               </div>
// // //             </form>
// // //           </CardContent>
// // //         </Card>

// // //         {/* Table Card */}
// // //         <Card className="shadow-xl border-0">
// // //           <CardHeader>
// // //             <CardTitle>All Categories ({categories.length})</CardTitle>
// // //           </CardHeader>
// // //           <CardContent>
// // //             {fetching ? (
// // //               <div className="py-20 text-center">Loading...</div>
// // //             ) : categories.length === 0 ? (
// // //               <div className="py-20 text-center text-gray-500">No categories found</div>
// // //             ) : (
// // //               <Table>
// // //                 <TableHeader>
// // //                   <TableRow>
// // //                     <TableHead className="w-16">#</TableHead>
// // //                     <TableHead>Category Name</TableHead>
// // //                     <TableHead className="text-right">Actions</TableHead>
// // //                   </TableRow>
// // //                 </TableHeader>
// // //                 <TableBody>
// // //                   {categories.map((cat, index) => (
// // //                     <TableRow key={cat._id} className="hover:bg-gray-50">
// // //                       <TableCell>{index + 1}</TableCell>
// // //                       <TableCell className="font-semibold">{cat.name}</TableCell>
// // //                       <TableCell className="text-right">
// // //                         <div className="flex gap-2 justify-end">
// // //                           {/* Edit Button - Blue Gradient */}
// // //                           <Button
// // //                             variant="outline"
// // //                             size="sm"
// // //                             onClick={() => handleEdit(cat)}
// // //                             className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 hover:from-blue-600 hover:to-cyan-600"
// // //                           >
// // //                             Edit
// // //                           </Button>

// // //                           {/* Delete Button - Red Gradient */}
// // //                           <Button
// // //                             variant="destructive"
// // //                             size="sm"
// // //                             onClick={() => handleDelete(cat._id)}
// // //                             className="bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700"
// // //                           >
// // //                             Delete
// // //                           </Button>
// // //                         </div>
// // //                       </TableCell>
// // //                     </TableRow>
// // //                   ))}
// // //                 </TableBody>
// // //               </Table>
// // //             )}
// // //           </CardContent>
// // //         </Card>
// // //       </div>

// // //       <ToastContainer position="top-right" autoClose={3000} theme="light" />
// // //     </div>
// // //   );
// // // };

// // // export default CategoryBlog;


// // // import { useEffect, useState } from "react";
// // // import {
// // //   createCategoryApi,
// // //   getCategoriesApi,
// // //   updateCategoryApi,
// // //   deleteCategoryApi,
// // // } from "./categoryApi";

// // // // Shadcn UI
// // // import { Button } from "@/components/ui/button";
// // // import { Input } from "@/components/ui/input";
// // // import { Label } from "@/components/ui/label";
// // // import {
// // //   Table,
// // //   TableBody,
// // //   TableCell,
// // //   TableHead,
// // //   TableHeader,
// // //   TableRow,
// // // } from "@/components/ui/table";
// // // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// // // // Toastify
// // // import { ToastContainer, toast } from "react-toastify";
// // // import "react-toastify/dist/ReactToastify.css";

// // // const CategoryBlog = () => {
// // //   const [categories, setCategories] = useState([]);
// // //   const [name, setName] = useState("");
// // //   const [editId, setEditId] = useState(null);
// // //   const [loading, setLoading] = useState(false);
// // //   const [fetching, setFetching] = useState(true);

// // //   const fetchCategories = async () => {
// // //     try {
// // //       setFetching(true);
// // //       const res = await getCategoriesApi();
// // //       setCategories(res.data?.data || res.data || []);
// // //     } catch (error) {
// // //       toast.error("Failed to load categories");
// // //     } finally {
// // //       setFetching(false);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchCategories();
// // //   }, []);

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     if (!name.trim()) {
// // //       toast.warn("Please enter category name");
// // //       return;
// // //     }

// // //     try {
// // //       setLoading(true);
// // //       if (editId) {
// // //         await updateCategoryApi(editId, { name: name.trim() });
// // //         toast.success("Category updated successfully!");
// // //       } else {
// // //         await createCategoryApi({ name: name.trim() });
// // //         toast.success("Category created successfully!");
// // //       }
// // //       setName("");
// // //       setEditId(null);
// // //       fetchCategories();
// // //     } catch (error) {
// // //       toast.error(editId ? "Failed to update" : "Failed to create");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const handleEdit = (cat) => {
// // //     setName(cat.name);
// // //     setEditId(cat._id);
// // //   };

// // //   const handleDelete = async (id) => {
// // //     if (!window.confirm("Delete this category?")) return;
// // //     try {
// // //       await deleteCategoryApi(id);
// // //       toast.success("Category deleted");
// // //       fetchCategories();
// // //     } catch (error) {
// // //       toast.error("Delete failed");
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-10 px-4">
// // //       <div className="max-w-4xl mx-auto space-y-8">
        
// // //         {/* Header */}
// // //         <div className="text-center">
// // //           <h1 className="text-4xl font-bold text-gray-900">Manage Categories</h1>
// // //           <p className="text-gray-600 mt-2">Create, edit and organize your blog categories</p>
// // //         </div>

// // //         {/* Form Card */}
// // //         <Card className="shadow-xl border-0">
// // //           <CardHeader className="text-center pb-6">
// // //             <CardTitle className="text-2xl">
// // //               {editId ? "Edit Category" : "Create New Category"}
// // //             </CardTitle>
// // //           </CardHeader>
// // //           <CardContent>
// // //             <form onSubmit={handleSubmit} className="space-y-6">
// // //               <div className="space-y-3">
// // //                 {/* Label centered */}
// // //                 <Label className="text-center block text-base font-medium text-gray-700">
// // //                   Category Name
// // //                 </Label>
                
// // //                 <Input
// // //                   type="text"
// // //                   placeholder="Enter category name"
// // //                   value={name}
// // //                   onChange={(e) => setName(e.target.value)}
// // //                   disabled={loading}
// // //                   className="h-12 text-base text-center"
// // //                 />
// // //               </div>

// // //               <div className="flex gap-3 pt-4">
// // //                 <Button
// // //                   type="submit"
// // //                   disabled={loading}
// // //                   className="flex-1 h-12 text-base font-semibold bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 shadow-lg"
// // //                 >
// // //                   {loading ? "Processing..." : editId ? "Update Category" : "Create Category"}
// // //                 </Button>

// // //                 {editId && (
// // //                   <Button
// // //                     type="button"
// // //                     variant="outline"
// // //                     onClick={() => {
// // //                       setName("");
// // //                       setEditId(null);
// // //                     }}
// // //                     className="h-12 px-8"
// // //                   >
// // //                     Cancel
// // //                   </Button>
// // //                 )}
// // //               </div>
// // //             </form>
// // //           </CardContent>
// // //         </Card>

// // //         {/* Table Card */}
// // //         <Card className="shadow-xl border-0">
// // //           <CardHeader>
// // //             <CardTitle>All Categories ({categories.length})</CardTitle>
// // //           </CardHeader>
// // //           <CardContent>
// // //             {fetching ? (
// // //               <div className="py-20 text-center text-gray-500">Loading categories...</div>
// // //             ) : categories.length === 0 ? (
// // //               <div className="py-20 text-center text-gray-500">No categories found</div>
// // //             ) : (
// // //               <Table>
// // //                 <TableHeader>
// // //                   <TableRow>
// // //                     <TableHead className="w-16">#</TableHead>
// // //                     <TableHead>Category Name</TableHead>
// // //                     <TableHead className="text-right">Actions</TableHead>
// // //                   </TableRow>
// // //                 </TableHeader>
// // //                 <TableBody>
// // //                   {categories.map((cat, index) => (
// // //                     <TableRow key={cat._id} className="hover:bg-gray-50">
// // //                       <TableCell className="font-medium">{index + 1}</TableCell>
// // //                       <TableCell className="font-semibold text-gray-900">{cat.name}</TableCell>
// // //                       <TableCell className="text-right">
// // //                         <div className="flex gap-2 justify-end">
// // //                           <Button
// // //                             variant="outline"
// // //                             size="sm"
// // //                             onClick={() => handleEdit(cat)}
// // //                             className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 hover:from-blue-600 hover:to-cyan-600"
// // //                           >
// // //                             Edit
// // //                           </Button>
// // //                           <Button
// // //                             variant="destructive"
// // //                             size="sm"
// // //                             onClick={() => handleDelete(cat._id)}
// // //                             className="bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700"
// // //                           >
// // //                             Delete
// // //                           </Button>
// // //                         </div>
// // //                       </TableCell>
// // //                     </TableRow>
// // //                   ))}
// // //                 </TableBody>
// // //               </Table>
// // //             )}
// // //           </CardContent>
// // //         </Card>
// // //       </div>

// // //       <ToastContainer position="top-right" autoClose={3000} theme="light" />
// // //     </div>
// // //   );
// // // };

// // // export default CategoryBlog;





// // // import { useEffect, useState } from "react";
// // // import {
// // //   createCategoryApi,
// // //   getCategoriesApi,
// // //   updateCategoryApi,
// // //   deleteCategoryApi,
// // // } from "./categoryApi";

// // // // Shadcn UI
// // // import { Button } from "@/components/ui/button";
// // // import { Input } from "@/components/ui/input";
// // // import { Label } from "@/components/ui/label";
// // // import {
// // //   Table,
// // //   TableBody,
// // //   TableCell,
// // //   TableHead,
// // //   TableHeader,
// // //   TableRow,
// // // } from "@/components/ui/table";
// // // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// // // // Toastify
// // // import { ToastContainer, toast } from "react-toastify";
// // // import "react-toastify/dist/ReactToastify.css";

// // // const CategoryBlog = () => {
// // //   const [categories, setCategories] = useState([]);
// // //   const [name, setName] = useState("");
// // //   const [editId, setEditId] = useState(null);
// // //   const [loading, setLoading] = useState(false);
// // //   const [fetching, setFetching] = useState(true);

// // //   const fetchCategories = async () => {
// // //     try {
// // //       setFetching(true);
// // //       const res = await getCategoriesApi();
// // //       setCategories(res.data?.data || res.data || []);
// // //     } catch (error) {
// // //       toast.error("Failed to load categories");
// // //     } finally {
// // //       setFetching(false);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchCategories();
// // //   }, []);

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     if (!name.trim()) {
// // //       toast.warn("Please enter category name");
// // //       return;
// // //     }

// // //     try {
// // //       setLoading(true);
// // //       if (editId) {
// // //         await updateCategoryApi(editId, { name: name.trim() });
// // //         toast.success("Category updated successfully!");
// // //       } else {
// // //         await createCategoryApi({ name: name.trim() });
// // //         toast.success("Category created successfully!");
// // //       }
// // //       setName("");
// // //       setEditId(null);
// // //       fetchCategories();
// // //     } catch (error) {
// // //       toast.error(editId ? "Failed to update" : "Failed to create");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const handleEdit = (cat) => {
// // //     setName(cat.name);
// // //     setEditId(cat._id);
// // //   };

// // //   const handleDelete = async (id) => {
// // //     if (!window.confirm("Delete this category?")) return;
// // //     try {
// // //       await deleteCategoryApi(id);
// // //       toast.success("Category deleted successfully");
// // //       fetchCategories();
// // //     } catch (error) {
// // //       toast.error("Delete failed");
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
// // //       <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl p-8 md:p-12">
        
// // //         {/* Header */}
// // //         <div className="text-center mb-10">
// // //           <h1 className="text-3xl font-bold text-gray-900">
// // //             Manage Categories
// // //           </h1>
// // //           <p className="text-gray-600 mt-2">
// // //             Create, edit and organize your blog categories
// // //           </p>
// // //         </div>

// // //         {/* Create / Edit Form */}
// // //         <Card className="shadow-sm border border-gray-100 mb-10">
// // //           <CardHeader className="text-center pb-6">
// // //             <CardTitle className="text-2xl">
// // //               {editId ? "Edit Category" : "Create New Category"}
// // //             </CardTitle>
// // //           </CardHeader>
// // //           <CardContent>
// // //             <form onSubmit={handleSubmit} className="space-y-6">
// // //               <div className="space-y-2">
// // //                 <Label htmlFor="category-name" className="text-base">
// // //                   Category Name
// // //                 </Label>
// // //                 <Input
// // //                   id="category-name"
// // //                   type="text"
// // //                   placeholder="Enter category name"
// // //                   value={name}
// // //                   onChange={(e) => setName(e.target.value)}
// // //                   disabled={loading}
// // //                   className="h-12 text-base"
// // //                 />
// // //               </div>

// // //               <div className="flex gap-3 pt-4">
// // //                 <Button
// // //                   type="submit"
// // //                   disabled={loading}
// // //                   className="flex-1 h-12 text-base font-semibold bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700"
// // //                 >
// // //                   {loading
// // //                     ? "Processing..."
// // //                     : editId
// // //                     ? "Update Category"
// // //                     : "Create Category"}
// // //                 </Button>

// // //                 {editId && (
// // //                   <Button
// // //                     type="button"
// // //                     variant="outline"
// // //                     onClick={() => {
// // //                       setName("");
// // //                       setEditId(null);
// // //                     }}
// // //                     className="h-12 px-8"
// // //                   >
// // //                     Cancel
// // //                   </Button>
// // //                 )}
// // //               </div>
// // //             </form>
// // //           </CardContent>
// // //         </Card>

// // //         {/* Categories Table */}
// // //         <Card className="shadow-sm border border-gray-100">
// // //           <CardHeader>
// // //             <CardTitle>All Categories ({categories.length})</CardTitle>
// // //           </CardHeader>
// // //           <CardContent>
// // //             {fetching ? (
// // //               <div className="py-20 text-center text-gray-500">
// // //                 Loading categories...
// // //               </div>
// // //             ) : categories.length === 0 ? (
// // //               <div className="py-20 text-center text-gray-500">
// // //                 No categories found
// // //               </div>
// // //             ) : (
// // //               <Table>
// // //                 <TableHeader>
// // //                   <TableRow>
// // //                     <TableHead className="w-16">#</TableHead>
// // //                     <TableHead>Category Name</TableHead>
// // //                     <TableHead className="text-right">Actions</TableHead>
// // //                   </TableRow>
// // //                 </TableHeader>
// // //                 <TableBody>
// // //                   {categories.map((cat, index) => (
// // //                     <TableRow key={cat._id} className="hover:bg-gray-50">
// // //                       <TableCell className="font-medium">{index + 1}</TableCell>
// // //                       <TableCell className="font-semibold text-gray-900">
// // //                         {cat.name}
// // //                       </TableCell>
// // //                       <TableCell className="text-right">
// // //                         <div className="flex gap-2 justify-end">
// // //                           <Button
// // //                             variant="outline"
// // //                             size="sm"
// // //                             onClick={() => handleEdit(cat)}
// // //                             className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 hover:from-blue-600 hover:to-cyan-600"
// // //                           >
// // //                             Edit
// // //                           </Button>
// // //                           <Button
// // //                             variant="destructive"
// // //                             size="sm"
// // //                             onClick={() => handleDelete(cat._id)}
// // //                             className="bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700"
// // //                           >
// // //                             Delete
// // //                           </Button>
// // //                         </div>
// // //                       </TableCell>
// // //                     </TableRow>
// // //                   ))}
// // //                 </TableBody>
// // //               </Table>
// // //             )}
// // //           </CardContent>
// // //         </Card>
// // //       </div>

// // //       <ToastContainer position="top-right" autoClose={3000} theme="light" />
// // //     </div>
// // //   );
// // // };

// // // export default CategoryBlog;



// // import { useEffect, useState } from "react";
// // import {
// //   createCategoryApi,
// //   getCategoriesApi,
// //   updateCategoryApi,
// //   deleteCategoryApi,
// // } from "./categoryApi";

// // // Shadcn UI
// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import { Label } from "@/components/ui/label";
// // import {
// //   Table,
// //   TableBody,
// //   TableCell,
// //   TableHead,
// //   TableHeader,
// //   TableRow,
// // } from "@/components/ui/table";
// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// // // Toastify
// // import { ToastContainer, toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// // const CategoryBlog = () => {
// //   const [categories, setCategories] = useState([]);
// //   const [name, setName] = useState("");
// //   const [editId, setEditId] = useState(null);
// //   const [loading, setLoading] = useState(false);
// //   const [fetching, setFetching] = useState(true);

// //   const fetchCategories = async () => {
// //     try {
// //       setFetching(true);
// //       const res = await getCategoriesApi();
// //       setCategories(res.data?.data || res.data || []);
// //     } catch (error) {
// //       toast.error("Failed to load categories");
// //     } finally {
// //       setFetching(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchCategories();
// //   }, []);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!name.trim()) {
// //       toast.warn("Please enter category name");
// //       return;
// //     }

// //     try {
// //       setLoading(true);
// //       if (editId) {
// //         await updateCategoryApi(editId, { name: name.trim() });
// //         toast.success("Category updated successfully!");
// //       } else {
// //         await createCategoryApi({ name: name.trim() });
// //         toast.success("Category created successfully!");
// //       }
// //       setName("");
// //       setEditId(null);
// //       fetchCategories();
// //     } catch (error) {
// //       toast.error(editId ? "Failed to update" : "Failed to create");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleEdit = (cat) => {
// //     setName(cat.name);
// //     setEditId(cat._id);
// //   };

// //   const handleDelete = async (id) => {
// //     if (!window.confirm("Delete this category?")) return;
// //     try {
// //       await deleteCategoryApi(id);
// //       toast.success("Category deleted successfully");
// //       fetchCategories();
// //     } catch (error) {
// //       toast.error("Delete failed");
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50 px-4 py-8">   {/* ← Fixed Top Space */}
// //       <div className="w-full max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12">
        
// //         {/* Header */}
// //         <div className="text-center mb-10">
// //           <h1 className="text-3xl font-bold text-gray-900">
// //             Manage Categories
// //           </h1>
// //           <p className="text-gray-600 mt-2">
// //             Create, edit and organize your blog categories
// //           </p>
// //         </div>

// //         {/* Create / Edit Form */}
// //         <Card className="shadow-sm border border-gray-100 mb-10">
// //           <CardHeader className="text-center pb-6">
// //             <CardTitle className="text-2xl">
// //               {editId ? "Edit Category" : "Create New Category"}
// //             </CardTitle>
// //           </CardHeader>
// //           <CardContent>
// //             <form onSubmit={handleSubmit} className="space-y-6">
// //               <div className="space-y-2">
// //                 <Label htmlFor="category-name" className="text-base">
// //                   Category Name
// //                 </Label>
// //                 <Input
// //                   id="category-name"
// //                   type="text"
// //                   placeholder="Enter category name"
// //                   value={name}
// //                   onChange={(e) => setName(e.target.value)}
// //                   disabled={loading}
// //                   className="h-12 text-base"
// //                 />
// //               </div>

// //               <div className="flex gap-3 pt-4">
// //                 <Button
// //                   type="submit"
// //                   disabled={loading}
// //                   className="flex-1 h-12 text-base font-semibold bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700"
// //                 >
// //                   {loading
// //                     ? "Processing..."
// //                     : editId
// //                     ? "Update Category"
// //                     : "Create Category"}
// //                 </Button>

// //                 {editId && (
// //                   <Button
// //                     type="button"
// //                     variant="outline"
// //                     onClick={() => {
// //                       setName("");
// //                       setEditId(null);
// //                     }}
// //                     className="h-12 px-8"
// //                   >
// //                     Cancel
// //                   </Button>
// //                 )}
// //               </div>
// //             </form>
// //           </CardContent>
// //         </Card>

// //         {/* Categories Table */}
// //         <Card className="shadow-sm border border-gray-100">
// //           <CardHeader>
// //             <CardTitle>All Categories ({categories.length})</CardTitle>
// //           </CardHeader>
// //           <CardContent>
// //             {fetching ? (
// //               <div className="py-20 text-center text-gray-500">
// //                 Loading categories...
// //               </div>
// //             ) : categories.length === 0 ? (
// //               <div className="py-20 text-center text-gray-500">
// //                 No categories found
// //               </div>
// //             ) : (
// //               <Table>
// //                 <TableHeader>
// //                   <TableRow>
// //                     <TableHead className="w-16">#</TableHead>
// //                     <TableHead>Category Name</TableHead>
// //                     <TableHead className="text-right">Actions</TableHead>
// //                   </TableRow>
// //                 </TableHeader>
// //                 <TableBody>
// //                   {categories.map((cat, index) => (
// //                     <TableRow key={cat._id} className="hover:bg-gray-50">
// //                       <TableCell className="font-medium">{index + 1}</TableCell>
// //                       <TableCell className="font-semibold text-gray-900">
// //                         {cat.name}
// //                       </TableCell>
// //                       <TableCell className="text-right">
// //                         <div className="flex gap-2 justify-end">
// //                           <Button
// //                             variant="outline"
// //                             size="sm"
// //                             onClick={() => handleEdit(cat)}
// //                             className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 hover:from-blue-600 hover:to-cyan-600"
// //                           >
// //                             Edit
// //                           </Button>
// //                           <Button
// //                             variant="destructive"
// //                             size="sm"
// //                             onClick={() => handleDelete(cat._id)}
// //                             className="bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700"
// //                           >
// //                             Delete
// //                           </Button>
// //                         </div>
// //                       </TableCell>
// //                     </TableRow>
// //                   ))}
// //                 </TableBody>
// //               </Table>
// //             )}
// //           </CardContent>
// //         </Card>
// //       </div>

// //       <ToastContainer position="top-right" autoClose={3000} theme="light" />
// //     </div>
// //   );
// // };

// // export default CategoryBlog;





// import { useEffect, useState } from "react";
// import {
//   createCategoryApi,
//   getCategoriesApi,
//   updateCategoryApi,
//   deleteCategoryApi,
// } from "./categoryApi";

// // Shadcn UI
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
//     <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
      
     

//       {/* Create / Edit Form */}
//       <Card className="shadow-sm border border-gray-100 mb-10">
//         <CardHeader className="text-center pb-6">
//           <CardTitle className="text-2xl">
//             {editId ? "Edit Category" : "Create New Category"}
//           </CardTitle>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div className="space-y-2">
//               <Label htmlFor="category-name" className="text-base">
//                 Category Name
//               </Label>
//               <Input
//                 id="category-name"
//                 type="text"
//                 placeholder="Enter category name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 disabled={loading}
//                 className="h-12 text-base"
//               />
//             </div>

//             <div className="flex gap-3 pt-4">
//               <Button
//                 type="submit"
//                 disabled={loading}
//                 className="flex-1 h-12 text-base font-semibold bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700"
//               >
//                 {loading
//                   ? "Processing..."
//                   : editId
//                   ? "Update Category"
//                   : "Create Category"}
//               </Button>

//               {editId && (
//                 <Button
//                   type="button"
//                   variant="outline"
//                   onClick={() => {
//                     setName("");
//                     setEditId(null);
//                   }}
//                   className="h-12 px-8"
//                 >
//                   Cancel
//                 </Button>
//               )}
//             </div>
//           </form>
//         </CardContent>
//       </Card>

//       {/* Categories Table */}
//       <Card className="shadow-sm border border-gray-100">
//         <CardHeader>
//           <CardTitle>All Categories ({categories.length})</CardTitle>
//         </CardHeader>
//         <CardContent>
//           {fetching ? (
//             <div className="py-20 text-center text-gray-500">
//               Loading categories...
//             </div>
//           ) : categories.length === 0 ? (
//             <div className="py-20 text-center text-gray-500">
//               No categories found
//             </div>
//           ) : (
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead className="w-16">#</TableHead>
//                   <TableHead>Category Name</TableHead>
//                   <TableHead className="text-right">Actions</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {categories.map((cat, index) => (
//                   <TableRow key={cat._id} className="hover:bg-gray-50">
//                     <TableCell className="font-medium">{index + 1}</TableCell>
//                     <TableCell className="font-semibold text-gray-900">
//                       {cat.name}
//                     </TableCell>
//                     <TableCell className="text-right">
//                       <div className="flex gap-2 justify-end">
//                         <Button
//                           variant="outline"
//                           size="sm"
//                           onClick={() => handleEdit(cat)}
//                           className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 hover:from-blue-600 hover:to-cyan-600"
//                         >
//                           Edit
//                         </Button>
//                         <Button
//                           variant="destructive"
//                           size="sm"
//                           onClick={() => handleDelete(cat._id)}
//                           className="bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700"
//                         >
//                           Delete
//                         </Button>
//                       </div>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           )}
//         </CardContent>
//       </Card>
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

// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this category?")) return;
    try {
      await deleteCategoryApi(id);
      toast.success("Category deleted successfully");
      fetchCategories();
    } catch (error) {
      toast.error("Delete failed");
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-5xl mx-auto">
      <ToastContainer position="top-right" autoClose={2500} />

      {/* Create / Edit Form */}
      <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 mb-10">
        <h2 className="text-2xl font-semibold text-center mb-8 text-gray-900">
          {editId ? "Edit Category" : "Create New Category"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Category Name
            </label>
            <input
              type="text"
              placeholder="Enter category name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={loading}
              className="w-full h-12 px-5 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-base"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 h-12 text-base font-semibold rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white transition-all disabled:opacity-70"
            >
              {loading
                ? "Processing..."
                : editId
                ? "Update Category"
                : "Create Category"}
            </button>

            {editId && (
              <button
                type="button"
                onClick={() => {
                  setName("");
                  setEditId(null);
                }}
                className="h-12 px-8 border border-gray-300 hover:bg-gray-100 rounded-2xl text-gray-700 font-medium transition"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Categories Table */}
      <div className="bg-white border border-gray-100 rounded-3xl shadow-sm overflow-hidden">
        <div className="px-8 py-6 border-b flex justify-between items-center">
          <h3 className="text-xl font-semibold text-gray-900">
            All Categories ({categories.length})
          </h3>
        </div>

        {fetching ? (
          <div className="py-20 text-center text-gray-500">Loading categories...</div>
        ) : categories.length === 0 ? (
          <div className="py-20 text-center text-gray-500">No categories found</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="w-16 py-5 px-6 text-left font-medium text-gray-600">#</th>
                  <th className="py-5 px-6 text-left font-medium text-gray-600">Category Name</th>
                  <th className="py-5 px-6 text-right font-medium text-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((cat, index) => (
                  <tr key={cat._id} className="border-b hover:bg-gray-50 transition">
                    <td className="py-5 px-6 font-medium text-gray-500">{index + 1}</td>
                    <td className="py-5 px-6 font-semibold text-gray-900">{cat.name}</td>
                    <td className="py-5 px-6 text-right">
                      <div className="flex gap-3 justify-end">
                        <button
                          onClick={() => handleEdit(cat)}
                          className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white text-sm font-medium rounded-2xl transition"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(cat._id)}
                          className="px-5 py-2.5 bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white text-sm font-medium rounded-2xl transition"
                        >
                          Delete
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
  );
};

export default CategoryBlog;