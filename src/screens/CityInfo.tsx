import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import cities from '../data';
import Animated from 'react-native-reanimated';

type Props = {};

const CityInfo = (props: Props) => {
  const {params} = useRoute();

  const city = cities.find(city => city.id === params.id);

  return (
    <View style={styles.container}>
      <Animated.Image
        sharedTransitionTag={`cityImage${city?.id}`}
        style={styles.image}
        source={{uri: city?.image}}
      />
      <Text style={styles.name}>{city?.name}</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>Details</Text>
        <Text style={styles.detailsText}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
          ipsa repudiandae quas animi id veniam tempora minus laudantium hic
          eligendi repellendus similique beatae quidem in, cum ex voluptas
          incidunt molestias provident, sequi error? Sapiente rem minima error
          reiciendis, saepe quae!
        </Text>
      </View>
    </View>
  );
};

export default CityInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginTop: 16,
  },
  detailsContainer: {
    marginHorizontal: 16,
    marginVertical: 16,
  },
  detailsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  detailsText: {
    fontSize: 16,
    lineHeight: 24,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 16,
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#000000',
    opacity: 0.8,
  },
});
