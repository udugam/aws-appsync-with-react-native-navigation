import React, {Component} from 'react'
import {
    Text,
    View,
    FlatList,
    StyleSheet,
    ListItem
} from 'react-native'

// AppSync Imports
import { compose } from 'react-apollo';
import * as GraphQL from '../graphql';
// AppSynce Importsrun 

class SecondTabScreen extends Component {
    render() {
        return(
            <View style={styles.container}>
                <FlatList
                    data={this.props.posts}
                    renderItem={({item}) => <Text>{item.title}</Text>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const PostsLists = compose(
    GraphQL.operations.FetchPosts
)(SecondTabScreen)

export default PostsLists
