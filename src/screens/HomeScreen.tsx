import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import data from '../data';
import {useNavigation} from '@react-navigation/native';
import Animated from 'react-native-reanimated';
import AnimationSkeleton from './AnimationSkeleton';

const CityItem = ({
  name,
  image,
  id,
}: {
  name: string;
  image: string;
  id: number;
}) => {
  const {navigate} = useNavigation();

  const onPress = () => navigate('City', {id});

  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={onPress} style={{width: '100%', height: 150}}>
        <Animated.Image
          sharedTransitionTag={`cityImage${id}`}
          source={{uri: image}}
          style={styles.image}
          accessibilityLabel={name}
          accessibilityRole="image"
          accessible={true}
        />
      </TouchableOpacity>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const HomeScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const renderItem = ({item}: ListRenderItemInfo<any>) => (
    <CityItem name={item.name} image={item.image} id={item.id} />
  );

  if (loading)
    return (
      <FlatList
        data={Array(8)}
        renderItem={() => <AnimationSkeleton />}
        numColumns={2}
      />
    );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.name}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
  },
  listContainer: {
    justifyContent: 'space-between',
    paddingBottom: 16,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    marginBottom: 8,
    borderRadius: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen;
