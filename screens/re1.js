import { StyleSheet,Text,View,KeyboardAvoidingView,ScrollView,Linking ,TouchableOpacity} from 'react-native';
import React,{useState,useLayoutEffect,useEffect}   from 'react'
import { StatusBar } from 'expo-status-bar';
import {Button,Input,Image,Avatar } from "react-native-elements"

import { Divider } from 'react-native-elements';

function lab({navigation}) {

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
  <Text style={{color:"black",textAlign:"center",width:400,shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4}}
      onPress={() => Linking.openURL('https://www.sciencedirect.com/')}>
    Science Direct 
   </Text>
   </View>
   
   <Divider style={{marginTop:10,width:400}} />
   <View style={styles.back}>
  <Text style={{color:"black",textAlign:"center",width:400 }}
   onPress={() => Linking.openURL('https://scholar.google.com/')}>
 Google Scholar 
</Text>
</View>
   <Divider style={{marginTop:10,width:400}} />
   <View style={styles.back}>
  <Text style={{color:"black",textAlign:"center",width:400 }}
      onPress={() => Linking.openURL('https://sci-hub.do/')}>
    Scihub
   </Text>
   </View>
   <Divider style={{marginTop:10,width:400}} />
   <View style={styles.back}>
  <Text style={{color:"black",textAlign:"center",width:400 }}
   onPress={() => Linking.openURL('https://academic.microsoft.com/home')}>
 Microsoft Academic
</Text>
</View>
<Divider style={{marginTop:10,width:400}} />
<View style={styles.back}>
  <Text style={{color:"black",textAlign:"center",width:400 }}
   onPress={() => Linking.openURL('https://pubmed.ncbi.nlm.nih.gov/32814095/')}>
  PubMed
</Text>
</View>
<Divider style={{marginTop:10,width:400}} />
<View style={styles.back}>
  <Text style={{color:"black",textAlign:"center",width:400 }}
   onPress={() => Linking.openURL('https://onlinelibrary.wiley.com/')}>
 Wiley Online Library
</Text>
</View>
<Divider style={{marginTop:10,width:400}} />
<View style={styles.back}>
  <Text style={{color:"black",textAlign:"center",width:400, }} 
   onPress={() => Linking.openURL('https://eric.ed.gov/')}>
 Eric
</Text>
</View>

   <Divider style={{marginTop:10,width:400}} />
 
   <View style={styles.back}>
  <Text style={{color:"black",textAlign:"center",width:400 }}
      onPress={() => Linking.openURL('https://www.ieee.org/')}>
    IEEE
   </Text>
</View>
<Divider style={{marginTop:10,width:400}} />
<View style={styles.back}>
  <Text style={{color:"black",textAlign:"center",width:400 }}
      onPress={() => Linking.openURL('https://lovdata.no/')}>
    Lovdata
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

export default lab;


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
     paddingTop:30,
     

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
    
 }
 ,
 shadowOpacity: 0.23,
 shadowRadius: 2.62,
 
 elevation: 4
 }
});


