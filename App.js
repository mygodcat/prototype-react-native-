/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image  } from 'react-native';
import { Button,Header,Card, ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends Component {
  render() {
    return (

     <View   >
     <Header style={styles.container} 
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'CAT', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
          <Text  style={styles.welcome} >
            FDzFenris
          </Text> 

       <Card
        title='HELLO WORLD'
        image={require('../newcat/fdzfenris.gif')}>
        <Text style={{marginBottom: 10,justifyContent: 'center',alignItems: 'center'}}>
         CAT NATIVE
        </Text>
        <Button
          icon={<Icon name='code' color='#ffffff' />}
          backgroundColor='#03A9F4'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='VIEW NOW' />
      </Card>
         
        
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /* justifyContent: 'center', */
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
