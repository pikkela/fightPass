import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, AsyncStorage } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

export default class HomeScreen extends React.Component {

  componentDidMount(){
      const { navigation } = this.props;
  //Adding an event listner om focus
  //So whenever the screen will have focus it will set the state
  this.focusListener = navigation.addListener('didFocus', () => {
    AsyncStorage.getItem('fullName').then((value) => this.setState({'fullName': value}));
  console.log('HomePAge');
  });
}

  constructor(props) {
    super(props);
    this.state = {
      fullName:''
    }
  }

  static navigationOptions = {
    title: "Home",
    header: null
  };

  render(){
    return (
      <ScrollView style={styles.container}>

        <View style={styles.Header}>
          <Text style={styles.HeaderText}>Fight</Text>
          <Image style={styles.HeaderImage}
           source={require('../assets/jingJang.png')}/>
           <Text style={styles.HeaderText}>Pass</Text>
        </View>

        <Text style={{color: '#404040', margin: 20, alignSelf: 'center'}}>For the fighters</Text>
        <Text style = {{ fontSize:45, fontWeight:'bold', color:'#af0404', borderTopWidth:1}}>Welcome</Text>
        <View style = {{justifyContent:'flex-end', flexDirection: 'row'}}>
        <Text style = {{fontSize:35, fontWeight:'bold'}}>{this.state.fullName}</Text>

        </View>
        <View style={styles.SelectBox}>

          <TouchableOpacity style={styles.box}
          onPress={() => this.props.navigation.navigate('Profile')}
          >
          <Text style={styles.ButtonText}>Profile</Text>
          <Image
          style = {styles.Icons}
          source = {require('../assets/Profile.png')}
          />
          </TouchableOpacity>

          <TouchableOpacity style={styles.box}
          onPress={() => this.props.navigation.navigate('Training')}
          >
            <Text style={styles.ButtonText}>Train</Text>
            <Image style={styles.Icons} source={require('../assets/Boxer.png')}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box}
          onPress={() => this.props.navigation.navigate('Styles')}
          >
            <Text style={styles.ButtonText}>Styles</Text>
            <Image style={styles.Icons} source={require('../assets/Glove.png')}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box}
          onPress={() => this.props.navigation.navigate('Calendar')}
          >
            <Text style={styles.ButtonText}>Calendar</Text>
            <Image style={styles.Icons} source={require('../assets/Calendar.png')}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box}>
            <Text style={styles.ButtonText}>Something</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ButtonView}>

            <TouchableOpacity style={styles.Button}
            onPress={() => this.props.navigation.goBack()}
            >
              <Text style={styles.ButtonText}>Back</Text>
            </TouchableOpacity>

        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525',
    padding: 10,
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
  Button:{
    alignItems:'center',
    backgroundColor:"#ff0000",
    margin: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderRadius: 4
  },
  ButtonView:{
    flexDirection: 'column',
    flex:1,
    justifyContent: 'center',
    alignItems: 'stretch',
    marginBottom: 10
  },
  ButtonText:{
    marginLeft: 15,
    fontSize: 25,
    color:"#fff"
  },
  SelectBox:{
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  box:{
    flexDirection: 'row',
    backgroundColor: '#414141',
    borderWidth: 1,
    borderRadius: 4,
    height: 95,
    marginVertical: 5,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  Icons:{
    tintColor: '#fff',
    marginRight: 15,
    height: 80,
    width: 70
  }
});
