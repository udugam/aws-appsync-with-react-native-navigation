XMLHttpRequest = GLOBAL.originalXMLHttpRequest ? 
GLOBAL.originalXMLHttpRequest : GLOBAL.XMLHttpRequest;

import { Navigation } from 'react-native-navigation';

import { registerScreens } from './src/screens/index';

registerScreens(); // this is where you register all of your app's screens

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'One',
      screen: 'example.FirstTabScreen', // this is a registered name for a screen
      //icon: require('../img/one.png'),
      //selectedIcon: require('../img/one_selected.png'), // iOS only
      title: 'Screen One'
    },
    {
      label: 'Two',
      screen: 'example.SecondTabScreen',
      //icon: require('../img/two.png'),
      //selectedIcon: require('../img/two_selected.png'), // iOS only
      title: 'Screen Two'
    }
  ]
});