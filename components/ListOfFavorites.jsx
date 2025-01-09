import { View, Text, SafeAreaView, FlatList } from "react-native";
import React from "react";
import Card from "./Card";
import favories from "../data/favories.json";

const ListOfFavorites = () => {

  return (
    <FlatList
      data={favories.list}
      renderItem={({ item }) => <Card items={item} />}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      snapToInterval={312}
      decelerationRate={"fast"}
      style={{ marginBottom: 150 }}
    />
  );
};

export default ListOfFavorites;
