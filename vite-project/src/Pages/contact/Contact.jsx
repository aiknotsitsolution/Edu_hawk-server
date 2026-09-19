// import React, { useState, useEffect } from "react";
// import axios from "axios";
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
//   FaCheckCircle,
//   FaExclamationCircle,
//   FaFileExcel,
//   FaFilePdf,
// } from "react-icons/fa";

// const Contact = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [filterText, setFilterText] = useState("");
//   const [selectedContact, setSelectedContact] = useState(null);
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

//   const fetchContacts = async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       const res = await axios.get("https://eduhawk-server-urpn.onrender.com/api/contact");
//       const contacts = Array.isArray(res.data)
//         ? res.data
//         : res.data?.data || [];
//       setData(contacts);
//       showToast("Contacts refreshed successfully", "success");
//     } catch (err) {
//       setError("Failed to load contact messages");
//       showToast("Failed to load contacts", "error");
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchContacts();
//   }, []);

//   // Download Excel
//   const downloadExcel = () => {
//     if (data.length === 0) {
//       showToast("No data to export", "error");
//       return;
//     }

//     const exportData = data.map((item, index) => ({
//       "#": index + 1,
//       Name: item.username || "Anonymous",
//       Email: item.email,
//       Phone: item.phone || "-",
//       Message: item.message || "No message provided",
//       Date: new Date(item.createdAt).toLocaleDateString("en-IN"),
//     }));

//     const worksheet = XLSX.utils.json_to_sheet(exportData);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Contacts");

//     // Auto column width
//     worksheet["!cols"] = [
//       { wch: 5 },
//       { wch: 25 },
//       { wch: 30 },
//       { wch: 15 },
//       { wch: 60 },
//       { wch: 15 },
//     ];

//     XLSX.writeFile(
//       workbook,
//       `Contact_Messages_${new Date().toISOString().slice(0, 10)}.xlsx`,
//     );
//     showToast("Excel file downloaded successfully", "success");
//   };

//   // Download PDF
//   const downloadPDF = () => {
//     if (data.length === 0) {
//       showToast("No data to export", "error");
//       return;
//     }

//     const doc = new jsPDF("landscape");

//     doc.setFontSize(18);
//     doc.text("Contact Messages", 14, 20);

//     doc.setFontSize(11);
//     doc.text(`Generated on: ${new Date().toLocaleDateString("en-IN")}`, 14, 30);

//     const tableColumn = ["#", "Name", "Email", "Phone", "Message", "Date"];
//     const tableRows = data.map((item, index) => [
//       index + 1,
//       item.username || "Anonymous",
//       item.email,
//       item.phone || "-",
//       item.message?.length > 60
//         ? item.message.substring(0, 57) + "..."
//         : item.message || "No message",
//       new Date(item.createdAt).toLocaleDateString("en-IN"),
//     ]);

//     doc.autoTable({
//       head: [tableColumn],
//       body: tableRows,
//       startY: 40,
//       styles: { fontSize: 10, cellPadding: 5 },
//       headStyles: { fillColor: [59, 130, 246] },
//       alternateRowStyles: { fillColor: [248, 250, 252] },
//     });

//     doc.save(`Contact_Messages_${new Date().toISOString().slice(0, 10)}.pdf`);
//     showToast("PDF file downloaded successfully", "success");
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this message?"))
//       return;

//     setDeletingId(id);
//     try {
//       await axios.delete(`https://eduhawk-server-urpn.onrender.com/api/contact/${id}`);
//       setData((prev) => prev.filter((item) => item._id !== id));
//       showToast("Message deleted successfully", "success");
//     } catch (err) {
//       showToast("Failed to delete message", "error");
//     } finally {
//       setDeletingId(null);
//     }
//   };

