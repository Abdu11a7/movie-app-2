import React from "react";

export default function SharedBtn({ children }) {
  return (
    <button className="shared-btn rounded-3 border-0 text-white fs-6 py-3 px-4">
      {children}
    </button>
  );
}
