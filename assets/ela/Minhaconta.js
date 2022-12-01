import React , {useState} from 'react';
import { View, Image, StyleSheet, KeyboardAvoidingView, Button, Text, TouchableOpacity, TextInput} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

export default function minhaconta (props)
{
    console.log(props);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [descrição, setDescrição] = useState('');
return(

    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style = {Style.container}>
    
    <View style={Style.aview}>
        <Text style={Style.titulo}>
            Minha conta
        </Text>
    </View>

    <View>
    <FontAwesome name="user-circle" size={100} color="#FFA0EA" style={Style.user} />
    </View>

    <View>
        <TextInput style={Style.inpot} placeholder='Nome' onChangeText={text=>setNome(text)}/>
        <View style={Style.line}/>
        <TextInput style={Style.inpot} placeholder='E-mail' onChangeText={text=>setEmail(text)}/>
        <View style={Style.line}/>
        <TextInput secureTextEntry={true} style={Style.inpot} placeholder='Senha' onChangeText={text=>setSenha(text)}/>
        <View style={Style.line}/>
        <TextInput style={Style.inpot} placeholder='Descrição' onChangeText={text=>setDescrição(text)}/>
        <View style={Style.line}/>
    </View>

    <TouchableOpacity style = {Style.loginbutton} onPress= {()=>props.navigation.navigate('Sobre')}>
        <View ><Text style = {Style.loginbunttonText}>Confirmar</Text></View>
    </TouchableOpacity>
    
    </KeyboardAvoidingView>

);
}

const Style = StyleSheet.create({

    container:{
        backgroundColor: '#ffe7e7', 
        height: '100%',
    },
    inpot:{
        padding:7,
        color: '#ccc'
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
    },
    line:{
        borderBottomColor:"#ccc",
        borderBottomWidth: 2,
        marginBottom: 10
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
});