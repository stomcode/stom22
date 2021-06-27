import { StyleSheet,Text,View,KeyboardAvoidingView,ScrollView,Linking,TouchableOpacity } from 'react-native';
import React,{useState,useLayoutEffect,useEffect}   from 'react'
import { StatusBar } from 'expo-status-bar';
import {Button,Input,Image,Avatar } from "react-native-elements"
import { auth } from '../firebase';
import { Divider } from 'react-native-elements';

function Libary({navigation}) {

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
    

     <ScrollView>

    <View style={{justifyContent:"center",
  alignItems:"center"}}>
    

     <View style ={styles.back}>
     <Text style={styles.heading}> Python</Text>
     <Text style={styles.linkStyle}
      onPress={() => Linking.openURL('https://docs.python.org/3/tutorial/')}>
    The Python Tutorial — Python 3.9.2 documentation
   </Text>
   <Divider style={{marginTop:20,width:400}} />
   <Text style={styles.linkStyle}
      onPress={() => Linking.openURL('https://www.w3schools.com/python/')}>
    Python Tutorial - W3Schools
   </Text>
   <Divider style={{marginTop:20,width:400}} />
   <Text style={styles.linkStyle}
      onPress={() => Linking.openURL('https://www.programiz.com/python-programming/time')}>
    Learn Python Programming - Programiz
   </Text>
   <Divider style={{marginTop:20,width:400}} />
   <Text style={styles.linkStyle}
      onPress={() => Linking.openURL('https://realpython.com/')}>
    Real Python: Python Tutorials
   </Text>

   </View>

   <View style ={styles.back}>
   <Text style={styles.heading}> SQL</Text>
     <Text style={styles.linkStyle}
      onPress={() => Linking.openURL('https://dev.mysql.com/doc/')}>
    MySQL Documentation - MySQL
   </Text>
   <Divider style={{marginTop:20,width:400}} />
   <Text style={styles.linkStyle}
      onPress={() => Linking.openURL('https://www.w3schools.com/sql/')}>
    SQL Tutorial - W3Schools
   </Text>
   <Divider style={{marginTop:20,width:400}} />
   <Text style={styles.linkStyle}
      onPress={() => Linking.openURL('https://www.geeksforgeeks.org/sql-tutorial/')}>
    SQL Tutorial - GeeksforGeeks
   </Text>
   <Divider style={{marginTop:20,width:400}} />
   <Text style={styles.linkStyle}
      onPress={() => Linking.openURL('https://www.sqltutorial.org/')}>
    SQL Tutorial - Essential SQL For The Beginners
   </Text>
   </View>






   <View style ={styles.back}>
   <Text style={styles.heading}> Reference’s & Citation Manager</Text>
     <Text style={styles.linkStyle}
      onPress={() => Linking.openURL('https://www.zotero.org/')}>
    Zetero
   </Text>
   <Divider style={{marginTop:20,width:400}} />
   <Text style={styles.linkStyle}
      onPress={() => Linking.openURL('https://www.mendeley.com/reference-management/reference-manager')}>
    Mendeley
   </Text>
   <Divider style={{marginTop:20,width:400}} />
   <Text style={styles.linkStyle}
      onPress={() => Linking.openURL(' https://www.citationmachine.net/')}>
   Citation Machine
   </Text>
   <Divider style={{marginTop:20,width:400}} />
   <Text style={styles.linkStyle}
      onPress={() => Linking.openURL('https://endnote.com/downloads')}>
    EndNot
   </Text>

   <Divider style={{marginTop:20,width:400}} />
   <Text style={styles.linkStyle}
      onPress={() => Linking.openURL('https://www.mybib.com/#/projects/6XaQrz/citations')}>
    My bib
   </Text>
   </View>



   <View style ={styles.back}>
   <Text style={styles.heading}> Mind Map </Text>
     <Text style={styles.linkStyle}
      onPress={() => Linking.openURL('https://www.mindmanager.com/en/')}>
    Mind manager 
   </Text>
   <Divider style={{marginTop:20,width:400}} />
   <Text style={styles.linkStyle}
      onPress={() => Linking.openURL(' https://www.diagrams.net')}>
    Diagrams
   </Text>
   <Divider style={{marginTop:20,width:400}} />
   <Text style={styles.linkStyle}
      onPress={() => Linking.openURL('https://www.xmind.net')}>
   Xmind
   </Text>
   <Divider style={{marginTop:20,width:400}} />
   <Text style={styles.linkStyle}
      onPress={() => Linking.openURL('https://gitmind.com')}>
    Gitmind
   </Text>

   <Divider style={{marginTop:20,width:400}} />
   <Text style={styles.linkStyle}
      onPress={() => Linking.openURL('https://miro.com')}>
    Miro
   </Text>
   </View>


   
   <View style ={styles.back}>
   <Text style={styles.heading}> Formatting & Presentation Software Tools </Text>
     <Text style={styles.linkStyle}
      onPress={() => Linking.openURL('https://www.visme.co')}>
    Visme 
   </Text>
   <Divider style={{marginTop:20,width:400}} />
   <Text style={styles.linkStyle}
      onPress={() => Linking.openURL('https://www.haisa.org/HAISA-FormattingGuidelines.pdf')}>
    Haisa
   </Text>
   <Divider style={{marginTop:20,width:400}} />
   <Text style={styles.linkStyle}
      onPress={() => Linking.openURL('https://www.ieee.org/conferences/publishing/templates.html')}>
   IEEE
   </Text>
   
   </View>


   <View style ={styles.back}>
   <Text style={styles.heading}> Academic Writing Tools </Text>
     <Text style={styles.linkStyle}
      onPress={() => Linking.openURL('https://app.grammarly.com')}>
    Grammarly
   </Text>
   <Divider style={{marginTop:20,width:400}} />
   <Text style={styles.linkStyle}
      onPress={() => Linking.openURL('https://focuswriter.en.softonic.com')}>
    Focus writer
   </Text>
   <Divider style={{marginTop:20,width:400}} />
   <Text style={styles.linkStyle}
      onPress={() => Linking.openURL('https://hemingway-editor.en.softonic.com')}>
   Hemingway Editor
   </Text>

   <Divider style={{marginTop:20,width:400}} />
   <Text style={styles.linkStyle}
      onPress={() => Linking.openURL('https://www.scribus.net/downloads')}>
   Scribus
   </Text>

   <Divider style={{marginTop:20,width:400}} />
   <Text style={styles.linkStyle}
      onPress={() => Linking.openURL('https://evernote.com')}>
    Evernote
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

export default Libary;


const styles = StyleSheet.create({
 inputContainer:{
width:300
 },
 button:{
  width:200,
  marginTop:10,
 },
 container:{
  flex:1,
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
    paddingTop:10,
    fontSize:30
 },
 back:
{
    backgroundColor:"#f8f5f1",
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

