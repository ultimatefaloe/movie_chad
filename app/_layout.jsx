import { Stack } from "expo-router";
import "./global.css";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
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
    </>
  );
}
