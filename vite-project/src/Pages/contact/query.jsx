// // import React, { useState, useEffect, useCallback, useMemo } from "react";
// // import DataTable from "react-data-table-component";
// // import { ToastContainer, toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// // import {
// //   FaEye,
// //   FaTrashAlt,
// //   FaSyncAlt,
// //   FaInbox,
// //   FaPhone,
// //   FaEnvelope,
// // } from "react-icons/fa";
// // import { IoMdClose } from "react-icons/io";

// // const API = "https://eduhawk-server-urpn.onrender.com/api/query/all";

// // const Query = () => {
// //   const [data, setData] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [filterText, setFilterText] = useState("");
// //   const [selectedRow, setSelectedRow] = useState(null);
// //   const [deletingId, setDeletingId] = useState(null);

// //   const fetchData = useCallback(async () => {
// //     setLoading(true);
// //     setError(null);
// //     try {
// //       const res = await fetch(API);
// //       if (!res.ok) throw new Error("Failed to fetch queries");
// //       const json = await res.json();
// //       setData(Array.isArray(json) ? json : json.data || []);
// //       toast.success("Data refreshed successfully!");
// //     } catch (err) {
// //       setError(err.message);
// //       toast.error("Failed to load data");
// //     } finally {
// //       setLoading(false);
// //     }
// //   }, []);

// //   useEffect(() => {
// //     fetchData();
// //   }, [fetchData]);

// //   const handleDelete = async (id) => {
// //     if (!window.confirm("Delete this query permanently?")) return;

// //     setDeletingId(id);
// //     try {
// //       const res = await fetch(`https://eduhawk-server-urpn.onrender.com/api/query/delete/${id}`, {
// //         method: "DELETE",
// //       });
// //       if (!res.ok) throw new Error("Delete failed");

// //       setData((prev) => prev.filter((item) => item._id !== id));
// //       toast.success("Query deleted successfully");
// //     } catch (err) {
// //       toast.error("Failed to delete");
// //     } finally {
// //       setDeletingId(null);
// //     }
// //   };

// //   const filteredData = useMemo(() => {
// //     return data.filter((row) => {
// //       const q = filterText.toLowerCase();
// //       return (
// //         !q ||
// //         (row.name || row.username || "").toLowerCase().includes(q) ||
// //         row.email?.toLowerCase().includes(q) ||
// //         row.phone?.toLowerCase().includes(q) ||
// //         (row.message || row.query || "").toLowerCase().includes(q) ||
// //         row.city?.toLowerCase().includes(q) ||
// //         row.country?.toLowerCase().includes(q) ||
// //         row.neetStatus?.toLowerCase().includes(q)
// //       );
// //     });
// //   }, [data, filterText]);

// //   const columns = [
// //     { name: "#", selector: (row, index) => index + 1, width: "60px" },
// //     {
// //       name: "Name",
// //       selector: (row) => row.name || row.username,
// //       sortable: true,
// //       grow: 2,
// //     },
// //     {
// //       name: "Contact",
// //       cell: (row) => (
// //         <div>
// //           <a
// //             href={`mailto:${row.email}`}
// //             className="text-blue-600 hover:underline"
// //           >
// //             {row.email}
// //           </a>
// //           {row.phone && (
// //             <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
// //               <FaPhone /> {row.phone}
// //             </p>
// //           )}
// //         </div>
// //       ),
// //       grow: 2,
// //     },
// //     {
// //       name: "City",
// //       selector: (row) => row.city,
// //       sortable: true,
// //       cell: (row) => (
// //         <span className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1 rounded-xl text-sm font-medium">
// //           {row.city || "N/A"}
// //         </span>
// //       ),
// //       width: "140px",
// //     },
// //     {
// //       name: "Country",
// //       selector: (row) => row.country,
// //       sortable: true,
// //       cell: (row) => (
// //         <span className="inline-block bg-slate-100 text-slate-700 px-4 py-1 rounded-xl text-sm font-medium">
// //           {row.country || "N/A"}
// //         </span>
// //       ),
// //       width: "140px",
// //     },
// //     {
// //       name: "Date",
// //       selector: (row) =>
// //         new Date(row.createdAt).toLocaleDateString("en-IN", {
// //           day: "2-digit",
// //           month: "short",
// //           year: "numeric",
// //         }),
// //       sortable: true,
// //       width: "150px",
// //     },
// //     {
// //       name: "NEET",
// //       selector: (row) => row.neetStatus,
// //       sortable: true,
// //       cell: (row) => (
// //         <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-xl text-sm font-medium">
// //           {row.neetStatus || "N/A"}
// //         </span>
// //       ),
// //       width: "140px",
// //     },
// //     {
// //       name: "Actions",
// //       cell: (row) => (
// //         <div className="flex gap-3">
// //           {/* View Button */}
// //           <button
// //             onClick={() => setSelectedRow(row)}
// //             className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-300 rounded-2xl transition-all text-gray-600"
// //             title="View Details"
// //           >
// //             <FaEye size={18} />
// //           </button>

