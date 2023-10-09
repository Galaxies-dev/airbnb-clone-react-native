import { View, StyleSheet, Text, Button } from 'react-native';
import React, { forwardRef, useMemo } from 'react';
import BottomSheet, { useBottomSheet } from '@gorhom/bottom-sheet';
import Listings from '@/components/Listings';
export type Ref = BottomSheet;

interface Props {
  listings: any[];
}

const ListingsBottomSheet = forwardRef<Ref, Props>((props, ref) => {
  const snapPoints = useMemo(() => ['10%', '100%'], []);

  return (
    <BottomSheet ref={ref} index={0} snapPoints={snapPoints} enablePanDownToClose={false}>
      <View style={styles.contentContainer}>
        <Listings listings={props.listings} />
      </View>
    </BottomSheet>
  );
});

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default ListingsBottomSheet;
