import React from "react";
import Image from "next/image";
import iphone1 from "/public/images/iPhone-13-Pro-Front-1.png";
import iphone2 from "/public/images/iPhone-13-Pro-Front-2.png";
import iphone3 from "/public/images/iPhone-13-Pro-Front-3.png";
import backgroundCircle from "/public/images/background-circle.png";
import { ArrowIcon, PlayIcon } from "./Icons";
import { BrandRibbon } from "./Elements";

const Banner = () => {
  return (
    <div className="flex justify-center relative mt-8 ">
      <div className="flex flex-col gap-y-5 pt-8">
        <span className="capitalize text-6xl font-bold">
          make the best <br /> financial decesions
        </span>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        <span className="flex">
          <span className="flex">
            <button className="px-8 py-4 flex items-center bg-black text-white capitalize rounded-md">
              get started &nbsp; &nbsp; <ArrowIcon className="" />
            </button>
          </span>
          <span className="flex">
            <button className="ml-8 flex items-center rounded-sm capitalize">
              <PlayIcon className="" /> &nbsp; &nbsp;watch video
            </button>
          </span>
        </span>

        <div className="relative">
          <BrandRibbon className="" />
        </div>
      </div>
      <div className="relative">
        <Image
          priority
          className="relative top-0 z-30"
          src={iphone1}
          width={400}
          height={100}
          alt="iphone"
        />
        <Image
          priority
          className="absolute top-14 left-20 z-20"
          src={iphone2}
          width={400}
          height={100}
          alt="iphone"
        />
        <Image
          priority
          className="absolute top-24 left-40 z-10"
          src={iphone3}
          width={340}
          height={100}
          alt="iphone"
        />
        <Image
          priority
          className="absolute top-5 left-20 z-0"
          src={backgroundCircle}
          width={600}
          height={100}
          alt="iphone"
        />
      </div>
    </div>
  );
};

export default Banner;
