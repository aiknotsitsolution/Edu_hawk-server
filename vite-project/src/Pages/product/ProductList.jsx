// import { useEffect, useMemo, useState } from "react";
// import {
//   useReactTable,
//   getCoreRowModel,
//   getFilteredRowModel,
//   getPaginationRowModel,
//   flexRender,
// } from "@tanstack/react-table";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import DescriptionEditor from "../Home/DescriptionEditor";
// // CKEditor
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

// import { getProductsApi, deleteHomeApi, updateHomeApi } from "./product.api";

// export default function ProductTable() {
//   const [products, setProducts] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [globalFilter, setGlobalFilter] = useState("");

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editData, setEditData] = useState(null);
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [previewImages, setPreviewImages] = useState([]);

//   // Fetch Data
//   const fetchData = async () => {
//     try {
//       setLoading(true);
//       const [productsRes, categoriesRes] = await Promise.all([
//         getProductsApi(),
//         fetch("https://eduhawk-server-urpn.onrender.com/api/blogcategory").then((r) => r.json()),
//       ]);

//       setProducts(productsRes.data?.data || productsRes.data || []);

//       if (categoriesRes.success) {
//         setCategories(categoriesRes.data || []);
//       }
//     } catch (err) {
//       toast.error("Failed to load data");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const openEditModal = (product) => {
//     const categoryId =
//       product.category?._id?.toString() || product.category || "";
//     setEditData({ ...product, category: categoryId });
//     setPreviewImages(product.images || []);
//     setSelectedFiles([]);
//     setIsModalOpen(true);
//   };

//   const handleFilesChange = (e) => {
//     const files = Array.from(e.target.files);
//     setSelectedFiles(files);
//     setPreviewImages(files.map((file) => URL.createObjectURL(file)));
//   };

//   const handleUpdate = async () => {
//     if (
//       !editData.name?.trim() ||
//       !editData.description?.trim() ||
//       !editData.author?.trim()
//     ) {
//       toast.error("Name, Author and Description are required");
//       return;
//     }

//     try {
//       setLoading(true);
//       const formData = new FormData();
//       formData.append("name", editData.name.trim());
//       formData.append("description", editData.description.trim());
//       formData.append("author", editData.author.trim());
//       formData.append("category", editData.category);

//       selectedFiles.forEach((file) => formData.append("images", file));

//       await updateHomeApi(editData._id, formData);
//       toast.success("Product updated successfully!");
//       setIsModalOpen(false);
//       fetchData();
//     } catch (err) {
//       toast.error("Update failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const columns = useMemo(
//     () => [
//       {
//         header: "No.",
//         id: "serial",
//         cell: ({ row, table }) =>
//           table.getState().pagination.pageIndex *
//             table.getState().pagination.pageSize +
//           row.index +
//           1,
//       },
//       {
//         accessorKey: "images",
//         header: "Image",
//         cell: ({ row }) => {
//           const img = row.original.images?.[0];
//           return img ? (
//             <img
//               src={img}
//               alt="product"
//               className="w-16 h-16 object-cover rounded-xl border shadow-sm"
//             />
//           ) : (
//             <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center text-xs text-gray-400">
//               No Img
//             </div>
//           );
//         },
//       },
//       { accessorKey: "name", header: "Product Name" },
//       { accessorKey: "author", header: "Author" },
//       {
//         accessorKey: "description",
//         header: "Description",
//         cell: ({ getValue }) => {
//           const text =
//             getValue()
//               ?.replace(/<[^>]+>/g, " ")
//               .replace(/\s+/g, " ")
//               .trim() || "—";
//           return (
//             <div className="max-w-md line-clamp-2 text-sm text-gray-600">
//               {text}
//             </div>
//           );
//         },
//       },
//       {
//         accessorKey: "category.name",
//         header: "Category",
//         cell: ({ row }) => row.original.category?.name || "—",
//       },
//       {
//         id: "actions",
//         header: "Actions",
//         cell: ({ row }) => (
//           <div className="flex gap-2">
//             <button
//               onClick={() => openEditModal(row.original)}
//               className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-2xl transition"
//             >
//               Edit
//             </button>
//             <button
//               onClick={async () => {
//                 if (!window.confirm("Delete this product?")) return;
//                 try {
//                   setLoading(true);
//                   await deleteHomeApi(row.original._id);
//                   toast.success("Product deleted");
//                   fetchData();
//                 } catch {
//                   toast.error("Delete failed");
//                 } finally {
//                   setLoading(false);
//                 }
//               }}
//               className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-2xl transition"
//             >
//               Delete
//             </button>
//           </div>
//         ),
//       },
//     ],
//     [],
//   );

