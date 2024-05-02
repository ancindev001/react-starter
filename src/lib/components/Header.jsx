import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-slate-700">
      <nav className="max-w-2xl mx-auto">
        <ul className="flex gap-5 py-3">
          <NavList url="/" title="Home" />
          <NavList url="/about" title="About" />
        </ul>
      </nav>
    </header>
  );
};

const NavList = ({ title, url }) => {
  return (
    <>
      <li>
        <Link
          className="text-white hover:bg-slate-900 p-3 transition-colors"
          to={url}
        >
          {title}
        </Link>
      </li>
    </>
  );
};
