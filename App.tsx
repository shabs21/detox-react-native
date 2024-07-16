import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text testID="welcome">Welcome to Detox</Text> */}
      <Text testID="welcome">Open up App.js to start working on your app!</Text>
      <Button title="Click Me" onPress={() => {}} testID="clickMeButton" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
