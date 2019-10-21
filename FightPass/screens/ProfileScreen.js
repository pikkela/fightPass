import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';


export default class EditScreen extends React.Component {



  static navigationOptions = {
    title: "Profile",
    header: null
  };

  render(){
    return (
      <View style={styles.container}>


          <View style={styles.Header}>

            <Text style={styles.HeaderText}>Fight</Text>

            <Image style={styles.HeaderImage}
             source={require('../assets/jingJang.png')}/>

             <Text style={styles.HeaderText}>Pass</Text>
          </View>


          <View style={styles.ButtonView}>

            <TouchableOpacity style={styles.Button}
            onPress={() => this.props.navigation.navigate('Create')}
            >
              <Text style={styles.ButtonText}>Create Profile</Text>
            </TouchableOpacity>

          </View>
      </View>
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
    marginLeft: 15,
    fontSize: 25,
    color:"#fff"
  },
});
