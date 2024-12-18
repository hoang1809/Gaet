import React from "react";

const Skeleton = () => {
  return (
    <div className="space-y-8">
      <div className="w-full aspect-[1120/450] animate-pulse rounded-lg bg-gray-200"></div>
      <div className="w-14 h-7 animate-pulse rounded-lg bg-gray-200"></div>
      <div className="max-w-[920px] space-y-8 mx-auto">
        <div className="h-12 w-full animate-pulse rounded-lg bg-gray-200"></div>
        <div className="w-20 h-7 animate-pulse rounded-lg bg-gray-200"></div>
        <div className="space-y-1">
          <div className="h-6 w-full animate-pulse rounded-lg bg-gray-200"></div>
          <div className="h-6 w-full animate-pulse rounded-lg bg-gray-200"></div>
          <div className="h-6 w-full animate-pulse rounded-lg bg-gray-200"></div>
          <div className="h-6 w-[80%] animate-pulse rounded-lg bg-gray-200"></div>
        </div>
        <div className="w-full aspect-[1120/450] animate-pulse rounded-lg bg-gray-200"></div>
        <div className="h-6 w-full animate-pulse rounded-lg bg-gray-200"></div>
        <div className="space-y-1">
          <div className="h-6 w-full animate-pulse rounded-lg bg-gray-200"></div>
          <div className="h-6 w-full animate-pulse rounded-lg bg-gray-200"></div>
          <div className="h-6 w-full animate-pulse rounded-lg bg-gray-200"></div>
          <div className="h-6 w-[80%] animate-pulse rounded-lg bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
