import React from "react";
import { TbSchool } from "react-icons/tb";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { BiSolidSchool } from "react-icons/bi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GoGraph } from "react-icons/go";
import { CiGlobe } from "react-icons/ci";

const Sidebar = () => (
  <aside className="w-64 h-screen bg-primary text-textPrimary  fixed">
    <ul className="space-y-4">
      <li>
        <a href="#" className="flex items-center w-full gap-4 mt-6 px-6 py-2  hover:bg-accent hover:text-white">
          <span>
            <LiaChalkboardTeacherSolid size={25} />
          </span>
          <span>Educators</span>
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center gap-4 px-6 py-2   hover:bg-accent hover:text-white">
          <span>
            <TbSchool size={25} />
          </span>
          <span>Students</span>
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center gap-4 px-6 py-2   hover:bg-accent hover:text-white">
          <span>
            <BiSolidSchool size={25} />
          </span>
          <span>Institutions</span>{" "}
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center gap-4 px-6 py-2  hover:bg-accent hover:text-textPrimary">
          <span>
            <HiOutlineLightBulb size={25} />
          </span>
          <span>Ed-Tech Startups</span>{" "}
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center gap-4 px-6 py-2   hover:bg-accent hover:text-white">
          <span>
            <GoGraph size={25} />
          </span>
          <span>Investors</span>{" "}
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center gap-4 px-6 py-2   hover:bg-accent hover:text-white">
          <span>
            <CiGlobe size={25} />
          </span>
          <span>Government and NGO</span>{" "}
        </a>
      </li>
      <li>
        <a href="#" className="flex items-center gap-4 px-6 py-2   hover:bg-accent hover:text-white">
          <span>ℹ️</span>
          <span>About</span>
        </a>
      </li>
    </ul>
  </aside>
);

export default Sidebar;
