import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, ScrollView, Image } from 'react-native';
import { Form, Item, Input, Label} from 'native-base';

export default class CreateScreen extends React.Component {

  static navigationOptions = {
    title: "create",
    header: null
  };

  render(){
    return (
      <TouchableWithoutFeedback
        onPress = { () => {
          Keyboard.dismiss;
        }}
      >
      <ScrollView style={styles.container}>

      <View style={styles.Header}>
        <Text style={styles.HeaderText}>Fight</Text>
        <Image style={styles.HeaderImage}
         source={require('../assets/jingJang.png')}/>
         <Text style={styles.HeaderText}>Pass</Text>
      </View>

      <Form>
        <Item style={styles.inputItem}>
          <Label>First name</Label>
          <Input
          autoCorrect = {false}
          autoCapitalize = "none"
          keyboardType = "default"
          onChangeText = {fname => this.setState({fname})}
          />
        </Item>
        <Item style={styles.inputItem}>
          <Label>Last name</Label>
          <Input
          autoCorrect = {false}
          autoCapitalize = "none"
          keyboardType = "default"
          onChangeText = {lname => this.setState({lname})}
          />
        </Item>
        <Item style={styles.inputItem}>
          <Label>Age</Label>
          <Input
          autoCorrect = {false}
          autoCapitalize = "none"
          keyboardType = "number-pad"
          onChangeText = {phone => this.setState({phone})}
          />
        </Item>
        <Item style={styles.inputItem}>
          <Label>Gender</Label>
          <Input
          autoCorrect = {false}
          autoCapitalize = "none"
          keyboardType = "email-address"
          onChangeText = {email => this.setState({email})}
          />
        </Item>
        <Item style={styles.inputItem}>
          <Label>Address</Label>
          <Input
          autoCorrect = {false}
          autoCapitalize = "none"
          keyboardType = "default"
          onChangeText = {address => this.setState({address})}
          />
        </Item>
      </Form>

      </ScrollView>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525',
  },
  Header:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40
  },
  HeaderText:{
      color: "#fff",
      fontSize: 45
  },
  HeaderImage:{
    backgroundColor: '#fff',
    borderRadius: 50,
    margin: 10,
    height: 85,
    width: 85
  },
  inputItem:{
    margin: 10
  },
});
