import React from "react";
import SectionHeader from "../Components/SectionHeader";
import Alaska from "../assets/Alaska.jpg";
import Container from "../Components/Container";
import Bus from "../Components/Icons/Bus";
import Nature from "../Components/Icons/Nature";
import Car from "../Components/Icons/Car";
import Bag from "../Components/Icons/Bag";
import Local from "../Components/Icons/Local";
import Alaksa1 from "../assets/Alaksa1.jpg";
import Alaksa2 from "../assets/Alaksa2.jpg";
import Alaksa3 from "../assets/Alaksa3.jpg";
import Alaksa4 from "../assets/Alaksa4.svg";
import Clock from "../Components/Icons/Clock";
import Family from "../Components/Icons/Family";
import Transport from "../Components/Icons/Transport";
import Star from "../Components/Icons/Star";
const Explore = () => {
  return (
    <section className="py-30">
      <Container>
        <div className=" w-[696px] mx-auto text-center items-center mb-0">
          <SectionHeader
            title="Explore Our Destinations"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit"
          />
        </div>
        <div className=" mt-10 ">
          <div className=" flex gap-2.5 justify-center mb-7.5 ">
            <ExploreButon title={"New York"} />
            <ExploreButon title={"California"} />
            <ExploreButon title={"Alaska"} />
            <ExploreButon title={"Sydney"} />
            <ExploreButon title={"Dubai"} />
            <ExploreButon title={"London"} />
            <ExploreButon title={"Tokyo"} />
            <ExploreButon title={"Delhi"} />
          </div>
          <div className="relative">
            <img src={Alaska} alt="Alaska" />
            <div className=" shadow-lg p-12.5 gap-[116px] flex absolute -bottom-[200px] left-1/2 transform -translate-x-1/2 w-[1110px]  h-[275px] rounded-[3px] bg-[#F9FDFF] ">
              <div className="w-[464px]">
                <h1 className=" font-volkhov font-bold text-[64px] leading-auto mb-2.5 ">
                  Alaska
                </h1>
                <p className=" font-mulish font-semibold text-[16px] leading-[25px] text-dark-60 ">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
              <div className="mt-5 flex flex-col gap-3  w-[430px]">
                <div className=" w-[212px] px-[19.5px] py-[11px] items-center bg-white shadow-md flex gap-[5px]    ">
                  <Bus />
                  <h3 className=" font-mulish font-bold text-[14px] leading-auto text-[#D176E0] ">
                    Public Transportations
                  </h3>
                </div>
                <div className="flex gap-2.5">
                  <div className=" w-[196px] px-[19px] py-2.5 items-center bg-white shadow-md flex gap-[5px]    ">
                    <Nature />
                    <h3 className=" font-mulish font-bold text-[14px] leading-auto text-[#7BBCB0] ">
                      Nature & Adventure
                    </h3>
                  </div>
                  <div className=" px-5 py-2.5 items-center bg-white shadow-md flex gap-[5px]    ">
                    <Car />
                    <h3 className=" font-mulish font-bold text-[14px] leading-auto text-[#E4B613] ">
                      Private Transportations
                    </h3>
                  </div>
                </div>
                <div className="flex gap-2.5">
                  <div className=" px-[19.5px] py-[11px] items-center bg-white shadow-md flex gap-[5px]    ">
                    <Bag />
                    <h3 className=" font-mulish font-bold text-[14px] leading-auto text-[#FC3131] ">
                      Business Tours
                    </h3>
                  </div>
                  <div className=" px-[19.5px] py-[11px] items-center bg-white shadow-md flex gap-[5px]    ">
                    <Local />
                    <h3 className=" font-mulish font-bold text-[14px] leading-auto text-[#5C9BDE] ">
                      Local Visit
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[254px] flex gap-7.5 justify-center flex-wrap">
          <Cards
            img={Alaksa1}
            title="Alaska: Vintage Double Decker Bus Tour & Thames"
          />
          <Cards img={Alaksa2} title="Alaska: Northern Lights Explorer" />
          <Cards img={Alaksa3} title="Alaska: Dog Sledding Adventure" />
          <Cards img={Alaksa4} title="Alaska: Wildlife Photography Tour" />
        </div>
      </Container>
    </section>
  );
};

const ExploreButon = ({ title }) => {
  return (
    <button className=" w-[130px] h-[44px] font-mulish font-bold text-[14px] leading-auto text-dark-80 border border-greens rounded-[30px] py-2.5 px-8  hover:bg-greens hover:text-white ">
      {title}
    </button>
  );
};
export const Cards = ({ img, title }) => {
  return (
    <div className=" w-[270px] h-[405px] bg-white rounded-lg shadow-md overflow-hidden">
      
      <img src={img} alt="" className="w-full h-[180px] p-2.5" />
    
      <div className="px-5 space-y-3">
       
        <h2 className="text-[16px] font-volkhov font-normal  leading-5.5">
          {title}
        </h2>
        {/* Info */}
        <div className="space-y-2 text-[14px] font-semibold text-dark-80 mb-5">
          <div className="flex items-center gap-2">
            <span><Clock /></span>
            <span>Duration 2 hours</span>
          </div>
          <div className="flex items-center gap-2">
            <span><Transport /></span>
            <span>Transport Facility</span>
          </div>
          <div className="flex items-center gap-2">
            <span><Family /></span>
            <span>Family Plan</span>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-gray">
        {/* Rating */}
        <div>
          <div >
            <ul className="flex items-center size-3.5">
              <li> <Star  /></li>
              <li><Star /></li>
              <li><Star /></li>
              <li><Star /></li>
              <li><Star  /></li>
            </ul>
          </div>
          <p className="text-[12px] font-semibold text-dark-60">584 reviews</p>
        </div>
        {/* Price */}
        {/* <div >
          
         
        </div> */}
        <div className="text-right  ">
            <h3 className="text-greens  h-[23px] font-volkhov font-bold  text-[20px]">$35.00</h3>
             <p className="text-[12px] font-semibold text-dark-60">per person</p>

        </div>
      </div>
    </div>
  );
};

export default Explore;
