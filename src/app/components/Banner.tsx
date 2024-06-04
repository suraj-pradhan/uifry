import React from "react";
import { CircleBackground } from "./Backgrounds";
import Image from "next/image";
import iphone1 from "/public/images/iphone1.png";

const Banner = () => {
  return (
    <div className="flex justify-around ">
      <div className="flex flex-col gap-y-5">
        <span className="capitalize text-5xl font-bold">
          make the best <br /> financial decesions
        </span>
        <p className="text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        <span>
          <button className="px-4 py-2 bg-slate-900 text-white rounded-sm">
            Get Started
          </button>
          <button className="px-4 py-2 rounded-sm">Watch Video</button>
        </span>
      </div>
      <div className="relative">
        <CircleBackground className="w-96 h-96 " />
        <Image
          priority
          className="absolute top-4"
          src={iphone1}
          width={400}
          height={200}
          alt="iphone"
        />
      </div>
    </div>
  );
};

export default Banner;
