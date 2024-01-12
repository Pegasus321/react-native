import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";

import { useRouter } from "expo-router";
import { COLORS, SIZES } from "../../../constants";

import PopularJobCard from "../../common/cards/popular/PopularJobCard";

import styles from "./popularjobs.style";

import useFetch from "../../../hook/useFetch";
import { isLoaded } from "expo-font";

const Popularjobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch({
    endpoint: "search",
    query: {
      query: "React Developer",
      page: 1,
      num_pages: 1,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          <Text>Something Went Wrong</Text>
        ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => <PopularJobCard item={item} />}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
