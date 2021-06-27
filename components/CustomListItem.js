import { StyleSheet,Text,SafeAreaView,View,KeyboardAvoidingView,ScrollView} from 'react-native';
import React,{useState}   from 'react'
import { StatusBar } from 'expo-status-bar';
import {Button,Input,Image,ListItem,Avatar} from "react-native-elements"

const CustomListItem = ({id,chatName,enterChat} ) => {

 
 return (
  <ListItem style={{bottom:0,right:0,position:"absolute",borderRadius:50}} onPress={()=>enterChat(id,chatName)} key={id} >
  <View style={{backgroundColor:"#28527a",padding:12,paddingTop:20,borderRadius:50,width:70,height:70,alignItems:"center"}}>
   <Avatar 

   rouned source={{uri:"https://img.icons8.com/metro/100/ffffff/chat.png"}} />
   <ListItem.Content>
   <ListItem.Title style={{fontWeight:"800",marginLeft:20,color:"white"}}>
     {/* {chatName} */}
     </ListItem.Title>
   </ListItem.Content>
   </View>
  </ListItem>
 )
}

export default CustomListItem
