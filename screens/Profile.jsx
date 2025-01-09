import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ProfileStatistics from "../components/ProfileStatistics";
import AddedImages from "../components/AddedImages";
import FavoriteImages from "../components/FavoriteImages";

const Profile = () => {

    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <LinearGradient colors={["#EAF8F8", "#A6F6F1"]} style={styles.headerGradient}>
                    <View style={styles.profilePictureContainer}>
                        <Image
                            style={styles.profilePicture}
                            source={{
                                uri: "https://randomuser.me/api/portraits/men/1.jpg",
                            }}
                        />
                    </View>
                    <Text style={styles.profileName}>John Doe</Text>
                    <Text style={styles.username}>@johndoe</Text>
                </LinearGradient>
            </View>

            {/* Statistics */}
            <ProfileStatistics posts={35} followers={1552} follows={128} />

            {/* Added Images */}
            <AddedImages />

            {/* Favorite Images */}
            <FavoriteImages />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
    },
    header: {
        width: "100%",
        height: 250,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        overflow: "hidden",
    },
    headerGradient: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 20,
        width: "100%",
    },
    profilePictureContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        overflow: "hidden",
        marginTop: 20,
        borderWidth: 2,
        borderColor: "#fff",
    },
    profilePicture: {
        width: "100%",
        height: "100%",
    },
    profileName: {
        fontSize: 24,
        fontFamily: "Poppins_700Bold",
        color: "#000",
        marginTop: 10,
    },
    username: {
        fontSize: 16,
        fontFamily: "Poppins_400Regular",
        color: "#7D7D7D",
        marginTop: 5,
    },
});

export default Profile;
