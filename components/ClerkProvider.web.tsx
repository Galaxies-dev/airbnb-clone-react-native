import { ClerkProvider as Provider } from "@clerk/clerk-react";
import { ReactNode } from "react";
const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

export const ClerkProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Provider publishableKey={CLERK_PUBLISHABLE_KEY!} >
      {children}
    </Provider>
  );
};
