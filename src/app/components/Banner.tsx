import React from "react";
import Image from "next/image";
import iphone1 from "/public/images/iPhone-13-Pro-Front-1.png";
import iphone2 from "/public/images/iPhone-13-Pro-Front-2.png";
import iphone3 from "/public/images/iPhone-13-Pro-Front-3.png";
import backgroundCircle from "/public/images/background-circle.png";
import ribbonImage from "/public/images/ribbon.svg";
import { AchievementsIcon, FinanceIcon } from "./Icons";

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
        <span>
          <button className="px-4 py-2 bg-black text-white rounded-md">
            Get Started
          </button>
          <button className="px-4 py-2 rounded-sm">Watch Video</button>
        </span>
        <div className="relative">
          <Image
            priority
            src={ribbonImage}
            width={500}
            height={100}
            alt="ribbon"
          />
          <div className="absolute text-8xl -bottom-[93px] font-bold -rotate-[28deg]">
            A
          </div>
          <div className="flex absolute items-center rounded-md bottom-12 right-20 bg-black px-8 py-3 text-white text-[10px] -rotate-[28deg]">
            <AchievementsIcon className="mr-1" />
            <div className="flex flex-col capitalize">
              <span className="font-semibold">achievements</span>
              <span className="capitalize">best finance app on playstore</span>
            </div>
            <span className="border-r h-9 mr-4 ml-6 rotate-[28deg]"></span>
            <FinanceIcon className="mr-1" />
            <div className="flex flex-col capitalize">
              <span className=" font-semibold">finance</span>
              <span className="capitalize">most popular accounting app</span>
            </div>
          </div>
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
