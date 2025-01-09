import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ProfileStatistics = () => {
  return (
    <View style={styles.container}>
      <View style={styles.stat}>
        <Text style={styles.headerText}>Posts</Text>
        <Text style={styles.stats}>35</Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.headerText}>Followers</Text>
        <Text style={styles.stats}>1,552</Text>
      </View>
      <View style={styles.stat}>
        <Text style={styles.headerText}>Follows</Text>
        <Text style={styles.stats}>128</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  stat: {
    alignItems: "center",
  },
  headerText: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    color: "#7D7D7D",
  },
  stats: {
    fontSize: 25,
    fontFamily: "Poppins_700Bold",
    color: "#000",
  },
});

export default ProfileStatistics;
