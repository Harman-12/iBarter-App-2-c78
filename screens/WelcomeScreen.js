import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert, KeyboardAvoidingView } from 'react-native';
import BarterAnimation from '../components/barterAnimation.js';
import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends Component {
  constructor(){
    super()
    this.state={
      username : '',
      password: ''
    }
  }

  userLogin = (username, password)=>{
    firebase.auth().signInWithEmailAndPassword(username, password)
    .then(()=>{
      return Alert.alert("Successfull Login")
    })
    .catch((error)=> {
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    })
  }

  userSignUp = (username, password) =>{
    firebase.auth().createUserWithEmailAndPassword(username, password)
    .then((response)=>{
      return Alert.alert("User Added Successfully")
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    });
  }


  render(){
    return(
      <View style={styles.container}>
        <View style={styles.profileContainer}>
        <Image
        style={{width:150, height: 150, marginBottom: 10}}
        source={require('../assets/icon-barter.png')}
      />
          <Text style={styles.title}>iBarter</Text>
          <Text style={{color:'#0031c6'}}> An eTrading Method </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Text style={{color:'#0031c6', fontSize:18, fontWeight:'bold',marginLeft:55}}>USERNAME</Text>
          <View style={{alignItems:'center'}}>
            <TextInput
            style={styles.loginBox}
            keyboardType ='email-address'
            onChangeText={(text)=>{
              this.setState({
                username: text
              })
            }}
            />
          </View>
          <Text style={{color:'#0031c6', fontSize:18, fontWeight:'bold',marginLeft:55}}>PASSWORD</Text>
          <View style={{alignItems:'center'}}>
            <TextInput
              style={styles.loginBox}
              secureTextEntry = {true}
              onChangeText={(text)=>{
                this.setState({
                  password: text
                })
              }}
            />
          </View>
          <View style={{alignItems:'center'}}>
            <TouchableOpacity
              style={[styles.button,{marginBottom:10}]}
              onPress = {()=>{this.userLogin(this.state.username, this.state.password)}}
              >
              <Text style={{color:'#ff6e00', fontSize:18, fontWeight:'bold'}}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={()=>{this.userSignUp(this.state.username, this.state.password)}}
              >
              <Text style={{color:'#ff6e00', fontSize:18, fontWeight:'bold'}}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ffb968'
  },
  profileContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  title :{
    fontSize:60,
    fontWeight:'300',
    color : '#0031c6'
  },
  loginBox:{
    width: 300,
    height: 35,
    borderBottomWidth: 1.5,
    borderColor:'#0031c6',
    fontSize: 20,
    marginBottom:20,
    marginTop:5

  },
  button:{
    width:"75%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:"#ffff",
    elevation:10
  },
  buttonContainer:{
    flex:1,
  }
})