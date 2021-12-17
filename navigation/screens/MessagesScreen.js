import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MessagesScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text
        onPress={() => navigation.navigate('Home')}
        style={{ fontSize: 26, fontWeight: 'bold' }}>Messages Screen</Text>
    </View>
  );
}