import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BiSearch } from "react-icons/bi";

const AppBar = () => {
  return (
    <header className="bg-primary text-textPrimary p-4 shadow-lg flex justify-between items-center h-16">
      <Link href="/" className="flex items-center h-full">
        <Image src="/logo.png" alt="Company Logo" className="object-contain" width={70} height={70} />
      </Link>

      <div className="relative flex-1 flex justify-center max-w-md">
        <span className="absolute inset-y-0 left-4 flex items-center text-gray-500">
          <BiSearch size={20} />
        </span>
        <input
          className="py-2 pl-10 pr-4 w-full rounded-full bg-white text-primary shadow-md placeholder-primary placeholder-opacity-70"
          type="text"
          placeholder="Search"
        />
      </div>

      <nav className="flex items-center gap-4">
        <a href="#" className="hover:text-secondary font-semibold">
          LOG IN
        </a>
        <button className="bg-secondary text-primary font-semibold px-4 py-2 rounded">Sign Up</button>
      </nav>
    </header>
  );
};

export default AppBar;
