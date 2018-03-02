import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StackNavigator, addNavigationHelpers, TabNavigator } from 'react-navigation'

import Feed from './components/Feed'
import Screen1 from './components/screen1'
import Screen2 from './components/screen2'

import ItemDetail from './components/ItemDetail'
import {addListener} from './utils/redux'


export const Navigator2 = new StackNavigator({
  Screen2: { screen: Screen2 },
 
})

export const Navigator3 = new StackNavigator({
  Screen3: { screen: Screen1 },
 
})



export const MyTab = new TabNavigator({
  
  Home: { screen: Navigator2 },
  New: {screen: Navigator3}
},{
  swipeEnabled:false,
  animationEnabled:false,
});






export const Navigator = new StackNavigator({
  Screen1: { screen: MyTab },
 
})



class Nav extends Component {
  render() {
    return (
      <Navigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.navigation,
        addListener
      })} />
    )
  }
}

const mapStateToProps = state => ({
  navigation: state.navigation,
})

export default connect(mapStateToProps)(Nav)
