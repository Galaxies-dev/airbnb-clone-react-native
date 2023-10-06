import { View, Text } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';

const Page = () => {
  const { id } = useLocalSearchParams();
  console.log('🚀 ~ file: [id].tsx:7 ~ Page ~ id:', id);

  return (
    <View style={{ flex: 1 }}>
      <Text>Page</Text>
    </View>
  );
};

export default Page;
