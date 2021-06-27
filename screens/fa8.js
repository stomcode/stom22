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
            <Text     style={{fontSize:15,}}  >What are the campus opening hours? </Text>                           	{"\n"}                         {"\n"}
            
           
                        <Text style={{fontSize:15,justifyContent: 'center',}}>	{"\n"} 
                      
                        	Noroff is open to students on weekdays between 8 a.m. and 11 p.m. 
                        (opening hours may vary at different campuses). The school is also open
                         on weekends when needed.
                        The school is usually closed for holidays, including public holidays,
                         unless otherwise agreed.
 


   
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
            <Text     style={{adjustsFontSizeToFit:'true'}}  >Do I need a key card to enter the school?</Text>          	{"\n"}                         {"\n"}
            
           
                        <Text style={{fontSize:15,justifyContent: 'center',}}>	{"\n"} 
                        Yes. All our campuses require that students use a key card and an access code to get into the school.
                         Your student card will serve as a key card. 
                         Each student will be given their own private code. 
                         The code is used at the entrance to the school when outside normal office hours (8 a.m. to 4 p.m.)
                          The procedures for key cards may differ between campuses.
                        	
 


   
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
      
      
      