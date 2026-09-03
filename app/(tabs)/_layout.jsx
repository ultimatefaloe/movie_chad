import React from "react";
import { Text, View, Image } from "react-native";
import { Tabs } from "expo-router";
import { tabIcons } from "../../constant/tab-icons";

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: () => (
            <View>
              <Image source={tabIcons.home.default} className="w-6 h-6" />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: () => () => (
            <View>
              <Image source={tabIcons.search.default} className="w-6 h-6" />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="watchlist"
        options={{
          title: "Watchlist",
          headerShown: false,
          tabBarIcon: () => () => (
            <View>
              <Image source={tabIcons.watchlist.default} className="w-6 h-6" />
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
