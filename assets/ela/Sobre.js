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

    <View style={Style.butao}>
        <Button title="Página inicial"  color="#9fb8ef" style={Style.butao} onPress= {()=>props.navigation.navigate('Home')}/>
    </View>
    </KeyboardAvoidingView>

);
}

const Style = StyleSheet.create({

    container:{
        backgroundColor: '#ffe7e7', 
        height: '100%',
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
        marginTop: 25,
        fontSize: 20,
        fontWeight:'bold',
        alignSelf:"center",
    },
});