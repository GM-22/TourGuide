import React, { useRef, useState } from "react";
import Header from "../Components/Header";
import Video from "../assets/banner.mp4";
import btnimg from "../assets/btnimg.svg";
import Location from "../Components/Icons/Location";
import Calender from "../Components/Icons/Calender";
import Users from "../Components/Icons/users";
const Banner = () => {
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPaused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      setIsPaused(!isPaused);
    }
  };

  return (
    <div className="relative">
      <Header isHome={true} />

      {/* Banner Section */}
      <div className="h-screen relative">
        <video ref={videoRef} loop muted className="w-full h-full object-cover">
          <source src={Video} type="video/mp4" />
        </video>

        {/* Overlay content */}
        <div className="absolute inset-0 flex items-center flex-col justify-center  ">
          <h1 className="text-5xl font-bold font-volkhov text-black-heading">
            We Find The Best Tours For You
          </h1>
          <p className="text-[16px] leading-6.25 font-mulish pt-5.5 max-w-[569px] text-center text-black-heading">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          {/* Pause Button */}
          <button
            onClick={togglePlay}
            className=" flex items-center gap-1 hover:bg-white/20 text-black  py-2  rounded-lg"
          >
            <img src={btnimg} alt="Pause Button" />
            <p className="font-bold text-[20px] leading-auto text-black-heading  ">
              {isPaused ? "Watch Video" : "Pause Video"}
            </p>
          </button>
        </div>
        <div  className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
          <SmallSection />
        </div>
      </div>
    </div>
  );
};

const SmallSection = () => {
  return (
    <div className=" rounded-[10px] shadow-greens bg-white w-[1000px] h-[90px] flex justify-between p-5 rounder-[10px] ">
      <div className="flex justify-between w-full">
        <div className="flex gap-2.5 w-[250px] ">
          <Location className="mt-1.5" />
          <div>
            <h3 className=" font-extrabold text-[15px] leading-[25px] text-greens ">
              Location
            </h3>
            <p className=" font-semibold text-[15px] leading-[25px] text-dark-60 ">
              Search For A Destination
            </p>
          </div>
        </div>
        <div className="flex gap-2.5 ">
          <div className="w-[1px] h-[20px] mr-5 mt-3 bg-[#E8EAEB] "></div>
          <Users className="mt-1.5" />
          <div>

            <h3 className=" font-extrabold text-[15px] leading-[25px] text-greens ">
              Users
            </h3>
            <p className=" font-semibold text-[15px] leading-[25px] text-dark-60 ">
              How many Guests?
            </p>
          </div>
        </div>
        <div className="flex gap-2.5 ">
          <div className="w-[1px] h-[20px] mr-5 mt-3 bg-[#E8EAEB] "></div>
          <Calender className="mt-1.5" />
          <div>
            <h3 className=" font-extrabold text-[15px] leading-[25px] text-greens ">
              Calender
            </h3>
            <p className=" font-semibold text-[15px] leading-[25px] text-dark-60 ">
              Pick a date
            </p>
          </div>
        </div>
        <button className=" w-[150px] h-[54px] rounded-[40px] shadow-[#FFDA32] bg-[#FFDA32] font-extrabold text-[16px] leading-[22px] shadow-lg ">
          Search{" "}
        </button>
      </div>
    </div>
  );
};

export default Banner;
