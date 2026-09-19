// // import { NavLink, useNavigate } from "react-router-dom";
// // import {
// //   LayoutDashboard,
// //   BarChart3,
// //   ChevronDown,
// //   ChevronRight,
// //   Contact2,
// //   TextSearch,
// //   LogOut,
// //   Menu,
// //   X,
// //   GalleryHorizontal,
// // } from "lucide-react";
// // import { useState } from "react";
// // import { useDispatch } from "react-redux";
// // import { logoutUser } from "../Pages/auth/authSlice";
// // import clsx from "clsx";

// // // ────────────────────────────────────────────────
// // const navItems = [
// //   { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },

// //   {
// //     label: "Blog",
// //     icon: BarChart3,
// //     children: [
// //       { path: "/homepage", label: "Blog create", icon: LayoutDashboard },
// //       { path: "/blogcategory", label: "Blog Category", icon: BarChart3 },
// //       { path: "/getpost", label: "Show CaseStudies", icon: LayoutDashboard },
// //     ],
// //   },

// //   { path: "/contact", label: "Contact", icon: Contact2 },
// //   { path: "/query", label: "Query", icon: Contact2 },
// // ];

// // export default function Sidebar() {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [techOpen, setTechOpen] = useState(true);
// //   const [newsOpen, setNewsOpen] = useState(true);

// //   const navigate = useNavigate();
// //   const dispatch = useDispatch();

// //   const toggleSidebar = () => setIsOpen((p) => !p);
// //   const closeSidebar = () => setIsOpen(false);

// //   const handleLogout = () => {
// //     dispatch(logoutUser());
// //     navigate("/", { replace: true }); // Redirect to home page
// //     closeSidebar();
// //   };

// //   return (
// //     <>
// //       {/* Mobile toggle button */}
// //       <button
// //         type="button"
// //         aria-label="Toggle sidebar"
// //         className="fixed top-4 left-4 z-50 lg:hidden p-2.5 rounded-lg bg-gray-800/90 backdrop-blur-sm text-white shadow-md hover:bg-gray-700 transition-colors"
// //         onClick={toggleSidebar}
// //       >
// //         {isOpen ? <X size={24} /> : <Menu size={24} />}
// //       </button>

// //       {isOpen && (
// //         <div
// //           className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden"
// //           onClick={closeSidebar}
// //           aria-hidden="true"
// //         />
// //       )}

// //       {/* Sidebar */}
// //       <aside
// //         className={clsx(
// //           "fixed inset-y-0 left-0 z-40 w-72 bg-linear-to-b from-gray-950 to-gray-900 text-gray-100",
// //           "transform transition-transform duration-300 ease-in-out",
// //           "lg:translate-x-0 lg:relative lg:block",
// //           isOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full",
// //         )}
// //       >
// //         <div className="flex flex-col h-full">
// //           {/* Logo / Header */}
// //           <div className="p-6 border-b border-gray-800/60">
// //             <h1 className="text-2xl font-bold tracking-tight">
// //               Edu-Hawk<span className="text-blue-500 ml-1.5">Admin</span>
// //             </h1>
// //             <p className="text-xs text-gray-500 mt-1">Management Panel</p>
// //           </div>

// //           {/* Navigation Links */}
// //           <nav className="flex-1 px-3 py-5 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
// //             <div className="space-y-1.5">
// //               {navItems.map((item, index) => {
// //                 if (item.children) {
// //                   const isTech = item.label === "Technology";
// //                   const isOpen = isTech ? techOpen : newsOpen;
// //                   const toggle = isTech
// //                     ? () => setTechOpen((p) => !p)
// //                     : () => setNewsOpen((p) => !p);

// //                   return (
// //                     <div key={index}>
// //                       <button
// //                         type="button"
// //                         onClick={toggle}
// //                         className={clsx(
// //                           "group flex w-full items-center justify-between gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
// //                           "text-gray-300 hover:bg-gray-800/60 hover:text-gray-100",
// //                         )}
// //                       >
// //                         <div className="flex items-center gap-3">
// //                           <item.icon
// //                             size={20}
// //                             strokeWidth={2.1}
// //                             className="shrink-0"
// //                           />
// //                           <span>{item.label}</span>
// //                         </div>
// //                         {isOpen ? (
// //                           <ChevronDown
// //                             size={18}
// //                             className="transition-transform duration-200"
// //                           />
// //                         ) : (
// //                           <ChevronRight
// //                             size={18}
// //                             className="transition-transform duration-200"
// //                           />
// //                         )}
// //                       </button>

