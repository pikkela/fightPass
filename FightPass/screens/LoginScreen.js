import React from 'react';
import { StyleSheet, View, Image, Button, Text,TouchableOpacity,AsyncStorage } from 'react-native';

import {Container, Header, Content, Form, Item, Input, Label,} from 'native-base';
import {createStackNavigator, createAppContainer} from 'react-navigation';

export default class LoginScreen extends React.Component {

  componentDidMount(){
    const { navigation } = this.props;
//Adding an event listner om focus
//So whenever the screen will have focus it will set the state to zero
this.focusListener = navigation.addListener('didFocus', () => {
  AsyncStorage.getItem('username').then((value) => this.setState({'username': value}));
  AsyncStorage.getItem('password').then((value) => this.setState({'password': value}));
console.log('toimiiko');
});

  }

  constructor(props) {
    super(props);

    this.state = {
      username:'',
      password:'',
      loginUser:'',
      loginPass:''
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

                  <Label>Username</Label>

                  <Input
                  style={styles.Input}
                  onChangeText = {(loginUser) => this.setState({loginUser})}
                  value = { this.state.loginUser}
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
                  onChangeText = { loginPass => this.setState({loginPass})}
                  value = { this.state.loginPass}

                  />
                </Item>
            </Form>

            </Content>

                            <View style={styles.ButtonView}>

                                <TouchableOpacity style={styles.Button}
                                onPress={this.Login}
                                >
                                  <Text style={styles.ButtonText}>login</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.Button}
                                onPress = {() => this.props.navigation.navigate('SignIn')}>
                                  <Text style={styles.ButtonText}>Sign in</Text>
                                </TouchableOpacity>

                            </View>
          </View>

      </Container>
    );
  }

  Login = async() => {
    if (this.state.username === this.state.loginUser && this.state.password === this.state.loginPass){
     this.props.navigation.navigate('Home')
    }
    else alert(this.state.username)
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
    flex:1,
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
