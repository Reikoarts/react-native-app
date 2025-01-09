import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ListOfFavorites from '../components/ListOfFavorites'

const Favorites = () => {
    return (
        <SafeAreaView style={style.wrapper}>
            <Text style={style.title}>Favorites</Text>
            <View>
            <ListOfFavorites /> 
            </View>
           
        </SafeAreaView>
    )
}

export default Favorites

const style = StyleSheet.create({
    wrapper: {
        padding: 20,
        backgroundColor: "#69696914"
    },
    title:{
        fontSize: 30,
        fontWeight: "bold",
        paddingVertical: 20
    },
    cardWrapper: {
        marginBottom: 20
    }

})
