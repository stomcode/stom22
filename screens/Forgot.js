import { StyleSheet,Text,View,KeyboardAvoidingView } from 'react-native';
import React,{useState,useEffect}   from 'react'
import { StatusBar } from 'expo-status-bar';
import {Button,Input } from "react-native-elements"
import { auth } from '../firebase';
function Forgot({navigation}) {

    const [email,setEmail]=useState('');
    

    useEffect(()=>{
       const unsubscribe=auth.onAuthStateChanged((authUser)=>{
      if(authUser){
       navigation.replace('Home');
      }
     });
      
     return unsubscribe;
    },[]);

    const logIn=()=>{

     auth.sendPasswordResetEmail(email).catch((err)=>{
      alert(err);
     })
     

     alert("Reset Link Sent Please Check Mail")

    }


 return (
  <KeyboardAvoidingView  style={styles.container}>
  <StatusBar style="light"/>
    
     <View style={styles.inputContainer}>

     <Text style={{fontSize:19 , textAlign:"center",paddingTop:70,paddingBottom:70}}>Enter Email To Reset Password</Text>
    <Input placeholder="Email"  type="email" value={email} autoFocus onChangeText={text=>setEmail(text)} />
   
    </View> 
    <Button containerStyle={styles.button} title="Send Mail" onPress={logIn}  />
   
   
    <View style={{height:100}} />
    
  </KeyboardAvoidingView>
 )
}

export default Forgot;
const styles = StyleSheet.create({
 inputContainer:{
  width:300,
 },
 button:{
  width:200,
  marginTop:10,
 },
 container:{
  flex:1,
  alignItems:"center",
  justifyContent:"center",
  padding:10,
  backgroundColor: "white"
 }
});

