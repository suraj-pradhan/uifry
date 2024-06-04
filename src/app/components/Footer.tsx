import React from "react";
import { UifryIcon } from "./Icons";
import Link from "next/link";

interface props {
  href: string;
  title: string;
  className: string;
}
const CustomLink = ({ href, title, className }: props) => (
  <Link href={href}>
    <span className={`font-medium capitalize ${className}`}>{title}</span>
  </Link>
);

const Footer = () => {
  return (
    <>
      <footer className="flex justify-around">
        <nav>
          <UifryIcon className="w-24" />
          <Link href="mailto:help@frybix.com">Help@Frybix.Com</Link>
        </nav>
        <div className="flex flex-col gap-y-4">
          <span className="text-2xl font-medium capitalize">links</span>
          <CustomLink href="/" title="home" className="" />
          <CustomLink href="/" title="about us" className="" />
          <CustomLink href="/" title="booking" className="" />
          <CustomLink href="/" title="blog" className="" />
        </div>
        <div className="flex flex-col gap-y-4">
          <span className="text-2xl font-medium capitalize">Legal</span>
          <CustomLink href="/" title="terms of use" className="" />
          <CustomLink href="/" title="privacy policy" className="" />
          <CustomLink href="/" title="cookie policy" className="" />
        </div>
        <div className="flex flex-col gap-y-4">
          <span className="text-2xl font-medium capitalize">Product</span>
          <CustomLink href="/" title="take tour" className="" />
          <CustomLink href="/" title="live chat" className="" />
          <CustomLink href="/" title="reviews" className="" />
        </div>
        <div className="flex flex-col gap-y-4">
          <span className="text-2xl font-medium capitalize">newsletter</span>
          <CustomLink href="/" title="stay up to date" className="" />
          <span>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
            />
            <button className="bg-black text-white px-8 py-4 rounded-sm">
              Subscribe
            </button>
          </span>
        </div>
      </footer>
      <div className="flex items-center justify-center">
        <span className="text-md font-medium">
          Copyright &copy; {new Date().getFullYear()} Uifry &nbsp; • &nbsp; All
          Rights Reserved
        </span>
      </div>
    </>
  );
};

export default Footer;
