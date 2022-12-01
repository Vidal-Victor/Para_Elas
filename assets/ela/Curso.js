import React from 'react';
import { View, Image, StyleSheet, KeyboardAvoidingView, Button, Text, TouchableOpacity, ScrollView} from 'react-native';

export default function curso (props)
{
    console.log(props);
    const ops = () =>{alert('Os cursos estão sendo montados 🎓 (Na verdade não é a gente que faz)')}

return(

    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style ={Style.container}>

      <View style={Style.top}>
        <Text style={Style.titulo}>
         Cursos Online
        </Text>
      </View>

    <ScrollView>
      <View>
        <Text style={Style.texto}> 
            Temas
        </Text>
    </View>

    <View style={Style.scroll}>
        
            
            <View style={Style.bola1}>
                <Image
                    style={Style.bimg}
                    source={require('../img/png/informatica_png.png')}
                    />
                </View>
  
                <View style={Style.bola1}>
                <Image
                    style={Style.bimg}
                    source={require('../img/png/saude_png.png')}
                    />
                    </View>   

                    <View style={Style.bola1}>
                <Image
                    style={Style.bimg}
                    source={require('../img/png/economia_png.png')}
                    />
                </View>   

                
        </View>

    <View>
        <Text style={Style.texto}> 
            Principais cursos
        </Text>
    </View>
    <TouchableOpacity style={Style.touch1} onPress= {()=>ops()}>
    <View style={Style.botao1}>
        <Image
        style={Style.aimg}
        source={require('../img/png/concurso_livros_png.png')}
        />
        <Text style={Style.texto1}>
           Cursos
        </Text>
        <Image 
        
        />
    </View>
    </TouchableOpacity>

    <TouchableOpacity style={Style.touch2} onPress= {()=>ops()}>
    <View style={Style.botao2}>
    <Image
        style={Style.aimg}
        source={require('../img/png/computador_png.png')}
        />
        <Text style={Style.texto2}>
            Computação
        </Text>
        <Image 
        />
    </View>
    </TouchableOpacity>

    <TouchableOpacity style={Style.touch3} onPress= {()=>ops()}>
    <View style={Style.botao3}>
    <Image
        style={Style.aimg}
        source={require('../img/png/pao_png.png')}
        />
        <Text style={Style.texto3}>
            Panificação
        </Text>
        <Image 
        />
    </View>
    </TouchableOpacity>

    <TouchableOpacity style={Style.touch4} onPress= {()=>ops()}>
    <View style={Style.botao4}>
    <Image
        style={Style.aimg2}
        source={require('../img/png/enfermagem_png.png')}
        />
        <Text style={Style.texto4}>
            Enfermagem
        </Text>
    </View>
    </TouchableOpacity>

    <View>
        <Text style={Style.texto}>
            MAIS EM BREVE...
        </Text>
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
         alignSelf: 'center',
         marginTop: 40,
     },
     texto2:{
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 30,
        left: 2,
    },
    texto3:{
        fontSize: 25,
        fontWeight: 'bold',
        left: 10,
        alignSelf: 'center',
        left: 3,
        marginTop:40,
    },
    texto4:{
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 4
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
     texto:{
         fontSize: 35,
         alignSelf:'flex-start',
         fontWeight: 'bold',
         left: 10,
     },
     aimg:{
         width:'100%',
         height: '60%',
         alignItems: 'center',
     },
     aimg2:{
        width:'100%',
         height: '77%',
         alignItems: 'center',
     },
     touch1:{
        backgroundColor: '#9fb8ef',
        width: '40%',
        height: 230,
        left: 22,
        borderRadius: 15,
        marginTop: 20,
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
        marginTop: 10,
     },
     touch4:{
        backgroundColor: '#9fb8ef',
        width: '40%',
        height: 230,
        borderRadius: 15,
        bottom: 500,
        left: 230,
        marginTop: 40,
     },
     bola1:{
        backgroundColor: '#9fb8ef',
        width: '30%',
        height: '40%',
        borderRadius: 300,
        
     },
     bimg:{
        width:'88%',
        height: '60%',
        marginTop: 25,
        alignSelf: 'center',
    },
    texto5:{
        left: 0,
    },
    texto6:{
            fontSize: 25,
            fontWeight: 'bold',
            left: 10,
            alignItems: 'center',
            left: 15,
            marginTop: 0,
    },
    scroll:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: -100,
    },
 });