//   const columns = [
//     { name: "#", selector: (row, index) => index + 1, width: "70px" },
//     {
//       name: "Name",
//       selector: (row) => row.username || "Anonymous",
//       sortable: true,
//     },
//     {
//       name: "Email",
//       selector: (row) => row.email,
//       sortable: true,
//       cell: (row) => (
//         <a
//           href={`mailto:${row.email}`}
//           className="text-blue-600 hover:underline"
//         >
//           {row.email}
//         </a>
//       ),
//     },
//     {
//       name: "Phone",
//       selector: (row) => row.phone,
//       sortable: true,
//       cell: (row) =>
//         row.phone ? (
//           <span className="flex items-center gap-1.5">
//             <FaPhone className="text-emerald-500" /> {row.phone}
//           </span>
//         ) : (
//           "—"
//         ),
//     },
//     {
//       name: "Message",
//       selector: (row) => row.message,
//       wrap: true,
//       minWidth: "280px",
//       cell: (row) => (
//         <p className="text-gray-600 line-clamp-2 text-sm">
//           {row.message || "No message provided"}
//         </p>
//       ),
//     },
//     {
//       name: "Date",
//       selector: (row) => row.createdAt,
//       sortable: true,
//       cell: (row) => new Date(row.createdAt).toLocaleDateString("en-IN"),
//     },
//     {
//       name: "Actions",
//       cell: (row) => (
//         <div className="flex gap-2">
//           <button
//             onClick={() => setSelectedContact(row)}
//             className="px-4 py-2 bg-white border border-gray-300 hover:bg-gray-50 rounded-xl text-sm"
//           >
//             <FaEye />
//           </button>
//           <button
//             onClick={() => handleDelete(row._id)}
//             disabled={deletingId === row._id}
//             className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-sm disabled:opacity-50"
//           >
//             <FaTrashAlt />
//           </button>
//         </div>
//       ),
//       width: "120px",
//       center: true,
//     },
//   ];

//   const customStyles = {
//     headRow: { style: { backgroundColor: "#f8fafc" } },
//     headCells: {
//       style: { fontSize: "14px", fontWeight: "600", color: "#64748b" },
//     },
//   };

//   return (
//     <div className="min-h-screen bg-gray-50  px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Toolbar */}
//         <div className="bg-white rounded-2xl shadow-sm border p-5 mb-6 flex items-center justify-between">
//           <div className="text-xl font-semibold text-gray-800">
//             Contact Messages
//           </div>

//           <div className="flex items-center gap-4">
//             {/* Search */}
//             <div className="relative w-80">
//               <input
//                 type="text"
//                 placeholder="Search by name, email, phone..."
//                 value={filterText}
//                 onChange={(e) => setFilterText(e.target.value)}
//                 className="w-full pl-10 py-3 px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               />
//             </div>

//             {/* Download Buttons */}
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
//               <span className="text-gray-800 font-semibold">{data.length}</span>
//             </div>
//           </div>
//         </div>

//         {/* Data Table */}
//         <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
//           {error ? (
//             <div className="p-12 text-center text-red-500">
//               {error}
//               <button
//                 onClick={fetchContacts}
//                 className="mt-4 px-6 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700"
//               >
//                 Retry
//               </button>
//             </div>
//           ) : (
//             <DataTable
//               columns={columns}
//               data={data.filter((item) =>
//                 [item.username, item.email, item.phone, item.message].some(
//                   (field) =>
//                     field?.toLowerCase().includes(filterText.toLowerCase()),
//                 ),
//               )}
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
//                   No contact messages found
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
//           ${toast.type === "success" ? "bg-green-600" : "bg-red-600"}`}
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
//       {selectedContact && (
//         <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
//           <div className="bg-white rounded-3xl max-w-lg w-full mx-4 overflow-hidden">
//             <div className="p-8">
//               <h2 className="text-2xl font-semibold">
//                 {selectedContact.username || "Anonymous"}
//               </h2>
//               <p className="text-gray-500 text-sm">Contact Message</p>

