import { View, Text, SafeAreaView, FlatList } from "react-native";
import React from "react";
import Card from "../components/card";

const ListOfFavorites = () => {
  const arrayFavorites = [
    {
      id: 1,
      name: "Jhon",
      lastname: "Doe",
      profileImage: "https://picsum.photos/200",
      image: "https://picsum.photos/600/400",
      timeFavorite: "2 hrs ago",
    },
    {
      id: 2,
      name: "Jane",
      lastname: "Smith",
      profileImage: "https://picsum.photos/201",
      image: "https://picsum.photos/601/401",
      timeFavorite: "1 hr ago",
    },
    {
      id: 3,
      name: "Mike",
      lastname: "Johnson",
      profileImage: "https://picsum.photos/202",
      image: "https://picsum.photos/602/402",
      timeFavorite: "3 hrs ago",
    },
    {
      id: 4,
      name: "Emily",
      lastname: "Davis",
      profileImage: "https://picsum.photos/203",
      image: "https://picsum.photos/603/403",
      timeFavorite: "30 mins ago",
    },
    {
      id: 5,
      name: "Chris",
      lastname: "Brown",
      profileImage: "https://picsum.photos/204",
      image: "https://picsum.photos/604/404",
      timeFavorite: "4 hrs ago",
    },
    {
      id: 6,
      name: "Sophia",
      lastname: "Williams",
      profileImage: "https://picsum.photos/205",
      image: "https://picsum.photos/605/405",
      timeFavorite: "5 hrs ago",
    },
  ];

  return (
    <FlatList
      data={arrayFavorites}
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
