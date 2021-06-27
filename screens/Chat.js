import { Avatar } from 'react-native-elements';
import React,{useEffect,useLayoutEffect,useState, useRef} from 'react'
import { StyleSheet, Text, View,SafeAreaView, KeyboardAvoidingView,ScrollView,TextInput,TouchableOpacity, Keyboard,TouchableWithoutFeedback } from 'react-native'
import {AntDesgin,SimpleLineIcons, Ionicons} from "@expo/vector-icons"
import { auth, db } from '../firebase';
import firebase from "firebase"
// We use only those components, which we import, so we import the component for use 
const Chat = ({navigation,route}) => {
 
 const [input,setInput]=useState(''); 
 const [messages,setMessages] = useState([]);
 
 useLayoutEffect(() => {
  navigation.setOptions({

    headerStyle: {
      backgroundColor: '#28527a'
    },
    headerTintColor:"white",
    })
 },  [ navigation])
// header Text 

useLayoutEffect(()=>{

 navigation.setOptions({
   headerTitleAlign:'left',
   
   headerBackTitleVisible:false,
   headerTitle : ()=>(
       <View 
        style={{flexDirection:"row",alignItems:"center"}} >
       
        <Avatar rounded source={{
         uri: "https://img.icons8.com/wired/100/4a90e2/chat.png",
        }} />

        
        <Text style={{color:"white",marginLeft:10,fontWeight:'700'}}>
         {route.params.chatName}
        </Text> 

       </View>
   ),
 })

 
},[navigation])
   
function sendMessgage(){
 Keyboard.dismiss();
 
 db.collection('chats').doc(route.params.id).collection('messages').add({
   timestamp: firebase.firestore.FieldValue.serverTimestamp(),
   message: input,
   displayName:auth.currentUser.displayName,
   email: auth.currentUser.email
 })

   setInput("");
}




useLayoutEffect(()=>
{
  const unsubcribe = db
  .collection('chats').doc(route.params.id)
  .collection('messages')
  .orderBy("timestamp","asc")
  .onSnapshot((snapshot) => 
    setMessages(
    snapshot.docs.map((doc) => ({
      id: doc.id,
      
      
      data: doc.data(),
  
    }))
    )
  
);
//sorted  message by time 
  return unsubcribe;
},[route])

const scrollViewRef = useRef();
 


 return (
  <SafeAreaView style={{flex:1,backgroundColor:"white"}}> 
   
   <KeyboardAvoidingView behaviour='height' style={styles.container} keyboardVerticalOffset={90}>  
   
   <>

   
    <ScrollView contentConatinerStyle ={{paddingTop: 15}}
    ref={scrollViewRef}
      onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}>
    

    {messages.map(({id,data}) =>
    (
      data.email === auth.currentUser.email ? 
      (
        <View key={id} style={styles.reciver}>
        <Text style={styles.named}>You </Text>
        <Text style={styles.reciverText}>{data.message}</Text>
        
        
        </View>

      ):
      (
        <View style={styles.sender}>
        <Text style={styles.name}>{data.displayName} </Text>
        <Text style={styles.senderText}>{data.message}</Text>
        
        </View>
      )
    )
    )}
    </ScrollView>
{/*show your display Name */}
     <View style={styles.footer}  >  
     <TextInput style={styles.textInput} value={input} placeholder="Type a message " onSubmitEditing={sendMessgage} onChangeText = {(text)=> setInput(text)} />
     <TouchableOpacity onPress={sendMessgage}>
     <Avatar
       source={{uri:"https://img.icons8.com/small/96/4a90e2/filled-sent.png"}} />
     </TouchableOpacity>
     
     </View>


   </>
    
   </KeyboardAvoidingView>
  </SafeAreaView>
 )
}

export default Chat

const styles = StyleSheet.create({
container:{
 flex:1,
},
footer:{
 flexDirection:"row",
 alignItems:"center",
 width: '100%',
 padding:15, 
},
textInput:{
 bottom: 0,
 flex:1,
 marginRight:15,
 borderColor:"transparent",
 backgroundColor:"#ECECEC",
 borderWidth:1,
 padding:10,
 color:'grey',
 borderRadius:30
 },
 reciver:
 {
   padding:15,
   backgroundColor:"#ECECEC",
   alignSelf:"flex-end",
   borderRadius:20,
   marginRight:15,
   marginTop:20,
   maxWidth:"80%",
   position:"relative"
 },
 sender:
 {
  padding:15,
  backgroundColor:"#28527a",
  alignSelf:"flex-start",
  borderRadius:20,
  marginLeft:15,
  marginTop:20,
  maxWidth:"80%",
  position:"relative"
 },
 senderText:
 {
   color:"white",
   fontWeight:"500",
   marginLeft:4,
   marginBottom:15
 },
 reciverText:
 {
   color:"grey",
   fontWeight:"500",
   marginLeft:4,
   marginBottom:15
 },
 name:
 {
   color:"white",
   fontWeight:"200",
   fontSize:10,
   marginLeft:4,
   marginBottom:15
 },
 named:
 {
   color:"#e84545",
   fontWeight:"200",
   fontSize:10,
   marginLeft:4,
   marginBottom:15
 }

})
//formating 