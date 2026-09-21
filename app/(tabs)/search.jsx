import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  Alert,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, colors } from "../../constant";
import { useRouter } from "expo-router";
import { movies } from "../../data";
import SearchInput from "@/components/ui/search-input";
import InlineMovieCard from "@/components/movie/inline-movie-card";
import EmptyState from "@/components/ui/empty-state";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchMovies, setSearchmovies] = useState([]);

  const router = useRouter();

  const handleBackPress = () => {
    router.back();
  };

  const handleNoteActionPress = () => {
    Alert.alert(
      "Note Action",
      "Use the search box below to search for your favorite movies.",
      [
        {
          style: "destructive",
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
        },
        {
          style: "default",
          text: "OK",
          onPress: () => console.log("OK Pressed"),
        },
      ],
    );
  };

  const handleSearch = () => {
    const cleanSearchTerm = searchTerm.toLowerCase().trim();

    const filteredMovies = movies.filter((m) =>
      m.title.toLowerCase().includes(cleanSearchTerm),
    );
    setSearchmovies(filteredMovies);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* header nav */}
      <View className="flex-row items-center justify-between px-4 py-2">
        <Pressable onPress={handleBackPress}>
          <Image source={icons.back} className="w-8 h-8" />
        </Pressable>
        <Text className="text-neutral text-xl font-bold">Search</Text>
        <Pressable onPress={handleNoteActionPress}>
          <Image source={icons.noteAction} className="w-12 h-12" />
        </Pressable>
      </View>
      <View className="px-4 py-2">
        <SearchInput
          initialValue={searchTerm}
          onSearch={setSearchTerm}
          placeholder={"Search for your favorite movie...."}
          onClear={() => setSearchTerm("")}
          onSubmit={handleSearch}
        />
      </View>

      <FlatList
        data={searchMovies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <InlineMovieCard movie={item} />}
        contentContainerClassName={"pb-20 px-4 gap-4"}
        ListEmptyComponent={
          <View className="flex-1 items-center justify-center px-5">
            <EmptyState
              icon={icons.search_2}
              title="we are sorry, we can not find the movie"
              description="Find your movie by Type title, categories, years, etc "
            />
          </View>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: 2,
  },
});

export default Search;
