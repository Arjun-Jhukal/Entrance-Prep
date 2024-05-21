"use client";
import { useState } from "react";

export default function Tooltip({ children, message }: { children: React.ReactElement; message: string }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="tooltip relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {showTooltip && (
        <div className="absolute top-[100%] right-0  bg-purple-700 px-4 py-2 text-white rounded-md shadow-lg transition-all duration-300" onMouseEnter={handleMouseLeave}>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}
