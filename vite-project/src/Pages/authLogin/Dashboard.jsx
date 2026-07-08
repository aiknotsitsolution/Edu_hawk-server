import { useEffect, useState } from "react";
import axios from "axios";
import {
  Users,
  MessageSquare,
  AlertCircle,
  Package,
  Cpu,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";

// Recharts
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
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
        const queryByDate = {},
          contactByDate = {};
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
        ];
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
      color: "bg-blue-600",
      trend: "+18%",
    },
    {
      title: "Total Queries",
      value: dashboardData.totalQueries,
      icon: MessageSquare,
      color: "bg-emerald-600",
      trend: "+24%",
    },
    {
      title: "Contact Messages",
      value: dashboardData.totalContacts,
      icon: AlertCircle,
      color: "bg-purple-600",
      trend: "+11%",
    },
    {
      title: "Blog",
      value: dashboardData.totalTechProducts,
      icon: Package,
      color: "bg-orange-600",
      trend: "+7%",
    },
    {
      title: "Tech Categories",
      value: dashboardData.totalTechCategories,
      icon: Cpu,
      color: "bg-rose-600",
      trend: "+3%",
    },
  ];

  const pieData = [
    { name: "Queries", value: dashboardData.totalQueries, color: "#10b981" },
    { name: "Contacts", value: dashboardData.totalContacts, color: "#a855f7" },
  ];

  const totalPages = Math.ceil(recentQueries.length / itemsPerPage);
  const displayedQueries = recentQueries.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );
  const displayedContacts = recentContacts.slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50 p-6 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
          <p className="text-gray-600 mt-1">
            Good morning! Here's what's happening with your business.
          </p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-medium shadow-md transition">
          <ArrowUpRight size={20} /> Export Report
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex justify-between items-start">
                <div className={`p-4 rounded-2xl ${stat.color} text-white`}>
                  <Icon size={28} />
                </div>
                <div className="flex items-center text-emerald-600 text-sm font-medium">
                  {stat.trend} <TrendingUp size={16} className="ml-1" />
                </div>
              </div>

              <div className="mt-8">
                <p className="text-sm text-gray-600 font-medium">
                  {stat.title}
                </p>
                <p className="text-4xl font-bold text-gray-900 mt-2 tracking-tighter">
                  {dashboardData.loading ? "..." : stat.value.toLocaleString()}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Line Chart */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 xl:col-span-2">
          <h3 className="text-xl font-semibold mb-6">Activity Timeline</h3>
          <ResponsiveContainer width="100%" height={380}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="date" stroke="#64748b" fontSize={13} />
              <YAxis stroke="#64748b" fontSize={13} />
              <Tooltip
                contentStyle={{
                  borderRadius: "12px",
                  border: "none",
                  boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="Queries"
                stroke="#10b981"
                strokeWidth={5}
                dot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="Contacts"
                stroke="#a855f7"
                strokeWidth={5}
                dot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 flex flex-col">
          <h3 className="text-xl font-semibold mb-6">Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={85}
                outerRadius={130}
                dataKey="value"
              >
                {pieData.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Recent Queries</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="px-6 py-5 text-left font-medium text-gray-700">
                  User
                </th>
                <th className="px-6 py-5 text-left font-medium text-gray-700">
                  Phone
                </th>
                <th className="px-6 py-5 text-left font-medium text-gray-700">
                  Message
                </th>
                <th className="px-6 py-5 text-left font-medium text-gray-700">
                  Contact Info
                </th>
                <th className="px-6 py-5 text-left font-medium text-gray-700">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {displayedQueries.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-5 font-semibold">{item.user}</td>
                  <td className="px-6 py-5">
                    <span className="inline-block px-4 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {item.phone && <p>☎️ {item.phone}</p>}
                    </span>
                  </td>
                  <td className="px-6 py-5 max-w-md text-gray-600 text-sm">
                    {item.message ? item.message.slice(0, 85) + "..." : "—"}
                  </td>
                  <td className="px-6 py-5 text-sm text-gray-500">
                    {item.email && <p>✉️ {item.email}</p>}
                  </td>
                  <td className="px-6 py-5 text-sm text-gray-500 whitespace-nowrap">
                    {item.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {recentQueries.length > 0 && (
          <div className="flex flex-col sm:flex-row items-center justify-between mt-8 gap-4">
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600">Show</span>
              <select
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
                className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="6">6</option>
                <option value="10">10</option>
                <option value="15">15</option>
              </select>
              <span className="text-sm text-gray-600">per page</span>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-6 py-2 border border-gray-300 rounded-2xl hover:bg-gray-100 disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
                className="px-6 py-2 border border-gray-300 rounded-2xl hover:bg-gray-100 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Recent Contacts */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Recent Contacts</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="px-6 py-5 text-left font-medium text-gray-700">
                  User
                </th>
                <th className="px-6 py-5 text-left font-medium text-gray-700">
                  Phone
                </th>
                <th className="px-6 py-5 text-left font-medium text-gray-700">
                  Message
                </th>
                <th className="px-6 py-5 text-left font-medium text-gray-700">
                  Contact Info
                </th>
                <th className="px-6 py-5 text-left font-medium text-gray-700">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {displayedContacts.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-5 font-semibold">{item.user}</td>
                  <td className="px-6 py-5">
                    <span className="inline-block px-4 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {item.phone && <p>☎️ {item.phone}</p>}
                    </span>
                  </td>
                  <td className="px-6 py-5 max-w-md text-gray-600 text-sm">
                    {item.message ? item.message.slice(0, 85) + "..." : "—"}
                  </td>
                  <td className="px-6 py-5 text-sm text-gray-500">
                    {item.email && <p>✉️ {item.email}</p>}
                  </td>
                  <td className="px-6 py-5 text-sm text-gray-500 whitespace-nowrap">
                    {item.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
