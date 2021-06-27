import React from 'react';
import { Divider } from 'react-native-elements';
import {
  StyleSheet,
  View,KeyboardAvoidingView,ScrollView,StatusBar } from 'react-native';
import ReadMore from 'react-native-read-more-text';

import { Text } from 'react-native-elements';

export default class App extends React.Component {
  render() {
    return (
        <KeyboardAvoidingView  style={styles.container}>
  <StatusBar style="light"/>
  <ScrollView >
     
  <View style={styles.cont}>


            <Divider style={{marginTop:10,width:400}} />
   <View style={styles.back}>
          <ReadMore
            numberOfLines={1}
            onReady={this._handleTextReady}>
            <Text style={{color:"black",width:400 }}>
            <Text     style={{fontSize:15,}}  >Can I borrow equipment at the school?</Text>                        	{"\n"}                         {"\n"}
            
           
                        <Text style={{fontSize:15,justifyContent: 'center',}}>	{"\n"} 
                      
                        It may be possible for students to loan equipment for assignments done outside of school.
                         This is dependant on the equipment not being used for commercial purposes and that 
                         the equipment is available for others to use during that current period. 


   
    </Text>
    </Text>
          </ReadMore>
        </View>
        <Divider style={{marginTop:10,width:400}} />
   <View style={styles.back}>
          <ReadMore
            numberOfLines={2}
            onReady={this._handleTextReady}>
            <Text style={{color:"black",width:400 }}>
            <Text     style={{allowFontScaling:'true'}}  >What are the PC/Mac requirements for the {"\n"} different programmes? </Text>          	{"\n"}                         {"\n"}
            
           
                        <Text style={{fontSize:15,justifyContent: 'center',}}>	{"\n"} 
                      
                        	Students must have access to a stable network connection that is
                        at a minimum 4mbit speed (10Mbit or greater recommended). This is 
                        used extensively for required streaming of videos and downloading 
                        large files for lectures and tutorials.{"\n"}

	Campus based students will have access to suitable PC’s and networking whilst on campus,
 but it is recommended to have their own computer to facilitate working off campus. 
 Campus students are required to have a good quality set of headphones or headset of
  their own that can be used in the lab.
 


   
    </Text>
    </Text>
          </ReadMore>
        </View>

        <Divider style={{marginTop:10,width:400}} />
   <View style={styles.back}>
          <ReadMore
            numberOfLines={1}
            onReady={this._handleTextReady}>
            <Text style={{color:"black",width:400 }}>
            <Text     style={{fontSize:15,}}  >How do I borrow equipment? </Text>                           	{"\n"}                         {"\n"}
            
           
                        <Text style={{fontSize:15,justifyContent: 'center',}}>	{"\n"} 
                      
                        Student cards will serve as loan cards for school equipment. 
                        Loans and return of equipment usually happens between the hours 
                        of 8 a.m. to 4 p.m. on weekdays.
 


   
    </Text>
    </Text>
          </ReadMore>
        </View>
        <Divider style={{marginTop:10,width:400}} />
   <View style={styles.back}>
          <ReadMore
            numberOfLines={1}
            onReady={this._handleTextReady}>
            <Text style={{color:"black",width:400 }}>
            <Text     style={{adjustsFontSizeToFit:'true'}}  >What responsibility do I have for the loaned equipment? </Text>          	{"\n"}                         {"\n"}
            
           
                        <Text style={{fontSize:15,justifyContent: 'center',}}>	{"\n"} 
                      
                        	All students must sign a loan contract.
 


   
    </Text>
    </Text>
          </ReadMore>
        </View>
        <Divider style={{marginTop:10,width:400}} />
   <View style={styles.back}>
          <ReadMore
            numberOfLines={1}
            onReady={this._handleTextReady}>
            <Text style={{color:"black",width:400 }}>
            <Text     style={{fontSize:15,}}  >Should I have a separate PC / MAC at home? </Text>          	{"\n"}                         {"\n"}
            
           
                        <Text style={{fontSize:15,justifyContent: 'center',}}>	{"\n"} 
                      
                        For on-campus students at Noroff Vocational School, PCs and Macs are available in labs and other rooms where use is required. Most students choose to have their own laptop, or a computer at home.

                        {"\n"}	Students at Noroff Online Studies need to provide their own computer equipment, Internet access, software licenses and other materials.
                        {"\n"}	Students at Noroff University College have access to Mac / PC lab on campus. We advise students to have their own PC / Mac at home as well.

 


   
    </Text>
    </Text>
          </ReadMore>
        </View>
        <Divider style={{marginTop:10,width:400}} />
   <View style={styles.back}>
          <ReadMore
            numberOfLines={1}
            onReady={this._handleTextReady}>
            <Text style={{color:"black",width:400 }}>
            <Text     style={{fontSize:15,}}  >
Which books should I buy? </Text>                                 	{"\n"}                         {"\n"}
            
           
                        <Text style={{fontSize:15,justifyContent: 'center',}}>	{"\n"} 
                      
                        	You will be sent a reading list for your current study before the semester begins.
                         Some classes buy curriculum books together.
                         You are responsible for acquiring the books yourself.

 


   
    </Text>
    </Text>
          </ReadMore>
        </View>
      
  </View>
      </ScrollView>
      </KeyboardAvoidingView>
    );
  }

  _handleTextReady = () => {
    console.log('ready!');
  }
}

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
           marginTop:10,
           padding:10,
           shadowColor: "#000", 
         shadowOffset: {
           
           height: 80,
           width:400,  
       },
       shadowOpacity: 0.23,
       shadowRadius: 2.62,
       
       elevation: 4
       }
      });
      
      
      