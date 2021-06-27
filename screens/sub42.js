import { StyleSheet,Text,View,KeyboardAvoidingView,ScrollView,Linking ,TouchableOpacity} from 'react-native';
import React,{useState,useLayoutEffect,useEffect}   from 'react'
import { StatusBar } from 'expo-status-bar';
import {Button,Input,Image,Avatar } from "react-native-elements"
import { auth } from '../firebase';
import { Divider } from 'react-native-elements';

function Links({navigation}) {

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
  <ScrollView >
     
  <View style={styles.cont}>
   

       <Divider style={{marginTop:10,width:400}} />
         <View style={styles.back}>
 
         <Text style={{color:"black",textAlign:"center",width:400 }}
      onPress={() => Linking.openURL('https://thecyphere.com/blog/principles-information-security/')}>
Cyphere
   </Text>
   </View>
  <Divider style={{marginTop:10,width:400}} />
         <View style={styles.back}>
 
         <Text style={{color:"black",textAlign:"center",width:400 }}
      onPress={() => Linking.openURL('https://www.techopedia.com/2/27825/security/the-basic-principles-of-it-security')}>
 Techopedia
   </Text>
  </View>
  <Divider style={{marginTop:10,width:400}} />
         <View style={styles.back}>
 
         <Text style={{color:"black",textAlign:"center",width:400 }}
      onPress={() => Linking.openURL('https://www.cs.uic.edu/~jbell/CourseNotes/OperatingSystems/15_Security.html')}>
   Security
   </Text>
  </View>
  <Divider style={{marginTop:10,width:400}} />
         <View style={styles.back}>
 
         <Text style={{color:"black",textAlign:"center",width:400 }}
      onPress={() => Linking.openURL('https://www.geeksforgeeks.org/system-security/')}>
   Geeksforgeeks
   </Text>
  </View> 
  <Divider style={{marginTop:10,width:400}} />
         <View style={styles.back}>
 
         <Text style={{color:"black",textAlign:"center",width:400 }}
      onPress={() => Linking.openURL('https://resources.infosecinstitute.com/topic/introduction-to-cryptography/')}>
   Infosec
   </Text>
  </View>
  <Divider style={{marginTop:10,width:400}} />
         <View style={styles.back}>
 
         <Text style={{color:"black",textAlign:"center",width:400 }}
      onPress={() => Linking.openURL('https://cybersecurityglossary.com/hashing/')}>
   Cyberse Curity Glossary
   </Text>
  </View>
   </View>


   

    </ScrollView>
    </KeyboardAvoidingView>
    </>
 )
}

export default Links;


const styles = StyleSheet.create({
 inputContainer:{
  width:400,
 },
 button:{
  width:200,
  marginTop:10,
 },
 container:{
  width:400,
  flex:1,
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
 cont:
 {
     width:400,
    alignItems:"center",
  justifyContent:"center",
 },
 back:
 {
     backgroundColor:"#f1f1f1",
     marginTop:40,
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