//               <div className="mt-8 space-y-6">
//                 <div className="grid grid-cols-2 gap-6">
//                   <div>
//                     <p className="text-xs text-gray-500 mb-1">EMAIL</p>
//                     <a
//                       href={`mailto:${selectedContact.email}`}
//                       className="text-blue-600 hover:underline font-medium"
//                     >
//                       {selectedContact.email}
//                     </a>
//                   </div>
//                   {selectedContact.phone && (
//                     <div>
//                       <p className="text-xs text-gray-500 mb-1">PHONE</p>
//                       <a
//                         href={`tel:${selectedContact.phone}`}
//                         className="text-emerald-600 hover:underline font-medium"
//                       >
//                         {selectedContact.phone}
//                       </a>
//                     </div>
//                   )}
//                 </div>

//                 <div>
//                   <p className="text-xs text-gray-500 mb-2">MESSAGE</p>
//                   <div className="bg-gray-50 p-6 rounded-2xl border text-gray-700 leading-relaxed min-h-[140px]">
//                     {selectedContact.message || "No message provided."}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="border-t px-8 py-4 flex justify-between text-xs text-gray-500">
//               <span>
//                 Received:{" "}
//                 {new Date(selectedContact.createdAt).toLocaleDateString(
//                   "en-IN",
//                 )}
//               </span>
//               <span className="font-mono">
//                 ID: {selectedContact._id?.slice(-8)}
//               </span>
//             </div>

//             <div className="px-8 py-5 border-t">
//               <button
//                 onClick={() => setSelectedContact(null)}
//                 className="w-full py-3 bg-gray-100 hover:bg-gray-200 rounded-2xl font-medium transition"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Contact;

import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
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
} from "lucide-react";

