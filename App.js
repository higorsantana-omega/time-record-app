import "./nativewind-output.js"

import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black } from "@expo-google-fonts/inter";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  })

  if (!fontsLoaded) return null

  return (
    <View className="flex-1 items-center justify-center ">
      <Text className="text-violet-600 text-5xl">Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
