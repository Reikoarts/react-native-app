import React from "react";
import { View, FlatList, Image, useWindowDimensions, StyleSheet } from "react-native";

const arrayOfImages = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1627466146828-cad5c59f3de6?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "2",
    url: "https://images.unsplash.com/photo-1632738583011-567f77b4ef9c?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const AddedImages = () => {
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
    height: 220,
    marginRight: 10,
    borderRadius: 20,
    borderColor: "#000",
    borderWidth: 0.5,
  },
});

export default AddedImages;
