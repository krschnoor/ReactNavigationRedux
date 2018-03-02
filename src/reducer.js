import { Navigator } from './Navigator'
import { MyTab } from './Navigator'
import { NavigationActions } from 'react-navigation'

const initialAction = { type: NavigationActions.Init }
const initialState = Navigator.router.getStateForAction(initialAction)
//const initialState = MyTab.router.getStateForAction(MyTab.router.getActionForPathAndParams('Home'));


 //console.log(initialState)

export default (state = initialState, action) => {
 // let newState = MyTab.router.getStateForAction(action, state)
  var rn
  if(action.routeName != undefined)
  {rn = action.routeName}
  else{rn="Screen2"}
  if(action.routeName != undefined){
    console.log(action.routeName) 
    //let newState = Navigator.router.getStateForAction(MyTab.router.getActionForPathAndParams(action.routeName),state)
  }
  // console.log(action)
  if (action.params && action.params.replace) {
  
    //In order to replace the previous route
    // we'll remove the item at index - 1 and then decrement the index.
   // newState.routes.splice(newState.index - 1, 1)
 //   newState.index--
   }

  //newState.routes.forEach((route, i) => {
    //console.log(route.routes[0].routeName)
   // console.log( route.key)
   // if (! route.routes[1].params) route.routes[1].params = {}
   //if (i === newState.index) route.routes[1].params.active = true
  //  else route.routes[1].params.active = false
 // })
    // console.log(newState)
     //  return Navigator.router.getStateForAction(action, state)
      
     let newState =   Navigator.router.getStateForAction(NavigationActions.navigate({ routeName: action.routeName }), state);
    
   
  return newState || initialState
}
