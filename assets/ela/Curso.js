import React from 'react';
import { View, Image, StyleSheet, KeyboardAvoidingView, Button, Text, TouchableOpacity} from 'react-native';

export default function curso (props)
{
    console.log(props);

return(

    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style ={Style.container}>

      <View style={Style.top}>
        <Text style={Style.titulo}>
         Cursos Online
        </Text>
      </View>

    <TouchableOpacity style={Style.touch1}>
    <View style={Style.botao1}>
        <Image
        style={Style.aimg}
        source={require('../img/notebook.png')}
        />
        <Text style={Style.texto1}>
            Informática
        </Text>
        <Image 
        
        />
    </View>
    </TouchableOpacity>

    <TouchableOpacity style={Style.touch2}>
    <View style={Style.botao2}>
    <Image
        style={Style.aimg}
        source={require('../img/cuidadora.png')}
        />
        <Text style={Style.texto2}>
            Cuidadora       de idosos
        </Text>
        <Image 
        />
    </View>
    </TouchableOpacity>

    <TouchableOpacity style={Style.touch3}>
    <View style={Style.botao3}>
    <Image
        style={Style.aimg}
        source={require('../img/enfermagem.png')}
        />
        <Text style={Style.texto3}>
            Enfermagem
        </Text>
        <Image 
        />
    </View>
    </TouchableOpacity>

    <TouchableOpacity style={Style.touch4}>
    <View style={Style.botao4}>
    <Image
        style={Style.aimg2}
        source={require('../img/marketing.png')}
        />
        <Text style={Style.texto4}>
            Marketing
        </Text>
    </View>
    </TouchableOpacity>

    <View>
        <Text style={Style.mais}>
            MAIS EM BREVE...
        </Text>
    </View>

    </KeyboardAvoidingView>
);
}

const Style = StyleSheet.create({

    container:{
        backgroundColor: '#ffe7e7', 
        height: '100%',
        width: '100%',
        marginTop: 30,
        alignSelf:'center',
     },
     logo_login:{
         marginBottom:10,
         width: 180,
         height: 175,
     },
     
     texto1:{
         fontSize: 25,
         fontWeight: 'bold',
         left: 10,
         alignItems: 'center',
         left:8,
         marginTop: 40,
     },
     texto2:{
        fontSize: 25,
        fontWeight: 'bold',
        left: 10,
        alignItems: 'center',
        left: 15,
        marginTop: 14,
    },
    texto3:{
        fontSize: 25,
        fontWeight: 'bold',
        left: 10,
        alignItems: 'center',
        left: 3,
        marginTop:40,
    },
    texto4:{
        fontSize: 25,
        fontWeight: 'bold',
        left: 10,
        alignItems: 'center',
        left: 15,
        marginTop: 4
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
     mais:{
         fontSize: 35,
         bottom: 400,
         alignSelf:'center',
     },
     aimg:{
         width:'100%',
         alignItems: 'center',
     },
     aimg2:{
        width:'100%',
        left: 7,
     },
     touch1:{
        backgroundColor: '#9fb8ef',
        width: '40%',
        height: 230,
        left: 22,
        borderRadius: 15,
        marginTop: 40,
     },
     touch2:{
        backgroundColor: '#9fb8ef',
        width: '40%',
        height: 230,
        left: 230,
        bottom: 270,
        borderRadius: 15,
        marginTop: 40,
     },
     touch3:{
        backgroundColor: '#9fb8ef',
        width: '40%',
        height: 234,
        bottom: 225,
        left: 22,
        borderRadius: 15,
        marginTop: 40,
     },
     touch4:{
        backgroundColor: '#9fb8ef',
        width: '40%',
        height: 230,
        borderRadius: 15,
        bottom: 500,
        left: 230,
        marginTop: 40,
     }
 });