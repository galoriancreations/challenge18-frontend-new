"use client";

import React, { useState } from "react";
import { TbSchool } from "react-icons/tb";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { BiSolidSchool } from "react-icons/bi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GoGraph } from "react-icons/go";
import { CiGlobe } from "react-icons/ci";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <aside className="w-52 h-screen bg-primary text-textPrimary fixed">
      <ul className="space-y-4">
        <li>
          <a
            href="#"
            onClick={() => handleLinkClick("educators")}
            className={`flex items-center w-full gap-4 mt-6 px-6 py-2 ${
              activeLink === "educators" ? "hover:bg-accent text-secondary" : "hover:bg-accent hover:text-white"
            }`}
          >
            <span>
              <LiaChalkboardTeacherSolid size={25} />
            </span>
            <span>Educators</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => handleLinkClick("students")}
            className={`flex items-center gap-4 px-6 py-2 ${
              activeLink === "students" ? "hover:bg-accent text-secondary" : "hover:bg-accent hover:text-white"
            }`}
          >
            <span>
              <TbSchool size={25} />
            </span>
            <span>Students</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => handleLinkClick("institutions")}
            className={`flex items-center gap-4 px-6 py-2 ${
              activeLink === "institutions" ? "hover:bg-accent text-secondary" : "hover:bg-accent hover:text-white"
            }`}
          >
            <span>
              <BiSolidSchool size={25} />
            </span>
            <span>Institutions</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => handleLinkClick("edtech")}
            className={`flex items-center gap-4 px-6 py-2 ${
              activeLink === "edtech" ? "hover:bg-accent text-secondary" : "hover:bg-accent hover:text-white"
            }`}
          >
            <span>
              <HiOutlineLightBulb size={25} />
            </span>
            <span>Ed-Tech Startups</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => handleLinkClick("investors")}
            className={`flex items-center gap-4 px-6 py-2 ${
              activeLink === "investors" ? "hover:bg-accent text-secondary" : "hover:bg-accent hover:text-white"
            }`}
          >
            <span>
              <GoGraph size={25} />
            </span>
            <span>Investors</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => handleLinkClick("government")}
            className={`flex items-center gap-4 px-6 py-2 ${
              activeLink === "government" ? "hover:bg-accent text-secondary" : "hover:bg-accent hover:text-white"
            }`}
          >
            <span>
              <CiGlobe size={25} />
            </span>
            <span>Government and NGO</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => handleLinkClick("about")}
            className={`flex items-center gap-4 px-6 py-2 ${
              activeLink === "about" ? "hover:bg-accent text-secondary" : "hover:bg-accent hover:text-white"
            }`}
          >
            <span>ℹ️</span>
            <span>About</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
