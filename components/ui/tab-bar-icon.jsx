import React from "react";
import { Image, Text, View } from "react-native";

const TabBarIcon = ({ focused, title, icon, activeIcon }) => {
  return (
    <View
      className={`flex-row items-center justify-center gap-2 mt-8 w-25 h-14`}
    >
      <View className="flex-row items-center justify-center">
        <Image
          source={focused ? activeIcon : icon}
          height={24}
          width={24}
          className="size-6 p-2"
        />
      </View>
      {focused && (
        <Text className="text-base font-bold text-accent">{title}</Text>
      )}
    </View>
  );
};

export default TabBarIcon;
