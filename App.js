import "./nativewind-output.js"

import { StatusBar } from 'expo-status-bar';
import { clsx } from 'clsx'
import { Text, View } from 'react-native';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black } from "@expo-google-fonts/inter";
import TextCustom from "./src/components/Text.jsx";
import Heading from "./src/components/Heading.jsx";
import ButtonCustom from "./src/components/Button.jsx";
import TextInputCustom from "./src/components/TextInput.jsx";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  })

  if (!fontsLoaded) return null

  return (
    <View 
      className={clsx(
        'flex-1 items-center justify-center bg-gray-900'
      )}
    >
      <TextCustom size="sm">Oii</TextCustom>
      <Heading>Oii</Heading>
      <ButtonCustom title={'oii'}/>
      <TextInputCustom />
      <StatusBar style="auto" />
    </View>
  );
}
