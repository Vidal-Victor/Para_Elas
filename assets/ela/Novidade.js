import React from 'react';
import { View, Image, StyleSheet, KeyboardAvoidingView, Button, Text, TouchableOpacity} from 'react-native';
import * as WebBrowser from 'expo-web-browser';

export default function novidade (props)
{
    console.log(props);
    const ops = () =>{alert('Ainda não temos um site, mas espera que vamos ter 👍')}
return(

    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style ={Style.container}>

    <View style={Style.top}>
    <Text style={Style.titulo}>
        Novidade
    </Text>
    </View>

    <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync('https://instagram.com/_paraelas.app?igshid=YmMyMTA2M2Y=')}>
    <View style={Style.botao1}>
            <Image
            style={Style.aimg}
                source={require('../img/png/redes_em_png.png')
            }/>
        <Text style={Style.texto1}>
            Visite nosso                  Instragram
        </Text>
        <Image 
        
        />
    </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => ops()}>
    <View style={Style.botao}>
            <Image
            style={Style.aimg}
                source={require('../img/png/empng1.png')
            }/>
        <Text style={Style.texto}>
            Visite Nosso Site
        </Text>
        <Image 
        />
    </View>
    </TouchableOpacity>

    </KeyboardAvoidingView>
);
}

const Style = StyleSheet.create({

    container:{
       backgroundColor: '#ffe7e7', 
       height: '100%',
       width: '100%',
       marginTop: 30
    },
    logo_login:{
        marginBottom:10,
        width: 180,
        height: 175,
    },
    botao:{
        backgroundColor: '#9fb8ef',
        marginTop: -167,
        width: '98%',
        height: '50%',
        left: 5,
        borderRadius: 15,
        flexDirection: 'row'
    },
    botao1:{
        backgroundColor: '#9fb8ef',
        marginTop: 25,
        width: '98%',
        height: '38%',
        left: 5,
        borderRadius: 15,
        flexDirection: 'row'
    },
    texto:{
        fontSize: 25,
        fontWeight: 'bold',
        bottom: -40,
        right: 20
    },
    texto1:{
        fontSize: 25,
        fontWeight: 'bold',
        bottom: -30,
        right: 10
    },
    top:{
        backgroundColor: '#ffa7ec',
        marginTop: -10,
        width: '100%',
        height: '10%',
    },
    img:{
        width: 190,
        height: 60,
        left: 120,
        marginTop: 5,
    },
    titulo:{
        fontSize: 35,
        fontWeight: 'bold',
        left: 20,
        bottom: -10
     },
     aimg:{
        width:'50%',
        height:'100%',
        alignItems: 'flex-start',
        right: 10
    },
});