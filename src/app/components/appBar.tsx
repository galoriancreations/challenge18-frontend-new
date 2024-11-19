import React from "react";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "./searchBar";

const AppBar = () => {
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch("/api/search-data");
  //     const data = await response.json();
  //     setSearchItems(data);
  //   }
  //   fetchData();
  // }, []);

  const searchItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "educators", link: "/educators" },
    { name: "students", link: "/students" },
    { name: "institutions", link: "/institutions" },
    { name: "ed-tech startups", link: "/edtech" },
    { name: "investors", link: "/investors" },
    { name: "government", link: "/government" },
  ];

  return (
    <header className="bg-primary text-textPrimary p-4 shadow-lg flex justify-between items-center h-16 fixed top-0 left-0 w-full z-50">
      <Link href="/" className="flex items-center h-full">
        <Image
          src="/images/ting-global-logo.png"
          alt="Ting Global Company Logo"
          className="object-contain"
          width={70}
          height={70}
        />
      </Link>

      <div className="max-w-3xl w-full px-4">
        <SearchBar items={searchItems} />
      </div>

      <nav className="flex items-center gap-8">
        <a href="#" className="hover:text-secondary font-semibold">
          Log In
        </a>
        <button className="bg-secondary text-primary font-semibold px-4 py-2 rounded">Sign Up</button>
      </nav>
    </header>
  );
};

export default AppBar;
