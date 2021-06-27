import { StyleSheet,Text,SafeAreaView,View,ScrollView,TouchableOpacity} from 'react-native';
import React,{useState,useLayoutEffect,useEffect}   from 'react'
import { StatusBar } from 'expo-status-bar';
import {Image,Avatar } from "react-native-elements"
import {db,auth} from "../firebase"
import CustomListItem from "../components/CustomListItem"
import { Dimensions} from 'react-native'

/* We use only those components, which we import, so import the component for use */

function Home({navigation}) {

  const [chats,setChats]=useState([]);
  const signOut = ()=>{

  auth.signOut().then(()=>{

  navigation.replace("LogIn");
  })

}

  useEffect(()=>{
    const unsubcribe = db.collection('chats').onSnapshot(snapshot =>(
        setChats(snapshot.docs.map(doc=>({
          id:doc.id,
          data:doc.data()
        }) ) ))
    ) 
    return unsubcribe;
  },[])

  let ScreenHeight = Dimensions.get("window").height;

useLayoutEffect(() => {
  navigation.setOptions({
    title:"Student On The Move",
    headerTilesStyle:{backgroundColor:"#fff"},
    headerStyle: {
      backgroundColor: '#28527a'
    },
    headerTintColor:"white",
    headerRight:()=>(<View style={{marginRight:20}}>
  {/* header Text */} 
    <TouchableOpacity onPress={()=>navigation.navigate("Logout")}>
    <Avatar
     rouned source={{uri:"https://img.icons8.com/material-rounded/96/ffffff/menu-2.png"}} />
     </TouchableOpacity>
     
    </View> 
    )
    })
 },  [ navigation])


  const enterChat = (id,chatName)=>{
    
      navigation.navigate('Chat',{
        id,
        chatName
      });
  }


//   const enterLibrary = ()=>{
    
//     navigation.navigate('Library');
// }


const Teacher = (picture,name,details,info) =>
{
  
}

return (
  <SafeAreaView style ={styles.container}>

<StatusBar style="light"/>
<Image
        style={styles.backgroundImage}
        source={{
          uri: 'https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        }}
      />
  
  
  <ScrollView >
  

  <View style={{flex:1,height:ScreenHeight-90}}>
    {chats.map(({id,data:{chatName}})=>{
     
    
    return <CustomListItem key={id} id={id} chatName="Chat" enterChat={enterChat} />
    
    })}
    
    
  <View style ={{flexDirection:"row"}}>

    
     <View style={styles.box}>
     <TouchableOpacity style={styles.box} onPress={()=>navigation.navigate("lab")}>
     <Avatar 
   rouned source={{uri:"https://img.icons8.com/carbon-copy/100/ffffff/books.png"}} />
      <Text style={{color:"white"}} onPress={()=>navigation.navigate("lab")}> Different Digital Library</Text>
      </TouchableOpacity>
     </View>
   

     
     <View style={styles.box}>
     <TouchableOpacity style={styles.box} onPress={()=>navigation.navigate("sub1")}>
     <Avatar
   rouned source={{uri:"https://img.icons8.com/pastel-glyph/100/ffffff/external-link.png"}} />
      <Text style={{color:"white"}} onPress={()=>navigation.navigate("sub1")}>Different Tutorial of {"\n"} Courses</Text>
      </TouchableOpacity>
     </View>

     </View>
     

     <View style ={{flexDirection:"row"}}>

     <View style={styles.box}>
     <TouchableOpacity style={styles.box} onPress={()=>navigation.navigate("Timetable")}>
    
     <Avatar
   rouned source={{uri:"https://img.icons8.com/pastel-glyph/64/ffffff/time.png"}} />
      <Text style={{color:"white"}} onPress={()=>navigation.navigate("Timetable")}> Time Table</Text>
 
     </TouchableOpacity>
     </View>

     
     <View style={styles.box}>
     <TouchableOpacity style={styles.box} onPress={()=>navigation.navigate("faculty")}>
     <Avatar
   rouned source={{uri:"https://img.icons8.com/wired/100/ffffff/teacher.png"}} />
      <Text style={{color:"white"}} > Faculty</Text>
      </TouchableOpacity>
      </View>
     
     </View>
     <View style={{width:60,height:60,marginLeft:170,  
   backgroundColor:"#28527a",
   justifyContent:"center",
    alignItems:"center",borderRadius:10,}} >  
   <TouchableOpacity  onPress={()=>navigation.navigate("faqs")}>
     <Avatar  
   rouned source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI5cqiGnosGFBNI9iKsC4ojec_HuEW6rKTPA&usqp=CAU"}} />
      
      <Text style={{color:"white"}}
      >
         FAQs</Text> 
         </TouchableOpacity>  
      </View>
     </View>
    </ScrollView>


   </SafeAreaView>
// Different hyperlink for screen 
 );
}
export default Home;
const styles = StyleSheet.create({
 inputContainer:{
  width:300,
 },
 button:{
   flex:1,
  width:360,
  marginTop:70,
 },
 container:{
  flex:1,
  padding:10,
  backgroundColor: "white"
 },
 box:{
   width:170,
   height:200,
   opacity:50,
   backgroundColor:"#28527a",
   justifyContent:"center",
   alignItems:"center",
   margin:5,
   flex:1,
   color:"grey",
   borderRadius:10,
   shadowColor: "#000", 
  shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,
elevation: 4
 },
 backgroundImage: {
  flex: 1,
  resizeMode: 'cover', // or 'stretch'
}
});
// Formatting of screen  
