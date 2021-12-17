import React, { useRef, useEffect } from 'react';
import MainContainer from './navigation/MainContainer';
import { Text, View, StyleSheet, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const anim = useRef(new Animated.Value(1));

  useEffect(() => {
    // makes the sequence loop
    Animated.loop(
      // runs given animations in a sequence
      Animated.sequence([
        // increase size
        Animated.timing(anim.current, {
          toValue: 2,
          duration: 200,
        }),
        // decrease size
        Animated.timing(anim.current, {
          toValue: 1,
          duration: 1000,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ scale: anim.current }] }}>
        <Ionicons name="md-heart" size={40} color="red" />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(254, 254, 254)',
    padding: 8,
  },
});


//import { StatusBar } from 'expo-status-bar';
//import React from 'react';
//import { Animated, Button, StyleSheet, Text, View } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
//
//function HomeScreen({ navigation }) {
//  return (
//    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//      <Text>Home Screen</Text>
//      <Button
//        title="Go to Details"
//        onPress={() => {
//          /* 1. Navigate to the Details route with params */
//          navigation.navigate('Details', {
//            itemId: 86,
//            otherParam: 'anything you want here',
//          });
//        }}
//      />
//    </View>
//  );
//}
//
//function DetailsScreen({ route, navigation }) {
//  /* 2. Get the param */
//  const { itemId, otherParam } = route.params;
//  return (
//    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//      <Text>Details Screen</Text>
//      <Text>itemId: {JSON.stringify(itemId)}</Text>
//      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
//      <Button
//        title="Go to Details... again"
//        onPress={() =>
//          navigation.push('Details', {
//            itemId: Math.floor(Math.random() * 100),
//          })
//        }
//      />
//      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//      <Button title="Go back" onPress={() => navigation.goBack()} />
//    </View>
//  );
//}
//
//function StackScreen() {
//  return (
//    <Stack.Navigator>
//      <Stack.Screen
//        name="Home"
//        component={HomeScreen}
//        options={{
//          title: 'My home',
//          headerStyle: {
//            backgroundColor: '#f4511e',
//          },
//          headerTintColor: '#fff',
//          headerTitleStyle: {
//            fontWeight: 'bold',
//          },
//        }}
//      />
//    </Stack.Navigator>
//  );
//}
//
//const Stack = createNativeStackNavigator();
//
//function App() {
//  return (
//    <NavigationContainer>
//      <Stack.Navigator initialRouteName="Home">
//        <Stack.Screen name="Home" component={HomeScreen} />
//        <Stack.Screen name="Details" component={DetailsScreen} />
//      </Stack.Navigator>
//    </NavigationContainer>
//  );
//}
//
//export default App;
//
