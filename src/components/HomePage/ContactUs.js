import React from "react";
import Image from "next/image";
import Form from "../Form";

export default function ContactUs() {
  return (
    <div className="relative  mt-32 px-[209px] pb-20 bg-[#f8f8f8]">
      <div className="grid grid-cols-2 items-center">
        <div
          className=" flex flex-col justify-center md:justify-between items-center gap-8  bg-secondary-color md:pr-32 pt-14 rounded-3xl"
          id="contact-us"
        >
          <div className="flex flex-col gap-5 ">
            <span className="w-full text-[22px] md:text-[40px] text-primary-color font-bold ">
              Contact Us
            </span>
          </div>
          <div className="w-full px-8 md:px-0">
            <Form />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-16">
          <div className="flex flex-col gap-6">
            <span className=" text-[28px] test-[#222222] font-light">
              Address
            </span>
            <span className="text-lg text-[#383838] font-thin">
              10800 West Pico Boulevard Infinity Loop Cupertino, Los Angeles,
              USA
            </span>
          </div>
          <div className="flex flex-col gap-6">
            <span className=" text-[28px] test-[#222222] font-light">
              Opening Hours:
            </span>
            <span className="flex flex-col text-lg text-[#383838] font-thin">
              <span>Mo-Fr: 8:00-19:00</span>
              <span>Sa: 8:00-14:00</span>
              <span>So: closed</span>
            </span>
          </div>
          <div className="flex flex-col gap-6">
            <span className=" text-[28px] test-[#222222] font-light">
              Contact
            </span>
            <span className="flex flex-col gap-1text-lg text-[#383838] font-thin">
              <span>office@en-co.com</span>
              <span>555-3587 347</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
