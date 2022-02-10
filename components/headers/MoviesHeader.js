import React, { useContext } from "react";
import { SvgInputPropsSearch } from "../svg";
import DatePick from "../miu/DatePicker.miu";
import DateTimePick from "../miu/DateTimePicker.miu";
import { MovieContext } from "../../context";
import { searchSchedules } from "../../pages/api/movies";

const MoviesHeader = () => {
  const { searchType, setSearchResult, setIsLoading } =
    useContext(MovieContext);

  const getValue = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const result = await searchSchedules({
      theatre_name: e.target.theatre_name.value,
      time_start: e.target.time_start.value,
      time_end: e.target?.time_end?.value || "",
    });

    setSearchResult(() => result.map((r) => r.movie_info));
    setIsLoading(false);
  };

  return (
    <>
      <div className="font-dm-sans font-bold text-white text-[32px] md:text-[48px] my-10 lg:my-[14px]">
        Search your movies here!
      </div>
      <form
        method="POST"
        className="w-full font-dm-sans"
        onSubmit={(e) => getValue(e)}
      >
        <div className="relative text-black focus-within:text-gray-400 w-full flex flex-wrap">
          {searchType == "Timeslot" && (
            <>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2 mb-[25px]">
                <button
                  type="submit"
                  className="p-1 focus:outline-none focus:shadow-outline"
                >
                  <SvgInputPropsSearch />
                </button>
              </span>

              <input
                type="search"
                name="theatre_name"
                className={`py-2 text-sm bg-white pl-10 outline-none pr-3 h-[50px] rounded-[40px] font-dm-sans search mb-[25px] ${
                  searchType === "Timeslot"
                    ? "w-full"
                    : "w-full md:w-[48%] mr-1"
                }`}
                placeholder="Search by theatre...."
                autoComplete="off"
              />
            </>
          )}
        </div>

        {searchType === "Timeslot" ? (
          <div className="flex justify-between flex-wrap">
            <DateTimePick fieldName="time_start" />
            <DateTimePick fieldName="time_end" />
          </div>
        ) : (
          <div className="flex justify-between flex-wrap relative">
            <input
              type="search"
              name="theatre_name"
              className={`py-2 text-sm bg-white pl-10 outline-none pr-3 h-[50px] rounded-[40px] font-dm-sans search ${
                searchType === "Timeslot"
                  ? "w-full"
                  : "w-full md:w-[48%] mr-1 mb-[10px] pl-4"
              }`}
              placeholder="Search by theatre...."
              autoComplete="off"
              onKeyDown={() => {}}
            />
            <DatePick fieldName="time_start" />
          </div>
        )}

        <button
          type="submit"
          className="rounded-[40px] h-[50px] font-bold font-dm-sans bg-[#FED530] text-[21px] mt-[15px] w-full md:w-[159px]"
        >
          Search
        </button>
      </form>
    </>
  );
};

export default MoviesHeader;