//   const table = useReactTable({
//     data: products,
//     columns,
//     state: { globalFilter },
//     onGlobalFilterChange: setGlobalFilter,
//     getCoreRowModel: getCoreRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//   });

//   return (
//     <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
//       <ToastContainer position="top-right" autoClose={3000} theme="light" />

//       {/* Header */}
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">
//         <div>
//           <h1 className="text-3xl font-bold text-gray-900">
//             Product Management
//           </h1>
//           <p className="text-gray-600 mt-1">Manage all your products</p>
//         </div>

//         <input
//           placeholder="Search products..."
//           value={globalFilter}
//           onChange={(e) => setGlobalFilter(e.target.value)}
//           className="max-w-sm h-12 px-5 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
//         />
//       </div>

//       {/* Table */}
//       <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead>
//               {table.getHeaderGroups().map((headerGroup) => (
//                 <tr key={headerGroup.id} className="border-b bg-gray-50">
//                   {headerGroup.headers.map((header) => (
//                     <th
//                       key={header.id}
//                       className="px-6 py-5 text-left font-semibold text-gray-700"
//                     >
//                       {flexRender(
//                         header.column.columnDef.header,
//                         header.getContext(),
//                       )}
//                     </th>
//                   ))}
//                 </tr>
//               ))}
//             </thead>
//             <tbody>
//               {table.getRowModel().rows.length === 0 ? (
//                 <tr>
//                   <td colSpan={7} className="text-center py-20 text-gray-500">
//                     No products found
//                   </td>
//                 </tr>
//               ) : (
//                 table.getRowModel().rows.map((row) => (
//                   <tr
//                     key={row.id}
//                     className="border-b hover:bg-gray-50 transition-all"
//                   >
//                     {row.getVisibleCells().map((cell) => (
//                       <td key={cell.id} className="px-6 py-5">
//                         {flexRender(
//                           cell.column.columnDef.cell,
//                           cell.getContext(),
//                         )}
//                       </td>
//                     ))}
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* ==================== COMPACT EDIT MODAL ==================== */}
//       {isModalOpen && editData && (
//         <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl">
//             {/* Header */}
//             <div className="px-8 pt-6 pb-4 border-b flex justify-between items-center sticky top-0 bg-white rounded-t-3xl">
//               <h2 className="text-2xl font-semibold">Edit Product</h2>
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 className="text-3xl text-gray-400 hover:text-gray-700"
//               >
//                 ✕
//               </button>
//             </div>

//             <div className="p-8 space-y-6">
//               {/* Name & Author */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Product Name
//                   </label>
//                   <input
//                     value={editData.name || ""}
//                     onChange={(e) =>
//                       setEditData((prev) => ({ ...prev, name: e.target.value }))
//                     }
//                     className="w-full h-11 px-5 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Author
//                   </label>
//                   <input
//                     value={editData.author || ""}
//                     onChange={(e) =>
//                       setEditData((prev) => ({
//                         ...prev,
//                         author: e.target.value,
//                       }))
//                     }
//                     className="w-full h-11 px-5 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                   />
//                 </div>
//               </div>

