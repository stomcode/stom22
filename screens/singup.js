import { StyleSheet,Text,View,KeyboardAvoidingView } from 'react-native';
import React,{useState}   from 'react'
import { StatusBar } from 'expo-status-bar';
import {Button,Input,Image } from "react-native-elements"
import {db,auth} from "../firebase"
/* We use only those components, which we import, so import the component for use */
function SignUp({navigation}) {

    const [email,setEmail]=useState('');
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');

/*   initialize the state  */
    const signUp=async()=>{
     try{
      const authUser =await auth.createUserWithEmailAndPassword(email,password);  
      const a=await authUser.user.updateProfile({
        displayName:name,
      });

     }catch(err){
      alert(err.message);
     }


    }


 return (
  <KeyboardAvoidingView  style={styles.container}>
  <StatusBar style="light"/>
    <Image source={{
     uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk3YrHflobOueD625V9ZJ8f7hYWfHwszvltPK9yCxLokXEQDwjRkHQxV_VDznVrvanFZs&usqp=CAU",}}
     style={{width:100,height:100}} />
     <Text style={{marginTop:-15}}>Student On The Move</Text>
     <View style={styles.inputContainer}>
    <Input placeholder="Name" autoFocus type="text" value={name} onChangeText={text=>setName(text)} />
    <Input placeholder="Email" value={email} type="email" onChangeText={text=>setEmail(text)} />
    <Input placeholder="Password" value={password} secureTextEntry type="password" onChangeText={text=>setPassword(text)} onSubmitEditing={signUp} />
    </View> 
    <Button raised containerStyle={styles.button} title="Sign Up" onPress={signUp}  />
    <View style={{height:100}} />
    
  </KeyboardAvoidingView>
 )
}
/* Different Text field   */

export default SignUp;
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
/*  Formatting the screen  */

