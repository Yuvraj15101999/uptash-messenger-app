import Image from "next/image";
import React from "react";
import Link from "next/link";
import LogoutButton from "./LogoutButton";
function Header() {
  const session = true;
  if (session)
    return (
      <header className="sticky top-0 z-50 bg-white flex justify-between items-center p-10 shadow-sm">
        <div className="flex space-x-2">
          <Image
            className="rounded-full mx-2 object-contain"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&usqp=CAU"
            alt="profile picture"
            height={10}
            width={50}
          />
          <div>
            <p className="text-blue-400">Logged in as</p>
            <p className="text-bold text-lg">Yuvraj Pawar</p>
          </div>
        </div>
        <LogoutButton />
      </header>
    );

  return (
    <header className="sticky top-0 z-50 bg-white flex justify-center items-center p-10 shadow-sm">
      <div className="flex flex-col items-center space-y-5">
        <div className="flex space-x-2 items-center ">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&usqp=CAU"
            alt="logo"
            height={10}
            width={50}
          />
          <p className="text-blue-400 border-gray-300">Chatify</p>
        </div>
        <Link
          href="/auth/signin"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign In
        </Link>
      </div>
    </header>
  );
}

export default Header;
