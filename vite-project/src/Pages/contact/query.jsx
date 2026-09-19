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
//   FaCheckCircle,
//   FaExclamationCircle,
// } from "react-icons/fa";
// import { IoMdClose } from "react-icons/io";

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
//       showToast("No data to export", "error");
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
//       showToast("No data to export", "error");
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

//   const customStyles = {
//     headRow: { style: { backgroundColor: "#f8fafc", fontWeight: "600" } },
//     rows: { style: { minHeight: "70px" } },
//     cells: { style: { paddingLeft: "16px", paddingRight: "16px" } },
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 px-6">
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

//       {/* Custom Toast */}
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

//       {/* View Modal */}
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
//     </div>
//   );
// };

// export default Query;

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { toast } from "react-toastify";
import DataTable from "react-data-table-component";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";
import {
  Eye,
  Trash2,
  RefreshCw,
  Inbox,
  Phone,
  Mail,
  FileSpreadsheet,
  FileText,
  Search,
  X,
  MapPin,
  GraduationCap,
} from "lucide-react";

const API = "https://eduhawk-server-urpn.onrender.com/api/query/all";

const Query = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterText, setFilterText] = useState("");
  const [selectedRow, setSelectedRow] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  const fetchData = useCallback(async (showToast = false) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(API);
      if (!res.ok) throw new Error("Failed to fetch queries");
      const json = await res.json();
      setData(Array.isArray(json) ? json : json.data || []);
    } catch (err) {
      const message = err.message || "Failed to load queries";
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // ================== DOWNLOAD ==================
  const downloadExcel = () => {
    if (data.length === 0) return;

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
      { wch: 22 },
      { wch: 28 },
      { wch: 14 },
      { wch: 14 },
      { wch: 14 },
      { wch: 12 },
      { wch: 45 },
      { wch: 14 },
    ];

    XLSX.writeFile(
      workbook,
      `Query_Messages_${new Date().toISOString().slice(0, 10)}.xlsx`,
    );
  };

  const downloadPDF = () => {
    if (data.length === 0) return;

    const doc = new jsPDF("landscape");
    doc.setFontSize(16);
    doc.text("Query Messages", 14, 18);
    doc.setFontSize(10);
    doc.text(`Generated on: ${new Date().toLocaleDateString("en-IN")}`, 14, 26);

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
      (item.message || item.query || "No message").length > 45
        ? (item.message || item.query).substring(0, 42) + "..."
        : item.message || item.query || "No message",
      new Date(item.createdAt).toLocaleDateString("en-IN"),
    ]);

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 32,
      styles: { fontSize: 8, cellPadding: 3 },
      headStyles: { fillColor: [79, 70, 229] },
      alternateRowStyles: { fillColor: [248, 250, 252] },
    });

    doc.save(`Query_Messages_${new Date().toISOString().slice(0, 10)}.pdf`);
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
      toast.success("Query deleted successfully");
    } catch (err) {
      toast.error(err.message || "Failed to delete");
    } finally {
      setDeletingId(null);
    }
  };

  const filteredData = useMemo(() => {
    const q = filterText.toLowerCase();
    if (!q) return data;
    return data.filter(
      (row) =>
        (row.name || row.username || "").toLowerCase().includes(q) ||
        row.email?.toLowerCase().includes(q) ||
        row.phone?.toLowerCase().includes(q) ||
        (row.message || row.query || "").toLowerCase().includes(q) ||
        row.city?.toLowerCase().includes(q) ||
        row.country?.toLowerCase().includes(q) ||
        row.neetStatus?.toLowerCase().includes(q),
    );
  }, [data, filterText]);

  const columns = [
    {
      name: "#",
      selector: (row, index) => index + 1,
      width: "60px",
      center: true,
    },
    {
      name: "Name",
      selector: (row) => row.name || row.username || "Anonymous",
      sortable: true,
      grow: 1.4,
      cell: (row) => (
        <span className="font-medium text-slate-800">
          {row.name || row.username || "Anonymous"}
        </span>
      ),
    },
    {
      name: "Contact",
      grow: 2,
      cell: (row) => (
        <div className="py-1">
          <a
            href={`mailto:${row.email}`}
            className="flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:underline"
          >
            <Mail size={13} />
            {row.email}
          </a>
          {row.phone && (
            <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
              <Phone size={12} />
              {row.phone}
            </p>
          )}
        </div>
      ),
    },
    {
      name: "City",
      selector: (row) => row.city,
      sortable: true,
      width: "120px",
      cell: (row) =>
        row.city ? (
          <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700">
            <MapPin size={11} />
            {row.city}
          </span>
        ) : (
          <span className="text-slate-400">—</span>
        ),
    },
    {
      name: "Country",
      selector: (row) => row.country,
      sortable: true,
      width: "120px",
      cell: (row) =>
        row.country ? (
          <span className="inline-flex rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
            {row.country}
          </span>
        ) : (
          <span className="text-slate-400">—</span>
        ),
    },
    {
      name: "NEET",
      selector: (row) => row.neetStatus,
      sortable: true,
      width: "110px",
      cell: (row) =>
        row.neetStatus ? (
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700">
            <GraduationCap size={11} />
            {row.neetStatus}
          </span>
        ) : (
          <span className="text-slate-400">—</span>
        ),
    },
    {
      name: "Date",
      selector: (row) => row.createdAt,
      sortable: true,
      width: "130px",
      cell: (row) => (
        <span className="text-sm text-slate-600">
          {new Date(row.createdAt).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </span>
      ),
    },
    {
      name: "Actions",
      width: "110px",
      center: true,
      cell: (row) => (
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSelectedRow(row)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
            title="View Details"
          >
            <Eye size={15} />
          </button>
          <button
            onClick={() => handleDelete(row._id)}
            disabled={deletingId === row._id}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-rose-200 hover:bg-rose-50 hover:text-rose-600 disabled:opacity-50"
            title="Delete"
          >
            <Trash2 size={15} />
          </button>
        </div>
      ),
    },
  ];

  const customStyles = {
    headRow: {
      style: {
        backgroundColor: "#f8fafc",
        borderBottom: "1px solid #e2e8f0",
        minHeight: "48px",
      },
    },
    headCells: {
      style: {
        fontSize: "11px",
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        color: "#64748b",
        paddingLeft: "16px",
        paddingRight: "16px",
      },
    },
    rows: {
      style: {
        minHeight: "64px",
        borderBottom: "1px solid #f1f5f9",
        "&:hover": {
          backgroundColor: "#f8fafc",
        },
      },
    },
    cells: {
      style: {
        paddingLeft: "16px",
        paddingRight: "16px",
        fontSize: "13px",
      },
    },
  };

  return (
    <div className="min-h-full bg-slate-50/70 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-indigo-600">
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              Inquiries
            </div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Query Messages
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Manage and respond to customer queries
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => fetchData(true)}
              className="inline-flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              <RefreshCw size={15} />
              Refresh
            </button>
            <button
              onClick={downloadExcel}
              disabled={data.length === 0}
              className="inline-flex h-10 items-center gap-2 rounded-xl bg-emerald-600 px-4 text-sm font-medium text-white transition hover:bg-emerald-700 disabled:opacity-50"
            >
              <FileSpreadsheet size={15} />
              Excel
            </button>
            <button
              onClick={downloadPDF}
              disabled={data.length === 0}
              className="inline-flex h-10 items-center gap-2 rounded-xl bg-rose-600 px-4 text-sm font-medium text-white transition hover:bg-rose-700 disabled:opacity-50"
            >
              <FileText size={15} />
              PDF
            </button>
          </div>
        </div>

        {/* Search + Count */}
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:max-w-sm">
            <Search
              size={16}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              placeholder="Search name, email, phone, city..."
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
            />
          </div>
          <p className="text-sm text-slate-500">
            Showing{" "}
            <span className="font-semibold text-slate-800">
              {filteredData.length}
            </span>{" "}
            of {data.length} queries
          </p>
        </div>

        {/* Table Card */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {error ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <p className="mb-4 text-sm text-rose-600">{error}</p>
              <button
                onClick={() => fetchData()}
                className="rounded-xl bg-rose-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-rose-700"
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
              customStyles={customStyles}
              progressPending={loading}
              progressComponent={
                <div className="flex items-center justify-center gap-2 py-16 text-slate-400">
                  <RefreshCw size={20} className="animate-spin" />
                  <span className="text-sm">Loading queries...</span>
                </div>
              }
              noDataComponent={
                <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                  <Inbox size={40} className="mb-3 opacity-40" />
                  <p className="text-sm font-medium">No queries found</p>
                </div>
              }
            />
          )}
        </div>
      </div>

      {/* ==================== VIEW MODAL ==================== */}
      {selectedRow && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">
          <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-white/10 bg-white shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 z-10 flex items-start justify-between border-b border-slate-100 bg-white px-6 py-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-indigo-600">
                  Query Details
                </p>
                <h2 className="mt-1 text-xl font-semibold text-slate-900">
                  {selectedRow.name || selectedRow.username || "Anonymous"}
                </h2>
              </div>
              <button
                onClick={() => setSelectedRow(null)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-6 p-6">
              {/* Contact Info */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="mb-1 text-xs font-medium uppercase tracking-wider text-slate-400">
                    Email
                  </p>
                  <a
                    href={`mailto:${selectedRow.email}`}
                    className="flex items-center gap-2 text-sm font-medium text-indigo-600 hover:underline"
                  >
                    <Mail size={14} />
                    {selectedRow.email}
                  </a>
                </div>

                {selectedRow.phone && (
                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="mb-1 text-xs font-medium uppercase tracking-wider text-slate-400">
                      Phone
                    </p>
                    <p className="flex items-center gap-2 text-sm font-medium text-slate-800">
                      <Phone size={14} />
                      {selectedRow.phone}
                    </p>
                  </div>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {selectedRow.city && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-medium text-indigo-700">
                    <MapPin size={12} />
                    {selectedRow.city}
                  </span>
                )}
                {selectedRow.country && (
                  <span className="inline-flex rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700">
                    {selectedRow.country}
                  </span>
                )}
                {selectedRow.neetStatus && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">
                    <GraduationCap size={12} />
                    NEET: {selectedRow.neetStatus}
                  </span>
                )}
              </div>

              {/* Message */}
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Message
                </p>
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-5 text-sm leading-relaxed text-slate-700">
                  {selectedRow.message ||
                    selectedRow.query ||
                    "No message provided."}
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-400">
                <span>
                  Received:{" "}
                  {new Date(selectedRow.createdAt).toLocaleString("en-IN")}
                </span>
                <span className="font-mono">
                  ID: {selectedRow._id?.slice(-8)}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Query;
