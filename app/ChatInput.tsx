"use client";
import React, { FormEvent, useState } from "react";
import { v4 as uuid } from "uuid";
import { Message } from "../typings";
import useSWR from "swr";
import fetcher from "../utils/fetchMessages";

function ChatInput() {
  const [input, setInput] = useState("");
  const { data: messages, error, mutate } = useSWR("/api/getMessages", fetcher);
  console.log(messages);

  const addMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;

    const messageToSend = input;
    setInput("");
    const id = uuid();

    const message: Message = {
      id: id,
      message: messageToSend,
      created_at: Date.now(),
      username: "Yuvraj Pawar",
      profilePic:
        "https://scontent.fbom6-1.fna.fbcdn.net/v/t39.30808-6/223134965_2987324214918356_1002729355091262915_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=mXZI28Smdy8AX9kjBDm&_nc_ht=scontent.fbom6-1.fna&oh=00_AfDJE_DSzquo_StYK8jOyOc_Q09XeBIp32JxVvP3VBfP5A&oe=63B36DC7",
      email: "yuvrajpawar2215@gmail.com",
    };

    const uploadMessageUpstash = async () => {
      const data = await fetch("/api/addMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      }).then((res) => res.json());

      return [data.message, ...messages!];
    };

    await mutate(uploadMessageUpstash,{
      optimisticData:[message,...messages!],
      rollbackOnError: true
    });
  };

  return (
    <form
      onSubmit={addMessage}
      className="flex px-10 py-5 space-x-2 border-t border-gray-100 fixed bottom-0 z-50 w-full bg-white"
    >
      <input
        type="text"
        placeholder="Enter Message Here...."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
      />
      <button
        type="submit"
        disabled={!input}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Send
      </button>
    </form>
  );
}

export default ChatInput;
