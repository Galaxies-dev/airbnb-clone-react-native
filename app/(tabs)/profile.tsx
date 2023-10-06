import { View, Text, Button } from 'react-native';
import React from 'react';
import { useAuth } from '@clerk/clerk-expo';

const Page = () => {
  const { signOut } = useAuth();

  return (
    <View>
      <Button title="Sign Out" onPress={() => signOut()} />
    </View>
  );
};

export default Page;
