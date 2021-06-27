import { StyleSheet,Text,View,KeyboardAvoidingView,ScrollView,TouchableOpacity} from 'react-native';

import { StatusBar } from 'expo-status-bar';
import {Image,Avatar } from "react-native-elements"

import React,{useLayoutEffect}   from 'react'
// We use only those components, which we import, so we import the component for use 


function aboutus({navigation}) {

  useLayoutEffect(() => {
      navigation.setOptions({
    
        headerStyle: {
          backgroundColor: '#28527a'
        },
        headerTintColor:"white",
        })
     },  [navigation])
// header Text 
 return (
   <>
   
  <KeyboardAvoidingView  style={styles.container}>

  <StatusBar style="light"/>
     <ScrollView style={{flex:1}} >

        <View style={styles.cont}>
   {/* START */}
           <Text style={{paddingTop:40}}></Text>
           <Image 
        source={{
          uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk3YrHflobOueD625V9ZJ8f7hYWfHwszvltPK9yCxLokXEQDwjRkHQxV_VDznVrvanFZs&usqp=CAU'
        }} 
        style={{width: 100, height: 100, borderRadius: 400/ 2}} 
      />
           <Text style={styles.heading}>About us</Text>
          
           <Text style={styles.heading3}> 
           The Spiral Forge team is established in the first-year studio project 2020-2021.
            Our team consist of five team members who excitedly selected the app 
            development project to support and assist the Noroff students during 
            their academic time. {"\n"} {"\n"}
             Spiral Forge is one of the studio team who delivered a
             great opportunity for Noroff students by profoundly and intensely understanding students’ 
             requirements. Student on the move strives to deliver the support items that would help the 
             Noroff student during the educational period.
</Text>
           {/* END */}
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
export default aboutus;

//Screen Formatting 
const styles = StyleSheet.create({
 inputContainer:{
  flex:1
 },
 button:{
  width:200,
  marginTop:10,
 },
 container:{
  flex:1,
  padding:10,
  backgroundColor: "#f3f4ed",
  textAlign:"center"
 },
 linkStyle:
 {
     color:"grey",
     paddingTop:30
 },
 
 heading2:
 {
    color:"black",
    paddingTop:10,
    textAlign:"center"
 },
 heading3:
 {
    color:"grey",
    fontSize:15,
    paddingTop:10,
    justifyContent:'center',
    
   textAlign: "justify" 
 },
 cont:
 {
    alignItems:"center",
  justifyContent:"center",
 }

});

