import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";

const Layout = () => {
  const user = useSelector((state) => state.auth.user);
  const displayName = user?.username || user?.email?.split("@")[0] || "Admin";
  const initials = displayName.charAt(0).toUpperCase();

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="z-30 flex h-16 shrink-0 items-center justify-between border-b bg-white pl-16 pr-4 shadow-sm sm:pr-6 lg:pl-6">
          <div className="flex min-w-0 items-center gap-3">
            <h2 className="hidden truncate text-base font-semibold text-gray-800 md:block sm:text-lg">
              Admin Panel
            </h2>
          </div>

          <div className="ml-3 flex shrink-0 items-center gap-2 sm:gap-4">
            <div className="hidden text-right text-sm text-gray-500 sm:block">
              <span className="hidden md:inline">Welcome back, </span>
              <span className="font-medium text-gray-700">{displayName}</span>
            </div>

            <div
              className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-indigo-600 text-xs font-semibold text-white sm:h-10 sm:w-10"
              title={displayName}
              aria-label={`Signed in as ${displayName}`}
            >
              {user?.profilePhoto ? (
                <img
                  src={user.profilePhoto}
                  alt={displayName}
                  className="h-full w-full object-cover"
                />
              ) : (
                initials
              )}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="min-h-0 flex-1 overflow-auto bg-gray-50">
          <div className="mx-auto w-full max-w-screen-2xl p-4 sm:p-6 lg:p-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
