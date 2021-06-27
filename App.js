import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View} from 'react-native';
import SignUp from './screens/singup';
import LogIn from './screens/login';
import {createStackNavigator} from "@react-navigation/stack"
import Home from "./screens/home"
import AddChat from "./screens/AddChat"
import Chat from "./screens/Chat"
import Library from "./screens/library"

import Timetable from "./screens/timetable"
import lab from "./screens/lab"
import Logout from './screens/homeButt';
import Forgot from './screens/Forgot';
import re1 from './screens/re1';
import re2 from './screens/re2';
import re3 from './screens/re3';
import re4 from './screens/re4';
import sub1 from './screens/sub1';
import sub2 from './screens/sub2';
import sub3 from './screens/sub3';
import sub4 from './screens/sub4';
import sub5 from './screens/sub5';

import sub6 from './screens/sub6';
import sub7 from './screens/sub7';
import sub8 from './screens/sub8';
import sub9 from './screens/sub9';
import sub22 from './screens/sub22';
import sub23 from './screens/sub23';
import sub24 from './screens/sub24';
import sub25 from './screens/sub25';
import sub26 from './screens/sub26';
import sub27 from './screens/sub27';
import sub31 from './screens/sub31';
import sub32 from './screens/sub32';
import sub33 from './screens/sub33';
import sub34 from './screens/sub34';
import sub35 from './screens/sub35';
import sub41 from './screens/sub41';
import sub42 from './screens/sub42';
import sub43 from './screens/sub43';
import sub44 from './screens/sub44';
import sub45 from './screens/sub45';
import faculty from './screens/faculty';
import f2 from './screens/f2';
import f3 from './screens/f3';
import f4 from './screens/f4';
import contactus from './screens/contactus';
import aboutus from './screens/aboutus';
import fa1 from './screens/fa1';
import faqs from './screens/faqs';
import fa2 from './screens/fa2';
import fa4 from './screens/fa4';
import fa5 from './screens/fa5';
import fa6 from './screens/fa6';
import fa7 from './screens/fa7';
import fa8 from './screens/fa8';
import fa9 from './screens/fa9';
import fa10 from './screens/fa10';
import { LogBox } from 'react-native';



