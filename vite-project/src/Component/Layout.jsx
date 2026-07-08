// import { Outlet } from 'react-router-dom';
// import Sidebar from './Sidebar';

// const Layout = () => {
//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       <Sidebar />
//       <main className="flex-1 overflow-auto">
//         <div className="p-6 lg:p-8">
//           <Outlet />
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Layout;

// import { Outlet } from 'react-router-dom';
// import Sidebar from './Sidebar';

// const Layout = () => {
//   return (
//     <div className="flex h-screen overflow-hidden bg-gray-50">
//       {/* Sidebar */}
//       <Sidebar />

//       {/* Main Content Area */}
//       <div className="flex-1 flex flex-col overflow-hidden">
//         {/* Top Navbar (Optional but Recommended) */}
//         <header className="h-16 border-b bg-white px-6 flex items-center justify-between shadow-sm z-30">
//           <div className="flex items-center gap-3">
//             <h2 className="text-lg font-semibold text-gray-800">Admin Panel</h2>
//           </div>

//           <div className="flex items-center gap-4">
//             <div className="text-sm text-gray-500 hidden md:block">
//               Welcome back, <span className="font-medium text-gray-700">Admin</span>
//             </div>
            
//             {/* You can add user avatar, notifications, etc. here later */}
//             <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-medium text-gray-600">
//               A
//             </div>
//           </div>
//         </header>

//         {/* Page Content */}
//         <main className="flex-1 overflow-auto p-6 lg:p-8 bg-gray-50">
//           <div className="max-w-screen-2xl mx-auto">
//             <Outlet />
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Layout;





import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="h-16 border-b bg-white px-6 flex items-center justify-between shadow-sm z-30">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-semibold text-gray-800">Admin Panel</h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-500 hidden md:block">
              Welcome back, <span className="font-medium text-gray-700">Admin</span>
            </div>
            
            <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs font-medium">
              A
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto bg-gray-50">
          <div className="p-6 lg:p-8 max-w-screen-2xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;