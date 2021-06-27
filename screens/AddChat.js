import React,{useLayoutEffect,useState} from 'react'
import { StyleSheet,View, Text } from 'react-native'
import {Button,Input,Image,ListItem,Avatar} from "react-native-elements"
import Icon from "react-native-vector-icons/FontAwesome"
import {db,auth} from "../firebase"
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();
const AddChat = ({navigation}) => {

 const [input,setInput]=useState("")
useLayoutEffect(()=>{

 navigation.setOptions({
  title:"Add New Chat",
  // headerBackTitle:"Chats",
 });
 
},[navigation])

 const createChat=async()=>{

   await db.collection('chats').add({
    chatName:input
   }).then(()=>{
       navigation.goBack();
   }).catch((err)=>{
    alert(err);
   })

 }

 return (
  <View style={StyleSheet.container}>
   <Input placeholder="Enter Name:" onChangeText={(text)=> setInput(text)} value={input} leftIcon={<Icon name="wechat" type="antdesign" size={24}  color="black"/>} />

  <Button onPress={createChat} title="Create New Chat" />

  </View>
 )
}

export default AddChat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30,
    height:"100%",
  },
});