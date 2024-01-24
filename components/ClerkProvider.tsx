import { ClerkProvider as Provider } from "@clerk/clerk-expo";
import { Platform } from "react-native";
import * as SecureStore from "expo-secure-store";
import { ReactNode } from "react";
const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;
// Cache the Clerk JWT
const tokenCache = {
  async getToken(key: string) {
    try {
      if (Platform.OS === "web") return localStorage.getItem(key);
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      if (Platform.OS == "web") return localStorage.setItem(key, value);
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export const ClerkProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Provider publishableKey={CLERK_PUBLISHABLE_KEY!} tokenCache={tokenCache}>
      {children}
    </Provider>
  );
};
