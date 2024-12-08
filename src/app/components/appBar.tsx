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
    <header className="fixed bg-gradient-to-r from-primary-blue via-accent-pink to-accent-purple text-neutral-silver p-4 shadow-lg flex justify-between items-center h-16 top-0 left-0 w-full z-50 backdrop-blur-md bg-opacity-70">
      <div className="flex justify-between items-center w-full">
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

        <nav className="flex items-center gap-8 text-neutral-silver ">
          <a href="/log-in" className="hover:text-neutral-charcoal font-semibold">
            Log In
          </a>
          <a href="/sign-up" className="hover:text-neutral-charcoal font-semibold">
            Sign up
          </a>
        </nav>
      </div>
    </header>
  );
};

export default AppBar;
