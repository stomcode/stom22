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
            <Text     style={{fontSize:15,}}  > 	What is NOKUT? </Text>                                                                                  {"\n"}
            
           
                        <Text style={{fontSize:15,justifyContent: 'center',}}>	{"\n"} 
                        NOKUT (Norwegian Agency for Quality Assurance in Education) is a government 
                        agency that ensures the quality of the various schools in Norway.{"\n"} NOKUT oversee and
                         encourage the development of quality education at Norwegian universities, university
                          colleges and vocational schools. All courses offered at Noroff University College,
                         Noroff Vocational School and Noroff Online Studies are accredited by NOKUT.
   
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
            <Text     style={{fontSize:15,}}  >What is the FFF? </Text>                                                                                    {"\n"}
            
           
                        <Text style={{fontSize:15,justifyContent: 'center',}}>	{"\n"} 
                        Forum for Fagskoler (Forum for Vocationas Schools, or FFF) works to 
                        ensure a high quality education for students, and to ensure adequate 
                        framework for vocational schools.{"\n"} The Forum is a network under the 
                        association of knowledge and technology enterprises in NHO (Abelia), 
                        and is a consultative body to the Parliament, the Ministry of Education,
                         NOKUT and the State Educational Loan Fund. {"\n"}Through its membership, Noroff
                          Vocational School students have secured the following arrangements:
	A standardized study contract prepared in cooperation with the Consumer Ombudsman.{"\n"}
Joint appeal board which satisfies one of NOKUT's requirements for approval.
	A common template for regulations for vocational schools approved by NOKUT.

   
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
      
      
      