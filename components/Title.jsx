import { Text, StyleSheet } from 'react-native'
import React from 'react'

const Title = ({ name }) => {
    return (<Text style={styles.title}>{name}</Text>)
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
    }
})

export default Title