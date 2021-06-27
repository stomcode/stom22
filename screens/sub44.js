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
      onPress={() => Linking.openURL('https://hash-generator.windows10compatible.com/')}>
Windows 10 Compatible
   </Text>
   </View>
  <Divider style={{marginTop:10,width:400}} />
         <View style={styles.back}>
 
         <Text style={{color:"black",textAlign:"center",width:400 }}
      onPress={() => Linking.openURL('https://sourceforge.net/projects/simplehashgen/')}>
 Source Forge
   </Text>
  </View>
  <Divider style={{marginTop:10,width:400}} />
         <View style={styles.back}>
 
         <Text style={{color:"black",textAlign:"center",width:400 }}
      onPress={() => Linking.openURL('https://www.softpedia.com/get/System/File-Management/HashGenerator.shtml')}>
   Softpedia
   </Text>
  </View>
  <Divider style={{marginTop:10,width:400}} />
         <View style={styles.back}>
 
         <Text style={{color:"black",textAlign:"center",width:400 }}
      onPress={() => Linking.openURL('https://nordlocker.com/')}>
   Nordlocker
   </Text>
  </View> 
  <Divider style={{marginTop:10,width:400}} />
         <View style={styles.back}>
 
         <Text style={{color:"black",textAlign:"center",width:400 }}
      onPress={() => Linking.openURL('https://www.microsoft.com/en-us/p/hash-tool/9nblggh4rrr2?activetab=pivot:overviewtab')}>
   Microsoft
   </Text>
  </View>
  <Divider style={{marginTop:10,width:400}} />
         <View style={styles.back}>
 
         <Text style={{color:"black",textAlign:"center",width:400 }}
      onPress={() => Linking.openURL('https://cybersecurityglossary.com/hashing/')}>
   Cybersecurity Glossary
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


