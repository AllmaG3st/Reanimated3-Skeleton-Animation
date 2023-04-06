import {View, StyleSheet} from 'react-native';
import React from 'react';
import Navigation from './src/navigation';

const App = () => {
  return (
    <View style={styles.root}>
      <Navigation />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
