import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class EditScreen extends React.Component {

  static navigationOptions = {
    title: "Edit",
    header: null
  };

  render(){
    return (
      <View style={styles.container}>
        <Text>Edit</Text>
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
