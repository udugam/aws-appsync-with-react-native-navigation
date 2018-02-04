import gql from 'graphql-tag'
import {graphql} from 'react-apollo'

//Declare you GraphQL documents below
export const CreatePost = gql`mutation CreatePost($postID: ID!, $postTitle: String!) {
	putPost(id: $postID, title: $postTitle) {
        id
        title
    }
}`

export const FetchPosts = gql`query FetchPosts {
    allPost {
        id
        title
    }  
}`

//Declare your React Component level operations below
export const operations = {
  CreatePost: graphql(CreatePost, {
    options: {},
    props: props => ({
      createPost: (post) => {
        return props.mutate({
          variables: post,
          optimisticResponse: {
            putUser: {...post,__typename: 'Post'}
          }
        })
      }
    })
  }),

  FetchPosts: graphql(FetchPosts, {
      options: {},
      props: ({data}) => {
          return {
              loading: data.loading,
              posts: data.allPost
          }
      }
  })

}