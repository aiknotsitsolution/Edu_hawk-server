import React, { useState, useEffect } from "react";
import axios from "axios";
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
  FaCheckCircle,
  FaExclamationCircle,
  FaFileExcel,
  FaFilePdf,
} from "react-icons/fa";

const Contact = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterText, setFilterText] = useState("");
  const [selectedContact, setSelectedContact] = useState(null);
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
      showToast("Contacts refreshed successfully", "success");
    } catch (err) {
      setError("Failed to load contact messages");
      showToast("Failed to load contacts", "error");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // Download Excel
  const downloadExcel = () => {
    if (data.length === 0) {
      showToast("No data to export", "error");
      return;
    }

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

    // Auto column width
    worksheet["!cols"] = [
      { wch: 5 },
      { wch: 25 },
      { wch: 30 },
      { wch: 15 },
      { wch: 60 },
      { wch: 15 },
    ];

    XLSX.writeFile(
      workbook,
      `Contact_Messages_${new Date().toISOString().slice(0, 10)}.xlsx`,
    );
    showToast("Excel file downloaded successfully", "success");
  };

  // Download PDF
  const downloadPDF = () => {
    if (data.length === 0) {
      showToast("No data to export", "error");
      return;
    }

    const doc = new jsPDF("landscape");

    doc.setFontSize(18);
    doc.text("Contact Messages", 14, 20);

    doc.setFontSize(11);
    doc.text(`Generated on: ${new Date().toLocaleDateString("en-IN")}`, 14, 30);

    const tableColumn = ["#", "Name", "Email", "Phone", "Message", "Date"];
    const tableRows = data.map((item, index) => [
      index + 1,
      item.username || "Anonymous",
      item.email,
      item.phone || "-",
      item.message?.length > 60
        ? item.message.substring(0, 57) + "..."
        : item.message || "No message",
      new Date(item.createdAt).toLocaleDateString("en-IN"),
    ]);

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 40,
      styles: { fontSize: 10, cellPadding: 5 },
      headStyles: { fillColor: [59, 130, 246] },
      alternateRowStyles: { fillColor: [248, 250, 252] },
    });

    doc.save(`Contact_Messages_${new Date().toISOString().slice(0, 10)}.pdf`);
    showToast("PDF file downloaded successfully", "success");
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
      showToast("Message deleted successfully", "success");
    } catch (err) {
      showToast("Failed to delete message", "error");
    } finally {
      setDeletingId(null);
    }
  };

  const columns = [
    { name: "#", selector: (row, index) => index + 1, width: "70px" },
    {
      name: "Name",
      selector: (row) => row.username || "Anonymous",
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
      cell: (row) => (
        <a
          href={`mailto:${row.email}`}
          className="text-blue-600 hover:underline"
        >
          {row.email}
        </a>
      ),
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
      sortable: true,
      cell: (row) =>
        row.phone ? (
          <span className="flex items-center gap-1.5">
            <FaPhone className="text-emerald-500" /> {row.phone}
          </span>
        ) : (
          "—"
        ),
    },
    {
      name: "Message",
      selector: (row) => row.message,
      wrap: true,
      minWidth: "280px",
      cell: (row) => (
        <p className="text-gray-600 line-clamp-2 text-sm">
          {row.message || "No message provided"}
        </p>
      ),
    },
    {
      name: "Date",
      selector: (row) => row.createdAt,
      sortable: true,
      cell: (row) => new Date(row.createdAt).toLocaleDateString("en-IN"),
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex gap-2">
          <button
            onClick={() => setSelectedContact(row)}
            className="px-4 py-2 bg-white border border-gray-300 hover:bg-gray-50 rounded-xl text-sm"
          >
            <FaEye />
          </button>
          <button
            onClick={() => handleDelete(row._id)}
            disabled={deletingId === row._id}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-sm disabled:opacity-50"
          >
            <FaTrashAlt />
          </button>
        </div>
      ),
      width: "120px",
      center: true,
    },
  ];

  const customStyles = {
    headRow: { style: { backgroundColor: "#f8fafc" } },
    headCells: {
      style: { fontSize: "14px", fontWeight: "600", color: "#64748b" },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50  px-6">
      <div className="max-w-7xl mx-auto">
        {/* Toolbar */}
        <div className="bg-white rounded-2xl shadow-sm border p-5 mb-6 flex items-center justify-between">
          <div className="text-xl font-semibold text-gray-800">
            Contact Messages
          </div>

          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative w-80">
              <input
                type="text"
                placeholder="Search by name, email, phone..."
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
                className="w-full pl-10 py-3 px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Download Buttons */}
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
              <span className="text-gray-800 font-semibold">{data.length}</span>
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
          {error ? (
            <div className="p-12 text-center text-red-500">
              {error}
              <button
                onClick={fetchContacts}
                className="mt-4 px-6 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700"
              >
                Retry
              </button>
            </div>
          ) : (
            <DataTable
              columns={columns}
              data={data.filter((item) =>
                [item.username, item.email, item.phone, item.message].some(
                  (field) =>
                    field?.toLowerCase().includes(filterText.toLowerCase()),
                ),
              )}
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
                  No contact messages found
                </div>
              }
            />
          )}
        </div>
      </div>

      {/* Toast Notification */}
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
      {selectedContact && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl max-w-lg w-full mx-4 overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-semibold">
                {selectedContact.username || "Anonymous"}
              </h2>
              <p className="text-gray-500 text-sm">Contact Message</p>

              <div className="mt-8 space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">EMAIL</p>
                    <a
                      href={`mailto:${selectedContact.email}`}
                      className="text-blue-600 hover:underline font-medium"
                    >
                      {selectedContact.email}
                    </a>
                  </div>
                  {selectedContact.phone && (
                    <div>
                      <p className="text-xs text-gray-500 mb-1">PHONE</p>
                      <a
                        href={`tel:${selectedContact.phone}`}
                        className="text-emerald-600 hover:underline font-medium"
                      >
                        {selectedContact.phone}
                      </a>
                    </div>
                  )}
                </div>

                <div>
                  <p className="text-xs text-gray-500 mb-2">MESSAGE</p>
                  <div className="bg-gray-50 p-6 rounded-2xl border text-gray-700 leading-relaxed min-h-[140px]">
                    {selectedContact.message || "No message provided."}
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t px-8 py-4 flex justify-between text-xs text-gray-500">
              <span>
                Received:{" "}
                {new Date(selectedContact.createdAt).toLocaleDateString(
                  "en-IN",
                )}
              </span>
              <span className="font-mono">
                ID: {selectedContact._id?.slice(-8)}
              </span>
            </div>

            <div className="px-8 py-5 border-t">
              <button
                onClick={() => setSelectedContact(null)}
                className="w-full py-3 bg-gray-100 hover:bg-gray-200 rounded-2xl font-medium transition"
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
