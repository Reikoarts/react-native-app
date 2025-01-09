import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Message = ({ data }) => {
    return (
        <View style={[styles.card, data.sender === "me" ? styles.me : styles.other]} key={data.timestamp}>
            <View style={styles.header}>
                <Text style={styles.sender}>{data.sender}</Text>
                <Text style={styles.timestamp}>{new Date(data.timestamp).toLocaleTimeString()}</Text>
            </View>
            <Text style={styles.messageContent}>{data.content}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '80%',
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: '#f9f9f9',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 3,
    },
    me: {
        alignSelf: 'flex-end',
        backgroundColor: '#25A0B0',
        color: '#fff',
    },
    other: {
        alignSelf: 'flex-start',
        backgroundColor: '#E1E1E1',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    sender: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    timestamp: {
        fontSize: 12,
        color: '#aaa',
    },
    messageContent: {
        fontSize: 14,
        color: '#333',
    },
});

export default Message;
