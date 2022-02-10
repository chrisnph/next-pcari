import React from "react";
import Newsletter from "./Newsletter";
import Sitemap from "./Sitemap";

export const Footer = () => {
  return (
    <footer className="flex flex-wrap lg:flex-nowrap">
      <div className="w-full lg:w-[40%] bg-[#3D3D3D] flex flex-col items-center font-dm-sans text-white px-[8%] py-[5%] lg:px-[3%]">
        <Newsletter />
      </div>
      <div className="flex-grow lg:w-auto bg-[#2E2E2E] grid grid-cols-1 text-white font-dm-sans px-[8%] py-[5%] lg:px-[3%]">
        <Sitemap />
      </div>
    </footer>
  );
};

export default Footer;
