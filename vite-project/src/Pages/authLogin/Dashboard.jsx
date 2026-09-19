// import { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   Users,
//   MessageSquare,
//   AlertCircle,
//   Package,
//   Cpu,
//   ArrowUpRight,
//   TrendingUp,
// } from "lucide-react";

// // Recharts
// import {
//   LineChart,
//   Line,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
// } from "recharts";

// const Dashboard = () => {
//   const [dashboardData, setDashboardData] = useState({
//     totalUsers: 0,
//     totalQueries: 0,
//     totalContacts: 0,
//     totalTechProducts: 0,
//     totalTechCategories: 0,
//     loading: true,
//   });

//   const [recentQueries, setRecentQueries] = useState([]);
//   const [recentContacts, setRecentContacts] = useState([]);
//   const [chartData, setChartData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(6);

//   useEffect(() => {
//     const fetchAllData = async () => {
//       try {
//         const [usersRes, queriesRes, contactsRes, productsRes, categoriesRes] =
//           await Promise.all([
//             axios
//               .get("https://eduhawk-server-urpn.onrender.com/api/users")
//               .catch(() => ({ data: { data: [] } })),
//             axios
//               .get("https://eduhawk-server-urpn.onrender.com/api/query/all")
//               .catch(() => ({ data: { data: [] } })),
//             axios
//               .get("https://eduhawk-server-urpn.onrender.com/api/contact")
//               .catch(() => ({ data: { data: [] } })),
//             axios
//               .get("https://eduhawk-server-urpn.onrender.com/api/product")
//               .catch(() => ({ data: { data: [] } })),
//             axios
//               .get("https://eduhawk-server-urpn.onrender.com/api/blogcategory")
//               .catch(() => ({ data: { data: [] } })),
//           ]);

//         const users = usersRes.data?.data || [];
//         const queries = queriesRes.data?.data || [];
//         const contacts = contactsRes.data?.data || [];
//         const products = productsRes.data?.data || [];
//         const categories = categoriesRes.data?.data || [];

//         // Chart Data
//         const queryByDate = {},
//           contactByDate = {};
//         queries.forEach((q) => {
//           const date = new Date(q.createdAt).toLocaleDateString("en-US", {
//             month: "short",
//             day: "numeric",
//           });
//           queryByDate[date] = (queryByDate[date] || 0) + 1;
//         });
//         contacts.forEach((c) => {
//           const date = new Date(c.createdAt).toLocaleDateString("en-US", {
//             month: "short",
//             day: "numeric",
//           });
//           contactByDate[date] = (contactByDate[date] || 0) + 1;
//         });

//         const allDates = [
//           ...new Set([
//             ...Object.keys(queryByDate),
//             ...Object.keys(contactByDate),
//           ]),
//         ];
//         const processedData = allDates.map((date) => ({
//           date,
//           Queries: queryByDate[date] || 0,
//           Contacts: contactByDate[date] || 0,
//         }));

//         setChartData(processedData);

//         setDashboardData({
//           totalUsers: users.length,
//           totalQueries: queries.length,
//           totalContacts: contacts.length,
//           totalTechProducts: products.length,
//           totalTechCategories: categories.length,
//           loading: false,
//         });

//         const sortedQueries = queries
//           .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
//           .map((q, i) => ({
//             id: q._id || i,
//             user: q.name || "Anonymous",
//             action: q.interested || "Query",
//             message: q.message || q.query || "",
//             email: q.email,
//             phone: q.phone,
//             time: new Date(q.createdAt).toLocaleDateString("en-US", {
//               month: "short",
//               day: "numeric",
//             }),
//           }));

//         const sortedContacts = contacts
//           .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
//           .map((c, i) => ({
//             id: c._id || i,
//             user: c.username || c.name || "Anonymous",
//             action: c.subject || "Contact",
//             message: c.message || "",
//             email: c.email,
//             phone: c.phone,
//             time: new Date(c.createdAt).toLocaleDateString("en-US", {
//               month: "short",
//               day: "numeric",
//             }),
//           }));

