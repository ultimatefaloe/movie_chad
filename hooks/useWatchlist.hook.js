import { useEffect, useState } from "react";
import { getData, saveData, clearData } from "../utils/async-storage";

export const useWatchList = () => {
  const [watchlist, setWatchlist] = useState([]);

  const fetchWatchLists = async () => {
    try {
      const data = await getData();
      if (data) {
        setWatchlist(data);
      } else {
        setWatchlist([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWatchLists();
  }, []);

  const addWatchlist = async (data) => {
    try {
      if(!data) return "No data provided";
      const updatedWatchlist = [data, ...watchlist];
      await saveData(updatedWatchlist);
      setWatchlist(updatedWatchlist);
    } catch (error) {
      console.error(error);
    }
  };

// clear
// remove


  return { watchlist, addWatchlist };
};
