import { useEffect, useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DescriptionEditor from "../Home/DescriptionEditor";
import { Image, Pencil, Search, Trash2, X } from "lucide-react";

import {
  getPaginatedProductsApi,
  deleteHomeApi,
  updateHomeApi,
} from "./product.api";

export default function ProductTable() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [globalFilter, setGlobalFilter] = useState("");
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
  const [pageCount, setPageCount] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  // Fetch Data
  const fetchData = async (
    pageIndex = pagination.pageIndex,
    search = globalFilter,
  ) => {
    try {
      setLoading(true);
      const [productsRes, categoriesRes] = await Promise.all([
        getPaginatedProductsApi({
          page: pageIndex + 1,
          limit: pagination.pageSize,
          search,
        }),
        categories.length
          ? Promise.resolve({ success: true, data: categories })
          : fetch(
              "https://eduhawk-server-urpn.onrender.com/api/blogcategory",
            ).then((r) => r.json()),
      ]);

      setProducts(productsRes.data?.data || []);
      setPageCount(productsRes.data?.pagination?.totalPages || 0);

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
    const timer = setTimeout(() => fetchData(), 250);
    return () => clearTimeout(timer);
  }, [pagination.pageIndex, pagination.pageSize, globalFilter]);

  useEffect(() => {
    setPagination((previous) =>
      previous.pageIndex === 0 ? previous : { ...previous, pageIndex: 0 },
    );
  }, [globalFilter]);

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
              aria-label={`Edit ${row.original.name}`}
              title="Edit product"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
            >
              <Pencil size={16} strokeWidth={2} />
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
              aria-label={`Delete ${row.original.name}`}
              title="Delete product"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
            >
              <Trash2 size={16} strokeWidth={2} />
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
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    pageCount,
    onPaginationChange: setPagination,
    state: { globalFilter, pagination },
  });

  return (
    <div className="min-h-full bg-slate-50/70 p-4 sm:p-6 lg:p-8">
      <ToastContainer position="top-right" autoClose={3000} theme="light" />

      {/* Header */}
      <div className="mb-6 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-indigo-600">
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            Content library
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Products
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Keep your published content organised and up to date.
          </p>
        </div>

        <label className="relative block w-full sm:max-w-xs">
          <Search
            size={17}
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            aria-label="Search products"
            placeholder="Search products..."
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 text-sm text-slate-700 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
          />
        </label>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 sm:px-5">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
            <Image size={17} className="text-indigo-500" />
            All products
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-500">
              {products.length}
            </span>
          </div>
          <span className="text-xs text-slate-400">Manage catalogue</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-212.5">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr
                  key={headerGroup.id}
                  className="border-b border-slate-100 bg-slate-50/80"
                >
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="px-5 py-3.5 text-left text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500"
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
              {loading ? (
                <tr>
                  <td colSpan={7} className="py-20 text-center text-slate-500">
                    <div className="flex items-center justify-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-indigo-200 border-t-indigo-600" />
                      Loading products...
                    </div>
                  </td>
                </tr>
              ) : table.getRowModel().rows.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center py-20 text-gray-500">
                    No products found
                  </td>
                </tr>
              ) : (
                table.getRowModel().rows.map((row) => (
                  <tr
                    key={row.id}
                    className="border-b border-slate-100 transition-colors last:border-0 hover:bg-indigo-50/30"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="px-5 py-4 text-sm text-slate-700"
                      >
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
        <div className="flex flex-col gap-3 border-t border-slate-100 px-4 py-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <span>
            Page {pagination.pageIndex + 1} of {pageCount || 1}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Previous
            </button>
            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* ==================== COMPACT EDIT MODAL ==================== */}
      {isModalOpen && editData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">
          <div className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/20 bg-white shadow-2xl">
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-100 bg-white px-6 py-5 sm:px-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-indigo-600">
                  Product details
                </p>
                <h2 className="mt-1 text-xl font-semibold text-slate-900">
                  Edit product
                </h2>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                aria-label="Close edit dialog"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-6 p-6 sm:p-8">
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
                  className="px-10 py-3 bg-linear-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white rounded-2xl font-semibold disabled:opacity-70"
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
