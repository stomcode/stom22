import { StyleSheet,Text,View,KeyboardAvoidingView,TouchableOpacity } from 'react-native';
import React,{useLayoutEffect,}   from 'react'
import { StatusBar } from 'expo-status-bar';
import {Button,Avatar } from "react-native-elements"
import {auth} from "../firebase"

function Logout({navigation}) {
// We use only those components, which we import, so we import the component for use 

  const signOut = ()=>{

    auth.signOut().then(()=>{
  
    navigation.replace("LogIn");
    })
  
  }
  


    useLayoutEffect(() => {
        navigation.setOptions({
      
          headerStyle: {
            backgroundColor: '#28527a'
          },
          headerTintColor:"white",
          })
       },  [navigation])

 return (
   <>
  <KeyboardAvoidingView  style={styles.container}>
  <StatusBar style="light"/>
  <TouchableOpacity style={styles.back} onPress={()=>navigation.navigate("contactus")}>

      <Text style={{paddingTop:10,width:400, textAlign:"center",color:"black"}} onPress={()=>navigation.navigate("contactus")}>  Contact us</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.back} onPress={()=>navigation.navigate("aboutus")}>

<Text style={{paddingTop:10,width:400, textAlign:"center",color:"black"}} onPress={()=>navigation.navigate("aboutus")}>About us</Text>
</TouchableOpacity>
 
   <Text style={{fontSize:15, padding:20}}>Do you want to Logout?</Text>
   <Button title="Logout" onPress= {signOut} style= {{padding:20,with:300}}></Button>
    
  </KeyboardAvoidingView>
  <TouchableOpacity style = {{ position:"absolute", left:2 , bottom:5,marginLeft:20,marginBottom:11 }} onPress={()=>navigation.navigate("Home")}>
      <View style={{backgroundColor:"#28527a",padding:14,paddingLeft:17 , width:70, height: 70 , borderRadius:50}}>
      <Avatar 
       rouned source={{uri:"https://img.icons8.com/ios/240/ffffff/home--v1.png"}} />
      </View>
    </TouchableOpacity>
  </>
 )
}
// Different hyperlink for screen 
export default Logout;


const styles = StyleSheet.create({
 inputContainer:{
  width:400,
 },
 button:{
  width:400,
  marginTop:10,
 },
 container:{
  flex:1,
  alignItems:"center",
  justifyContent:"center",
  padding:10,
  backgroundColor: "white"
 },
 linkStyle:
 {
     color:"grey",
     textAlign:"center",
     paddingTop:30
 },
 heading:
 {
    color:"black",
    textAlign:"center",
    paddingTop:30
 },
 back:
 {
     backgroundColor:"#f8f5f1",
     marginTop:10,
     padding:40,
     shadowColor: "#000", 
   shadowOffset: {
     width: 0,
     height: 2,
 },
 shadowOpacity: 0.23,
 shadowRadius: 2.62,
 
 elevation: 4
 }
});

//Screen Formatting 