//         setRecentQueries(sortedQueries);
//         setRecentContacts(sortedContacts);
//       } catch (err) {
//         console.error(err);
//         setDashboardData((prev) => ({ ...prev, loading: false }));
//       }
//     };

//     fetchAllData();
//   }, []);

//   const stats = [
//     {
//       title: "Total Users",
//       value: dashboardData.totalUsers,
//       icon: Users,
//       color: "bg-blue-600",
//       trend: "+18%",
//     },
//     {
//       title: "Total Queries",
//       value: dashboardData.totalQueries,
//       icon: MessageSquare,
//       color: "bg-emerald-600",
//       trend: "+24%",
//     },
//     {
//       title: "Contact Messages",
//       value: dashboardData.totalContacts,
//       icon: AlertCircle,
//       color: "bg-purple-600",
//       trend: "+11%",
//     },
//     {
//       title: "Blog",
//       value: dashboardData.totalTechProducts,
//       icon: Package,
//       color: "bg-orange-600",
//       trend: "+7%",
//     },
//     {
//       title: "Tech Categories",
//       value: dashboardData.totalTechCategories,
//       icon: Cpu,
//       color: "bg-rose-600",
//       trend: "+3%",
//     },
//   ];

//   const pieData = [
//     { name: "Queries", value: dashboardData.totalQueries, color: "#10b981" },
//     { name: "Contacts", value: dashboardData.totalContacts, color: "#a855f7" },
//   ];

//   const totalPages = Math.ceil(recentQueries.length / itemsPerPage);
//   const displayedQueries = recentQueries.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage,
//   );
//   const displayedContacts = recentContacts.slice(0, 6);

//   return (
//     <div className="min-h-screen bg-gray-50 p-6 space-y-8">
//       {/* Header */}
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//         <div>
//           <h1 className="text-4xl font-bold tracking-tight text-gray-900">
//             Dashboard
//           </h1>
//           <p className="text-gray-600 mt-1">
//             Good morning! Here's what's happening with your business.
//           </p>
//         </div>
//         <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-medium shadow-md transition">
//           <ArrowUpRight size={20} /> Export Report
//         </button>
//       </div>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
//         {stats.map((stat, i) => {
//           const Icon = stat.icon;
//           return (
//             <div
//               key={i}
//               className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
//             >
//               <div className="flex justify-between items-start">
//                 <div className={`p-4 rounded-2xl ${stat.color} text-white`}>
//                   <Icon size={28} />
//                 </div>
//                 <div className="flex items-center text-emerald-600 text-sm font-medium">
//                   {stat.trend} <TrendingUp size={16} className="ml-1" />
//                 </div>
//               </div>

