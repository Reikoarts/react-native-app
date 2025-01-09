import { View, Text, Image, ImageBackground, StyleSheet } from "react-native";
import React from "react";

const Card = ({items}) => {

  return (
    <View style={styles.cardContainer}>
  
      <ImageBackground
        source={{
          uri: items.image,
        }}
        style={styles.mainImage}
        imageStyle={{ borderRadius: 10 }}
      >
        <View style={styles.overlay}>
          <View style={styles.header}>
            <Image
              source={{ uri: items.profileImage }}
              style={styles.profileImage}
            />
            <View>
              <Text style={styles.name}>{items.name} {items.lastname}</Text>
              <Text style={styles.time}>{items.timeFavorite}</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#f9f9f9",
    borderRadius: 25,
    height: 300,
    margin: 10,
    overflow: "hidden",
    
  },
  mainImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  overlay: {
    position: "absolute",
    top: 0,
    padding: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 2,
    borderColor: "#fff", 
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  time: {
    fontSize: 12,
    color: "#ddd",
  },
});

export default Card;
