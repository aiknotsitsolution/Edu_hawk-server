import React from "react";

/* Minimal loading placeholder shown while a lazy route chunk loads.
 * Rendered inside the existing layout (Navbar/Footer stay visible),
 * so no visual design of any page is changed. */
const RouteLoader = () => (
  <div
    className="min-h-[60vh] flex items-center justify-center bg-gray-50"
    role="status"
    aria-live="polite"
  >
    <div className="h-10 w-10 rounded-full border-4 border-slate-200 border-t-blue-600 animate-spin" />
    <span className="sr-only">Loading…</span>
  </div>
);

export default RouteLoader;
