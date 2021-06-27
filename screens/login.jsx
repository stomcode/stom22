import { StyleSheet,Text,View,KeyboardAvoidingView } from 'react-native';
import React,{useState,useEffect}   from 'react'
import { StatusBar } from 'expo-status-bar';
import {Button,Input,Image } from "react-native-elements"
import { auth } from '../firebase';
function LogIn({navigation}) {
/* We use only those components, which we import, so import the component for use */
    const [email,setEmail]=useState('');
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
/* initialize the state   */
    useEffect(()=>{
       const unsubscribe=auth.onAuthStateChanged((authUser)=>{
      if(authUser){
       navigation.replace('Home');
      }
     });
      
     return unsubscribe;
    },[]);

    const logIn=()=>{

     auth.signInWithEmailAndPassword(email,password).catch((err)=>{
      alert(err);
     })

    }


 return (
  <KeyboardAvoidingView  style={styles.container}>
  <StatusBar style="light"/>
    <Image source={{
     uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk3YrHflobOueD625V9ZJ8f7hYWfHwszvltPK9yCxLokXEQDwjRkHQxV_VDznVrvanFZs&usqp=CAU",}}
     style={{width:100,height:100}} />
     <Text style={{marginTop:-15}}>Student On The Move</Text>
     <View style={styles.inputContainer}>
    <Input placeholder="Email"  type="email" value={email} autoFocus onChangeText={text=>setEmail(text)} />
    <Input placeholder="Password"  secureTextEntry value={password} type="password" onChangeText={text=>setPassword(text)} />
    </View> 
    <Button containerStyle={styles.button} title="Log In" onPress={logIn}  />
    <Button containerStyle={styles.button} type="outline" title="Don't Have Account?"  onPress={()=>navigation.navigate("SignUp")}  />
    <Text style={{paddingTop:20, color:"blue"}} onPress={()=>navigation.navigate("Forgot")} > Forgot Password?</Text>
    <View style={{height:100}} />
    
  </KeyboardAvoidingView>
  /* Different Text field   */
 )
}

export default LogIn;
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
/* Formatting of screen */




