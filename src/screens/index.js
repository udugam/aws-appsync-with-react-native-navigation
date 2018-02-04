import { Navigation } from 'react-native-navigation'

import FirstTabScreen from './FirstTabScreen'
import SecondTabScreen from './SecondTabScreen'
import PushedScreen from './PushedScreen'

//Import HOC component that instantiates the connection to the AppSync API
import ApolloProviderHOC from '../ApolloProviderHOC'

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('example.FirstTabScreen', () => ApolloProviderHOC(FirstTabScreen));
  Navigation.registerComponent('example.SecondTabScreen', () => ApolloProviderHOC(SecondTabScreen));
  Navigation.registerComponent('example.PushedScreen', () => ApolloProviderHOC(PushedScreen));
}