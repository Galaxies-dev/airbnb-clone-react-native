import { View, Text, Button } from 'react-native';
import React from 'react';
import Listings from '@/components/Listings';

const Page = () => {
  return (
    <View style={{ flex: 1, marginTop: 120 }}>
      <Listings />
    </View>
  );
};

export default Page;
