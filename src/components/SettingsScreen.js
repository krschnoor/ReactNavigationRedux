import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});

const SettingsScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>Settings Screen</Text>
    <Button
      onPress={() => navigation.navigate({ routeName: 'Profile' })}
      title="Profile"
    />
  </View>
);

SettingsScreen.navigationOptions = {
  title: 'Settings'
};

SettingsScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default SettingsScreen;