// //           {/* Delete Button - Red by Default */}
// //           <button
// //             onClick={() => handleDelete(row._id)}
// //             disabled={deletingId === row._id}
// //             className="w-10 h-10 flex items-center justify-center bg-red-600 hover:bg-red-700 text-white border border-red-600 hover:border-red-700 rounded-2xl transition-all disabled:opacity-50"
// //             title="Delete Query"
// //           >
// //             <FaTrashAlt size={18} />
// //           </button>
// //         </div>
// //       ),
// //       width: "110px",
// //       center: true,
// //     },
// //   ];

// //   return (
// //     <div className="min-h-screen bg-gray-50 py-8 px-6">
// //       <div className="max-w-7xl mx-auto">
// //         {/* Toolbar */}
// //         <div className="bg-white rounded-2xl shadow-sm border p-5 mb-6 flex items-center justify-between">
// //           <div className="text-xl font-semibold text-gray-800">
// //             Query Messages
// //           </div>

// //           <div className="flex items-center gap-4">
// //             <div className="relative w-80">
// //               <input
// //                 type="text"
// //                 placeholder="Search by name, email, phone, city, NEET..."
// //                 value={filterText}
// //                 onChange={(e) => setFilterText(e.target.value)}
// //                 className="w-full pl-10 py-3 px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
// //               />
// //             </div>

// //             <button
// //               onClick={fetchData}
// //               disabled={loading}
// //               className="flex items-center gap-2 px-6 py-3 border border-gray-300 hover:bg-gray-50 rounded-xl transition-colors"
// //             >
// //               <FaSyncAlt className={loading ? "animate-spin" : ""} />
// //               Refresh
// //             </button>

// //             <div className="text-sm text-gray-500 font-medium pl-3 border-l border-gray-200">
// //               Total:{" "}
// //               <span className="text-gray-800 font-semibold">
// //                 {filteredData.length}
// //               </span>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Data Table */}
// //         <div className="bg-white rounded-3xl shadow-sm border overflow-hidden">
// //           {error ? (
// //             <div className="p-16 text-center text-red-500">
// //               {error}
// //               <button
// //                 onClick={fetchData}
// //                 className="mt-4 px-6 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700"
// //               >
// //                 Retry
// //               </button>
// //             </div>
// //           ) : (
// //             <DataTable
// //               columns={columns}
// //               data={filteredData}
// //               pagination
// //               paginationPerPage={10}
// //               paginationRowsPerPageOptions={[5, 10, 15, 20, 25, 50]}
// //               highlightOnHover
// //               pointerOnHover
// //               striped
// //               responsive
// //               progressPending={loading}
// //               noDataComponent={
// //                 <div className="text-center py-24">
// //                   <FaInbox className="mx-auto text-7xl text-gray-200 mb-4" />
// //                   <p className="text-gray-400 text-lg">No queries found</p>
// //                 </div>
// //               }
// //               customStyles={{
// //                 headRow: {
// //                   style: {
// //                     backgroundColor: "#f8fafc",
// //                     fontWeight: "600",
// //                     fontSize: "14px",
// //                   },
// //                 },
// //                 rows: {
// //                   style: { minHeight: "68px", fontSize: "14.5px" },
// //                   hoverStyle: { backgroundColor: "#f8fafc" },
// //                 },
// //               }}
// //             />
// //           )}
// //         </div>
// //       </div>

// //       <ToastContainer position="top-right" autoClose={2500} />

// //       {/* View Modal */}
// //       {selectedRow && (
// //         <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
// //           <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-auto">
// //             <div className="p-8">
// //               <div className="flex justify-between items-start mb-6">
// //                 <div>
// //                   <span className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-2xl text-sm font-medium">
// //                     Query
// //                   </span>
// //                   <h2 className="text-2xl font-bold mt-3">
// //                     {selectedRow.name || selectedRow.username}
// //                   </h2>
// //                 </div>
// //                 <button
// //                   onClick={() => setSelectedRow(null)}
// //                   className="text-3xl text-gray-400 hover:text-black"
// //                 >
// //                   <IoMdClose />
// //                 </button>
// //               </div>

