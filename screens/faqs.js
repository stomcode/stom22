import { StyleSheet,Text,View,KeyboardAvoidingView,ScrollView,TouchableOpacity} from 'react-native';
import React,{useLayoutEffect}   from 'react'
import { StatusBar } from 'expo-status-bar';
import {Avatar } from "react-native-elements"
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();
// We use only those components, which we import, so we import the component for use 
function FAQs({navigation}) {

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
     <ScrollView >
     <View style={styles.cont}>
     <TouchableOpacity style={styles.back} onPress={()=>navigation.navigate("fa1")}>

      <Text style={{paddingTop:30,width:400, textAlign:"center",color:"black"}} onPress={()=>navigation.navigate("fa1")}> Admission Process </Text>
      </TouchableOpacity>
     
     
     
     <TouchableOpacity style={styles.back} onPress={()=>navigation.navigate("fa2")}>

      <Text style={{paddingTop:30,width:400,textAlign:"center",color:"black"}} onPress={()=>navigation.navigate("fa2")}> Study Contract</Text>
      </TouchableOpacity>
     
     <TouchableOpacity style={styles.back} onPress={()=>navigation.navigate("fa4")}>

      <Text style={{paddingTop:30,width:400, textAlign:"center",color:"black"}} onPress={()=>navigation.navigate("fa4")}> School Regulations</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.back} onPress={()=>navigation.navigate("fa5")}>

<Text style={{paddingTop:30,width:400, textAlign:"center",color:"black"}} onPress={()=>navigation.navigate("fa5")}> NOKUT and FFF</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.back} onPress={()=>navigation.navigate("fa6")}>

      <Text style={{paddingTop:30,width:400, textAlign:"center",color:"black"}} onPress={()=>navigation.navigate("fa6")}> Student Life</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.back} onPress={()=>navigation.navigate("fa7")}>

      <Text style={{paddingTop:30,width:400, textAlign:"center",color:"black"}} onPress={()=>navigation.navigate("fa7")}>Social Activities</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.back} onPress={()=>navigation.navigate("fa8")}>

      <Text style={{paddingTop:30,width:400, textAlign:"center",color:"black"}} onPress={()=>navigation.navigate("fa8")}> School Opening Hours</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.back} onPress={()=>navigation.navigate("fa9")}>

      <Text style={{paddingTop:30,width:400, textAlign:"center",color:"black"}} onPress={()=>navigation.navigate("fa9")}> Equipment and Books</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.back} onPress={()=>navigation.navigate("fa10")}>

      <Text style={{paddingTop:30,width:400, textAlign:"center",color:"black"}} onPress={()=>navigation.navigate("fa10")}>Diploma</Text>
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
// Different hyperlink for screen 
export default FAQs;


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

//Screen Formatting 