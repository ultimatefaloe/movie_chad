import { Stack } from "expo-router";
import "./global.css";
import { StatusBar } from "react-native";
import { WatchListProvider } from "../context/WatchlistContext";

export default function RootLayout() {
  return (
    <WatchListProvider>
      <StatusBar barStyle="light-content" hidden={false} />
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{ title: "(tabs)", headerShown: false }}
        />
        <Stack.Screen
          name="(stacks)"
          options={{ title: "(stacks)", headerShown: false }}
        />
      </Stack>
    </WatchListProvider>
  );
}
