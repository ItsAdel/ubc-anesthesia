import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

import { useColorScheme } from "@/hooks/useColorScheme";
import { SafeAreaView } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

          {/* Module Screen */}
          <Stack.Screen
            name="modules/[moduleId]/index"
            options={({ route }) => {
              const moduleId = route.params?.moduleId;
              return {
                title: `Module ${moduleId}`,
              };
            }}
          />

          {/* Slide Screen */}
          <Stack.Screen
            name="modules/[moduleId]/slide/[slideId]"
            options={({ route }) => {
              const moduleId = route.params?.moduleId;
              const slideId = route.params?.slideId;
              return {
                title: `Slide ${slideId} of Module ${moduleId}`,
              };
            }}
          />
        </Stack>
      </SafeAreaView>
    </ThemeProvider>
  );
}
