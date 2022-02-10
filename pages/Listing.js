import Link from "next/link";
import { useContext } from "react";
import MovieCard from "../components/MovieCard";
import { MovieContext } from "../context";
import { formatMovieInfo } from "../helper/movies";
import layoutStyles from "../styles/Layout.module.scss";
import { SvgSpinner } from "../components/svg";

export const Listing = () => {
  const { movieListing, searchResult, isLoading } = useContext(MovieContext);

  const movies = !searchResult ? movieListing : searchResult;

  return (
    <div
      className={`${layoutStyles.bgLinearInvertBlack270} flex flex-wrap px-[8%] py-[5%] lg:px-[3%] md:justify-center`}
    >
      <div className="font-dm-sans flex justify-between items-center w-full mb-[56px]">
        <div className="font-medium text-white text-[32px] lg:text-[48px]">
          {!searchResult
            ? "New Releases"
            : isLoading
            ? "Searching ..."
            : searchResult.length > 0
            ? "Search Results"
            : "No Result Found"}
        </div>
        {!movies && (
          <Link href="/#">
            <a className="flex items-center font-bold text-[18px] lg:text-[24px] text-[#FED530] h-[48px]">
              View More
            </a>
          </Link>
        )}
      </div>

      {isLoading ? (
        <SvgSpinner />
      ) : (
        <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {movies?.map((movie, i) => {
            const { genre, duration, title, views, image } =
              formatMovieInfo(movie);

            return (
              <MovieCard
                key={i}
                size={i === 0 && "large"}
                info={{
                  genre,
                  duration,
                  views,
                  title,
                  image,
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Listing;
