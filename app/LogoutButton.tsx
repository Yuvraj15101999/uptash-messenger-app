"use client";
import React from "react";
function LogoutButton() {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      type="submit"
      onClick={() => console.log("test")}
    >
      Sign Out
    </button>
  );
}

export default LogoutButton;
