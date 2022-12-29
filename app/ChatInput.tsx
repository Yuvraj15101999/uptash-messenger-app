"use client";
import React from "react";

function ChatInput() {
  return (
    <form action="">
      <input type="text" placeholder="Please type text here"/>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => console.log("test")}
      >
        Send
      </button>
    </form>
  );
}

export default ChatInput;
