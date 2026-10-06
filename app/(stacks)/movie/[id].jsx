import React, { useState } from "react";
import { icons } from "../../../constant";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { movieDetail, casts, reviews } from "../../../data";
import EmptyState from "../../../components/ui/empty-state";
import { TabButton } from "../../../components/ui/tab-button";
import ReviewCard from "../../../components/movie-detail/review-card";
import CastCard from "@/components/movie-detail/cast-card";

const tabs = [
  {
    title: "About Movie",
    value: "about",
  },
  {
    title: "Reviews",
    value: "reviews",
  },
  {
    title: "Cast",
    value: "cast",
  },
];

const MovieDetail = () => {
  const [activeTab, setActiveTab] = useState("about");
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
      <View className="flex-row items-center justify-center gap-2 mt-25">
        <View className="flex-row items-center gap-2">
          <Image
            source={icons.calendar}
            className="w-5 h-5 absolute top-2 left-5"
          />
          <Text className="text-light-secondary text-base font-semibold mt-2 ml-10">
            {movie.release_date}
          </Text>
        </View>
        <View className="flex-row items-center gap-2">
          <Image
            source={icons.clock}
            className="w-5 h-5 absolute top-2 left-5"
          />
          <Text className="text-light-secondary text-base font-semibold mt-2 ml-10">
            {movie.runtime} min
          </Text>
        </View>

        <View className="flex-row items-center gap-2">
          <Image
            source={icons.ticket}
            className="w-5 h-5 absolute top-2 left-5"
          />
          <Text className="text-light-secondary text-base font-semibold mt-2 ml-10">
            {movie.genre[0]}
          </Text>
        </View>
      </View>

      {/* tabs */}
      {/* tabs trigger */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="gap-2 mt-4 justify-center items-center"
      >
        {tabs.map((tab) => (
          <TabButton
            key={tab.value}
            title={tab.title}
            value={tab.value}
            activeTab={activeTab}
            onPress={() => setActiveTab(tab.value)}
          />
        ))}
      </ScrollView>

      {/* tabs content */}
      {activeTab === "about" && (
        <View className="p-4">
          <Text className="text-light-secondary font-semibold">
            {movie.overview}
          </Text>
        </View>
      )}
      {activeTab === "reviews" && (
        <View className="p-4">
          <Text className="text-light-secondary font-semibold">Reviews</Text>
          {reviews.map((review) => (
            <ReviewCard key={review.id} data={review} />
          ))}
        </View>
      )}
      {activeTab === "cast" && (
        <View className="p-4">
          <Text className="text-light-secondary font-semibold">Cast</Text>
          <View className="flex-row flex-wrap justify-evenly gap-4 mt-4">
            {casts.map((cast) => (
              <CastCard key={cast.name} cast={cast} />
            ))}
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default MovieDetail;
