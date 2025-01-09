import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { FlatList } from 'react-native-gesture-handler';
import conversationData from '../data/conversation.json';
import Message from '../components/Message';


const ConversationDetail = ({ route }) => {
    const { id } = route.params;

    return (
        <LinearGradient
            colors={['#f8f9fa', '#a8dadc']}
            style={styles.gradient}
        >
            <View style={styles.container}>
                <FlatList
                    data={conversationData.messages[id]}
                    renderItem={({ item }) => <Message data={item} />}
                    keyExtractor={(item) => item.timestamp}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    container: {
        flex: 1,
        padding: 20,
    },
});


export default ConversationDetail;
