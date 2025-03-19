import React from "react";

export default function LoadingSkeleton() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow animate-pulse"
          >
            {/* Image skeleton */}
            <div className="bg-gray-300 h-48 rounded-md mb-4" />
            {/* Title skeleton */}
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2" />
            {/* Category skeleton */}
            <div className="h-3 bg-gray-300 rounded w-1/2 mb-2" />
            {/* Price skeleton */}
            <div className="h-4 bg-gray-300 rounded w-1/4 mb-4" />
            {/* Button skeleton */}
            <div className="h-10 bg-gray-300 rounded" />
          </div>
        ))}
      </div>
    </>
  );
}
