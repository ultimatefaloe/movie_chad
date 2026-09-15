import React from "react";
import { Tabs } from "expo-router";
import { tabIcons, colors } from "../../constant";
import TabBarIcon from "../../components/ui/tab-bar-icon";
import { StyleSheet } from "react-native";

const TabLayout = () => {
  return (
    <Tabs
      tabContainerStyle={styles.tabContainer}
      screenOptions={{
        tabBarStyle: styles.tabContainer,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              title="Home"
              icon={tabIcons.home.default}
              activeIcon={tabIcons.home.active}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarShowLabel: false,

          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              title="Search"
              icon={tabIcons.search.default}
              activeIcon={tabIcons.search.active}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="watchlist"
        options={{
          title: "Watchlist",
          headerShown: false,
          tabBarShowLabel: false,

          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              title="Watchlist"
              icon={tabIcons.watchlist.default}
              activeIcon={tabIcons.watchlist.active}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: colors.primary,
    borderColor: colors.accent,
    borderWidth: 2,
    height: 80,
    marginBottom: 0,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    borderRadius: 20,
  },
});
