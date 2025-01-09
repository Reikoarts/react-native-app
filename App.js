import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
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


//screen
import Feed from './screens/Feed';
import AddPost from './screens/AddPost';
import Conversation from './screens/Conversation';
import Favorites from './screens/Favorites';
import Profile from './screens/Profile';


//navigation
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
      <Tab.Screen name="favorites" component={Favorites} />
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
