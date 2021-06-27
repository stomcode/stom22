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
      onPress={() => Linking.openURL('https://static.noroff.no/student/contract_nuc.pdf')}>
    
    Does Noroff have a study contract?

   </Text>
   </View>
   <Divider style={{marginTop:10,width:400}} />
   <View style={styles.back}>
          <ReadMore
            numberOfLines={1}
            onReady={this._handleTextReady}>
            <Text style={{color:"black",width:400 }}>
            <Text     style={{fontSize:15,}}  > How do I sign the study contract? </Text>           	{"\n"}                         {"\n"}
            
           
                        <Text style={{fontSize:15,justifyContent: 'center',}}>	{"\n"} 
                        The study contract will automatically be signed when you accept the offer of a place. 
                        In accepting the offer from Noroff, you agree to the content of the study contract.
   
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
            <Text     style={{fontSize:15,}}  > Can I cancel my contract? </Text>                               	{"\n"}                        {"\n"}
            
               
                        <Text style={{fontSize:15,justifyContent: 'center',}}>	{"\n"} 
                        When you accept a study place at Noroff, you will automatically receive a 
                        cancellation form. Norwegian law requires a repent period of 14 days from
                         the date the agreement is signed.
                         During this time you can cancel the contract by submitting the form.
       
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
      
      
      