// //                       {isOpen && (
// //                         <div className="ml-6 mt-1 space-y-1 border-l border-gray-800/50 pl-3">
// //                           {item.children.map((child) => (
// //                             <NavLink
// //                               key={child.path}
// //                               to={child.path}
// //                               onClick={closeSidebar}
// //                               className={({ isActive }) =>
// //                                 clsx(
// //                                   "flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all",
// //                                   isActive
// //                                     ? "bg-gray-800/80 text-white"
// //                                     : "text-gray-400 hover:bg-gray-800/50 hover:text-gray-200",
// //                                 )
// //                               }
// //                             >
// //                               <child.icon
// //                                 size={18}
// //                                 strokeWidth={2}
// //                                 className="shrink-0"
// //                               />
// //                               <span>{child.label}</span>
// //                             </NavLink>
// //                           ))}
// //                         </div>
// //                       )}
// //                     </div>
// //                   );
// //                 }

// //                 return (
// //                   <NavLink
// //                     key={item.path}
// //                     to={item.path}
// //                     onClick={closeSidebar}
// //                     className={({ isActive }) =>
// //                       clsx(
// //                         "group flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
// //                         isActive
// //                           ? "bg-gray-800/80 text-white shadow-sm"
// //                           : "text-gray-400 hover:bg-gray-800/60 hover:text-gray-100",
// //                         item.bottom ? "mt-6" : "",
// //                       )
// //                     }
// //                   >
// //                     <item.icon
// //                       size={20}
// //                       strokeWidth={2.1}
// //                       className="shrink-0"
// //                     />
// //                     <span>{item.label}</span>
// //                   </NavLink>
// //                 );
// //               })}
// //             </div>
// //           </nav>

// //           {/* Logout Section */}
// //           <div className="mt-auto border-t border-gray-800/60 p-4">
// //             <div className="pt-2 border-t border-gray-700/50 mt-2" />{" "}
// //             {/* optional visual separator */}
// //             <button
// //               type="button"
// //               onClick={handleLogout}
// //               className="flex w-full items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-400 hover:bg-red-950/30 hover:text-red-300 transition-all"
// //             >
// //               <LogOut size={20} strokeWidth={2.1} className="shrink-0" />
// //               <span>Logout</span>
// //             </button>
// //           </div>
// //         </div>
// //       </aside>
// //     </>
// //   );
// // }

// import { NavLink, useNavigate } from "react-router-dom";
// import {
//   LayoutDashboard,
//   FileText,
//   FolderOpen,
//   Eye,
//   Contact2,
//   MessageSquare,
//   UserRound,
//   LogOut,
//   Menu,
//   X,
//   ChevronDown,
//   ChevronRight,
// } from "lucide-react";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { logoutUser } from "../Pages/auth/authSlice";
// import clsx from "clsx";

// const navItems = [
//   {
//     path: "/dashboard",
//     label: "Dashboard",
//     icon: LayoutDashboard,
//   },
//   {
//     label: "Blog",
//     icon: FileText,
//     children: [
//       { path: "/homepage", label: "Create Blog", icon: FileText },
//       { path: "/blogcategory", label: "Blog Category", icon: FolderOpen },
//       { path: "/getpost", label: "Show CaseStudies", icon: Eye },
//     ],
//   },
//   {
//     path: "/contact",
//     label: "Contact",
//     icon: Contact2,
//   },
//   {
//     path: "/query",
//     label: "Query",
//     icon: MessageSquare,
//   },
//   {
//     path: "/profile",
//     label: "My Profile",
//     icon: UserRound,
//   },
// ];

// export default function Sidebar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [openMenus, setOpenMenus] = useState({ Blog: true });

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const toggleSidebar = () => setIsOpen((p) => !p);
//   const closeSidebar = () => setIsOpen(false);

