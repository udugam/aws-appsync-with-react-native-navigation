import { Navigation } from 'react-native-navigation'

import NewPost from './FirstTabScreen'
import PostsList from './SecondTabScreen'
import PushedScreen from './PushedScreen'

//Import HOC component that instantiates the connection to the AppSync API
import ApolloProviderHOC from '../ApolloProviderHOC'

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('example.FirstTabScreen', () => ApolloProviderHOC(NewPost));
  Navigation.registerComponent('example.SecondTabScreen', () => ApolloProviderHOC(PostsList));
  Navigation.registerComponent('example.PushedScreen', () => ApolloProviderHOC(PushedScreen));
}