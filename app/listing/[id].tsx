// import { View, Text } from 'react-native';
// import React from 'react';
// import { useLocalSearchParams } from 'expo-router';

// const Page = () => {
//   const { id } = useLocalSearchParams();
//   console.log('🚀 ~ file: [id].tsx:7 ~ Page ~ id:', id);

//   return (
//     <View style={{ flex: 1 }}>
//       <Text>Page</Text>
//     </View>
//   );
// };

// export default Page;

import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const DetailsPage = () => {
  const { id } = useLocalSearchParams();
  console.log('🚀 ~ file: [id].tsx:7 ~ Page ~ id:', id);

  const listing = {
    image: 'https://your-image-url.jpg',
    name: 'Cozy Apartment',
    location: 'New York, NY',
    price: '$120/night',
    details: '2 guests · 1 bedroom · 1 bed · 1 bath',
    description: 'A cozy apartment in the heart of New York City...',
  };

  return (
    <View style={styles.container}>
      <ScrollView
        scrollEventThrottle={16}
        onScroll={(e) => {
          const offset = e.nativeEvent.contentOffset.y;
          // You can update the state here to change the opacity
          // or height of the header image based on the scroll offset
        }}>
        <Image source={{ uri: listing.image }} style={styles.image} resizeMode="cover" />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{listing.name}</Text>
          <Text style={styles.location}>{listing.location}</Text>
          <Text style={styles.price}>{listing.price}</Text>
          <Text style={styles.details}>{listing.details}</Text>
          <Text style={styles.description}>{listing.description}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    height: height * 0.4,
    width: width,
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 18,
    color: 'grey',
    marginTop: 5,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  details: {
    fontSize: 18,
    color: 'grey',
    marginTop: 5,
  },
  description: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default DetailsPage;
