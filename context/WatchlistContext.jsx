import React, { createContext, useContext, useState, useEffect } from "react";
import { getData, saveData, clearData } from "../utils/async-storage";

const WatchlistContext = createContext();

export const WatchListProvider = ({ children }) => {
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
      console.log("Adding to watchlist:", data);
      if (!data) return "No data provided";
      const updatedWatchlist = [data, ...watchlist];
      await saveData(updatedWatchlist);
      setWatchlist(updatedWatchlist);
    } catch (error) {
      console.error(error);
    }
  };

  const clearWatchlist = async () => {
    try {
      await clearData();
      setWatchlist([]);
    } catch (error) {
      console.error(error);
    }
  };

  const removeWatchlist = async (data) => {
    try {
      if (!data) return "No data provided";
      const updatedWatchlist = watchlist.filter(
        (item) => item.id.toString() !== data.id.toString(),
      );
      await saveData(updatedWatchlist);
      setWatchlist(updatedWatchlist);
    } catch (error) {
      console.error(error);
    }
  };

  const refresh = async () => {
    try {
      const data = await getData();
      if (data) {
        return data;
      } else {
        return [];
      }
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <WatchlistContext.Provider
      value={{
        watchlist,
        addWatchlist,
        fetchWatchLists,
        clearWatchlist,
        removeWatchlist,
        refreshWatchlist: refresh,
      }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};

export const useWatchListContext = () => {
  const context = useContext(WatchlistContext);
  if (!context) {
    throw new Error(
      "useWatchlistContext must be used within a WatchListProvider",
    );
  }
  return context;
};