//   const toggleMenu = (label) => {
//     setOpenMenus((prev) => ({
//       ...prev,
//       [label]: !prev[label],
//     }));
//   };

//   const handleLogout = () => {
//     dispatch(logoutUser());
//     navigate("/", { replace: true });
//     closeSidebar();
//   };

//   return (
//     <>
//       {/* Mobile Toggle */}
//       <button
//         type="button"
//         aria-label="Toggle sidebar"
//         onClick={toggleSidebar}
//         className="fixed top-4 left-4 z-50 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white shadow-lg lg:hidden"
//       >
//         {isOpen ? <X size={22} /> : <Menu size={22} />}
//       </button>

//       {/* Mobile Overlay */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 z-30 bg-slate-900/60 backdrop-blur-sm lg:hidden"
//           onClick={closeSidebar}
//         />
//       )}

//       {/* Sidebar */}
//       <aside
//         className={clsx(
//           "fixed inset-y-0 left-0 z-40 flex w-72 flex-col bg-slate-950 text-slate-200",
//           "transform transition-transform duration-300 ease-in-out",
//           "lg:static lg:translate-x-0",
//           isOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full",
//         )}
//       >
//         {/* Logo */}
//         <div className="flex h-20 items-center border-b border-slate-800/80 px-5">
//           <img
//             src="/eduhawk_logo.png"
//             alt="Edu-Hawk Worldwide"
//             className="h-14 w-full object-contain object-left"
//           />
//         </div>

//         {/* Navigation */}
//         <nav className="flex-1 overflow-y-auto px-4 py-6">
//           <ul className="space-y-1.5">
//             {navItems.map((item) => {
//               if (item.children) {
//                 const isMenuOpen = openMenus[item.label] ?? false;

//                 return (
//                   <li key={item.label}>
//                     <button
//                       type="button"
//                       onClick={() => toggleMenu(item.label)}
//                       className={clsx(
//                         "flex w-full items-center justify-between rounded-xl px-3.5 py-3 text-sm font-medium transition-all",
//                         "text-slate-400 hover:bg-slate-900 hover:text-slate-100",
//                       )}
//                     >
//                       <div className="flex items-center gap-3">
//                         <item.icon size={20} strokeWidth={2} />
//                         <span>{item.label}</span>
//                       </div>
//                       {isMenuOpen ? (
//                         <ChevronDown size={18} className="text-slate-500" />
//                       ) : (
//                         <ChevronRight size={18} className="text-slate-500" />
//                       )}
//                     </button>

//                     {isMenuOpen && (
//                       <ul className="mt-1 space-y-1 border-l border-slate-800 ml-5 pl-3">
//                         {item.children.map((child) => (
//                           <li key={child.path}>
//                             <NavLink
//                               to={child.path}
//                               onClick={closeSidebar}
//                               className={({ isActive }) =>
//                                 clsx(
//                                   "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all",
//                                   isActive
//                                     ? "bg-indigo-600/15 text-indigo-400"
//                                     : "text-slate-500 hover:bg-slate-900 hover:text-slate-200",
//                                 )
//                               }
//                             >
//                               <child.icon size={17} strokeWidth={2} />
//                               <span>{child.label}</span>
//                             </NavLink>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </li>
//                 );
//               }

//               return (
//                 <li key={item.path}>
//                   <NavLink
//                     to={item.path}
//                     onClick={closeSidebar}
//                     className={({ isActive }) =>
//                       clsx(
//                         "flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium transition-all",
//                         isActive
//                           ? "bg-indigo-600 text-white shadow-md shadow-indigo-900/40"
//                           : "text-slate-400 hover:bg-slate-900 hover:text-slate-100",
//                       )
//                     }
//                   >
//                     <item.icon size={20} strokeWidth={2} />
//                     <span>{item.label}</span>
//                   </NavLink>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>

//         {/* Logout */}
//         <div className="border-t border-slate-800/80 p-4">
//           <button
//             type="button"
//             onClick={handleLogout}
//             className="flex w-full items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium text-rose-400 transition-all hover:bg-rose-950/40 hover:text-rose-300"
//           >
//             <LogOut size={20} strokeWidth={2} />
//             <span>Logout</span>
//           </button>
//         </div>
//       </aside>
//     </>
//   );
// }
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  FolderOpen,
  Eye,
  Contact2,
  MessageSquare,
  User,
  LogOut,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../Pages/auth/authSlice";