// //               <div className="space-y-6 text-sm">
// //                 <div className="flex flex-wrap gap-6">
// //                   <div className="flex items-center gap-2">
// //                     <FaEnvelope /> {selectedRow.email}
// //                   </div>
// //                   {selectedRow.phone && (
// //                     <div className="flex items-center gap-2">
// //                       <FaPhone /> {selectedRow.phone}
// //                     </div>
// //                   )}
// //                   <div className="flex items-center gap-2">
// //                     <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-semibold">
// //                       Country: {selectedRow.country || "N/A"}
// //                     </span>
// //                   </div>
// //                   <div className="flex items-center gap-2">
// //                     <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold">
// //                       Interested: {selectedRow.interested || "N/A"}
// //                     </span>
// //                   </div>
// //                   <div className="flex items-center gap-2">
// //                     <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
// //                       NEET: {selectedRow.neetStatus || "N/A"}
// //                     </span>
// //                   </div>
// //                 </div>

// //                 <div>
// //                   <p className="uppercase text-xs text-gray-500 mb-2">
// //                     Message
// //                   </p>
// //                   <div className="bg-gray-50 p-6 rounded-2xl leading-relaxed">
// //                     {selectedRow.message ||
// //                       selectedRow.query ||
// //                       "No message provided."}
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="mt-8 pt-6 border-t text-xs text-gray-500 flex justify-between">
// //                 <p>
// //                   Received:{" "}
// //                   {new Date(selectedRow.createdAt).toLocaleString("en-IN")}
// //                 </p>
// //                 <p>ID: {selectedRow._id?.slice(-8)}</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Query;

// import React, { useState, useEffect, useCallback, useMemo } from "react";
// import DataTable from "react-data-table-component";
// import * as XLSX from "xlsx";
// import jsPDF from "jspdf";
// import "jspdf-autotable";

// import {
//   FaEye,
//   FaTrashAlt,
//   FaSyncAlt,
//   FaInbox,
//   FaPhone,
//   FaEnvelope,
//   FaFileExcel,
//   FaFilePdf,
// } from "react-icons/fa";
// import { IoMdClose } from "react-icons/io";
// import { ToastContainer } from "react-toastify";

// const API = "https://eduhawk-server-urpn.onrender.com/api/query/all";

// const Query = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [filterText, setFilterText] = useState("");
//   const [selectedRow, setSelectedRow] = useState(null);
//   const [deletingId, setDeletingId] = useState(null);

//   const [toast, setToast] = useState({
//     show: false,
//     message: "",
//     type: "success",
//   });

//   const showToast = (message, type = "success") => {
//     setToast({ show: true, message, type });
//     setTimeout(
//       () => setToast({ show: false, message: "", type: "success" }),
//       3000,
//     );
//   };

//   const fetchData = useCallback(async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const res = await fetch(API);
//       if (!res.ok) throw new Error("Failed to fetch queries");
//       const json = await res.json();
//       setData(Array.isArray(json) ? json : json.data || []);
//       showToast("Data refreshed successfully", "success");
//     } catch (err) {
//       setError(err.message);
//       showToast("Failed to load data", "error");
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);

//   // ================== DOWNLOAD FUNCTIONS ==================
//   const downloadExcel = () => {
//     if (data.length === 0) {
//       toast.error("No data to export");
//       return;
//     }

//     const exportData = data.map((item, index) => ({
//       "#": index + 1,
//       Name: item.name || item.username || "Anonymous",
//       Email: item.email,
//       Phone: item.phone || "-",
//       City: item.city || "-",
//       Country: item.country || "-",
//       NEET: item.neetStatus || "-",
//       Message: item.message || item.query || "No message",
//       Date: new Date(item.createdAt).toLocaleDateString("en-IN"),
//     }));

//     const worksheet = XLSX.utils.json_to_sheet(exportData);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Queries");

//     worksheet["!cols"] = [
//       { wch: 5 },
//       { wch: 25 },
//       { wch: 30 },
//       { wch: 15 },
//       { wch: 15 },
//       { wch: 15 },
//       { wch: 12 },
//       { wch: 50 },
//       { wch: 15 },
//     ];

