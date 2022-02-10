import Head from "next/head";
import { useContext, useEffect } from "react";
import PlayButton from "../components/buttons/playButton";
import { HomeHeader, MoviesHeader } from "../components/headers";
import { MovieContext } from "../context";

export const Home = () => {
  const { searchType, setSearchType } = useContext(MovieContext);

  useEffect(() => setSearchType(null), []);

  return (
    <>
      <Head>
        <title>PcariMovie</title>
      </Head>
      <div className="flex flex-wrap lg:flex-nowrap justify-center h-full bg-transparent relative py-[50px] lg:py-[100px] px-0 lg:px-20">
        <PlayButton />
        <div className="flex flex-col justify-center items-start lg:max-w-[630px] w-full ml-auto lg:ml-20 mt-[24px] lg:mt-0 px-[8%] lg:px-[3%] md:justify-center">
          {!searchType ? <HomeHeader /> : <MoviesHeader />}
        </div>
      </div>
    </>
  );
};

export default Home;
