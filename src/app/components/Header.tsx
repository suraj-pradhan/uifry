"use client";
import React from "react";
import { UifryIcon } from "./Icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  interface props {
    href: string;
    title: string;
  }

  const CustomLink = ({ href, title }: props) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
      <Link href={href}>
        <span
          className={`${isActive ? "text-primary font-bold" : null} capitalize`}
        >
          {title}
        </span>
      </Link>
    );
  };
  return (
    <nav className="flex justify-around items-center py-6">
      <nav className="flex items-center gap-8">
        <Link href="/">
          <UifryIcon className="" />
        </Link>
        <span className="flex gap-x-6 font-medium">
          <CustomLink href="/" title="home" />
          <CustomLink href="/about" title="about us" />
          <CustomLink href="/pricing" title="pricing" />
          <CustomLink href="/features" title="features" />
        </span>
      </nav>

      <span>
        <button className="px-9 py-3 bg-slate-900 text-white rounded-sm">
          Download
        </button>
      </span>
    </nav>
  );
}