//               {/* Category */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Category
//                 </label>
//                 <select
//                   value={editData.category || ""}
//                   onChange={(e) =>
//                     setEditData((prev) => ({
//                       ...prev,
//                       category: e.target.value,
//                     }))
//                   }
//                   className="w-full h-11 px-5 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
//                 >
//                   <option value="">-- Select Category --</option>
//                   {categories.map((cat) => (
//                     <option key={cat._id} value={cat._id}>
//                       {cat.name}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* Description */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Description
//                 </label>
//                 <div className="border border-gray-300 rounded-2xl overflow-hidden focus-within:border-indigo-500 min-h-[160px]">
//                   <CKEditor
//                     editor={ClassicEditor}
//                     data={editData.description || ""}
//                     onChange={(event, editor) => {
//                       setEditData((prev) => ({
//                         ...prev,
//                         description: editor.getData(),
//                       }));
//                     }}
//                     config={{ placeholder: "Write product description..." }}
//                   />
//                 </div>
//               </div>

//               {/* Images */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Replace Images (Optional)
//                 </label>
//                 <input
//                   type="file"
//                   multiple
//                   accept="image/*"
//                   onChange={handleFilesChange}
//                   className="w-full h-11 px-5 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
//                 />

//                 {previewImages.length > 0 && (
//                   <div className="grid grid-cols-4 gap-3 mt-4">
//                     {previewImages.map((src, i) => (
//                       <img
//                         key={i}
//                         src={src}
//                         alt={`preview-${i}`}
//                         className="w-full h-24 object-cover rounded-xl border"
//                       />
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Buttons */}
//               <div className="flex justify-end gap-4 pt-6 border-t">
//                 <button
//                   onClick={() => setIsModalOpen(false)}
//                   className="px-8 py-3 border border-gray-300 rounded-2xl hover:bg-gray-100 font-medium"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   onClick={handleUpdate}
//                   disabled={loading}
//                   className="px-10 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white rounded-2xl font-semibold disabled:opacity-70"
//                 >
//                   {loading ? "Updating..." : "Update Product"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import { useEffect, useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DescriptionEditor from "../Home/DescriptionEditor";

import { getProductsApi, deleteHomeApi, updateHomeApi } from "./product.api";

