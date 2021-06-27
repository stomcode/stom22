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

     
     <TouchableOpacity style={styles.back} onPress={()=>navigation.navigate("sub3")}>

      <Text style={{paddingTop:30,width:400, textAlign:"center",color:"black"}} onPress={()=>navigation.navigate("sub3")}> Reference’s & Citation Manager  </Text>
      </TouchableOpacity>
     
     
     <TouchableOpacity style={styles.back} onPress={()=>navigation.navigate("sub4")}>

      <Text style={{paddingTop:30,width:400,textAlign:"center",color:"black"}} onPress={()=>navigation.navigate("sub4")}> Mind Map</Text>
      </TouchableOpacity>

     
     <TouchableOpacity style={styles.back} onPress={()=>navigation.navigate("sub5")}>

      <Text style={{paddingTop:30,width:400, textAlign:"center",color:"black"}} onPress={()=>navigation.navigate("sub5")}>Formatting & Presentation Software Tools</Text>
      </TouchableOpacity>
     
     <TouchableOpacity style={styles.back} onPress={()=>navigation.navigate("sub6")}>

      <Text style={{paddingTop:30,width:400,textAlign:"center",color:"black"}} onPress={()=>navigation.navigate("sub6")}> Academic Writing Tools</Text>
      </TouchableOpacity>
     
     <TouchableOpacity style={styles.back} onPress={()=>navigation.navigate("sub7")}>

      <Text style={{paddingTop:30,width:400,textAlign:"center",color:"black"}} onPress={()=>navigation.navigate("sub7")}> Teams’ Colsuboration Tools</Text>
      </TouchableOpacity>
     
     <TouchableOpacity style={styles.back} onPress={()=>navigation.navigate("sub8")}>

      <Text style={{paddingTop:30,width:400,textAlign:"center",color:"black"}} onPress={()=>navigation.navigate("sub8")}> Readability Sources </Text>
      </TouchableOpacity>
     
     
     <TouchableOpacity style={styles.back} onPress={()=>navigation.navigate("sub9")}>

      <Text style={{paddingTop:30,width:400,textAlign:"center",color:"black"}} onPress={()=>navigation.navigate("sub9")}>Journals & Country Ranking </Text>
      </TouchableOpacity>
     
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

