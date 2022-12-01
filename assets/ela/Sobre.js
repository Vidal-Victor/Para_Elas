import React from 'react';
import { View, Image, StyleSheet, KeyboardAvoidingView, Button, Text, TouchableOpacity, TextInput} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export default function sobre (props)
{
    console.log(props);
    
return(

    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style = {Style.container}>
    
    <View style={Style.aview}>
        <Text style={Style.titulo}>
            Sobre Nós
        </Text>
    </View>

    <View style={Style.bola}>
        <Image style={Style.img}
            source={require('../img/logo.png')}
        />
    </View>

    <View>
        <Text style={Style.textu}> 
        PARA ELAS é um projeto que busca
        ajudar mulheres a se capacitar e
        ingressar no mercado de trebalho.
        Buscamos promover a igualdade de
        Gênero no mercado de trabalho e
        ajudar as mulheres a conquistar
        sua independência financeira.
        </Text>    
    </View>

    <TouchableOpacity style = {Style.loginbutton} onPress= {()=>props.navigation.navigate('Home')}>
        <View ><Text style = {Style.loginbunttonText}>Página inicial</Text></View>
    </TouchableOpacity>
    
    </KeyboardAvoidingView>

);
}

const Style = StyleSheet.create({

    container:{
        backgroundColor: '#ffe7e7', 
        height: '100%',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 30,
        fontWeight:'bold',
        left: 30,
        bottom: -30
    },
    aview:{
        backgroundColor: '#ffa7ec',
        height: '12%',
        width: '100%',
        borderRadius: 7,
    },
    butao:{
        marginTop:25,
        borderRadius:10,
        padding: 12,
        backgroundColor: "#ffe7e7",
        alignSelf:"center",
        alignItems:'center',
        borderRadius:10,
        width:'90%',
    },
    textu:{
        marginTop: 1,
        fontSize: 20,
        fontWeight:'bold',
        alignSelf:"center",
    },
    loginbutton:{
        marginTop: 200,
        padding: 12,
        backgroundColor: '#9FB8EF',
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
    img:{
        width: '100%',
        height: '100%',
        marginTop: 3,
        right: 15
    },
    bola:{
        width: '55%',
        height: '26%',
        borderRadius: 300,
        backgroundColor: '#FFF2F2',
        alignItems: 'center',
        marginTop: 10,
    },
});