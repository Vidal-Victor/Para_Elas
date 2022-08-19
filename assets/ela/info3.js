import React from 'react';
import { View, Image, StyleSheet, KeyboardAvoidingView, Button, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 


export default function info3 (props)
{
    console.log(props);

return(

    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style ={Style.container}>
    
    <View style={Style.bola}>
        <Image style={Style.logo_login} source={require('../img/mãos.png')}/>
    </View>
    <View>
        <Text style={Style.titu}>
            Vamos Começar!
        </Text>
    </View>
    
    <View>
        <Text style={Style.textu}>
            Crie sua conta e vamos começar.
        </Text>
    </View>

    <View style={Style.bot}>
        <Button title="Começar" onPress= {()=>props.navigation.navigate('Minhaconta')}/>
    </View>

    <View style={Style.linha}>
    <Entypo name="circle" size={24} color="#FFFFFF" style={Style.bolinha}/>
    <Entypo name="circle" size={24} color="#FFFFFF" style={Style.bolinha2}/>
    <Entypo name="controller-record" size={32} color="#FFFFFF" style={Style.bolinha3}/>
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
        left: 130,
    },
    textu:{
        marginTop: 25,
        fontSize: 20,
        alignSelf: 'center',
        marginBottom: 20,
    },
    titu:{
        marginTop: 25,
        fontSize: 20,
        fontWeight:'bold',
        alignSelf: 'center',
    },
    bolinha3:{
        left: 25,
        bottom : 4
    },
    bolinha2:{
      left: 5,
    },
    bolinha:{
        left: -20,
    },
      linha:{
        marginTop: 350,
        flexDirection: 'row',
        alignSelf: 'center',
       },
       bot:{
           width: '50%',
           alignSelf: 'center'
       }
});