import clsx from "clsx";

const navItems = [
  {
    path: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Blog",
    icon: FileText,
    children: [
      { path: "/homepage", label: "Create Blog", icon: FileText },
      { path: "/blogcategory", label: "Blog Category", icon: FolderOpen },
      { path: "/getpost", label: "Show CaseStudies", icon: Eye },
    ],
  },
  {
    path: "/contact",
    label: "Contact",
    icon: Contact2,
  },
  {
    path: "/query",
    label: "Query",
    icon: MessageSquare,
  },
  {
    path: "/profile",
    label: "My Profile",
    icon: User,
  },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState({ Blog: true });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleSidebar = () => setIsOpen((p) => !p);
  const closeSidebar = () => setIsOpen(false);

  const toggleMenu = (label) => {
    setOpenMenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/", { replace: true });
    closeSidebar();
  };

  return (
    <>
      {/* Mobile Toggle */}
      <button
        type="button"
        aria-label="Toggle sidebar"
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 flex h-11 w-11 items-center justify-center rounded-xl bg-[#0f172a] text-white shadow-lg lg:hidden"
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={clsx(
          "fixed inset-y-0 left-0 z-40 flex w-[260px] flex-col bg-[#0b1120] text-slate-300",
          "transform transition-transform duration-300 ease-in-out",
          "lg:static lg:translate-x-0",
          isOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full",
        )}
      >
        {/* Logo */}
        <div className="flex h-[72px] items-center gap-3 border-b border-white/5 px-5">
          <img
            src="/logo.png" // apna logo path yahan daalo
            alt="Edu-Hawk"
            className="h-10 w-auto object-contain"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <div className="leading-tight">
            <p className="text-[15px] font-bold tracking-tight text-white">
              EDU-HAWK
            </p>
            <p className="text-[10px] font-medium uppercase tracking-wider text-slate-500">
              Admin Panel
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-5">
          <ul className="space-y-1">
            {navItems.map((item) => {
              // Nested menu (Blog)
              if (item.children) {
                const isMenuOpen = openMenus[item.label] ?? false;

                return (
                  <li key={item.label}>
                    <button
                      type="button"
                      onClick={() => toggleMenu(item.label)}
                      className={clsx(
                        "flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-[13.5px] font-medium transition-all",
                        "text-slate-400 hover:bg-white/5 hover:text-slate-200",
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon size={18} strokeWidth={2} />
                        <span>{item.label}</span>
                      </div>
                      {isMenuOpen ? (
                        <ChevronDown size={16} className="text-slate-500" />
                      ) : (
                        <ChevronRight size={16} className="text-slate-500" />
                      )}
                    </button>

                    {isMenuOpen && (
                      <ul className="mt-1 space-y-0.5 border-l border-white/10 ml-[22px] pl-3">
                        {item.children.map((child) => (
                          <li key={child.path}>
                            <NavLink
                              to={child.path}
                              onClick={closeSidebar}
                              className={({ isActive }) =>
                                clsx(
                                  "flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] font-medium transition-all",
                                  isActive
                                    ? "bg-indigo-500/15 text-indigo-400"
                                    : "text-slate-500 hover:bg-white/5 hover:text-slate-300",
                                )
                              }
                            >
                              <child.icon size={15} strokeWidth={2} />
                              <span>{child.label}</span>
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              }

              // Normal link
              return (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={closeSidebar}
                    className={({ isActive }) =>
                      clsx(
                        "flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-[13.5px] font-medium transition-all",
                        isActive
                          ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-900/40"
                          : "text-slate-400 hover:bg-white/5 hover:text-slate-200",
                      )
                    }
                  >
                    <item.icon size={18} strokeWidth={2} />
                    <span>{item.label}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Logout */}
        <div className="border-t border-white/5 p-3">
          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-[13.5px] font-medium text-rose-400 transition-all hover:bg-rose-500/10 hover:text-rose-300"
          >
            <LogOut size={18} strokeWidth={2} />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}