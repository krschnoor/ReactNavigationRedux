import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  addNavigationHelpers,
  StackNavigator,
  TabNavigator
} from 'react-navigation';

import LoginScreen from '../components/LoginScreen';
import MainScreen from '../components/MainScreen';
import DashboardScreen from '../components/DashboardScreen';
import ProfileScreen from '../components/ProfileScreen';
import SettingsScreen from '../components/SettingsScreen';
import { addListener } from '../utils/redux';

const HomeStack = StackNavigator({
  Login: { screen: LoginScreen },
  Main: { screen: MainScreen },
  Dashboard: { screen: DashboardScreen }
});

const SettingsStack = StackNavigator({
  Settings: { screen: SettingsScreen },
  Profile: { screen: ProfileScreen }
});

export const AppNavigator = TabNavigator({
  MainTab: { screen: HomeStack },
  Settings: { screen: SettingsStack }
});

class AppWithNavigationState extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired
  };

  render() {
    const { dispatch, nav } = this.props;
    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state: nav,
          addListener
        })}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);
