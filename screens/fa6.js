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
          <ReadMore
            numberOfLines={1}
            onReady={this._handleTextReady}>
            <Text style={{color:"black",width:400 }}>
            <Text     style={{adjustsFontSizeToFit:'true'}}  >Can I change location of study, between the campuses? </Text>                          {"\n"}
            
           
                        <Text style={{fontSize:15,justifyContent: 'center',}}>	{"\n"} 
                        	It is possible to change, between the academic years, but you need to contact your
                         campus to make sure they have a place for you at the new campus.

   
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
            <Text     style={{fontSize:15,}}  >Can I make use of the campus facilities as an {"\n"} online student? </Text>                          {"\n"}
            
           
                        <Text style={{fontSize:15,justifyContent: 'center',}}>	{"\n"} 
                        	Online students do not have access to the campus facilities
   
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
            <Text     style={{fontSize:15,}}  >When do I get my student card? </Text>                                  	{"\n"}                         {"\n"}
            
           
                        <Text style={{fontSize:15,justifyContent: 'center',}}>	{"\n"} 
                        <Text > Classroom Students</Text>{"\n"}{"\n"}
                        	Classroom students will be photographed during semester start and receive their Student ID at school after this.
                        {"\n"}	 Stickers/oblate for existing students will be given at every semester start.
                        {"\n"}	Note that you need to have paid your invoice for us to be able to give you your Student ID and/or your sticker.
                        {"\n"}{"\n"}

   
    </Text>
    <Text > Web Students</Text> {"\n"}{"\n"}
    <Text style={{color:"black",width:400,padding:10 }}
      onPress={() => Linking.openURL('https://form.jotformeu.com/72262756659367')}>
    
    Web students can order their Student ID  <Text styles={{color:'blue'}} > Click Here</Text>
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
            <Text     style={{fontSize:15,}}  >Is Noroff a member of any student organizations? </Text>                   	{"\n"}                         {"\n"}
            
           
                        <Text style={{fontSize:15,justifyContent: 'center',}}>	{"\n"} 
                        Noroff is member of the Student Association of Agder (SiA), 
                        Stavanger (SiS), Bergen (Sammen) and Oslo (SiO).

   
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
            <Text     style={{fontSize:15,}}  >Does Noroff have its own student union? </Text>                	{"\n"}                         {"\n"}
            
           
                        <Text style={{fontSize:15,justifyContent: 'center',}}>	{"\n"} 
                      
                        	The students at Noroff have established independent student 
                        organizations in Kristiansand, Bergen and Oslo.
                         This are independent organizations run by and for students 
                         at Noroff. Membership is voluntary.
                         {"\n"}Noroff Stavanger have not yet established an independent student organization. 


   
    </Text>
    </Text>
          </ReadMore>
        </View>
        <Divider style={{marginTop:10,width:400}} />
   <View style={styles.back}>
   <Text style={{color:"black",width:400,padding:10 }}
      onPress={() => Linking.openURL('www.finn.no')}>
    
    How can I get accommodation?

   </Text>
   </View>
   <Divider style={{marginTop:10,width:400}} />
   <View style={styles.back}>
   <Text style={{color:"black",width:400,padding:10 }}
      onPress={() => Linking.openURL('https://www.regjeringen.no/no/dokumentarkiv/stoltenberg-ii/sd/Nyheter-og-pressemeldinger/nyheter/2009/lokal-kollektivtransport-fagskolestudent/id571248/')}>
    
    Is there a student discount for public transportation in Norway?

   </Text>
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
      
      
      