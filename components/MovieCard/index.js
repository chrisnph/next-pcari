import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEye } from "@fortawesome/free-solid-svg-icons";

const MovieCard = ({ size, info }) => {
  return (
    <>
      <div
        className={`${
          size === "large" ? "lg:col-span-2" : "lg:col-span-1"
        } card mr-0 md:mr-[12px]`}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${
            info.image ? info.image : "/bg-card.jpg"
          }`,
        }}
      >
        <div className="flex flex-col h-full justify-between">
          <div className="text-[14px] text-[#2E2E2E] font-bold bg-[#FED530] rounded-full w-fit flex justify-center items-center px-3 py-1">
            <div>{info.genre.join(", ")}</div>
          </div>
          <div>
            <div className="flex flex-wrap w-[100%] justify-start items-center">
              <div>
                <FontAwesomeIcon
                  icon={faClock}
                  className="text-black bg-white rounded-full border-2 justify-self-end mr-2"
                />
                <span className="text-white col-span-2 mr-5">
                  {info.duration}
                </span>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faEye}
                  className="text-black bg-white rounded-full border-2 justify-self-end mr-2"
                />
                <span className="text-white col-span-2">
                  {info.views} views
                </span>
              </div>
            </div>
            <div className="text-white text-[24px] lg:text-[32px] font-bold mt-3">
              {info.title}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