const Contact = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterText, setFilterText] = useState("");
  const [selectedContact, setSelectedContact] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await axios.get(
        "https://eduhawk-server-urpn.onrender.com/api/contact",
      );
      const contacts = Array.isArray(res.data)
        ? res.data
        : res.data?.data || [];
      setData(contacts);
    } catch (err) {
      const message =
        err.response?.data?.message || "Failed to load contact messages";
      setError(message);
      toast.error(message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // ================== DOWNLOAD ==================
  const downloadExcel = () => {
    if (data.length === 0) return;

    const exportData = data.map((item, index) => ({
      "#": index + 1,
      Name: item.username || "Anonymous",
      Email: item.email,
      Phone: item.phone || "-",
      Message: item.message || "No message provided",
      Date: new Date(item.createdAt).toLocaleDateString("en-IN"),
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Contacts");

    worksheet["!cols"] = [
      { wch: 5 },
      { wch: 22 },
      { wch: 28 },
      { wch: 14 },
      { wch: 50 },
      { wch: 14 },
    ];

    XLSX.writeFile(
      workbook,
      `Contact_Messages_${new Date().toISOString().slice(0, 10)}.xlsx`,
    );
  };

  const downloadPDF = () => {
    if (data.length === 0) return;

    const doc = new jsPDF("landscape");
    doc.setFontSize(16);
    doc.text("Contact Messages", 14, 18);
    doc.setFontSize(10);
    doc.text(`Generated on: ${new Date().toLocaleDateString("en-IN")}`, 14, 26);

    const tableColumn = ["#", "Name", "Email", "Phone", "Message", "Date"];
    const tableRows = data.map((item, index) => [
      index + 1,
      item.username || "Anonymous",
      item.email,
      item.phone || "-",
      item.message?.length > 55
        ? item.message.substring(0, 52) + "..."
        : item.message || "No message",
      new Date(item.createdAt).toLocaleDateString("en-IN"),
    ]);

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 32,
      styles: { fontSize: 9, cellPadding: 4 },
      headStyles: { fillColor: [79, 70, 229] },
      alternateRowStyles: { fillColor: [248, 250, 252] },
    });

    doc.save(`Contact_Messages_${new Date().toISOString().slice(0, 10)}.pdf`);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?"))
      return;

    setDeletingId(id);
    try {
      await axios.delete(
        `https://eduhawk-server-urpn.onrender.com/api/contact/${id}`,
      );
      setData((prev) => prev.filter((item) => item._id !== id));
      toast.success("Message deleted successfully");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to delete message");
    } finally {
      setDeletingId(null);
    }
  };

  const filteredData = useMemo(() => {
    const q = filterText.toLowerCase();
    if (!q) return data;
    return data.filter((item) =>
      [item.username, item.email, item.phone, item.message].some((field) =>
        field?.toLowerCase().includes(q),
      ),
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
      selector: (row) => row.username || "Anonymous",
      sortable: true,
      grow: 1.3,
      cell: (row) => (
        <span className="font-medium text-slate-800">
          {row.username || "Anonymous"}
        </span>
      ),
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
      grow: 1.8,
      cell: (row) => (
        <a
          href={`mailto:${row.email}`}
          className="flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:underline"
        >
          <Mail size={13} />
          {row.email}
        </a>
      ),
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
      sortable: true,
      width: "140px",
      cell: (row) =>
        row.phone ? (
          <span className="flex items-center gap-1.5 text-sm text-slate-700">
            <Phone size={13} className="text-emerald-500" />
            {row.phone}
          </span>
        ) : (
          <span className="text-slate-400">—</span>
        ),
    },
    {
      name: "Message",
      selector: (row) => row.message,
      grow: 2,
      cell: (row) => (
        <p className="line-clamp-2 text-sm text-slate-600">
          {row.message || "No message provided"}
        </p>
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
            onClick={() => setSelectedContact(row)}
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
              Contact Messages
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              View and manage contact form submissions
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={fetchContacts}
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
              placeholder="Search by name, email, phone..."
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
            of {data.length} messages
          </p>
        </div>

        {/* Table Card */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {error ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <p className="mb-4 text-sm text-rose-600">{error}</p>
              <button
                onClick={fetchContacts}
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
                  <span className="text-sm">Loading contacts...</span>
                </div>
              }
              noDataComponent={
                <div className="flex flex-col items-center justify-center py-20 text-slate-400">
                  <Inbox size={40} className="mb-3 opacity-40" />
                  <p className="text-sm font-medium">
                    No contact messages found
                  </p>
                </div>
              }
            />
          )}
        </div>
      </div>

      {/* ==================== VIEW MODAL ==================== */}
      {selectedContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">
          <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-white/10 bg-white shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 z-10 flex items-start justify-between border-b border-slate-100 bg-white px-6 py-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-indigo-600">
                  Contact Details
                </p>
                <h2 className="mt-1 text-xl font-semibold text-slate-900">
                  {selectedContact.username || "Anonymous"}
                </h2>
              </div>
              <button
                onClick={() => setSelectedContact(null)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="space-y-6 p-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="mb-1 text-xs font-medium uppercase tracking-wider text-slate-400">
                    Email
                  </p>
                  <a
                    href={`mailto:${selectedContact.email}`}
                    className="flex items-center gap-2 text-sm font-medium text-indigo-600 hover:underline"
                  >
                    <Mail size={14} />
                    {selectedContact.email}
                  </a>
                </div>

                {selectedContact.phone && (
                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="mb-1 text-xs font-medium uppercase tracking-wider text-slate-400">
                      Phone
                    </p>
                    <a
                      href={`tel:${selectedContact.phone}`}
                      className="flex items-center gap-2 text-sm font-medium text-slate-800 hover:text-emerald-600"
                    >
                      <Phone size={14} />
                      {selectedContact.phone}
                    </a>
                  </div>
                )}
              </div>

              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Message
                </p>
                <div className="min-h-[120px] rounded-xl border border-slate-100 bg-slate-50 p-5 text-sm leading-relaxed text-slate-700">
                  {selectedContact.message || "No message provided."}
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-400">
                <span>
                  Received:{" "}
                  {new Date(selectedContact.createdAt).toLocaleString("en-IN")}
                </span>
                <span className="font-mono">
                  ID: {selectedContact._id?.slice(-8)}
                </span>
              </div>
            </div>

            <div className="border-t border-slate-100 px-6 py-4">
              <button
                onClick={() => setSelectedContact(null)}
                className="w-full rounded-xl bg-slate-100 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
