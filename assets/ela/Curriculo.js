import React from 'react';
import { View, Image, StyleSheet, KeyboardAvoidingView, Button, Text, TouchableOpacity} from 'react-native';

export default function curriculo (props)
{
    console.log(props);

return(

    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style ={Style.container}>

    <View style={Style.top}>
        <Text style={Style.titulo}>
            Currículo
        </Text>
    </View>

    <TouchableOpacity>
    <View style={Style.botao}>
    <Image
        style={Style.aimg}
        source={require('../img/comomontar.png')}
        />
        <Text style={Style.texto}>
            Como montar seu currículo
        </Text>
        <Image 
        
        />
    </View>
    </TouchableOpacity>

    <TouchableOpacity>
    <View style={Style.botao}>
    <Image
        style={Style.aimg}
        source={require('../img/curriculooo.png')}
        />
        <Text style={Style.texto}>
            Criar ou enviar currículo
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
        marginTop: 25,
        width: '98%',
        height: 250,
        left: 5,
        borderRadius: 15,
    },
    texto:{
        fontSize: 25,
        fontWeight: 'bold',
        bottom: -25,
        left: 10,
    },
    top:{
        backgroundColor: '#ffa7ec',
        marginTop: 0,
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
         width: '95%',
         height: '75%',
        bottom: -10,
        left: 10,
        alignItems: 'center',
    },
});