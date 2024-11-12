"use client";

import React, { useState } from "react";
import { TbSchool } from "react-icons/tb";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { BiSolidSchool } from "react-icons/bi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GoGraph } from "react-icons/go";
import { CiGlobe } from "react-icons/ci";
import { IoInformationCircleOutline } from "react-icons/io5";
import Link from "next/link";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };
  const links = [
    { label: "Educators", href: "/educators", icon: <LiaChalkboardTeacherSolid /> },
    { label: "Students", href: "/students", icon: <TbSchool /> },
    { label: "Institutions", href: "/institutions", icon: <BiSolidSchool /> },
    { label: "Ed-Tech Startups", href: "/edtech", icon: <HiOutlineLightBulb /> },
    { label: "Investors", href: "/investors", icon: <GoGraph /> },
    { label: "Government", href: "/government", icon: <CiGlobe /> },
    { label: "About", href: "/about", icon: <IoInformationCircleOutline /> },
  ];
  return (
    <aside className="w-52 h-screen bg-primary text-textPrimary fixed">
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href="#" //{link.href}
              onClick={() => handleLinkClick(link.label)}
              className={`flex items-center w-full gap-4 mt-6 px-6 py-2 ${
                activeLink === link.label ? "hover:bg-accent text-secondary" : "hover:bg-accent hover:text-white"
              }`}
            >
              <span>{link.icon}</span>
              <span>{link.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
