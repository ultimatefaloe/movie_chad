import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useWatchList } from '../../hooks/useWatchlist.hook';

const Watchlist = () => {
  const { watchlist } = useWatchList();

  console.log(watchlist )
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-2xl text-neutral text-center">Welcome to watchlist screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({})

export default Watchlist;
