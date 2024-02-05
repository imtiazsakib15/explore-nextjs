"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();

  const links = [
    { pathname: "Home", route: "/" },
    { pathname: "Album", route: "/album" },
    { pathname: "About", route: "/about" },
    { pathname: "Products", route: "/products" },
    { pathname: "Blogs", route: "/blogs" },
    { pathname: "Contact", route: "/contact" },
    { pathname: "Projects", route: "/projects" },
    { pathname: "Skills", route: "/skills" },
    { pathname: "Dashboard", route: "/dashboard" },
  ];
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.pathname}
          className={
            pathname === link.route
              ? "px-4 py-2 bg-green-600 text-white"
              : "px-4 py-2 bg-slate-200"
          }
          href={link.route}
        >
          {link.pathname}
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
