import AsyncStorage from "@react-native-async-storage/async-storage";

// get
// save
// clear

const KEY = "movie:chad:key";

// retrive data from storage
export const getData = async () => {
  try {
    const data = await AsyncStorage.getItem(KEY);
    // if(!data) return null;
    // const parsedData = JSON.parse(data);
    // return parsedData;

    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Error retrieving data from storage:", error);
  }
};
export const saveData = async (data) => {
  try {
    const jsonData = JSON.stringify(data);
    await AsyncStorage.setItem(KEY, jsonData);
  } catch (error) {
    console.error("Error saving data to async storage", error);
  }
};
export const clearData = async () => {
  try {
    await AsyncStorage.removeItem(KEY);
  } catch (error) {
    console.error("Error clearing data from async storage", error);
  }
};
