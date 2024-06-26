import React from "react";
import { CallingIcon, MessageIcon, UifryIcon } from "./Icons";
import Link from "next/link";

interface props {
  href: string;
  title: string;
  className: string;
}
const CustomLink = ({ href, title, className }: props) => (
  <Link aria-label={title} href={href}>
    <span className={`font-medium capitalize ${className}`}>{title}</span>
  </Link>
);

const Footer = () => {
  return (
    <>
      <footer className="flex justify-center mt-20 gap-x-28 ">
        <div className="flex flex-col gap-y-2 font-medium ">
          <Link href="/">
            <UifryIcon className="w-28" />
          </Link>
          <div className="flex gap-x-2">
            <MessageIcon className="" />
            <Link href="mailto:help@frybix.com">help@frybix.com</Link>
          </div>
          <div className="flex gap-x-2">
            <CallingIcon className="" />
            <span> +1234 456 678 89</span>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <span className="text-3xl font-medium capitalize">links</span>
          <CustomLink href="/" title="home" className="" />
          <CustomLink href="/" title="about us" className="" />
          <CustomLink href="/" title="booking" className="" />
          <CustomLink href="/" title="blog" className="" />
        </div>
        <div className="flex flex-col gap-y-4">
          <span className="text-3xl font-medium capitalize">Legal</span>
          <CustomLink href="/" title="terms of use" className="" />
          <CustomLink href="/" title="privacy policy" className="" />
          <CustomLink href="/" title="cookie policy" className="" />
        </div>
        <div className="flex flex-col gap-y-4">
          <span className="text-3xl font-medium capitalize">Product</span>
          <CustomLink href="/" title="take tour" className="" />
          <CustomLink href="/" title="live chat" className="" />
          <CustomLink href="/" title="reviews" className="" />
        </div>
        <div className="flex flex-col gap-y-4">
          <span className="text-3xl font-medium capitalize">newsletter</span>
          <CustomLink href="/" title="stay up to date" className="" />
          <form className="mt-2">
            <input
              className="px-2 w-40"
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
            />
            <button className="px-10 py-4 bg-black text-white rounded-md ">
              Subscribe
            </button>
          </form>
        </div>
      </footer>
      <div className="flex items-center justify-center mt-16 mx-40 border-t-2">
        <span className="text-md font-medium p-6">
          Copyright &copy; {new Date().getFullYear()} Uifry &nbsp; • &nbsp; All
          Rights Reserved
        </span>
      </div>
    </>
  );
};

export default Footer;
