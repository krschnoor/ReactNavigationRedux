import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import LoginStatusMessage from './LoginStatusMessage';
import AuthButton from './AuthButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});

const DashboardScreen = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>Dashboard</Text>
  </View>
);

DashboardScreen.navigationOptions = {
  title: 'DashBoard Screen'
};

export default DashboardScreen;
