import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Title from '../components/Title'
import { FlatList } from 'react-native-gesture-handler'
import Portait from '../components/Portait'
import PortraitHeader from '../components/PortraitHeader'
import favories from "../data/favories.json";
import Card from '../components/Card'

const Feed = () => {

    const avatarList = [
        { id: 1, url: "https://randomuser.me/api/portraits/men/1.jpg", source: "remote" },
        { id: 2, url: "https://randomuser.me/api/portraits/women/2.jpg", source: "remote" },
        { id: 3, url: "https://randomuser.me/api/portraits/men/2.jpg", source: "remote" },
        { id: 4, url: "https://randomuser.me/api/portraits/women/3.jpg", source: "remote" },
        { id: 5, url: "https://randomuser.me/api/portraits/men/3.jpg", source: "remote" },
        { id: 6, url: "https://randomuser.me/api/portraits/women/4.jpg", source: "remote" },
        { id: 7, url: "https://randomuser.me/api/portraits/men/4.jpg", source: "remote" },
        { id: 8, url: "https://randomuser.me/api/portraits/women/5.jpg", source: "remote" },
    ]



    return (
        <SafeAreaView style={styles.container}>
            <Title name="Feed" />
            <FlatList
                data={avatarList}
                renderItem={({ item }) => <Portait data={item} />}
                keyExtractor={item => item.id}
                horizontal={true}
                ListHeaderComponent={<PortraitHeader />}
                contentContainerStyle={styles.list}
                showsHorizontalScrollIndicator={false}

            />
            <FlatList
                data={favories.list}
                renderItem={({ item }) => <Card items={item} />}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                snapToInterval={312}
                decelerationRate={"fast"}
                style={{ marginBottom: 150 }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },

    list: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 20,
    }
})

export default Feed