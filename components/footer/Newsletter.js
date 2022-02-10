import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Newsletter = () => {
  return (
    <div className="w-full">
      <div className="w-full font-medium sm:text-2xl md:text-3xl lg:text-6xl pb-[32px]">
        PcariMovie
      </div>
      <div className="w-full xs:text-[12px] md:text-[16px]  text-[#E5E5E5] font-normal pb-[40px]">
        Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do
        eiusmod tempor incididunt ut labore et.
      </div>
      <div className="w-full pb-[24px]">Join Newsletters</div>
      <div className="w-full xs:h-auto h-[64px] bg-[#525252] rounded-[8px] flex justify-between items-center px-[9px] py-[8px] xs:flex-wrap md:flex-nowrap">
        <input
          type="text"
          className="xs:w-full md:w-[75%] lg:w-[83%] h-[42px] xs:mb-3 md:mb-0 items-center rounded-[8px] bg-transparent p-2 text-[16px] outline-none border-0 font-dm-sans"
          placeholder="Insert your mail here"
        />
        <button className="bg-[#FED530] text-black xs:w-full md:w-[48px] h-[48px] rounded-[8px]">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
