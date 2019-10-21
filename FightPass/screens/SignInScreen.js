import React from 'react';
import { StyleSheet, View, Image, Button, Text,TouchableOpacity,AsyncStorage } from 'react-native';

import {Container, Header, Content, Form, Item, Input, Label,} from 'native-base';
import {createStackNavigator, createAppContainer} from 'react-navigation';

export default class LoginScreen extends React.Component {

    componentDidMount(){
      AsyncStorage.getItem('username').then((value) => this.setState({'username': value}));
      AsyncStorage.getItem('password').then((value) => this.setState({'password': value}));
      AsyncStorage.getItem('fullName').then((value) => this.setState({'fullName': value}));
    }

    save = async (value) => {
    await  AsyncStorage.setItem('username',value)
    AsyncStorage.getItem('username').then((value) => this.setState({'username': value})
    )

    }

    savePass = async (value) => {
    await  AsyncStorage.setItem('password',value)
      .then((value) => this.setState({'password': value}))
    }

    saveName = async (value) => {
    await  AsyncStorage.setItem('fullName',value)
      .then((value) => this.setState({'fullName': value}))
    }

  constructor(props) {
    super(props);

    this.state = {
      username:'',
      password:'',
      fullName:''
    }

  }

  static navigationOptions = {
    title: "Login",
    header: null
  };

  render(){
    return (
      <Container style={styles.container}>

        <View style={styles.Header}>
          <Text style={styles.HeaderText}>Fight</Text>
          <Image style={styles.HeaderImage}
           source={require('../assets/jingJang.png')}/>
           <Text style={styles.HeaderText}>Pass</Text>
        </View>

          <View style={styles.Login}>
            <Content>
            <Form>

            <Item
             style={styles.FormStyle}
             floatingLabel>

              <Label>Full Name</Label>

              <Input
              style={styles.Input}
              onChangeText = {this.saveName}

              />
            </Item>

                <Item
                 style={styles.FormStyle}
                 floatingLabel>

                  <Label>username</Label>

                  <Input
                  style={styles.Input}
                  onChangeText = {this.save}
                  autoCapitalize = 'none'
                  />

                </Item>

                <Item
                 style={styles.FormStyle}
                 floatingLabel>

                  <Label>Password</Label>

                  <Input
                  style={styles.Input}
                  secureTextEntry = {true}
                  onChangeText = {this.savePass}

                  />
                </Item>
            </Form>

            </Content>

                            <View style={styles.ButtonView}>

                                <TouchableOpacity style={styles.Button}
                                onPress = {() => {
                                  console.log(this.state.username);
                                  this.props.navigation.navigate('Login')
                                  }}
                                >
                                  <Text style={styles.ButtonText}>Save</Text>
                                </TouchableOpacity>

                            </View>
          </View>

      </Container>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525',
  },
  Header:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
  Login:{
    flex:2,
    margin:10,
  },
  Button:{
    alignItems:'center',
    backgroundColor:"#ff0000",
    margin: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 5
  },
  ButtonView:{
    flexDirection: 'column',
    flex:1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  ButtonText:{
    fontSize: 25,
    color:"#fff"
  },
  FormStyle:{
    margin: 10,
  },
  Input:{
    color: '#fff'
  }
});
