import { ClerkProvider } from "@/components/ClerkProvider";
import ModalHeaderText from "@/components/ModalHeaderText";
import Colors from "@/constants/Colors";
import { useAuth } from "@/hooks/useAuth";
import { Ionicons } from "@expo/vector-icons";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { Platform, TouchableOpacity, useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    mon: require("../assets/fonts/Montserrat-Regular.ttf"),
    "mon-sb": require("../assets/fonts/Montserrat-SemiBold.ttf"),
    "mon-b": require("../assets/fonts/Montserrat-Bold.ttf"),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return Platform.OS !== "web" ? (
    <ClerkProvider>
      <RootLayoutNav />
    </ClerkProvider>
  ) : (
    <RootLayoutNav />
  );
}

function RootLayoutNav() {
  const router = useRouter();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider
        value={useColorScheme() === "dark" ? DarkTheme : DefaultTheme}
      >
        <Stack>
          <Stack.Screen
            name="(modals)/login"
            options={{
              presentation: "modal",
              title: "Log in or sign up",
              headerTitleStyle: {
                fontFamily: "mon-sb",
              },
              headerLeft: () => (
                <TouchableOpacity onPress={() => router.back()}>
                  <Ionicons name="close-outline" size={28} />
                </TouchableOpacity>
              ),
            }}
          />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="listing/[id]" options={{ headerTitle: "" }} />
          <Stack.Screen
            name="(modals)/booking"
            options={{
              presentation: "transparentModal",
              animation: "fade",
              headerTransparent: true,
              headerTitle: (props) => <ModalHeaderText />,
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => router.back()}
                  style={{
                    backgroundColor: "#fff",
                    borderColor: Colors.grey,
                    borderRadius: 20,
                    borderWidth: 1,
                    padding: 4,
                  }}
                >
                  <Ionicons name="close-outline" size={22} />
                </TouchableOpacity>
              ),
            }}
          />
        </Stack>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
