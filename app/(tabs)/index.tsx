import { View, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Listings from '@/components/Listings';
import ListingsBottomSheet from '@/components/ListingsBottomSheet';
import listingsData from '@/assets/data/airbnb-listings.json';
import ListingsMap from '@/components/ListingsMap';
import listingsDataGeo from '@/assets/data/airbnb-listings.geo.json';

const Page = () => {
  const [items, setItems] = useState<any[]>(listingsData as []);
  const [getoItems, setGeoItems] = useState<any[]>(listingsDataGeo as []);

  return (
    <View style={{ flex: 1, marginTop: 130 }}>
      {/* <Listings listings={items} /> */}
      <ListingsMap listings={getoItems} />
      <ListingsBottomSheet listings={items} />
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
export default Page;
