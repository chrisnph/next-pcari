import Head from "next/head";
import { useContext, useEffect } from "react";
import PlayButton from "../components/buttons/playButton";
import { HomeHeader, MoviesHeader } from "../components/headers";
import { SearchContext } from "../context";

export const Faq = () => {
  const { searchType, setSearchType } = useContext(SearchContext);

  useEffect(() => setSearchType(null), []);

  return (
    <>
      <Head>
        <title>FAQ | PcariMovie</title>
      </Head>
      <div className="flex flex-wrap lg:flex-nowrap justify-center h-full bg-transparent relative py-[50px] lg:py-[100px] px-0 lg:px-20">
        <PlayButton />
        <div className="flex flex-col justify-center items-start lg:max-w-[630px] w-full ml-auto lg:ml-20 mt-[24px] lg:mt-0 px-[8%] py-[5%] lg:px-[3%] md:justify-center">
          {!searchType ? <HomeHeader /> : <MoviesHeader />}
        </div>
      </div>
    </>
  );
};

export default Faq;
