import React, { useContext } from "react";
import { MovieContext } from "../context";
import { SvgArrowRight } from "./svg";

const DropdownSuggestion = ({ childs }) => {
  const { searchDrop, setSearchDrop } = useContext(MovieContext);
  const { setSearchType } = useContext(MovieContext);

  return (
    <ul
      className={`${
        !searchDrop ? "hidden" : ""
      } font-dm-sans  text-[14px] bg-white rounded-[9px] border-none  w-auto min-w-[170px] z-10 absolute left-[10px] lg:left-[-5px] top-[45px] active:block focus:block py-1 lg:translate-x-[-90%] chat-bubble-top-right`}
    >
      {childs.map((child, i) => (
        <li
          key={i}
          className="px-3 py-1 relative cursor-pointer hover:bg-[rgba(0,0,0,.1)] flex justify-start items-center"
          onClick={() => {
            setSearchDrop(!searchDrop);
            setSearchType(child);
          }}
        >
          <SvgArrowRight />
          <div className="ml-1 leading-6">{child}</div>
        </li>
      ))}
    </ul>
  );
};

export default DropdownSuggestion;
