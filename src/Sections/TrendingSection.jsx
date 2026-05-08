import React from "react";
import Container from "../Components/Container";
import trending_bg from "../assets/trending_bg.jpg";
import trending_img from "../assets/trending_img.svg";
import Location from "../Components/Icons/Location";
import Star from "../Components/Icons/Star";
import love from "../assets/love.svg";
import share from "../assets/share.svg";
import Button from "../Components/Button";

const TrendingSection = () => {
  return (
    <section
      className=" h-[593px] w-full bg-no-repeat bg-cover "
      style={{ backgroundImage: `url(${trending_bg})` }}
    >
      <Container>
        <div className="flex justify-between   ">
          <div>
            <img src={trending_img} alt="" />
          </div>
          <div className=" mt-38">
            {/* Badge */}
            <span className="bg-greenis text-[12px] font-extrabold px-4 py-2 rounded-full ">
              TRENDING NOW
            </span>

            {/* Title */}
            <h1 className="text-[36px] font-bold leading-auto mt-2.5  font-volkhov text-white mb-2.5">
              Wilderlife of Alaska
            </h1>

            {/* Location + Rating */}
            <div className="flex items-center gap-3 text-sm mb-5 text-white">
              <div className="flex items-center gap-1">
                <div className="flex items-center gap-1">
                  <span>
                    <Location />
                  </span>
                  <span className=" font-semibold leading-auto text-[14px]  ">
                    {" "}
                    Alaska, USA
                  </span>
                </div>
              </div>

              <span>|</span>

              <div className="flex items-center ">
                <span>
                  <ul className="flex  w-[75px] items-center size-3.5">
                    <li>
                      {" "}
                      <Star />
                    </li>
                    <li>
                      <Star />
                    </li>
                    <li>
                      <Star />
                    </li>
                    <li>
                      <Star />
                    </li>
                    <li>
                      <Star />
                    </li>
                  </ul>
                </span>
                <span className="ml-1 text-[14px] font-bold  leading-auto ">
                  4.9 (300 reviews)
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="max-w-[505px] text-[16px] text-white  mb-12.5">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-4">
              <Button title={"Book Now"} className={" px-15"} />

              <span className="text-white/50">|</span>

              <button className="">
                <img src={love} alt="Love" />
              </button>

              <button className="">
                <img src={share} alt="Share" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TrendingSection;
