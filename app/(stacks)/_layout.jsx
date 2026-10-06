import { Stack } from "expo-router";
import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { icons, colors } from "../../constant";
import { movieDetail } from "../../data";
import { useWatchList } from "@/hooks/useWatchlist.hook";

const StacksLayout = () => {
  const { addWatchlist } = useWatchList();
  const handleSaveToWatchlist = async (data) => {
    console.log(data)
    await addWatchlist(data);
  };

  return (
    <Stack>
      <Stack.Screen
        name="movie/[id]"
        options={({ route }) => {
          const id = route?.params?.id;
          const data = movieDetail(id);

          return {
            headerStyle: styles.moviesDetail,
            headerTintColor: colors.neutral,
            title: "Movie Detail",
            headerRight: () => (
              <TouchableOpacity
                hitSlop={10}
                onPress={async () => {
                  await handleSaveToWatchlist(data);
                }}
              >
                <Image source={icons.watchlist} className="w-6 h-8" />
              </TouchableOpacity>
            ),
          };
        }}
      />
    </Stack>
  );
};

const styles = StyleSheet.create({
  moviesDetail: {
    backgroundColor: colors.primary,
  },
});

export default StacksLayout;
