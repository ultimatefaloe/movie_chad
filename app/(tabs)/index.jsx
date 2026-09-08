import { useState } from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";
import { trendingMovies } from "../../data";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../constant";
import Header from "../../components/home/header";
import { useRouter } from "expo-router";

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

export default function App() {
  const router  = useRouter()
  const [active, setActive] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const routeToSearch = () => {
    setSearchTerm("");
    router.push(`/search`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={trendingMovies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="border-b border-b-accent">
            <Text className="text-neutral p-2 border-b-accent">
              {item.title}
            </Text>
          </View>
        )}
        ListHeaderComponent={
          <Header
            tabs={tabs}
            active={active}
            setActive={setActive}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            routeToSearch={routeToSearch}
          />
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});
