import React from 'react';
import { Divider } from 'react-native-elements';
import {
  StyleSheet,
  View,Linking,KeyboardAvoidingView,ScrollView,StatusBar } from 'react-native';
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

        <Text style={{color:"black",width:400,padding:10 }}
      onPress={() => Linking.openURL('https://www.noroff.no/en/admission/admission-requirements')}>
    What are the admission requirements at Noroff?
   </Text>
   </View>
   <View style={styles.back}>
   <Text style={{color:"black",width:400,padding:10 }}
      onPress={() => Linking.openURL('https://www.noroff.no/en/admission')}>
    
	How do I apply?

   </Text>
   </View>
   <Divider style={{marginTop:10,width:400}} />
   <View style={styles.back}>
   <Text style={{color:"black",width:400,padding:10 }}
      onPress={() => Linking.openURL('https://www.noroff.no/en/admission')}>
    
    When can I apply to Noroff?

   </Text>
   </View>
   
   <Divider style={{marginTop:10,width:400}} />
   <View style={styles.back}>
          <ReadMore
            numberOfLines={1}
            onReady={this._handleTextReady}>
            <Text style={{color:"black", }}>
            <Text     style={{fontSize:14,}}  >Where can I find information regarding my application? </Text>                          {"\n"}
            
           
                        <Text style={{textAlign:'justify'}}>	{"\n"}  	
                         Information regarding the application processing 
                        can be found on My Page.
                         My Page also includes school regulations, study contract, log-in information to the learning platform Moodle, registration and deregistration to exams.

                          Applicants will receive messages from the school and are called in to the guidance call via My Page.{"\n"}{"\n"} It is also where the applicant must upload documentation.
	Applicants who have applied through The Norwegian Universities and Colleges Admission 
  Service (NUCAS), will get access to My Page upon enrollment.
  

            </Text>
            
            
            </Text>
          </ReadMore>
        </View>
   <Divider style={{marginTop:10,width:400}} />
   <View style={styles.back}>
          <ReadMore
            numberOfLines={1}
            onReady={this._handleTextReady}>
            <Text style={{color:"black",width:400, }}>
            <Text     style={{fontSize:15,}}  > Can I apply directly to the second years?2 </Text>                          {"\n"}
            
           
                        <Text style={{fontSize:15,width:"auto"}}>	{"\n"} Yes. If you have previously completed a course that corresponds to the current first year at  Noroff you will have the opportunity to accredit this education and begin the second year.{"\n"}
    We accredit former education from other educational institutions
    If you are able to document relevant skills, you can apply directly to one of our second year studies.{"\n"}{"\n"} We can accredit the program from other schools who have an equivalent curriculum. We will consider each application individually and contact you for a conversation.{"\n"} You will then have the opportunity to meet a lecturer who will have a closer look at your expertise.
    Previous work and documentation
     from previous studies must be submitted in addition to a high school / secondary school diploma. In addition we will also ask you to bring a portfolio or showreel to present.
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
      
      
      