//     XLSX.writeFile(
//       workbook,
//       `Query_Messages_${new Date().toISOString().slice(0, 10)}.xlsx`,
//     );
//     showToast("Excel file downloaded successfully", "success");
//   };

//   const downloadPDF = () => {
//     if (data.length === 0) {
//       toast.error("No data to export");
//       return;
//     }

//     const doc = new jsPDF("landscape");

//     doc.setFontSize(18);
//     doc.text("Query Messages", 14, 20);

//     doc.setFontSize(11);
//     doc.text(`Generated on: ${new Date().toLocaleDateString("en-IN")}`, 14, 30);

//     const tableColumn = [
//       "#",
//       "Name",
//       "Email",
//       "Phone",
//       "City",
//       "Country",
//       "NEET",
//       "Message",
//       "Date",
//     ];
//     const tableRows = data.map((item, index) => [
//       index + 1,
//       item.name || item.username || "Anonymous",
//       item.email,
//       item.phone || "-",
//       item.city || "-",
//       item.country || "-",
//       item.neetStatus || "-",
//       item.message?.length > 50
//         ? item.message.substring(0, 47) + "..."
//         : item.message || item.query || "No message",
//       new Date(item.createdAt).toLocaleDateString("en-IN"),
//     ]);

//     doc.autoTable({
//       head: [tableColumn],
//       body: tableRows,
//       startY: 40,
//       styles: { fontSize: 9, cellPadding: 4 },
//       headStyles: { fillColor: [59, 130, 246] },
//       alternateRowStyles: { fillColor: [248, 250, 252] },
//     });

//     doc.save(`Query_Messages_${new Date().toISOString().slice(0, 10)}.pdf`);
//     showToast("PDF file downloaded successfully", "success");
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Delete this query permanently?")) return;

//     setDeletingId(id);
//     try {
//       const res = await fetch(`https://eduhawk-server-urpn.onrender.com/api/query/delete/${id}`, {
//         method: "DELETE",
//       });
//       if (!res.ok) throw new Error("Delete failed");

//       setData((prev) => prev.filter((item) => item._id !== id));
//       showToast("Query deleted successfully", "success");
//     } catch (err) {
//       showToast("Failed to delete", "error");
//     } finally {
//       setDeletingId(null);
//     }
//   };

//   const filteredData = useMemo(() => {
//     return data.filter((row) => {
//       const q = filterText.toLowerCase();
//       return (
//         !q ||
//         (row.name || row.username || "").toLowerCase().includes(q) ||
//         row.email?.toLowerCase().includes(q) ||
//         row.phone?.toLowerCase().includes(q) ||
//         (row.message || row.query || "").toLowerCase().includes(q) ||
//         row.city?.toLowerCase().includes(q) ||
//         row.country?.toLowerCase().includes(q) ||
//         row.neetStatus?.toLowerCase().includes(q)
//       );
//     });
//   }, [data, filterText]);

//   const columns = [
//     { name: "#", selector: (row, index) => index + 1, width: "60px" },
//     {
//       name: "Name",
//       selector: (row) => row.name || row.username,
//       sortable: true,
//       grow: 2,
//     },
//     {
//       name: "Contact",
//       cell: (row) => (
//         <div>
//           <a
//             href={`mailto:${row.email}`}
//             className="text-blue-600 hover:underline font-medium"
//           >
//             {row.email}
//           </a>
//           {row.phone && (
//             <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
//               <FaPhone /> {row.phone}
//             </p>
//           )}
//         </div>
//       ),
//       grow: 2,
//     },
//     {
//       name: "City",
//       selector: (row) => row.city,
//       sortable: true,
//       cell: (row) => (
//         <span className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1 rounded-xl text-sm font-medium">
//           {row.city || "N/A"}
//         </span>
//       ),
//       width: "140px",
//     },
//     {
//       name: "Country",
//       selector: (row) => row.country,
//       sortable: true,
//       cell: (row) => (
//         <span className="inline-block bg-slate-100 text-slate-700 px-4 py-1 rounded-xl text-sm font-medium">
//           {row.country || "N/A"}
//         </span>
//       ),
//       width: "140px",
//     },
//     {
//       name: "Date",
//       selector: (row) =>
//         new Date(row.createdAt).toLocaleDateString("en-IN", {
//           day: "2-digit",
//           month: "short",
//           year: "numeric",
//         }),
//       sortable: true,
//       width: "150px",
//     },
//     {
//       name: "NEET",
//       selector: (row) => row.neetStatus,
//       sortable: true,
//       cell: (row) => (
//         <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-xl text-sm font-medium">
//           {row.neetStatus || "N/A"}
//         </span>
//       ),
//       width: "140px",
//     },
//     {
//       name: "Actions",
//       cell: (row) => (
//         <div className="flex gap-3">
//           <button
//             onClick={() => setSelectedRow(row)}
//             className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-300 rounded-2xl transition-all text-gray-600"
//             title="View Details"
//           >
//             <FaEye size={18} />
//           </button>

