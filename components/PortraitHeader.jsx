import { View, Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const PortraitHeader = () => {
    return (
        <Pressable onPress={() => alert("You clicked on add feed")}>
            <View style={styles.headerList}>
                <LinearGradient
                    colors={['#FFE1E0', '#E1F6F4']}
                    style={styles.headerGradiant}
                >
                    <Ionicons name="add" size={30} color="black" />
                </LinearGradient>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    headerList: {
        width: 56,
        height: 56,
        marginRight: 5,
    },

    headerGradiant: {
        width: '100%',
        height: '100%',
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default PortraitHeader;
