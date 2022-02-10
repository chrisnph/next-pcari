import React, { useContext, useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropdownSuggestion from "../DropdownSuggestion";
import { MovieContext } from "../../context";

const NavSearch = () => {
  const dropdownSuggestion = ["Theatre", "Timeslot"];

  const { searchDrop, setSearchDrop } = useContext(MovieContext);

  return (
    <>
      <div className="lg:text-right ml-5 mt-3 lg:m-0 relative">
        <FontAwesomeIcon
          icon={faSearch}
          className="text-white text-[19.76px] font-normal cursor-pointer lg:mr-5"
          onClick={() => setSearchDrop(!searchDrop)}
        />

        <div className={!searchDrop ? "hidden" : ""}>
          <DropdownSuggestion childs={dropdownSuggestion} />
        </div>
      </div>
    </>
  );
};

export default NavSearch;