//           <button
//             onClick={() => handleDelete(row._id)}
//             disabled={deletingId === row._id}
//             className="w-10 h-10 flex items-center justify-center bg-red-600 hover:bg-red-700 text-white border border-red-600 hover:border-red-700 rounded-2xl transition-all disabled:opacity-50"
//             title="Delete Query"
//           >
//             <FaTrashAlt size={18} />
//           </button>
//         </div>
//       ),
//       width: "110px",
//       center: true,
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 py-8 px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Toolbar */}
//         <div className="bg-white rounded-2xl shadow-sm border p-5 mb-6 flex items-center justify-between">
//           <div className="text-xl font-semibold text-gray-800">
//             Query Messages
//           </div>

//           <div className="flex items-center gap-4">
//             <div className="relative w-80">
//               <input
//                 type="text"
//                 placeholder="Search by name, email, phone, city, NEET..."
//                 value={filterText}
//                 onChange={(e) => setFilterText(e.target.value)}
//                 className="w-full pl-10 py-3 px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               />
//             </div>

//             <button
//               onClick={fetchData}
//               className="flex items-center gap-2 px-6 py-3 border border-gray-300 hover:bg-gray-50 rounded-xl transition-colors"
//             >
//               <FaSyncAlt className={loading ? "animate-spin" : ""} />
//               Refresh
//             </button>

//             <button
//               onClick={downloadExcel}
//               disabled={data.length === 0}
//               className="flex items-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl transition-colors disabled:opacity-50"
//             >
//               <FaFileExcel /> Excel
//             </button>

//             <button
//               onClick={downloadPDF}
//               disabled={data.length === 0}
//               className="flex items-center gap-2 px-5 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-colors disabled:opacity-50"
//             >
//               <FaFilePdf /> PDF
//             </button>

//             <div className="text-sm text-gray-500 font-medium pl-3 border-l border-gray-200">
//               Total:{" "}
//               <span className="text-gray-800 font-semibold">
//                 {filteredData.length}
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Data Table */}
//         <div className="bg-white rounded-3xl shadow-sm border overflow-hidden">
//           {error ? (
//             <div className="p-20 text-center text-red-500">
//               {error}
//               <button
//                 onClick={fetchData}
//                 className="mt-6 px-8 py-3 bg-red-600 text-white rounded-2xl hover:bg-red-700 transition"
//               >
//                 Retry
//               </button>
//             </div>
//           ) : (
//             <DataTable
//               columns={columns}
//               data={filteredData}
//               pagination
//               paginationPerPage={10}
//               paginationRowsPerPageOptions={[10, 25, 50, 100]}
//               highlightOnHover
//               pointerOnHover
//               customStyles={customStyles}
//               progressPending={loading}
//               noDataComponent={
//                 <div className="py-20 text-center text-gray-400">
//                   <FaInbox className="mx-auto text-6xl mb-4 opacity-30" />
//                   No queries found
//                 </div>
//               }
//             />
//           )}
//         </div>
//       </div>

//       {/* Toast Notification */}
//       {toast.show && (
//         <div
//           className={`fixed bottom-6 right-6 flex items-center gap-3 px-6 py-4 rounded-2xl shadow-xl text-white z-50
//             ${toast.type === "success" ? "bg-green-600" : "bg-red-600"}`}
//         >
//           {toast.type === "success" ? (
//             <FaCheckCircle className="text-xl" />
//           ) : (
//             <FaExclamationCircle className="text-xl" />
//           )}
//           <span className="font-medium">{toast.message}</span>
//         </div>
//       )}

//       {/* View Modal - Enhanced */}
//       {selectedRow && (
//         <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-auto shadow-2xl">
//             <div className="p-8">
//               <div className="flex justify-between items-start mb-6">
//                 <div>
//                   <span className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-2xl text-sm font-medium">
//                     Query Details
//                   </span>
//                   <h2 className="text-3xl font-bold mt-3 text-gray-800">
//                     {selectedRow.name || selectedRow.username}
//                   </h2>
//                 </div>
//                 <button
//                   onClick={() => setSelectedRow(null)}
//                   className="text-4xl text-gray-300 hover:text-gray-600 transition"
//                 >
//                   <IoMdClose />
//                 </button>
//               </div>

