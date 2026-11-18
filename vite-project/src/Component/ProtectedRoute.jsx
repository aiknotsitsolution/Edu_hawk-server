// src/components/ProtectedRoute.jsx
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { restoreSession } from "../Pages/auth/authSlice";

const ProtectedRoute = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, authChecked, isLoading } = useSelector(
    (state) => state.auth,
  );

  useEffect(() => {
    // Check or refresh session with backend
    dispatch(restoreSession());
  }, [dispatch]);

  // Only block with loader on cold start when no session is cached yet
  if (!authChecked && isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 text-sm text-gray-500">
        Checking your session...
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
