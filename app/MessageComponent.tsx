"use client";
import Image from "next/image";
import { Message } from "../typings";
type Props = {
  message: Message;
};

function MessageComponent({ message }: Props) {
  const isUser = true;

  return (
    <div className={`flex w-fit ${isUser && "ml-auto"}  `}>
      <div className={`flex-shrink-0 && ${isUser && "order-2"}`}>
        <Image
          src={message.profilePic}
          alt="ProfilePic"
          width={10}
          height={50}
          className="rounded-full mx-2 w-20 transform scale-75 space-y-4"
        ></Image>
      </div>
      <div>
        <p
          className={`text-[0.65rem] px-[2px] pb-[2px]  ${
            isUser ? "text-blue-400 text-right" : "text-red-400 text-left"
          }`}
        >
          {message.username}
        </p>
        <div className="flex items-end">
          <div
            className={`px-2 py-2 rounded-lg w-fit text-red-200 bg-red-400 ${
              isUser
                ? "bg-blue-400 ml-auto order-2"
                : "bg-red-400"
            }`}
          >
            <p className="text-white-400">{message.message}</p>
          </div>
          <p className={`text-[0.65rem] italic px-2 text-gray-300 ${isUser && "text-right"}`}>
            {new Date(message.created_at).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MessageComponent;
