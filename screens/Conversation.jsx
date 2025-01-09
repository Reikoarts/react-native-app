import { View, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import Title from '../components/Title';
import ConversationCard from '../components/ConversationCard';
import conversationData from '../data/conversation.json';

const Conversation = () => {
    return (
        <LinearGradient
            colors={['#f8f9fa', '#a8dadc']}
            style={styles.gradient}
        >
            <SafeAreaView style={styles.container}>
                <Title name="Conversation" />
                <FlatList
                    data={conversationData.conversations}
                    renderItem={({ item }) => <ConversationCard data={item} />}
                    keyExtractor={(item) => item.conversationId}
                    showsVerticalScrollIndicator={false}
                />
            </SafeAreaView>
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

export default Conversation;
