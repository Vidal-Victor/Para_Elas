import React from 'react';
import { View, Image, StyleSheet, KeyboardAvoidingView, Button, Text, TouchableOpacity, TextInput} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export default function minhaconta (props)
{
    console.log(props);
    
return(

    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style = {Style.container}>
    
    <View style={Style.aview}>
        <Text style={Style.titulo}>
            Minha conta
        </Text>
    </View>

    <View>
    <AntDesign name="user" size={100} color="black" style={Style.user} />
    </View>

    <View>
        <TextInput style={Style.inpot} placeholder='Nome'/>
        <TextInput style={Style.inpot} placeholder='E-mail'/>
        <TextInput style={Style.inpot} placeholder='Descrição'/>
    </View>

    <View style={Style.butao}>
        <Button title="Confirmar" color="#9fb8ef" style={Style.butao} onPress= {()=>props.navigation.navigate('Sobre')}/>
    </View>
    </KeyboardAvoidingView>

);
}

const Style = StyleSheet.create({

    container:{
        backgroundColor: '#ffe7e7', 
        height: '100%',
    },
    inpot:{
        marginBottom: 10,
        padding:7,

    },
    user:{
        marginTop:30,
        left: 150,

    },
    titulo: {
        fontSize: 30,
        fontWeight:'bold',
        left: 30,
        bottom: -20
    },
    aview:{
        backgroundColor: '#ffa7ec',
        height: '12%',
        width: '100%',
        borderRadius: 7,
    },
    butao:{
        marginTop:10,
        borderRadius:10,
        padding: 12,
        backgroundColor: "#ffe7e7",
        alignSelf:"center",
        alignItems:'center',
        borderRadius:10,
        width:'90%',
    }
});