import Layout from "../components/Layout";
import "../styles/globals.scss";

import { MovieContext } from "../context";
import { useEffect, useMemo, useState } from "react";
import { getAllMovies } from "./api/movies";

const MyApp = ({ Component, pageProps }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchDrop, setSearchDrop] = useState(false);
  const [searchType, setSearchType] = useState(null);
  const [searchResult, setSearchResult] = useState(null);
  const [movieListing, setMovieListing] = useState(null);

  const providerValue = useMemo(
    () => ({
      searchDrop,
      setSearchDrop,
      searchType,
      setSearchType,
      searchResult,
      setSearchResult,
      movieListing,
      setMovieListing,
      isLoading,
      setIsLoading,
    }),
    [
      searchDrop,
      setSearchDrop,
      searchType,
      setSearchType,
      searchResult,
      setSearchResult,
      movieListing,
      setMovieListing,
      isLoading,
      setIsLoading,
    ]
  );

  useEffect(async () => {
    if (!movieListing) {
      const movies = await getAllMovies({ orderBy: "newest" });
      setIsLoading(false);
      setMovieListing(movies);
    }
  }, [movieListing]);

  return (
    <MovieContext.Provider value={providerValue}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MovieContext.Provider>
  );
};

export default MyApp;
