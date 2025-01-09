import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
import { Ionicons } from '@expo/vector-icons';

// screens
import Feed from './screens/Feed';
import AddPost from './screens/AddPost';
import Conversation from './screens/Conversation';
import Favorites from './screens/Favorites';
import Profile from './screens/Profile';
import ConversationDetail from './screens/ConversationDetail';
import { LinearGradient } from 'expo-linear-gradient';

// navigation
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'feed') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'conversation') {
          iconName = focused ? 'chatbubble' : 'chatbubble-outline';
        } else if (route.name === 'addPost') {
          iconName = focused ? 'add-circle' : 'add-circle-outline';
        } else if (route.name === 'favorites') {
          iconName = focused ? 'heart' : 'heart-outline';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'person' : 'person-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: "#25A0B0",
      tabBarInactiveTintColor: "#000000",
      headerTransparent: true,
      headerTitleAlign: "right",
      headerTitleStyle: {
        paddingTop: 140,
        paddingBottom: 40,
        textAlign: "left",
        fontWeight: "bold",
      }
    })}>
      <Tab.Screen name="feed" component={Feed} />
      <Tab.Screen name="conversation" component={Conversation} />
      <Tab.Screen name="addPost" component={AddPost} />
      <Tab.Screen name="favorites" component={Favorites} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />

        <Stack.Screen
          name="ConversationDetail"
          component={ConversationDetail}
          options={({ route }) => ({

            headerTitle: () => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={{ uri: route.params.portrait || 'https://placekitten.com/200/200' }}
                  style={{ width: 30, height: 30, borderRadius: 15, marginRight: 10 }}
                />
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>
                  {route.params.correspondentName || 'Conversation'}
                </Text>
              </View>
            ),
            headerStyle: {
              backgroundColor: 'transparent',
              borderBottomWidth: 0,
              elevation: 0,
              shadowOpacity: 0,
            },
            headerBackground: () => (
              <LinearGradient
                colors={['#f8f9fa', '#a8dadc']}
                style={{ flex: 1 }}
              />
            ),
          })}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
