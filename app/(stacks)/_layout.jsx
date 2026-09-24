import { Stack } from "expo-router";
import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { icons, colors } from "../../constant";

const StacksLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="movie/[id]"
        options={{
          headerStyle: styles.moviesDetail,
          headerTintColor: colors.neutral,
          title: "Movie Detail",
          headerRight: () => (
            <TouchableOpacity
              hitSlop={10}
            >
              <Image source={icons.watchlist} className="w-6 h-8" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
};

const styles = StyleSheet.create({
  moviesDetail: {
    backgroundColor: colors.primary
  },
});

export default StacksLayout;
