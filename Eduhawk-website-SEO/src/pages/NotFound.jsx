import React from "react";
import { Link } from "react-router-dom";
import SeoHead from "../component/SeoHead.jsx";

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-5 py-16 sm:py-20 bg-white overflow-hidden">
      <SeoHead
        title="Page Not Found (404) | Edu Hawk"
        description="The page you are looking for could not be found on Edu Hawk."
        path={null}
        noindex
        ogImage={null}
      />

      <div className="max-w-md text-center">
        <div className="text-7xl sm:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent select-none">
          404
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
          Page Not Found
        </h1>
        <p className="text-slate-600 leading-relaxed mb-8">
          Sorry, the page you are looking for doesn't exist or may have been
          moved. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-[10px] font-semibold text-base bg-blue-600 hover:bg-blue-700 transition-colors no-underline shadow-lg shadow-blue-600/25"
          >
            Back to Homepage
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-[10px] font-semibold text-base border-[1.5px] border-blue-600 text-blue-600 hover:bg-blue-50 no-underline transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
