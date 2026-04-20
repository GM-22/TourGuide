import React from "react";
import Container from "../Components/Container";
import Section from "./Section";
import Payment1 from "../assets/payment1.png";
import Payment2 from "../assets/payment2.png";
import Facebook from "../assets/fb.png";
import Instagram from "../assets/instra.png";
import Pinterest from "../assets/pinterest.png";

const Footer = () => {
  return (
    <Section className="bg-[#13253F] mt-10">
      <Container>
        <div className="grid grid-cols-4 gap-40 justify-between pt-20 pb-25">
          <div className="flex flex-col gap-3">
            <div>
              <h4 className="font-mulish text-[15px] text-white font-bold mb-2.5">
                Language
              </h4>
              <div className="relative">
                <select className="w-full bg-transparent border border-gray-500 rounded px-4 py-3 appearance-none text-white focus:outline-none">
                  <option value="en" selected className="text-black">
                    English
                  </option>
                  <option value="bn" className="text-black">
                    Bangla
                  </option>
                </select>

                {/* Custom arrow */}
                <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-dark-60">
                  ▼
                </span>
              </div>
            </div>

            {/* Currency */}
            <div>
              <h4 className="font-mulish text-[15px] text-white font-bold mb-2.5">
                Currency
              </h4>
              <div className="relative">
                <select className="w-full bg-transparent border border-gray-500 rounded px-4 py-3 appearance-none focus:outline-none text-white">
                  <option value="usd selected className='text-black">
                    U.S. Dollar ($)
                  </option>
                  <option value="bdt" className="text-black">
                    Bangladeshi Taka (৳)
                  </option>
                </select>

                {/* Custom arrow */}
                <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-dark-60">
                  ▼
                </span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-mulish text-[15px] text-white font-bold mb-2">
              Company
            </h4>
            <ul className="font-mulish text-[15px] text-white/60 space-y-2">
              <li>About Us</li>
              <li>Blog</li>
              <li>Press Room</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h4 className="font-mulish text-[15px] text-white font-bol mb-2">
              Help
            </h4>
            <ul className="font-mulish text-[15px] text-white/60 space-y-2">
              <li>Contact Us</li>
              <li>FAQs</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Sitemap</li>
            </ul>
          </div>

          <div>
            <h4 className="font-mulish text-[15px] text-white font-bol mb-5 text-nowrap">
              Payment methods possible
            </h4>
            <div className="flex gap-2.5 flex-col mb-6.5">
              <img src={Payment1} alt="" />
              <img src={Payment2} alt="" />
            </div>
            <h4 className="font-mulish text-[15px] text-white font-bol mb-2.5 text-nowrap">
              Company
            </h4>
            <p className="font-mulish text-[15px] text-white/60 text-nowrap">
              Become a Tour guide for Us
            </p>
          </div>
        </div>
      </Container>
      <div className="bg-[#0F1E32] py-6">
        <Container>
          <div className="flex justify-between items-center">
            <p className="text-[15px] font-mulish text-white/60">
              Copyright 2026 Tour Guide. All Rights Reserved
            </p>
            <div className="flex gap-4">
              <img src={Facebook} alt="" />
              <img src={Instagram} alt="" />
              <img src={Pinterest} alt="" />
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default Footer;