import React from "react";
import { View, FlatList, Image, useWindowDimensions, StyleSheet } from "react-native";

const arrayOfImages = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1605447302541-bd14aa1417ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG8lMjBwYXlzYWdlfGVufDB8fDB8fHww",
  },
  {
    id: "2",
    url: "https://plus.unsplash.com/premium_photo-1673195440514-a6ac5a7b032c?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const FavoriteImages = () => {
  const imageWidth = useWindowDimensions().width * 0.4;

  const renderItem = ({ item }) => (
    <Image
      style={[styles.image, { width: imageWidth }]}
      source={{ uri: item.url }}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={arrayOfImages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  image: {
    height: 130,
    marginRight: 10,
    borderRadius: 22,
    borderColor: "#000",
    borderWidth: 0.5,
  },
});

export default FavoriteImages;
