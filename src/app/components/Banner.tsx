import React from "react";
import Image from "next/image";
import iphone1 from "/public/images/iPhone-13-Pro-Front-1.png";
import iphone2 from "/public/images/iPhone-13-Pro-Front-2.png";
import iphone3 from "/public/images/iPhone-13-Pro-Front-3.png";
import backgroundCircle from "/public/images/background-circle.png";

const Banner = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="flex flex-col gap-y-5">
        <span className="capitalize text-5xl font-bold">
          make the best <br /> financial decesions
        </span>
        <p className="text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
        <span>
          <button className="px-4 py-2 bg-black text-white rounded-md">
            Get Started
          </button>
          <button className="px-4 py-2 rounded-sm">Watch Video</button>
        </span>
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
