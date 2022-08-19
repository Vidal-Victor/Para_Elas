import React from 'react';
import { View, Image, StyleSheet, KeyboardAvoidingView, Button, Text, TouchableOpacity, ScrollView} from 'react-native';
import MapView from 'react-native-maps';

export default function emprego (props){
    console.log(props);

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


    <TouchableOpacity>
    <View style={Style.botao}>
    <Image
        style={Style.aimg3}
        source={require('../img/empresa.png')}
        />
        <Text style={Style.texto}>
            Vagas para gerente                      Clique mais para ver
        </Text>
        <Image 
        />
    </View>
    </TouchableOpacity>

    <TouchableOpacity>
    <View style={Style.botao}>
    <Image
        style={Style.aimg}
        source={require('../img/secretaria.png')}
        />
        <Text style={Style.texto}>
            Vagas para secretaria                  Clique mais para ver
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
        bottom: -30,
        left: 100,
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
         width: 370,
         left: 17,
        height: 150,
        alignItems: 'center',
    },
    aimg2:{
        width: '100%',
       height: '100%',
       alignItems: 'center',
    },
    aimg3:{
        width: 1800,
        left: -320,
       height: 150,
       alignItems: 'center',
       borderRadius: 30,
   },
   map:{
    marginTop: 20,
    height: '32%',
    backgroundColor: '#000',
   },
});