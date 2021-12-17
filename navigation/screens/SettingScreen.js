import * as React from 'react';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SettingsScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text
        onPress={() => navigation.navigate('Home')}
        style={{ fontSize: 26, fontWeight: 'bold' }}>Settings Screen</Text>
    </View>
  );
}