//               <div className="space-y-7 text-sm">
//                 <div className="flex flex-wrap gap-x-8 gap-y-4">
//                   <div className="flex items-center gap-3">
//                     <FaEnvelope className="text-blue-600" />
//                     <a
//                       href={`mailto:${selectedRow.email}`}
//                       className="hover:underline"
//                     >
//                       {selectedRow.email}
//                     </a>
//                   </div>
//                   {selectedRow.phone && (
//                     <div className="flex items-center gap-3">
//                       <FaPhone className="text-emerald-600" />{" "}
//                       {selectedRow.phone}
//                     </div>
//                   )}
//                   <div className="bg-slate-100 text-slate-700 px-4 py-1 rounded-2xl text-sm">
//                     {selectedRow.country || "N/A"}
//                   </div>
//                   <div className="bg-amber-100 text-amber-700 px-4 py-1 rounded-2xl text-sm">
//                     {selectedRow.interested || "N/A"}
//                   </div>
//                   <div className="bg-green-100 text-green-700 px-4 py-1 rounded-2xl text-sm">
//                     NEET: {selectedRow.neetStatus || "N/A"}
//                   </div>
//                 </div>

//                 <div>
//                   <p className="uppercase text-xs tracking-widest text-gray-500 mb-3">
//                     MESSAGE
//                   </p>
//                   <div className="bg-gray-50 p-7 rounded-3xl leading-relaxed text-gray-700 border">
//                     {selectedRow.message ||
//                       selectedRow.query ||
//                       "No message provided."}
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-10 pt-6 border-t text-xs text-gray-500 flex justify-between items-center">
//                 <p>
//                   Received:{" "}
//                   {new Date(selectedRow.createdAt).toLocaleString("en-IN")}
//                 </p>
//                 <p className="font-mono">ID: {selectedRow._id?.slice(-8)}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//       <ToastContainer />
//     </div>
//   );
// };

// export default Query;
import React, { useState, useEffect, useCallback, useMemo } from "react";
import DataTable from "react-data-table-component";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";

