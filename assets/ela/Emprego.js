import React from 'react';
import { View, Image, StyleSheet, KeyboardAvoidingView, Button, Text, TouchableOpacity, ScrollView} from 'react-native';
import MapView from 'react-native-maps';

export default function emprego (props){
    console.log(props);
    const ops = () => {alert('Os empregos não podem ser acessados no momento :(')}

return(

    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style ={Style.container}>
    
    <View style={Style.top}>
    <Text style={Style.titulo}>
        Empregos
    </Text>
    </View>
    
    <MapView style={Style.map}
    initialRegion={{
        latitude: -21.4649759,
        longitude: -49.2246509,
        latitudeDelta: 0.0772,
        longitudeDelta: 0.0325,        
    }}
    >
    </MapView>

    <ScrollView>
    <TouchableOpacity onPress= {()=>ops()}>
    <View style={Style.botao}>
    <Image
        style={Style.aimg3}
        source={require('../img/png/gerente_png.png')}
        />
        <View>
        <Text style={Style.textot}>
            Gerente
        </Text>
        <Text style={Style.text}>
            Vaga em N. Horizonte
        </Text>
        </View>
        <Image 
        />
    </View>
    </TouchableOpacity>

    <TouchableOpacity onPress= {()=>ops()}>
    <View style={Style.botao}>
    <Image
        style={Style.aimg}
        source={require('../img/png/analista_png.png')}
        />
        <View>
        <Text style={Style.textot}>
        Analista de Sistemas
        </Text>
        <Text style={Style.text}>
        ⠀Vaga em Bauru
        </Text>
        </View>
        <Image 
        />
    </View>
    </TouchableOpacity>

    <TouchableOpacity onPress= {()=>ops()}>
    <View style={Style.botao}>
    <Image
        style={Style.aimg2}
        source={require('../img/png/enfermeira_png.png')}
        />
        <View>
        <Text style={Style.textot}>
        Enfermeira
        </Text>
        <Text style={Style.text}>
        Vaga em Catanduva
        </Text>
        </View>
        <Image 
        />
    </View>
    </TouchableOpacity>
    <View>

    </View>
    </ScrollView>
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
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    textot:{
        fontSize: 20,
        marginTop: 100,
        fontWeight: 'bold'
    },
    texto:{
        fontSize: 20,
        marginTop: 100,
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
     emp:{
        fontSize: 25,
        fontWeight: 'bold',
        bottom: -85,
        left: 115,
        bottom: 120
     },
     map:{
         marginTop: 34,
         backgroundColor: '#f7f7f7f7',
         width: '98%',
         height: '25%',
         left: 4,
     },
     sist:{
         marginTop: 17,
         fontSize: 25,
         fontWeight: 'bold',
        
     },
     aimg:{
        width: '50%',
        height: '98%',
        alignItems: 'center',
        borderRadius: 50,
        top: 10,
    },
    aimg2:{
        width: '50%',
        height: '90%',
        alignItems: 'center',
        borderRadius: 30,
    },
    aimg3:{
        width: '50%',
       height: '75%',
       alignItems: 'center',
       borderRadius: 30,
       top: 25,
       
   },
   map:{
    marginTop: 20,
    height: '32%',
    backgroundColor: '#000',
   },
});