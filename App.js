import "./nativewind-output.js"

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center ">
      <Text className="text-violet-600 text-5xl">Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
