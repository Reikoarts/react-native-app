import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const ConversationCard = ({ data }) => {
    const { correspondent, lastMessage } = data;
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
                navigation.navigate('ConversationDetail', {
                    id: correspondent.conversationId,
                    correspondentName: correspondent.name,
                    portrait: correspondent.image,
                });
            }}
        >
            <View style={styles.card}>
                <Image source={{ uri: correspondent.image }} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{correspondent.name}</Text>
                    <Text style={styles.lastMessage}>{lastMessage.content}</Text>
                    <Text style={styles.timestamp}>
                        {new Date(lastMessage.timestamp).toLocaleTimeString()}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    lastMessage: {
        fontSize: 14,
        color: '#666',
    },
    timestamp: {
        fontSize: 12,
        color: '#aaa',
        marginTop: 5,
    },
});

export default ConversationCard;
