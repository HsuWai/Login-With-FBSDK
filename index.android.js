/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

const FBSDK = require('react-native-fbsdk');

import React, { Component } from 'react';
import './ReactotronConfig';
import Reactotron from 'reactotron-react-native'
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View, Button
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const {
  LoginButton, LoginManager,
  AccessToken,
  ShareDialog,
} = FBSDK;

class LoginTest extends Component {

 handleFacebookLogin () {
    LoginManager.logInWithReadPermissions(['public_profile', 'email', 'user_friends']).then(
      function (result) {
        if (result.isCancelled) {
          Reactotron.log('Login cancelled')
        } else {
          Reactotron.log('Login success with permissions: ' + result.grantedPermissions.toString())
        }
      },
      function (error) {
        Reactotron.log('Login fail with error: ' + error)
      }
    )
  } 

  render() {
    Reactotron.log('hello rendering world')
    return (
      <View style={styles.container}>
        <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={this.handleFacebookLogin}>
          Login with Facebook
        </Icon.Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  shareText: {
    fontSize: 20,
    margin: 10,
  },
});


AppRegistry.registerComponent('LoginTest', () => LoginTest);
