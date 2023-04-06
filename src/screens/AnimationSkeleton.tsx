import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

type Props = {};

const AnimationSkeleton = (props: Props) => {
  const opacity = useSharedValue(1);

  useEffect(() => {
    opacity.value = withRepeat(withTiming(0.2, {duration: 700}), -1, true);
  }, [opacity]);

  return (
    <View style={styles.item}>
      <Animated.View style={[styles.image, {opacity}]} />
      <Animated.View style={[styles.text, {opacity}]} />
    </View>
  );
};

export default AnimationSkeleton;

const styles = StyleSheet.create({
  item: {
    marginTop: 10,
    flex: 1,
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  image: {
    backgroundColor: 'gainsboro',
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 8,
  },
  text: {
    height: 20,
    width: '50%',
    backgroundColor: 'gainsboro',
    borderRadius: 10,
  },
});
