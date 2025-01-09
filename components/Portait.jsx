import { Image, Pressable, StyleSheet, View } from 'react-native'
import React from 'react'

const Portait = ({ data }) => {
    return (
        <Pressable onPress={() => alert("You clicked on " + data.id)}>
            <Image
                style={styles.avatar}
                source={{ uri: data.url }}
            />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    avatar: {
        width: 56,
        height: 56,
        borderRadius: 28,
        margin: 5
    }
})


export default Portait