const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: {backgroundColor:"#2c6BED"},
  headerTitleStyle:{color:"white", fontSize:15},
  headerTintColor:"white"

}

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={globalScreenOptions}>


    <Stack.Screen options={{title:"Log In"}} name='LogIn' component= {LogIn} />
    <Stack.Screen options={{title:"Sign Up"}} name='SignUp' component= {SignUp} />
     <Stack.Screen options={{title:"Home"}} name='Home' component= {Home} />
      <Stack.Screen options={{title:"Add Chat"}} name='AddChat' component= {AddChat} />
      <Stack.Screen options={{title:"library"}} name='library' component= {Library} />
      <Stack.Screen options={{title:"Chat"}} name='Chat' component= {Chat} />
      <Stack.Screen options={{title:"About Us"}} name='aboutus' component= {aboutus} />
      <Stack.Screen options={{title:"Timetable"}} name='Timetable' component= {Timetable} />
      <Stack.Screen options={{title:"Digital Library"}} name='lab' component= {lab} />
      <Stack.Screen options={{title:"Profile"}} name='Logout' component= {Logout} />
      <Stack.Screen options={{title:"Forgot Password"}} name='Forgot' component= {Forgot} />
      <Stack.Screen options={{title:"Research Paper"}} name='re1' component= {re1} />
      <Stack.Screen options={{title:"Carrier Guides"}} name='re2' component= {re2} />
      <Stack.Screen options={{title:"Video Learning"}} name='re3' component= {re3} />
      <Stack.Screen options={{title:"Books Learning"}} name='re4' component= {re4} />
      <Stack.Screen options={{title:"Courses "}} name='sub1' component= {sub1} />
      <Stack.Screen options={{title:"PBL "}} name='sub2' component= {sub2} />
      <Stack.Screen options={{title:"Reference’s & Citation Manager "}} name='sub3' component= {sub3} />
      <Stack.Screen options={{title:"  Mind Map  "}} name='sub4' component= {sub4} />
      <Stack.Screen options={{title:"Formatting & Presentation Software Tools"}} name='sub5' component= {sub5} />
      <Stack.Screen options={{title:"Academic Writing Tools "}} name='sub6' component= {sub6} />
      <Stack.Screen options={{title:"Teams’ Colsuboration Tools "}} name='sub7' component= {sub7} />
      <Stack.Screen options={{title:"Readability Sources "}} name='sub8' component= {sub8} />
      <Stack.Screen options={{title:"Journals & Country Ranking "}} name='sub9' component= {sub9} />
      <Stack.Screen options={{title:"Introduction To Programming "}} name='sub22' component= {sub22} />
      <Stack.Screen options={{title:'Reading & Learning Guidance Material' }} name='sub23' component= {sub23} />
      <Stack.Screen options={{title:"Download Software’s "}} name='sub24' component= {sub24} />
      <Stack.Screen options={{title:"Discrete Mathematics "}} name='sub25' component= {sub25} />
      <Stack.Screen options={{title:"Reading & Learning Guidance  Material "}} name='sub26' component= {sub26} />
      <Stack.Screen options={{title:"Discrete Mathematics Calculator "}} name='sub27' component= {sub27} />
      <Stack.Screen options={{title:"Network Principles"}} name='sub31' component= {sub31} />
      <Stack.Screen options={{title:"Reading & Learning Guidance Material  "}} name='sub32' component= {sub32} />
      <Stack.Screen options={{title:" Network Operating Systems  "}} name='sub33' component= {sub33} />
      <Stack.Screen options={{title:"Ip Sub Net Calculator "}} name='sub34' component= {sub34} />
      <Stack.Screen options={{title:"Subnet Mask Cheat Sheet "}} name='sub35' component= {sub35} />
      <Stack.Screen options={{title:"Introduction To Information Security "}} name='sub41' component= {sub41} />
      <Stack.Screen options={{title:"Reading & Learning Guidance Material  "}} name='sub42' component= {sub42} />
      <Stack.Screen options={{title:"Encryption Programs Software’s  "}} name='sub43' component= {sub43} />
      <Stack.Screen options={{title:" Hash Generators & Converters  "}} name='sub44' component= {sub44} />
      <Stack.Screen options={{title:" RISK Probability & Impact Matrix "}} name='sub45' component= {sub45} />
      <Stack.Screen options={{title:"Faculty "}} name='faculty' component= {faculty} />
      <Stack.Screen options={{title:"Bachelors in Cyber Security "}} name='f2' component= {f2} />
      <Stack.Screen options={{title:"Bachelor in Applied Data Science "}} name='f3' component= {f3} />
      <Stack.Screen options={{title:"Bachelor in Digital Forensics "}} name='f4' component= {f4} />
      <Stack.Screen options={{title:"Contact us "}} name='contactus' component= {contactus} />
      
      <Stack.Screen options={{title:"FAQs "}} name='faqs' component= {faqs} />
      <Stack.Screen options={{title:"Admission Process "}} name='fa1' component= {fa1} />
      <Stack.Screen options={{title:"Study Contract "}} name='fa2' component= {fa2} />
      
      <Stack.Screen options={{title:"School Regulations " }} name='fa4' component= {fa4} />
      <Stack.Screen options={{title:"NOKUT and FFF "}} name='fa5' component= {fa5} />
      <Stack.Screen options={{title:"Student Life "}} name='fa6' component= {fa6} />
      <Stack.Screen options={{title:"Social Activities "}} name='fa7' component= {fa7} />
      <Stack.Screen options={{title:"School Opening Hours "}} name='fa8' component= {fa8} />
  <Stack.Screen options={{title:"Equipment and Books "}} name='fa9' component= {fa9} />
      
  <Stack.Screen options={{title:"Diploma "}} name='fa10' component= {fa10} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:10
  },
});
