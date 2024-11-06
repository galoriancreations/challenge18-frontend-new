import React from "react";
import Link from "next/link";
import Image from "next/image";

const appBar = () => {
  return (
    <header className="bg-primary text-textPrimary p-4 shadow-lg flex justify-between items-center">
      <Link href="/">
        <div className="h-full aspect-auto">
          <Image src={"/logo.png"} alt="Company Logo" className="h-full object-contain" width={50} height={50} />
        </div>
      </Link>
      <nav>
        <ul className="flex px-3 gap-4">
          <li>
            <input type="text" placeholder="Search" />
          </li>
          <li>
            <a href="#" className="hover:text-secondary">
              LOG IN
            </a>
          </li>
        </ul>
      </nav>{" "}
      <button className="bg-secondary text-primary font-semibold px-4 py-2 rounded">Sign Up</button>
    </header>
  );
};

export default appBar;
