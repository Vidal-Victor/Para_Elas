import React, {useState, useEffect} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, Image, View, Platform, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function login (props)
{
    const [display, setDisplay]=useState( 'none');
    console.log(props);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [descrição, setDescrição] = useState('');
return(
    <LinearGradient 
    colors = {['#FFF2F2', '#ffa7ec']}
    >
<KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style = {Style.container}>
    
    <View style={Style.login_logomarca}>
    <Image
    style={Style.logo_login}
        source={require('../img/logo.png')
    }/>
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
 </LinearGradient>
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
        left: 8.5,
        
    },
    login__input:{
        
        width: '98%',
        backgroundColor: '#F4F3F3',
        left: 3,
        marginBottom: 10,
        padding:7,
        borderRadius:10,
        alignSelf:"center",
        alignItems:"center",
        borderColor: '#E0E0E0'
        
    },
    loginbutton:{
      
    padding: 12,
    backgroundColor: '#9FB8EF',
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
        width: '97.5%',
        alignItems:'flex-end',
    },
    forgotText:{
        color:"#8FB8EF",
        fontWeight:'bold',
        marginBottom:10
    },
    
    container:{
       /*backgroundColor: '#ffa7ec',*/ 
        height: '100%',
        marginTop: 100,
    },
    texto:{
        fontSize: 20,
        marginTop: 20,
        alignSelf:"center",
    }
    
});
