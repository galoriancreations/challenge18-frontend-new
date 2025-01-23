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
import { usePathname } from "next/navigation";
import classnames from "classnames";

const Sidebar = () => {
  const currentPath = usePathname();

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
    <aside className="w-52 h-[calc(100vh-4rem)]  bg-slate-700  text-neutral-silver fixed top-16">
      <ul>
        {links.map((link) => (
          <Link
            key={link.href}
            href={`/${link.href}`}
            className={classnames("flex items-center gap-4 px-6 py-4 hover:bg-slate-600  ", {
              "text-accent-pink ": `/${link.href}` === currentPath,
              "hover:text-accent-pink": `/${link.href}` !== currentPath,
            })}
          >
            <span>{link.icon}</span>
            <span>{link.label}</span>
          </Link>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
