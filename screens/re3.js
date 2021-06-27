import { StyleSheet,Text,View,KeyboardAvoidingView,ScrollView,Linking ,TouchableOpacity} from 'react-native';
import React,{useState,useLayoutEffect,useEffect}   from 'react'
import { StatusBar } from 'expo-status-bar';
import {Button,Input,Image,Avatar } from "react-native-elements"
import { auth } from '../firebase';
import { Divider } from 'react-native-elements';
import { LearnMoreLinks } from 'react-native/Libraries/NewAppScreen';

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
  <Text style={{color:"black",textAlign:"center",width:400, }} 
      onPress={() => Linking.openURL('https://www.linkedin.com/learning/me')}>
    Linkedin Learning
   </Text>
   </View>
   <Divider style={{marginTop:10,width:400}} />
<View style={styles.back}>
  <Text style={{color:"black",textAlign:"center",width:400, }} 
      onPress={() => Linking.openURL('https://www.linkedin.com/learning/writing-a-research-paper/welcome?u=43268076')}>
   Writing a Research Paper
   </Text>
   </View>
   <Divider style={{marginTop:10,width:400}} />
<View style={styles.back}>
  <Text style={{color:"black",textAlign:"center",width:400, }} 
      onPress={() => Linking.openURL('https://www.linkedin.com/learning/note-taking-for-business-professionals/welcome?u=43268076')}>
   Note Taking
   </Text>
   </View>
   <Divider style={{marginTop:10,width:400}} />
<View style={styles.back}>
  <Text style={{color:"black",textAlign:"center",width:400, }} 
      onPress={() => Linking.openURL('https://www.linkedin.com/learning/google-docs-formatting-in-depth/welcome?u=43268076')}>
    Formatting-In-Depth
   </Text>
   </View>
   <Divider style={{marginTop:10,width:400}} />
<View style={styles.back}>
  <Text style={{color:"black",textAlign:"center",width:400, }} 
      onPress={() => Linking.openURL('https://prezi.com/d6nezhnctdq9/paragraphs-flow-and-connectivity/?utm_campaign=share&utm_medium=copy')}>
    Paragraph Flow 6 Connectivity
   </Text>
   </View>
   <Divider style={{marginTop:10,width:400}} />
<View style={styles.back}>
  <Text style={{color:"black",textAlign:"center",width:400, }} 
      onPress={() => Linking.openURL('https://www.youtube.com/watch?v=c_nyyQ1tdkM')}>
    How To Use Zotero
   </Text>
   </View>
   <Divider style={{marginTop:10,width:400}} />
<View style={styles.back}>
  <Text style={{color:"black",textAlign:"center",width:400, }} 
      onPress={() => Linking.openURL('https://www.youtube.com/watch?v=zhlMLRNY5-4')}>
    Routers, Switches, Packets and Frames
   </Text>
   </View>
   <Divider style={{marginTop:10,width:400}} />
<View style={styles.back}>
  <Text style={{color:"black",textAlign:"center",width:400, }} 
      onPress={() => Linking.openURL('https://www.youtube.com/watch?v=rYodcvhh7b8')}>
  Packet Traveling - How Packets Move Through a Network
   </Text>
   </View>
   <Divider style={{marginTop:10,width:400}} />
<View style={styles.back}>
  <Text style={{color:"black",textAlign:"center",width:400, }} 
      onPress={() => Linking.openURL('https://www.youtube.com/watch?v=a84XIopJFXs')}>
   Subnetting Cisco CCNA -Part 1 The Magic Number
   </Text>
   </View>
   <Divider style={{marginTop:10,width:400}} />
<View style={styles.back}>
  <Text style={{color:"black",textAlign:"center",width:400, }} 
      onPress={() => Linking.openURL('https://www.youtube.com/watch?v=84-zNmomYzk')}>
    Subnetting Cisco CCNA -Part 2 The Magic Number
   </Text>
   </View>
   <Divider style={{marginTop:10,width:400}} />
<View style={styles.back}>
  <Text style={{color:"black",textAlign:"center",width:400, }} 
      onPress={() => Linking.openURL('https://www.youtube.com/watch?v=-kAhTal4bNk')}>
    Subnetting Cisco CCNA -Part 3 The Magic Number
   </Text>
   </View>
   <Divider style={{marginTop:10,width:400}} />
<View style={styles.back}>
  <Text style={{color:"black",textAlign:"center",width:400, }} 
      onPress={() => Linking.openURL('https://www.youtube.com/watch?v=RGBA83J60H0')}>
    Subnetting Cisco CCNA -Part 4 The Magic Number
   </Text>
   </View>
   <Divider style={{marginTop:10,width:400}} />
<View style={styles.back}>
  <Text style={{color:"black",textAlign:"center",width:400, }}  
      onPress={() => Linking.openURL('https://www.youtube.com/watch?v=mm0Ur5F36lA&t=7s')}>
   	Subnetting Cisco CCNA -Part 5 The Magic Number
   </Text>
   </View>
   <Divider style={{marginTop:10,width:400}} />
<View style={styles.back}>
  <Text style={{color:"black",textAlign:"center",width:400, }} 
      onPress={() => Linking.openURL('https://www.youtube.com/watch?v=g5QUB0W3dAo')}>
    Subnetting Cisco CCNA -Part 6 The Magic Number
   </Text>
   </View>
   


   
</View>
    </ScrollView>
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


