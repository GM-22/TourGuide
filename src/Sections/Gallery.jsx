import React from "react";
import Container from "../Components/Container";
import SectionHeader from "../Components/SectionHeader";
import gallary1 from "../assets/gallary1.jpg";
import gallary2 from "../assets/gallary2.jpg";
import gallary3 from "../assets/gallary3.jpg";
import gallary4 from "../assets/gallary4.jpg";
import gallary5 from "../assets/gallary5.jpg";
import gallary6 from "../assets/gallary6.jpg";
import gallary7 from "../assets/gallary7.jpg";
import gallary8 from "../assets/gallary8.jpg";


const Gallery = () => {
  return (
    <section  className="mb-[71px]">
      <Container>
        <div className="flex justify-between items-center mb-15 mt-[74px]">
          <div className="max-w-[538px]">
            <SectionHeader
              description={
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit"
              }
              title="From The Gallery"
            />
          </div>
          <div>
            <button className="text-[14px] leading-4.5 font-bold px-10 py-4.5 bg-[#495560] text-white ">View All Images</button>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-7.5">
            <img src={gallary1} alt="gallary1" className="w-full h-full object-cover rounded-[3px]" />
            <img src={gallary2} alt="gallary2" className="w-full h-full object-cover rounded-[3px]" />
            <img src={gallary3} alt="gallary3" className="w-full h-full object-cover rounded-[3px]" />
            <img src={gallary4} alt="gallary4" className="w-full h-full object-cover rounded-[3px]" />
            <img src={gallary5} alt="gallary5" className="w-full h-full object-cover rounded-[3px]" />
            <img src={gallary6} alt="gallary6" className="w-full h-full object-cover rounded-[3px]" />
            <img src={gallary7} alt="gallary7" className="w-full h-full object-cover rounded-[3px]" />
            <img src={gallary8} alt="gallary8" className="w-full h-full object-cover rounded-[3px]" />
           
        </div>
      </Container>
    </section>
  );
};

export default Gallery;
