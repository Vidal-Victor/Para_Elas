import React from 'react';
import { View, Image, StyleSheet, KeyboardAvoidingView, Button, Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 

export default function info1 (props)
{
    console.log(props);

return(

    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style ={Style.container}>
    
    <View style={Style.bola}>
    <Image
    style={Style.logo_login}
        source={require('../img/computador.png')
    }/>
    </View>
    <View>
        <Text style={Style.titu}>
            Capacitação Online
        </Text>
    </View>
    
    <View>
        <Text style={Style.textu}>
            Temos cursos online para você
            se capacitar e entrar no mercado
            de trabalho.
        </Text>
    </View>

    <TouchableOpacity style = {Style.loginbutton} onPress= {()=>props.navigation.navigate('Info2')}>
        <View ><Text style = {Style.loginbunttonText}>Próximo</Text></View>
    </TouchableOpacity>
    
    <View style={Style.linha}>
    <Entypo name="controller-record" size={32} color="#FFFFFF" style={Style.bolinha} />
    <Entypo name="circle" size={24} color="#FFFFFF" style={Style.bolinha2} />
    <Entypo name="circle" size={24} color="#FFFFFF" style={Style.bolinha3} />
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
        marginBottom: 25,
    },
    titu:{
        alignSelf: 'center',
        marginTop: 25,
        fontSize: 20,
        fontWeight:'bold',
    },
    bolinha:{
        left: -23,
        bottom : 4
    },
    bolinha2:{

    },
    bolinha3:{
        left: 25
    },
     linha:{
         marginTop: 287,
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