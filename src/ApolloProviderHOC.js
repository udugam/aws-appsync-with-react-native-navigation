import React, {Component} from 'react'
import {Rehydrated} from 'aws-appsync-react'
import {ApolloProvider} from 'react-apollo'
import AWSAppSyncClient from 'aws-appsync'
import appSyncConfig from './AppSync'


const appSyncClient = new AWSAppSyncClient({
    url: appSyncConfig.graphqlEndpoint,
    region: appSyncConfig.region,
    auth: { type: appSyncConfig.authenticationType, apiKey: appSyncConfig.apiKey }
});

export default function apolloProviderHOC(WrappedComponent) {
    return class PP extends Component {
        render() {
            return (
                <ApolloProvider client={appSyncClient}>
                    <Rehydrated>
                        <WrappedComponent {...this.props} />
                    </Rehydrated>
                </ApolloProvider>
            );
        }
    }
} 