import React from "react";
import { StyleSheet, View, Text, Image, Pressable, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, colors } from "../../constant";
import { useRouter } from "expo-router";

const Search = () => {
  const router = useRouter();

  const handleBackPress = () => {
    router.back();
  };

  const handleNoteActionPress = () => {
    Alert.alert(
      "Note Action",
      "Use the search box below to search for your favorite movies.",
      [
        {
          style: "destructive",
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
        },
        {
          style: "default",
          text: "OK",
          onPress: () => console.log("OK Pressed"),
        },
      ],
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* header nav */}
      <View className="flex-row items-center justify-between px-4 py-2">
        <Pressable onPress={handleBackPress}>
          <Image source={icons.back} className="w-8 h-8" />
        </Pressable>
        <Text className="text-neutral text-xl font-bold">Search</Text>
        <Pressable onPress={handleNoteActionPress}>
          <Image source={icons.noteAction} className="w-12 h-12" />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: 2,
  },
});

export default Search;
