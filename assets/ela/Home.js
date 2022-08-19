import React from 'react';
import { View, Image, StyleSheet, KeyboardAvoidingView, Button, Text, TouchableOpacity} from 'react-native';

export default function home (props)
{
    console.log(props);

return(

    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style ={Style.container}>

    <View style={Style.top}>
    <Image
    style={Style.img}
        source={require('../img/logo.png')
    }/>
    </View>

    <TouchableOpacity onPress= {()=>props.navigation.navigate('Curso')}>
    <View style={Style.botao}>
        <Text style={Style.texto}>
            Cursos Online
        </Text>
        <Image 
         style={Style.cur}
            source={require('../img/cursos.png')}
        />
    </View>
    </TouchableOpacity>

    <TouchableOpacity onPress= {()=>props.navigation.navigate('Emprego')}>
    <View style={Style.botao}>
        <Text style={Style.texto}>
            Emprego
        </Text>
        <Image 
        style={Style.cur}
        source={require('../img/emprego.png')}
        />
    </View>
    </TouchableOpacity>

    <TouchableOpacity onPress= {()=>props.navigation.navigate('Novidade')}>
    <View style={Style.botao}>
        <Text style={Style.texto}>
            Novidades
        </Text>
        <Image 
        style={Style.new3}
        source={require('../img/new2.png')}
        />
        <Image 
        style={Style.new2}
        source={require('../img/new2.png')}
        />
        <Image 
        style={Style.new}
        source={require('../img/new.png')}
        />
    </View>
    </TouchableOpacity>

    <TouchableOpacity onPress= {()=>props.navigation.navigate('Curriculo')}>
    <View style={Style.botao}>
        <Text style={Style.texto}>
            Currículo
        </Text>
        <Image 
        style={Style.cur}
        source={require('../img/curriculo.png')}
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
        height: 120,
        left: 5,
        borderRadius: 15,
    },
    texto:{
        fontSize: 25,
        fontWeight: 'bold',
        bottom: -40,
        
    },
    top:{
        backgroundColor: '#ffa7ec',
        marginTop: 0,
        width: '100%',
        height: '10%',
    },
    img:{
        width: 190,
        height: 90,
        left: 120,
        marginTop: -5,
    },
    cur:{
        left: 250,
        bottom: 37,
        height: '100%',     
    },
    new:{
        left: 240,
        bottom: 30,
    },
    new2:{
        left: 260,
        bottom: 30,
    },
    new3:{
        left: 280,
        bottom: 30,
    }
});