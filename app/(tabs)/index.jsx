import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../constant";
import Header from "../../components/home/header";
import { useRouter } from "expo-router";
import { movies } from "../../data";
import MovieCard from "../../components/movie/movie-card";
import EmptyState from "@/components/ui/empty-state";

const tabs = [
  {
    title: "All",
    value: "all",
  },
  {
    title: "Action",
    value: "action",
  },
  {
    title: "Comedy",
    value: "comedy",
  },
  {
    title: "Drama",
    value: "drama",
  },
  {
    title: "Horror",
    value: "horror",
  },
  {
    title: "Sci-Fi",
    value: "sci-fi",
  },
];

const Index = () => {
  const router = useRouter();
  const [stateMovies, setStateMovies] = useState(movies);
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const routeToSearch = () => {
    router.push("/search?searchTerm=" + encodeURIComponent(searchTerm));
    setSearchTerm("");
  };

  const filterFn = (movies) => {
    const filterMovies = movies.filter((movie) => {
      if (activeTab === "all") {
        return true;
      }
      const genreMatch = movie.genre
        .map((g) => g.toLowerCase())
        .includes(activeTab.toLowerCase());

      return genreMatch;
    });
    setStateMovies(filterMovies);
  };

  useEffect(() => {
    filterFn(movies);
  }, [activeTab]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        // horizontal={true}
        data={stateMovies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MovieCard movie={item} />}
        ListHeaderComponent={
          <Header
            tabs={tabs}
            active={activeTab}
            setActive={setActiveTab}
            searchTerm={searchTerm}
            onClear={() => setSearchTerm("")}
            setSearchTerm={setSearchTerm}
            routeToSearch={routeToSearch}
          />
        }
        ListEmptyComponent={
          <View className="p-4">
            <EmptyState
              title={"No movie found"}
              description={"There is no movie matching your criteria."}
            />
          </View>
        }
        numColumns={3}
        columnWrapperStyle={styles.listContent}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 16,
          paddingBottom: 24, // Pushes content above tab bar layout seamlessly
        }}
      />
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: 2,
  },
  listContent: {
    paddingBottom: 16,
    gap: 16,
  },
});