export default function ProductTable() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [globalFilter, setGlobalFilter] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  // Fetch Data
  const fetchData = async () => {
    try {
      setLoading(true);
      const [productsRes, categoriesRes] = await Promise.all([
        getProductsApi(),
        fetch("https://eduhawk-server-urpn.onrender.com/api/blogcategory").then(
          (r) => r.json(),
        ),
      ]);

      setProducts(productsRes.data?.data || productsRes.data || []);

      if (categoriesRes.success) {
        setCategories(categoriesRes.data || []);
      }
    } catch (err) {
      toast.error("Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const openEditModal = (product) => {
    const categoryId =
      product.category?._id?.toString() || product.category || "";
    setEditData({ ...product, category: categoryId });
    setPreviewImages(product.images || []);
    setSelectedFiles([]);
    setIsModalOpen(true);
  };

  const handleFilesChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
    setPreviewImages(files.map((file) => URL.createObjectURL(file)));
  };

  const handleUpdate = async () => {
    if (
      !editData.name?.trim() ||
      !editData.description?.trim() ||
      !editData.author?.trim()
    ) {
      toast.error("Name, Author and Description are required");
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("name", editData.name.trim());
      formData.append("description", editData.description.trim());
      formData.append("author", editData.author.trim());
      formData.append("category", editData.category);

      selectedFiles.forEach((file) => formData.append("images", file));

      await updateHomeApi(editData._id, formData);
      toast.success("Product updated successfully!");
      setIsModalOpen(false);
      fetchData();
    } catch (err) {
      toast.error("Update failed");
    } finally {
      setLoading(false);
    }
  };

  const columns = useMemo(
    () => [
      {
        header: "No.",
        id: "serial",
        cell: ({ row, table }) =>
          table.getState().pagination.pageIndex *
            table.getState().pagination.pageSize +
          row.index +
          1,
      },
      {
        accessorKey: "images",
        header: "Image",
        cell: ({ row }) => {
          const img = row.original.images?.[0];
          return img ? (
            <img
              src={img}
              alt="product"
              className="w-16 h-16 object-cover rounded-xl border shadow-sm"
            />
          ) : (
            <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center text-xs text-gray-400">
              No Img
            </div>
          );
        },
      },
      { accessorKey: "name", header: "Product Name" },
      { accessorKey: "author", header: "Author" },
      {
        accessorKey: "description",
        header: "Description",
        cell: ({ getValue }) => {
          const text =
            getValue()
              ?.replace(/<[^>]+>/g, " ")
              .replace(/\s+/g, " ")
              .trim() || "—";
          return (
            <div className="max-w-md line-clamp-2 text-sm text-gray-600">
              {text}
            </div>
          );
        },
      },
      {
        accessorKey: "category.name",
        header: "Category",
        cell: ({ row }) => row.original.category?.name || "—",
      },
      {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => (
          <div className="flex gap-2">
            <button
              onClick={() => openEditModal(row.original)}
              className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-2xl transition"
            >
              Edit
            </button>
            <button
              onClick={async () => {
                if (!window.confirm("Delete this product?")) return;
                try {
                  setLoading(true);
                  await deleteHomeApi(row.original._id);
                  toast.success("Product deleted");
                  fetchData();
                } catch {
                  toast.error("Delete failed");
                } finally {
                  setLoading(false);
                }
              }}
              className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-2xl transition"
            >
              Delete
            </button>
          </div>
        ),
      },
    ],
    [],
  );

  const table = useReactTable({
    data: products,
    columns,
    state: { globalFilter },
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
      <ToastContainer position="top-right" autoClose={3000} theme="light" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Product Management
          </h1>
          <p className="text-gray-600 mt-1">Manage all your products</p>
        </div>

        <input
          placeholder="Search products..."
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="max-w-sm h-12 px-5 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Table */}
      <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className="border-b bg-gray-50">
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="px-6 py-5 text-left font-semibold text-gray-700"
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center py-20 text-gray-500">
                    No products found
                  </td>
                </tr>
              ) : (
                table.getRowModel().rows.map((row) => (
                  <tr
                    key={row.id}
                    className="border-b hover:bg-gray-50 transition-all"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="px-6 py-5">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ==================== COMPACT EDIT MODAL ==================== */}
      {isModalOpen && editData && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl">
            {/* Header */}
            <div className="px-8 pt-6 pb-4 border-b flex justify-between items-center sticky top-0 bg-white rounded-t-3xl">
              <h2 className="text-2xl font-semibold">Edit Product</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-3xl text-gray-400 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <div className="p-8 space-y-6">
              {/* Name & Author */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Product Name
                  </label>
                  <input
                    value={editData.name || ""}
                    onChange={(e) =>
                      setEditData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    className="w-full h-11 px-5 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Author
                  </label>
                  <input
                    value={editData.author || ""}
                    onChange={(e) =>
                      setEditData((prev) => ({
                        ...prev,
                        author: e.target.value,
                      }))
                    }
                    className="w-full h-11 px-5 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  value={editData.category || ""}
                  onChange={(e) =>
                    setEditData((prev) => ({
                      ...prev,
                      category: e.target.value,
                    }))
                  }
                  className="w-full h-11 px-5 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                >
                  <option value="">-- Select Category --</option>
                  {categories.map((cat) => (
                    <option key={cat._id} value={cat._id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Description - Using DescriptionEditor */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>

                <div className="border sticky top-0 border-gray-300 rounded-xl overflow-hidden bg-white shadow-sm">
                  <DescriptionEditor
                    value={editData.description || ""}
                    onChange={(newValue) => {
                      setEditData((prev) => ({
                        ...prev,
                        description: newValue,
                      }));
                    }}
                  />
                </div>
              </div>

              {/* Images */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Replace Images (Optional)
                </label>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFilesChange}
                  className="w-full h-11 px-5 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                />

                {previewImages.length > 0 && (
                  <div className="grid grid-cols-4 gap-3 mt-4">
                    {previewImages.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`preview-${i}`}
                        className="w-full h-24 object-cover rounded-xl border"
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-4 pt-6 border-t">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-8 py-3 border border-gray-300 rounded-2xl hover:bg-gray-100 font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpdate}
                  disabled={loading}
                  className="px-10 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white rounded-2xl font-semibold disabled:opacity-70"
                >
                  {loading ? "Updating..." : "Update Product"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
