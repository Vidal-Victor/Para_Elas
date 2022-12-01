import React, {useState, useEffect} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, Image, View, Platform, TouchableOpacity } from 'react-native';



export default function login (props)
{
    const [display, setDisplay]=useState( 'none');
    console.log(props);

return(
<KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style = {Style.container}>

    <View style={Style.login_logomarca}>
       
    </View>
    

        <View style = {Style.InputMaster}>
        <Text style={Style.login_text}>Entre com seu email cadastrado:</Text>
        <TextInput style={Style.login__input} placeholder='Digite seu email' />

        <Text style={Style.login_text}>Sua senha:</Text>
        <TextInput style={Style.login__input} placeholder='Digite sua senha' secureTextEntry = {true} />
        </View>

            <View style= {Style.container_forgot}>
            <TouchableOpacity > 
                <View><Text style = {Style.forgotText} >Esqueceu sua senha ?</Text></View> 
            </TouchableOpacity>
            </View>

        <TouchableOpacity style = {Style.loginbutton} onPress= {()=>props.navigation.navigate('Home')}>
            <View ><Text style = {Style.loginbunttonText}>Entrar</Text></View>
        </TouchableOpacity>    

        <TouchableOpacity onPress= {()=>props.navigation.navigate('Info1')}>
            <View>
                <Text style={Style.texto}>
                    Criar conta
                </Text>
            </View>
        </TouchableOpacity>
   
 </KeyboardAvoidingView>
);
}



const Style = StyleSheet.create({

    InputMaster:{
        width: "98%",
    },

    login_logomarca:{
         
         marginBottom:Platform.OS === 'android' ? '3%' : '15%',
         marginTop: Platform.OS === 'android' ? '3%' : '15%',
         alignItems: 'center',
    },
    logo_login:{
        marginBottom:10,
        width: 175,
        height: 175,
    },
    
    login_text:{
        marginTop:10,
        alignSelf:"center",
        
    },
    login__input:{
        
        width: '98%',
        backgroundColor: '#F4F3F3',
        marginBottom: 10,
        padding:7,
        borderRadius:10,
        alignSelf:"center",
        alignItems:"center",
        borderColor: '#E0E0E0'
        
    },
    loginbutton:{
      
    padding: 12,
    backgroundColor: "blue",
    alignSelf:"center",
    alignItems:'center',
    borderRadius:10,
    width:'90%',
    
    },
    loginbunttonText:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:15
    },
    container_forgot:{
        width:'90%',
        alignItems:'flex-end',
    },
    forgotText:{
        color:"#ffa7ec",
        fontWeight:'bold',
        marginBottom:10
    },
    
    container:{
        backgroundColor: '#ffa7ec', 
        height: '100%',
    },
    texto:{
        fontSize: 20,
        marginTop: 20,
        alignSelf:"center",
    }
    
});
