import React from "react";
import { UifryIcon } from "./Icons";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="flex justify-around items-center p-4">
      <nav className="flex items-center gap-8">
        <span>
          <UifryIcon className="" />
        </span>
        <span className="flex gap-x-4 font-medium">
          <Link href="/">Home</Link>
          <Link href="/">About us</Link>
          <Link href="/">Pricing</Link>
          <Link href="/">Features</Link>
        </span>
      </nav>

      <span>
        <button className="px-4 py-2 bg-slate-900 text-white rounded-sm">
          Download
        </button>
      </span>
    </nav>
  );
};

export default Header;
