import React, { useState } from "react";
import { icons } from "../../../constant";
import { Image, ScrollView, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { movieDetail } from "../../../data/movies";
import EmptyState from "../../../components/ui/empty-state";

// const tabs = 'about' |  'reviews' | 'cast';

const MovieDetail = () => {
  const [ activeTab, setActiveTab] = useState("overview");
  const { id } = useLocalSearchParams();

  const movie = movieDetail(id);

  if (!movie) {
    return (
      <EmptyState
        icon={icons.notFound}
        title={"Movie Not found"}
        description={"Unable to the the movie, try cheking other movie"}
      />
    );
  }

  
  return (
    <ScrollView className="flex-1 relative bg-primary">
      {/* header poster background */}
      <View>
        <Image
          source={movie.backdrop_path}
          className="w-full h-84 rounded-b-3xl "
        />
        <Image
          source={movie.poster_path}
          className="absolute top-60 left-5 w-35 h-50 rounded-2xl"
        />
        <View className="bg-primary/50 border border-tint rounded-lg items-center flex-row gap-2 justify-center absolute top-70 right-10 px-3 py-2">
          <Image source={icons.star} className="w-5 h-5" />
          <Text className="text-tint font-semibold">{movie.vote_average}</Text>
        </View>
      </View>

      {/* title */}
      <View className="relative flex-row items-center gap-2 mt-5 ml-5">
        <Text className="text-neutral text-2xl font-bold mt-5 ml-5 absolute left-32">
          {movie.title}
        </Text>
      </View>

      {/* info */}
      <View className="items-center mt-18 ">
        <View className="flex-row items-center gap-5 mt-5 ml-5">
          <View>
            <Image
              source={icons.calendar}
              className="w-5 h-5 absolute top-2 left-5"
            />
            <Text className="text-light-secondary text-base font-semibold mt-2 ml-10">
              {movie.release_date}
            </Text>
          </View>
          <View>
            <Image
              source={icons.duration}
              className="w-5 h-5 absolute top-2 left-5"
            />
            <Text className="text-light-secondary text-base font-semibold mt-2 ml-10">
              {movie.runtime} min
            </Text>
          </View>
        </View>

        <View>
          <Image
            source={icons.action}
            className="w-5 h-5 absolute top-2 left-5"
          />
          <Text className="text-light-secondary text-base font-semibold mt-2 ml-10">
            {movie.genre.join(", ")}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default MovieDetail;
