import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
export default class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: "AIzaSyDeMWhesFtm86hpHgz_C0H5B2x1hqmkxRw",
            authDomain: "manager-b1991.firebaseapp.com",
            databaseURL: "https://manager-b1991.firebaseio.com",
            projectId: "manager-b1991",
            storageBucket: "manager-b1991.appspot.com",
            messagingSenderId: "777569626100"
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}