//               <div className="mt-8">
//                 <p className="text-sm text-gray-600 font-medium">
//                   {stat.title}
//                 </p>
//                 <p className="text-4xl font-bold text-gray-900 mt-2 tracking-tighter">
//                   {dashboardData.loading ? "..." : stat.value.toLocaleString()}
//                 </p>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Charts Section */}
//       <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
//         {/* Line Chart */}
//         <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 xl:col-span-2">
//           <h3 className="text-xl font-semibold mb-6">Activity Timeline</h3>
//           <ResponsiveContainer width="100%" height={380}>
//             <LineChart data={chartData}>
//               <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
//               <XAxis dataKey="date" stroke="#64748b" fontSize={13} />
//               <YAxis stroke="#64748b" fontSize={13} />
//               <Tooltip
//                 contentStyle={{
//                   borderRadius: "12px",
//                   border: "none",
//                   boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
//                 }}
//               />
//               <Legend />
//               <Line
//                 type="monotone"
//                 dataKey="Queries"
//                 stroke="#10b981"
//                 strokeWidth={5}
//                 dot={{ r: 6 }}
//               />
//               <Line
//                 type="monotone"
//                 dataKey="Contacts"
//                 stroke="#a855f7"
//                 strokeWidth={5}
//                 dot={{ r: 6 }}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Pie Chart */}
//         <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 flex flex-col">
//           <h3 className="text-xl font-semibold mb-6">Distribution</h3>
//           <ResponsiveContainer width="100%" height={300}>
//             <PieChart>
//               <Pie
//                 data={pieData}
//                 cx="50%"
//                 cy="50%"
//                 innerRadius={85}
//                 outerRadius={130}
//                 dataKey="value"
//               >
//                 {pieData.map((entry, i) => (
//                   <Cell key={i} fill={entry.color} />
//                 ))}
//               </Pie>
//               <Tooltip />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Recent Activity */}
//       <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
//         <div className="flex justify-between items-center mb-6">
//           <h3 className="text-xl font-semibold">Recent Queries</h3>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead>
//               <tr className="border-b bg-gray-50">
//                 <th className="px-6 py-5 text-left font-medium text-gray-700">
//                   User
//                 </th>
//                 <th className="px-6 py-5 text-left font-medium text-gray-700">
//                   Phone
//                 </th>
//                 <th className="px-6 py-5 text-left font-medium text-gray-700">
//                   Message
//                 </th>
//                 <th className="px-6 py-5 text-left font-medium text-gray-700">
//                   Contact Info
//                 </th>
//                 <th className="px-6 py-5 text-left font-medium text-gray-700">
//                   Date
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {displayedQueries.map((item) => (
//                 <tr key={item.id} className="border-b hover:bg-gray-50">
//                   <td className="px-6 py-5 font-semibold">{item.user}</td>
//                   <td className="px-6 py-5">
//                     <span className="inline-block px-4 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
//                       {item.phone && <p>☎️ {item.phone}</p>}
//                     </span>
//                   </td>
//                   <td className="px-6 py-5 max-w-md text-gray-600 text-sm">
//                     {item.message ? item.message.slice(0, 85) + "..." : "—"}
//                   </td>
//                   <td className="px-6 py-5 text-sm text-gray-500">
//                     {item.email && <p>✉️ {item.email}</p>}
//                   </td>
//                   <td className="px-6 py-5 text-sm text-gray-500 whitespace-nowrap">
//                     {item.time}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* Pagination */}
//         {recentQueries.length > 0 && (
//           <div className="flex flex-col sm:flex-row items-center justify-between mt-8 gap-4">
//             <div className="flex items-center gap-3">
//               <span className="text-sm text-gray-600">Show</span>
//               <select
//                 value={itemsPerPage}
//                 onChange={(e) => setItemsPerPage(Number(e.target.value))}
//                 className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               >
//                 <option value="6">6</option>
//                 <option value="10">10</option>
//                 <option value="15">15</option>
//               </select>
//               <span className="text-sm text-gray-600">per page</span>
//             </div>

//             <div className="flex gap-3">
//               <button
//                 onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
//                 disabled={currentPage === 1}
//                 className="px-6 py-2 border border-gray-300 rounded-2xl hover:bg-gray-100 disabled:opacity-50"
//               >
//                 Previous
//               </button>
//               <button
//                 onClick={() =>
//                   setCurrentPage((p) => Math.min(totalPages, p + 1))
//                 }
//                 disabled={currentPage === totalPages}
//                 className="px-6 py-2 border border-gray-300 rounded-2xl hover:bg-gray-100 disabled:opacity-50"
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Recent Contacts */}
//       <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
//         <div className="flex justify-between items-center mb-6">
//           <h3 className="text-xl font-semibold">Recent Contacts</h3>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead>
//               <tr className="border-b bg-gray-50">
//                 <th className="px-6 py-5 text-left font-medium text-gray-700">
//                   User
//                 </th>
//                 <th className="px-6 py-5 text-left font-medium text-gray-700">
//                   Phone
//                 </th>
//                 <th className="px-6 py-5 text-left font-medium text-gray-700">
//                   Message
//                 </th>
//                 <th className="px-6 py-5 text-left font-medium text-gray-700">
//                   Contact Info
//                 </th>
//                 <th className="px-6 py-5 text-left font-medium text-gray-700">
//                   Date
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {displayedContacts.map((item) => (
//                 <tr key={item.id} className="border-b hover:bg-gray-50">
//                   <td className="px-6 py-5 font-semibold">{item.user}</td>
//                   <td className="px-6 py-5">
//                     <span className="inline-block px-4 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
//                       {item.phone && <p>☎️ {item.phone}</p>}
//                     </span>
//                   </td>
//                   <td className="px-6 py-5 max-w-md text-gray-600 text-sm">
//                     {item.message ? item.message.slice(0, 85) + "..." : "—"}
//                   </td>
//                   <td className="px-6 py-5 text-sm text-gray-500">
//                     {item.email && <p>✉️ {item.email}</p>}
//                   </td>
//                   <td className="px-6 py-5 text-sm text-gray-500 whitespace-nowrap">
//                     {item.time}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import { useEffect, useState } from "react";
import axios from "axios";
import {
  Users,
  MessageSquare,
  Mail,
  Package,
  Layers,
  ArrowUpRight,
  TrendingUp,
  TrendingDown,
  Activity,
  Eye,
  Clock,
  Download,
} from "lucide-react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    totalUsers: 0,
    totalQueries: 0,
    totalContacts: 0,
    totalTechProducts: 0,
    totalTechCategories: 0,
    loading: true,
  });

  const [recentQueries, setRecentQueries] = useState([]);
  const [recentContacts, setRecentContacts] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [usersRes, queriesRes, contactsRes, productsRes, categoriesRes] =
          await Promise.all([
            axios
              .get("https://eduhawk-server-urpn.onrender.com/api/users")
              .catch(() => ({ data: { data: [] } })),
            axios
              .get("https://eduhawk-server-urpn.onrender.com/api/query/all")
              .catch(() => ({ data: { data: [] } })),
            axios
              .get("https://eduhawk-server-urpn.onrender.com/api/contact")
              .catch(() => ({ data: { data: [] } })),
            axios
              .get("https://eduhawk-server-urpn.onrender.com/api/product")
              .catch(() => ({ data: { data: [] } })),
            axios
              .get("https://eduhawk-server-urpn.onrender.com/api/blogcategory")
              .catch(() => ({ data: { data: [] } })),
          ]);

        const users = usersRes.data?.data || [];
        const queries = queriesRes.data?.data || [];
        const contacts = contactsRes.data?.data || [];
        const products = productsRes.data?.data || [];
        const categories = categoriesRes.data?.data || [];

        // Chart Data
        const queryByDate = {};
        const contactByDate = {};

        queries.forEach((q) => {
          const date = new Date(q.createdAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          });
          queryByDate[date] = (queryByDate[date] || 0) + 1;
        });

        contacts.forEach((c) => {
          const date = new Date(c.createdAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          });
          contactByDate[date] = (contactByDate[date] || 0) + 1;
        });

        const allDates = [
          ...new Set([
            ...Object.keys(queryByDate),
            ...Object.keys(contactByDate),
          ]),
        ].sort((a, b) => new Date(a) - new Date(b));

        const processedData = allDates.map((date) => ({
          date,
          Queries: queryByDate[date] || 0,
          Contacts: contactByDate[date] || 0,
        }));

        setChartData(processedData);

        setDashboardData({
          totalUsers: users.length,
          totalQueries: queries.length,
          totalContacts: contacts.length,
          totalTechProducts: products.length,
          totalTechCategories: categories.length,
          loading: false,
        });

        const sortedQueries = queries
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .map((q, i) => ({
            id: q._id || i,
            user: q.name || "Anonymous",
            action: q.interested || "Query",
            message: q.message || q.query || "",
            email: q.email,
            phone: q.phone,
            time: new Date(q.createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            }),
          }));

        const sortedContacts = contacts
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .map((c, i) => ({
            id: c._id || i,
            user: c.username || c.name || "Anonymous",
            action: c.subject || "Contact",
            message: c.message || "",
            email: c.email,
            phone: c.phone,
            time: new Date(c.createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            }),
          }));

        setRecentQueries(sortedQueries);
        setRecentContacts(sortedContacts);
      } catch (err) {
        console.error(err);
        setDashboardData((prev) => ({ ...prev, loading: false }));
      }
    };

    fetchAllData();
  }, []);

  const stats = [
    {
      title: "Total Users",
      value: dashboardData.totalUsers,
      icon: Users,
      bg: "bg-blue-50",
      iconColor: "text-blue-600",
      trend: "+18%",
      trendUp: true,
    },
    {
      title: "Total Queries",
      value: dashboardData.totalQueries,
      icon: MessageSquare,
      bg: "bg-emerald-50",
      iconColor: "text-emerald-600",
      trend: "+24%",
      trendUp: true,
    },
    {
      title: "Contact Messages",
      value: dashboardData.totalContacts,
      icon: Mail,
      bg: "bg-purple-50",
      iconColor: "text-purple-600",
      trend: "+11%",
      trendUp: true,
    },
    {
      title: "Blog Posts",
      value: dashboardData.totalTechProducts,
      icon: Package,
      bg: "bg-orange-50",
      iconColor: "text-orange-600",
      trend: "+7%",
      trendUp: true,
    },
    {
      title: "Categories",
      value: dashboardData.totalTechCategories,
      icon: Layers,
      bg: "bg-rose-50",
      iconColor: "text-rose-600",
      trend: "+3%",
      trendUp: true,
    },
  ];

  const pieData = [
    {
      name: "Queries",
      value: dashboardData.totalQueries || 1,
      color: "#10b981",
    },
    {
      name: "Contacts",
      value: dashboardData.totalContacts || 1,
      color: "#8b5cf6",
    },
  ];

  const totalPages = Math.ceil(recentQueries.length / itemsPerPage) || 1;
  const displayedQueries = recentQueries.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );
  const displayedContacts = recentContacts.slice(0, 6);

  return (
    <div className="min-h-screen bg-[#f8fafc] p-4 sm:p-6 lg:p-8">
      {/* ==================== HEADER ==================== */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Good Morning, Admin
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Your performance summary this week
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
            <Download size={16} />
            Export
          </button>
        </div>
      </div>

      {/* ==================== STATS CARDS ==================== */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div className={`rounded-xl p-3 ${stat.bg}`}>
                  <Icon size={22} className={stat.iconColor} strokeWidth={2} />
                </div>

                <div
                  className={`flex items-center gap-1 text-xs font-medium ${
                    stat.trendUp ? "text-emerald-600" : "text-rose-600"
                  }`}
                >
                  {stat.trendUp ? (
                    <TrendingUp size={14} />
                  ) : (
                    <TrendingDown size={14} />
                  )}
                  {stat.trend}
                </div>
              </div>

              <div className="mt-5">
                <p className="text-sm font-medium text-slate-500">
                  {stat.title}
                </p>
                <p className="mt-1 text-3xl font-semibold tracking-tight text-slate-900">
                  {dashboardData.loading ? "—" : stat.value.toLocaleString()}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ==================== CHARTS SECTION ==================== */}
      <div className="mb-8 grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* Line / Area Chart */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm xl:col-span-2">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Performance Line Chart
              </h3>
              <p className="mt-0.5 text-sm text-slate-500">
                Queries & Contacts over time
              </p>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <span className="text-slate-600">Queries</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-violet-500" />
                <span className="text-slate-600">Contacts</span>
              </div>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={320}>
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorQueries" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorContacts" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#f1f5f9"
                vertical={false}
              />
              <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748b", fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748b", fontSize: 12 }}
              />
              <Tooltip
                contentStyle={{
                  borderRadius: "12px",
                  border: "none",
                  boxShadow: "0 10px 25px -5px rgb(0 0 0 / 0.1)",
                }}
              />
              <Area
                type="monotone"
                dataKey="Queries"
                stroke="#10b981"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorQueries)"
              />
              <Area
                type="monotone"
                dataKey="Contacts"
                stroke="#8b5cf6"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorContacts)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Status / Distribution Card */}
        <div className="flex flex-col gap-6">
          {/* Blue Status Card */}
          <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-6 text-white shadow-lg">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-blue-100">
                  Status Summary
                </p>
                <p className="mt-1 text-sm text-blue-200">Closed Value</p>
                <p className="mt-3 text-4xl font-bold tracking-tight">
                  {dashboardData.loading
                    ? "—"
                    : (
                        dashboardData.totalQueries + dashboardData.totalContacts
                      ).toLocaleString()}
                </p>
              </div>
              <div className="rounded-xl bg-white/20 p-2.5">
                <Activity size={22} />
              </div>
            </div>
            <div className="mt-6 h-12">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData.slice(-7)}>
                  <Area
                    type="monotone"
                    dataKey="Queries"
                    stroke="#fff"
                    strokeWidth={2}
                    fill="rgba(255,255,255,0.2)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Distribution Pie */}
          <div className="flex-1 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-base font-semibold text-slate-900">
              Distribution
            </h3>
            <ResponsiveContainer width="100%" height={180}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={80}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {pieData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-2 flex justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <span className="text-slate-600">Queries</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-violet-500" />
                <span className="text-slate-600">Contacts</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== RECENT QUERIES ==================== */}
      <div className="mb-8 rounded-2xl border border-slate-100 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Recent Queries
            </h3>
            <p className="text-sm text-slate-500">Latest customer inquiries</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/80">
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  User
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Phone
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Message
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Email
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {displayedQueries.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-12 text-center text-slate-400"
                  >
                    No queries found
                  </td>
                </tr>
              ) : (
                displayedQueries.map((item) => (
                  <tr key={item.id} className="transition hover:bg-slate-50/70">
                    <td className="px-6 py-4">
                      <div className="font-medium text-slate-900">
                        {item.user}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {item.phone ? (
                        <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                          {item.phone}
                        </span>
                      ) : (
                        <span className="text-slate-400">—</span>
                      )}
                    </td>
                    <td className="max-w-xs px-6 py-4 text-sm text-slate-600">
                      {item.message
                        ? item.message.slice(0, 70) +
                          (item.message.length > 70 ? "..." : "")
                        : "—"}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">
                      {item.email || "—"}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500 whitespace-nowrap">
                      {item.time}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {recentQueries.length > 0 && (
          <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-100 px-6 py-4 sm:flex-row">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span>Show</span>
              <select
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="6">6</option>
                <option value="10">10</option>
                <option value="15">15</option>
              </select>
              <span>per page</span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Previous
              </button>
              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
                className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ==================== RECENT CONTACTS ==================== */}
      <div className="rounded-2xl border border-slate-100 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Recent Contacts
            </h3>
            <p className="text-sm text-slate-500">
              Latest contact form submissions
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/80">
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  User
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Phone
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Message
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Email
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {displayedContacts.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-12 text-center text-slate-400"
                  >
                    No contacts found
                  </td>
                </tr>
              ) : (
                displayedContacts.map((item) => (
                  <tr key={item.id} className="transition hover:bg-slate-50/70">
                    <td className="px-6 py-4">
                      <div className="font-medium text-slate-900">
                        {item.user}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {item.phone ? (
                        <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                          {item.phone}
                        </span>
                      ) : (
                        <span className="text-slate-400">—</span>
                      )}
                    </td>
                    <td className="max-w-xs px-6 py-4 text-sm text-slate-600">
                      {item.message
                        ? item.message.slice(0, 70) +
                          (item.message.length > 70 ? "..." : "")
                        : "—"}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">
                      {item.email || "—"}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500 whitespace-nowrap">
                      {item.time}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