import {
  FaEye,
  FaTrashAlt,
  FaSyncAlt,
  FaInbox,
  FaPhone,
  FaEnvelope,
  FaFileExcel,
  FaFilePdf,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const API = "https://eduhawk-server-urpn.onrender.com/api/query/all";

const Query = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterText, setFilterText] = useState("");
  const [selectedRow, setSelectedRow] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(
      () => setToast({ show: false, message: "", type: "success" }),
      3000,
    );
  };

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(API);
      if (!res.ok) throw new Error("Failed to fetch queries");
      const json = await res.json();
      setData(Array.isArray(json) ? json : json.data || []);
      showToast("Data refreshed successfully", "success");
    } catch (err) {
      setError(err.message);
      showToast("Failed to load data", "error");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // ================== DOWNLOAD FUNCTIONS ==================
  const downloadExcel = () => {
    if (data.length === 0) {
      showToast("No data to export", "error");
      return;
    }

    const exportData = data.map((item, index) => ({
      "#": index + 1,
      Name: item.name || item.username || "Anonymous",
      Email: item.email,
      Phone: item.phone || "-",
      City: item.city || "-",
      Country: item.country || "-",
      NEET: item.neetStatus || "-",
      Message: item.message || item.query || "No message",
      Date: new Date(item.createdAt).toLocaleDateString("en-IN"),
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Queries");

    worksheet["!cols"] = [
      { wch: 5 },
      { wch: 25 },
      { wch: 30 },
      { wch: 15 },
      { wch: 15 },
      { wch: 15 },
      { wch: 12 },
      { wch: 50 },
      { wch: 15 },
    ];

    XLSX.writeFile(
      workbook,
      `Query_Messages_${new Date().toISOString().slice(0, 10)}.xlsx`,
    );
    showToast("Excel file downloaded successfully", "success");
  };

  const downloadPDF = () => {
    if (data.length === 0) {
      showToast("No data to export", "error");
      return;
    }

    const doc = new jsPDF("landscape");
    doc.setFontSize(18);
    doc.text("Query Messages", 14, 20);
    doc.setFontSize(11);
    doc.text(`Generated on: ${new Date().toLocaleDateString("en-IN")}`, 14, 30);

    const tableColumn = [
      "#",
      "Name",
      "Email",
      "Phone",
      "City",
      "Country",
      "NEET",
      "Message",
      "Date",
    ];
    const tableRows = data.map((item, index) => [
      index + 1,
      item.name || item.username || "Anonymous",
      item.email,
      item.phone || "-",
      item.city || "-",
      item.country || "-",
      item.neetStatus || "-",
      item.message?.length > 50
        ? item.message.substring(0, 47) + "..."
        : item.message || item.query || "No message",
      new Date(item.createdAt).toLocaleDateString("en-IN"),
    ]);

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 40,
      styles: { fontSize: 9, cellPadding: 4 },
      headStyles: { fillColor: [59, 130, 246] },
      alternateRowStyles: { fillColor: [248, 250, 252] },
    });

    doc.save(`Query_Messages_${new Date().toISOString().slice(0, 10)}.pdf`);
    showToast("PDF file downloaded successfully", "success");
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this query permanently?")) return;

    setDeletingId(id);
    try {
      const res = await fetch(
        `https://eduhawk-server-urpn.onrender.com/api/query/delete/${id}`,
        {
          method: "DELETE",
        },
      );
      if (!res.ok) throw new Error("Delete failed");

      setData((prev) => prev.filter((item) => item._id !== id));
      showToast("Query deleted successfully", "success");
    } catch (err) {
      showToast("Failed to delete", "error");
    } finally {
      setDeletingId(null);
    }
  };

  const filteredData = useMemo(() => {
    return data.filter((row) => {
      const q = filterText.toLowerCase();
      return (
        !q ||
        (row.name || row.username || "").toLowerCase().includes(q) ||
        row.email?.toLowerCase().includes(q) ||
        row.phone?.toLowerCase().includes(q) ||
        (row.message || row.query || "").toLowerCase().includes(q) ||
        row.city?.toLowerCase().includes(q) ||
        row.country?.toLowerCase().includes(q) ||
        row.neetStatus?.toLowerCase().includes(q)
      );
    });
  }, [data, filterText]);

  const columns = [
    { name: "#", selector: (row, index) => index + 1, width: "60px" },
    {
      name: "Name",
      selector: (row) => row.name || row.username,
      sortable: true,
      grow: 2,
    },
    {
      name: "Contact",
      cell: (row) => (
        <div>
          <a
            href={`mailto:${row.email}`}
            className="text-blue-600 hover:underline font-medium"
          >
            {row.email}
          </a>
          {row.phone && (
            <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
              <FaPhone /> {row.phone}
            </p>
          )}
        </div>
      ),
      grow: 2,
    },
    {
      name: "City",
      selector: (row) => row.city,
      sortable: true,
      cell: (row) => (
        <span className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1 rounded-xl text-sm font-medium">
          {row.city || "N/A"}
        </span>
      ),
      width: "140px",
    },
    {
      name: "Country",
      selector: (row) => row.country,
      sortable: true,
      cell: (row) => (
        <span className="inline-block bg-slate-100 text-slate-700 px-4 py-1 rounded-xl text-sm font-medium">
          {row.country || "N/A"}
        </span>
      ),
      width: "140px",
    },
    {
      name: "Date",
      selector: (row) =>
        new Date(row.createdAt).toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
      sortable: true,
      width: "150px",
    },
    {
      name: "NEET",
      selector: (row) => row.neetStatus,
      sortable: true,
      cell: (row) => (
        <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-xl text-sm font-medium">
          {row.neetStatus || "N/A"}
        </span>
      ),
      width: "140px",
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex gap-3">
          <button
            onClick={() => setSelectedRow(row)}
            className="w-10 h-10 flex items-center justify-center bg-white border border-gray-300 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-300 rounded-2xl transition-all text-gray-600"
            title="View Details"
          >
            <FaEye size={18} />
          </button>

          <button
            onClick={() => handleDelete(row._id)}
            disabled={deletingId === row._id}
            className="w-10 h-10 flex items-center justify-center bg-red-600 hover:bg-red-700 text-white border border-red-600 hover:border-red-700 rounded-2xl transition-all disabled:opacity-50"
            title="Delete Query"
          >
            <FaTrashAlt size={18} />
          </button>
        </div>
      ),
      width: "110px",
      center: true,
    },
  ];

  const customStyles = {
    headRow: { style: { backgroundColor: "#f8fafc", fontWeight: "600" } },
    rows: { style: { minHeight: "70px" } },
    cells: { style: { paddingLeft: "16px", paddingRight: "16px" } },
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Toolbar */}
        <div className="bg-white rounded-2xl shadow-sm border p-5 mb-6 flex items-center justify-between">
          <div className="text-xl font-semibold text-gray-800">
            Query Messages
          </div>

          <div className="flex items-center gap-4">
            <div className="relative w-80">
              <input
                type="text"
                placeholder="Search by name, email, phone, city, NEET..."
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
                className="w-full pl-10 py-3 px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              onClick={downloadExcel}
              disabled={data.length === 0}
              className="flex items-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl transition-colors disabled:opacity-50"
            >
              <FaFileExcel /> Excel
            </button>

            <button
              onClick={downloadPDF}
              disabled={data.length === 0}
              className="flex items-center gap-2 px-5 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-colors disabled:opacity-50"
            >
              <FaFilePdf /> PDF
            </button>

            <div className="text-sm text-gray-500 font-medium pl-3 border-l border-gray-200">
              Total:{" "}
              <span className="text-gray-800 font-semibold">
                {filteredData.length}
              </span>
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-3xl shadow-sm border overflow-hidden">
          {error ? (
            <div className="p-20 text-center text-red-500">
              {error}
              <button
                onClick={fetchData}
                className="mt-6 px-8 py-3 bg-red-600 text-white rounded-2xl hover:bg-red-700 transition"
              >
                Retry
              </button>
            </div>
          ) : (
            <DataTable
              columns={columns}
              data={filteredData}
              pagination
              paginationPerPage={10}
              paginationRowsPerPageOptions={[10, 25, 50, 100]}
              highlightOnHover
              pointerOnHover
              customStyles={customStyles}
              progressPending={loading}
              noDataComponent={
                <div className="py-20 text-center text-gray-400">
                  <FaInbox className="mx-auto text-6xl mb-4 opacity-30" />
                  No queries found
                </div>
              }
            />
          )}
        </div>
      </div>

      {/* Custom Toast */}
      {toast.show && (
        <div
          className={`fixed bottom-6 right-6 flex items-center gap-3 px-6 py-4 rounded-2xl shadow-xl text-white z-50
            ${toast.type === "success" ? "bg-green-600" : "bg-red-600"}`}
        >
          {toast.type === "success" ? (
            <FaCheckCircle className="text-xl" />
          ) : (
            <FaExclamationCircle className="text-xl" />
          )}
          <span className="font-medium">{toast.message}</span>
        </div>
      )}

      {/* View Modal */}
      {selectedRow && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-auto shadow-2xl">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-2xl text-sm font-medium">
                    Query Details
                  </span>
                  <h2 className="text-3xl font-bold mt-3 text-gray-800">
                    {selectedRow.name || selectedRow.username}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedRow(null)}
                  className="text-4xl text-gray-300 hover:text-gray-600 transition"
                >
                  <IoMdClose />
                </button>
              </div>

              <div className="space-y-7 text-sm">
                <div className="flex flex-wrap gap-x-8 gap-y-4">
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-blue-600" />
                    <a
                      href={`mailto:${selectedRow.email}`}
                      className="hover:underline"
                    >
                      {selectedRow.email}
                    </a>
                  </div>
                  {selectedRow.phone && (
                    <div className="flex items-center gap-3">
                      <FaPhone className="text-emerald-600" />{" "}
                      {selectedRow.phone}
                    </div>
                  )}
                  <div className="bg-slate-100 text-slate-700 px-4 py-1 rounded-2xl text-sm">
                    {selectedRow.country || "N/A"}
                  </div>
                  <div className="bg-green-100 text-green-700 px-4 py-1 rounded-2xl text-sm">
                    NEET: {selectedRow.neetStatus || "N/A"}
                  </div>
                </div>

                <div>
                  <p className="uppercase text-xs tracking-widest text-gray-500 mb-3">
                    MESSAGE
                  </p>
                  <div className="bg-gray-50 p-7 rounded-3xl leading-relaxed text-gray-700 border">
                    {selectedRow.message ||
                      selectedRow.query ||
                      "No message provided."}
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t text-xs text-gray-500 flex justify-between items-center">
                <p>
                  Received:{" "}
                  {new Date(selectedRow.createdAt).toLocaleString("en-IN")}
                </p>
                <p className="font-mono">ID: {selectedRow._id?.slice(-8)}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Query;
