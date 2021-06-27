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
      onPress={() => Linking.openURL('https://www.noroff.no/en/student/semester-start')}>
    
    	Does Noroff host a "Mentor Week"?

   </Text>
   </View>
   <Divider style={{marginTop:10,width:400}} />
   <View style={styles.back}>
          <ReadMore
            numberOfLines={1}
            onReady={this._handleTextReady}>
            <Text style={{color:"black",width:400 }}>
            <Text     style={{adjustsFontSizeToFit:'true'}}  >Does Noroff have a celebration at the end of the school year? </Text>                          {"\n"}
            
           
                        <Text style={{fontSize:15,justifyContent: 'center',}}>	{"\n"} 
                        In collaboration with NSF Oslo and NSF Bergen, Noroff organizes the annual Diamond Awards send off party. The award show, Diamond Awards, is held in Oslo and Bergen (students and faculties from other campuses are invited to the Diamond Awards). The Diamond Awards consists of lectures, expo for students, presentations, entertainment, awards ceremony and a party. All Noroff students, new applicants, faculty / staff and industry personnel are invited to the Diamond Awards.

In Kristiansand, each school year ends with a graduation ceremony for graduates, as well as an after party for all students.

In Stavanger there is also an event for all the students


   
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
      
      
      