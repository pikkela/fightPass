import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

export default class CalendarScreen extends React.Component {

  static navigationOptions = {
    title: "SignIn",
    header: null
  };

  render(){
    return (
      <View style={styles.container}>
        <Text>Calendar</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
