import { StyleSheet,Text,View,KeyboardAvoidingView,ScrollView,TouchableOpacity} from 'react-native';
import React,{useLayoutEffect}   from 'react'
import { StatusBar } from 'expo-status-bar';
import {Avatar } from "react-native-elements"

// We use only those components, which we import, so import the component for use 
function Subject({navigation}) {

    useLayoutEffect(() => {
        navigation.setOptions({
      
          headerStyle: {
            backgroundColor: '#28527a'
          },
          headerTintColor:"white",
          })
       },  [navigation])
// initialize the state  
 return (
   <>
  <KeyboardAvoidingView  style={styles.container}>
  <StatusBar style="light"/>
     
     
     <ScrollView >
     <View style={styles.cont}>

     
     <TouchableOpacity style={styles.back} onPress={()=>navigation.navigate("sub2")}>

      <Text style={{paddingTop:30,width:400, textAlign:"center",color:"black"}} onPress={()=>navigation.navigate("sub2")}> Problem Based Learning </Text>
      </TouchableOpacity>
     
     
     
     <TouchableOpacity style={styles.back} onPress={()=>navigation.navigate("sub22")}>

      <Text style={{paddingTop:30,width:400,textAlign:"center",color:"black"}} onPress={()=>navigation.navigate("sub22")}> Introduction To Programming</Text>
      </TouchableOpacity>
     
     
     <TouchableOpacity style={styles.back} onPress={()=>navigation.navigate("sub25")}>

      <Text style={{paddingTop:30,width:400, textAlign:"center",color:"black"}} onPress={()=>navigation.navigate("sub25")}> Discrete Mathematics</Text>
      </TouchableOpacity>
     
     <TouchableOpacity style={styles.back} onPress={()=>navigation.navigate("sub31")}>

      <Text style={{paddingTop:30,width:400,textAlign:"center",color:"black"}} onPress={()=>navigation.navigate("sub31")}> Network Principles</Text>
      </TouchableOpacity>
     
     <TouchableOpacity style={styles.back} onPress={()=>navigation.navigate("sub41")}>

      <Text style={{paddingTop:30,width:400,textAlign:"center",color:"black",paddingLeft:70}} onPress={()=>navigation.navigate("sub41")}> Introduction To Information Security</Text>
      </TouchableOpacity>
     
   </View>
   </ScrollView>


    
    
  </KeyboardAvoidingView>
  {/* Different hyperlink for screen */}
  <TouchableOpacity style = {{ position:"absolute", left:2 , bottom:5,marginLeft:20,marginBottom:11 }} onPress={()=>navigation.navigate("Home")}>
      <View style={{backgroundColor:"#28527a",padding:14,paddingLeft:17 , width:70, height: 70 , borderRadius:50}}>
      <Avatar 
       rouned source={{uri:"https://img.icons8.com/ios/240/ffffff/home--v1.png"}} />
      </View>
    </TouchableOpacity>
  </>
 )
}

export default Subject;


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
// Formatting of screen  


