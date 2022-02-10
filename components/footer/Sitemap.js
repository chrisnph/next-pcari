import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelopeSquare,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";

const Sitemap = () => {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex justify-start items-center">
        <div className="grid grid-cols-3 grid-rows-4 gap-4 w-full">
          <div className="text-left text-[16px] font-bold">Product</div>
          <div className="text-left text-[16px] font-bold">Media Group</div>
          <div className="text-left text-[16px] font-bold">Sitemap</div>
          <div className="text-left text-[16px] font-normal">Movies</div>
          <div className="text-left text-[16px] font-normal">Nice Studio</div>
          <div className="text-left text-[16px] font-normal">About</div>
          <div className="text-left text-[16px] font-normal">TV Show</div>
          <div className="text-left text-[16px] font-normal">Nice News</div>
          <div className="text-left text-[16px] font-normal">Careers</div>
          <div className="text-left text-[16px] font-normal">Videos</div>
          <div className="text-left text-[16px] font-normal">Nice TV</div>
          <div className="text-left text-[16px] font-normal">Press</div>
        </div>
      </div>
      <div className="row-span-2 mt-10 flex items-center">
        <div className="flex xs:flex-wrap lg:flex-nowrap w-full xs:flex-col lg:flex-row">
          <div className="xs:py-1 pr-10 flex">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3" />
            <span className="text-[0.875rem]">8819 Ohio St. South Gate, California 90280</span>
          </div>
          <div className="xs:py-1 pr-10 flex">
            <FontAwesomeIcon icon={faEnvelopeSquare} className="mr-3" />
            <span className="text-[0.875rem]">ourstudio@hello.com</span>
          </div>
          <div className="xs:py-1 flex">
            <FontAwesomeIcon icon={faPhoneAlt} className="mr-3" />
            <span className="text-[0.875rem]">+271 386-647-3637</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
