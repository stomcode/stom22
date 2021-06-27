import { StyleSheet,Text,View,KeyboardAvoidingView,ScrollView,Linking,TouchableOpacity} from 'react-native';

import { StatusBar } from 'expo-status-bar';
import {Image,Avatar } from "react-native-elements"

import React,{useLayoutEffect}   from 'react'
// We use only those components, which we import, so we import the component for use 

function contactus({navigation}) {


    const Mail = ({picture,name,details,info}) =>
    {
        return(
        
        <View>
        <Image 
        source={{
          uri:{picture}
        }} 
        style={{width: 100, height: 100, borderRadius: 400/ 2}} 
      />
           <Text style={styles.heading}> {name}</Text>
           <Text style={styles.heading}> {details}</Text>
           <Text style={styles.heading}> {info}</Text>
           </View>
        );
    }

    useLayoutEffect(() => {
        navigation.setOptions({
    
          headerStyle: {
            backgroundColor: '#28527a'
          },
          headerTintColor:"white",
          })
       },  [ navigation])

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
          uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///80NDQaGhrc3Nw7Ozs1NTX7+/svLy8mJiYrKysXFxcuLi4cHBwjIyMgICD5+fkTExOenp7o6Ojv7+8ODg6CgoKLi4uSkpJVVVXU1NTKyspzc3PBwcGysrKmpqZcXFxGRkZqampNTU3FxcWsrKy4uLhubm5hYWGNjY0EBASDGDW4AAAD6ElEQVR4nO3d2XKiQBhAYRFZRcCFaMyiSSbb+7/ggMaVvxGXptU6301uYhUntHRD60yrBQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcILE1icxHZebzkZhW5dwNPswHZiNPEsnL83MBo4jrX2F6MFkoJ1qD7Ss1DZY+BA0UBiYPIlzvW/CJW9usLCJU5ifRIOF47Srvc8LnwwWtgYT3RfTXmdqMjD3Gfga+4K4b7gvl2RtXdcbr/02MJ238Pgeawn0O8+m09Ze48tfVbvh2DXdtWX4lV54qEaz6xigG1Pnklcc3/80HSQYjy41OXqj7BpuDMsGs8tMjvH80XSK0mf3/KEa9F5NZ1RJsvC8oZqv0YamI7YJCw77rMlRXKP90x+i5IsH5J86OYprNHsS6Q9RcsRBNXwKT5ocQ2GN5j60u1YTKQpO/nf3hQvDtNM7us+3hDXas1dcuvSHKDnFocXvwsW9f+Sdozf6Ka/RBt/RYjA0UKLiLI8uzaSjC48IjCbCGm28ui43UKLi/B1gEAuLrOUIq8PvvZRfPrXWL9cfouSsD1I6Ce5PrcnRC4U1Wr6U3/xGEykKztZxpsLNjj05PDmKb+PXaHvGaaBExdk+1F5H2GN4CaonR/FSvH9LrT9EaafQ8tpf5aE6zComRy+VptPSK5pIUXD2jjiIpTMyV02O4hpNOOv6Q5T2CxV3PrvvqpVuKK/Ryr+pP0SpXJgPVenK+Fbewgm/hSmwWKNde2FxgyfMbh97k6PvS2s0xe2l/hAlsbCYHIUNse0dgG4q7CepV0H6Q5QUhfk1Ulplrh9yxNJfoGIl20CJiqowH4WeMAqXOwCBL63Rqu5G9IcoqQvlu70kawfileip8nFrEykKVYXyHfvjtzSb9KoXPvpDlCoLi8mxzs7Y4W0P7R1qBwrzyfHgk7M6W1eNtMgOFRaTY/WTspc6j60aqpEcLiyGqvrTIoN6jx4bLNpXp7DYhZC3ydyf33rP5Bqu2larMJ8cA2knqf5Tjsa7NmoWWla7tMwevNV/UmWkbal2odWNxjuv7Is3VLdcuHu7e+QT4xsp3GwrHf3U/1YKizV33x7Y/aN3bm6nML+qxr3o+E3UWyo8DYUUUkghhRRSSCGFFFJIIYVXXjhp5Ltr7wYLX3V+I2jFN/nFoOSYT+edKjX6seiPX+2Bv4a/GvQc9zyNb0bPj4x/9ynpTzr6TPpX9cl9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDK37/567rX9H9knstd5RQ/3GXdPfW1WkneU1S6ySIyaSX3dQaXAzNZdC5DF8GmD+qi3NW4XPxYBN7ZKF270yzcuP8zlDqUckgJnAAAAABJRU5ErkJggg=='
        }} 
        style={{width: 100, height: 100, borderRadius: 400/ 2}} 
      />
           <Text style={styles.heading}>Email </Text>
          
           <Text style={styles.heading3}
           onPress={() => Linking.openURL('utdanning@noroff.no')}> 
           utdanning@noroff.no</Text>
           {/* END */}

          {/* START */}
          <Text style={{paddingTop:40}}></Text>
           <Image 
        source={{
          uri:'data:image/png;base64,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'
        }} 
        style={{width: 100, height: 100, borderRadius: 400/ 2}} 
      />
           <Text style={styles.heading}>Call </Text>
           <Text style={styles.heading3}> 
          38 00 00 00</Text>
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

export default contactus;

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
 heading:
 {
    fontSize:20,
    color:"#28527a",
    paddingTop:10,
    textAlign:"center"
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
    paddingTop:10,
    textAlign:"center"
 },
 cont:
 {
    alignItems:"center",
  justifyContent:"center",
 }

});

