import React from "react";
import Container from "../Components/Container";
import SectionHeader from "../Components/SectionHeader";
import stories1 from "../assets/stories1.jpg";
import stories2 from "../assets/stories2.jpg";
import stories3 from "../assets/stories3.jpg";
import stories4 from "../assets/stories4.jpg";
import account from "../assets/account.jpg";

const Stories = () => {
  return (
    <section>
      <Container>
        <div className="flex justify-between items-center mb-15 mt-[74px]">
          <div className="max-w-[538px]">
            <SectionHeader
              description={
                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit"
              }
              title="Latest Stories"
            />
          </div>
          <div>
            <button className="text-[14px] leading-4.5 font-bold px-10 py-4.5 bg-[#495560] text-white ">
              View All Images
            </button>
          </div>
        </div>
        <div className="flex gap-7.5">
            <Card img={stories1} title={"Jackie Moncada"} description={"7 Signs and Symptoms of Iodine Deficiency"} />
            <Card img={stories2} title={"Jackie Moncada"} description={"How to Fix Your Sleep Schedule: 7 Easy Ways"} />
            <Card img={stories3} title={"Jackie Moncada"} description={"10 Proven Health Benefits of Cinnamon"} />
            <Card img={stories4} title={"Jackie Moncada"} description={"11 Health Benefits of Turmeric and Curcumin"} />
        </div>
      </Container>
    </section>
  );
};
const Card = ({ img, title, description }) => {
  return (
    <div className="w-[270px] h-[315px] rounded-[3px] shadow-lg overflow-hidden  ">
      <img src={img} alt={title} className="w-full h-[200px] object-cover" />
      <div className="flex gap-1.5 items-center px-5 my-[7px]">
        <span><img src={account} alt="Account" /></span>
        <span><h3 className="text-[14px] font-semibold leading-7.5 text-dark-60">{title}</h3></span>
      </div>
      <p className="text-[18px] px-5 leading-6.5 font-volkhov">{description}</p>
    </div>
  );
};
export default Stories;
