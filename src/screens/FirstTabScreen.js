import React, {Component} from 'react'
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    Button
} from 'react-native'
import uuidV4 from 'uuid/v4'

// AppSync Imports
import { compose } from 'react-apollo';
import * as GraphQL from '../graphql';
// AppSynce Imports


class FirstTabScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postTitle: '',
        }
    }

    onChangeText = (key, value) => {
        this.setState({
            [key]:value
        })
    }

    submitPost = () => {
        const postID = uuidV4()
        const postTitle = this.state.postTitle 
        this.props.createPost({id:postID, title:postTitle})
    }

    render() {
        return(
            <View style={styles.container}>
                 <TextInput
                    value = {this.state.postTitle}
                    placeholder = 'Type Post Title Here'
                    onChangeText = { (value) => this.onChangeText('postTitle', value) }
                />
                <Button
                    title='Submit'
                    onPress={this.submitPost}
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

const NewPost = compose(
    GraphQL.operations.CreatePost
)(FirstTabScreen)

export default NewPost