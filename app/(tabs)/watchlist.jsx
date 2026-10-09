import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList, Pressable } from "react-native";
import EmptyState from "../../components/ui/empty-state";
import { icons, colors } from "../../constant";
import { Image } from "expo-image";
import { useNavigation } from "expo-router";
import InlineMovieCard from "@/components/movie/inline-movie-card";
import { SafeAreaView } from "react-native-safe-area-context";
import { useWatchListContext } from "../../context/WatchlistContext";

const Watchlist = () => {
  const { watchlist, clearWatchlist } = useWatchListContext();
  const navigation = useNavigation();
  
  // console.log("watchlist from watchlist data", watchlistData);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        contentContainerClassName="p-4 gap-4"
        data={watchlist}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <InlineMovieCard movie={item} watchlisted={true} />
        )}
        ListEmptyComponent={() => (
          <View className="flex-1 justify-center items-center">
            <EmptyState
              title="No items in watchlist"
              description="Add some items to your watchlist to get started."
              icon={icons.empty}
            />
          </View>
        )}
        ListHeaderComponent={() => (
          <View className="p-4">
            <Pressable
              onPress={() => navigation.goBack()}
              hitSlop={20}
              className="absolute top-10 left-5 z-50"
            >
              <Image source={icons.back} className="w-6 h-6" />
            </Pressable>
            <View>
              <Text className="text-2xl font-bold text-center text-neutral mt-10">
                Watchlist
              </Text>
            </View>
            <Pressable
              onPress={() => clearWatchlist()}
              hitSlop={20}
              className="absolute top-10 right-5 z-50"
            >
              <Image source={icons.delete} className="w-6 h-6" />
            </Pressable>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Watchlist;

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
