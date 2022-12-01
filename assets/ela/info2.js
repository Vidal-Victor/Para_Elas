import React from 'react';
import { View, Image, StyleSheet, KeyboardAvoidingView, Button, Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 

export default function info3 (props)
{
    console.log(props);

return(

    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style ={Style.container}>
    
    <View style={Style.bola}>
        <Image style={Style.logo_login} source={require('../img/localizar.png')}/>
    </View>
    <View>
        <Text style={Style.titu}>
            Encontre Trabalho
        </Text>
    </View>
    
    <View>
        <Text style={Style.textu}>
           Encontre vagas de trabalho perto de
           você e conquiste sua independência
           financeira.
        </Text>
    </View>

    <TouchableOpacity style = {Style.loginbutton} onPress= {()=>props.navigation.navigate('Info3')}>
        <View ><Text style = {Style.loginbunttonText}>Próximo</Text></View>
    </TouchableOpacity>

    <View style={Style.linha}>
    <Entypo name="circle" size={24} color="#FFFFFF" style={Style.bolinha}/>
    <Entypo name="controller-record" size={32} color="#FFFFFF" style={Style.bolinha2}/>
    <Entypo name="circle" size={24} color="#FFFFFF" style={Style.bolinha3}/>
    </View>
    </KeyboardAvoidingView>
);
}

const Style = StyleSheet.create({

    container:{
       backgroundColor: '#c7c2f8', 
       width: '100%', 
       height: '100%'
    },
    logo_login:{
        marginBottom:10,
        width: 175,
        height: 175,
    },
    bola:{
        marginTop: 100,
        width: '40%',
        height: '25%',
        borderRadius: 300,
        alignSelf: 'center',
    },
    textu:{
        alignSelf: 'center',
        marginTop: 25,
        fontSize: 20,
        marginBottom: 20,
    },
    titu:{
        alignSelf: 'center',
        marginTop: 25,
        fontSize: 20,
        fontWeight:'bold',
    },
    bolinha2:{
        
        bottom : 4
    },
    bolinha:{
        left: -25,
    },
    bolinha3:{
        left: 23
    },
      linha:{
        marginTop: 290,
        flexDirection: 'row',
        alignSelf: 'center',
       },
       loginbutton:{
      
        padding: 12,
        backgroundColor: '#FF34B2',
        alignSelf:"center",
        alignItems:'center',
        borderRadius:50,
        width:'57%',
        
        },
        loginbunttonText:{
        color:'#000',
        fontWeight:'bold',
        fontSize:15
    },
});