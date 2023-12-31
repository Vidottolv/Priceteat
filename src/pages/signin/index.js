import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import {getAuth, signInWithEmailAndPassword,getReactNativePersistence} from 'firebase/auth'
import {initializeApp} from "firebase/app";
import {firebaseConfig} from '../../config/firebaseConfig'
import React, { useState } from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Modal, Alert} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import * as animatable from 'react-native-animatable'
import { ModalTrocaSenha } from '../../components/modal/modalTrocaSenha';

export default function Signin(){
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [SenhaVisible, setSenhaVisible] = useState(false);
    const handleOpenModalSenha = () => {setSenhaVisible(true);}
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app, {
        persistence: getReactNativePersistence(ReactNativeAsyncStorage)
      });

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            navigation.navigate('home')
            const user = userCredential.user;
        }).catch(error => {
            console.log(error)
        })}

    return(
        <View style={styles.container}>
            <animatable.View 
                animation={'fadeInLeft'}
                style={styles.containerHeader}>
                    <Text style={styles.message}>Bem-vindo(a)</Text>
            </animatable.View>
            <animatable.View animation={'fadeInUp'} style={styles.containerForm}>
                <Text style={styles.title}>E-Mail</Text>
                    <TextInput
                        placeholder="Digite seu E-Mail"
                        placeholderTextColor={'#F3F3FF'}
                        value={email}
                        onChangeText={(value) => setEmail(value)}
                        style={styles.input}/>
                <Text style={styles.title}>Senha</Text>
                    <TextInput
                        placeholder="Digite sua Senha"
                        placeholderTextColor={'#F3F3FF'}
                        value={password}
                        onChangeText={(value) => setPassword(value)}
                        style={styles.input}
                        secureTextEntry={true}/>
                <TouchableOpacity 
                    style={styles.buttonForget} 
                    onPress={handleOpenModalSenha}>
                        <Text style={[styles.forgetText, styles.underline]}>Esqueceu a senha?</Text>
                </TouchableOpacity>    
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={handleSignIn}>
                        <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.buttonRegister} 
                    onPress={() => navigation.navigate('cadastroUsuario')}>
                        <Text style={[styles.registerText, styles.underline]}>Novo por aqui? Cadastre-se</Text>
                </TouchableOpacity>
                <Modal 
                    visible={SenhaVisible}
                    animationType='fade' 
                    transparent={true}>
                        <ModalTrocaSenha handleClose={() => setSenhaVisible(false)} email={email}/>
                </Modal>
            </animatable.View>
    </View>
)}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#E7A17A',
        flex:1
    },
    containerHeader:{
        marginTop:'15%',
        marginBottom:'8%',
        paddingStart:'5%'
    },
    message:{
        fontSize:28,
        fontWeight:'bold',
        color:'#F3F3FF'
    },
    containerForm:{
        backgroundColor:'#E06F72',
        flex:1,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingStart:'5%',
        paddingEnd:'5%'
    },
    title:{
        color:'#F3F3FF',
        fontSize:20,
        marginTop:28,
        fontWeight:'bold'
    },
    input:{
        color:'#F3F3FF',
        borderBottomWidth:1,
        height:40,
        marginBottom:12,
        fontSize:16,
        borderBottomColor:'#DADADA'
    },
    button:{
        backgroundColor:'#E7A17A',
        borderRadius:4,
        paddingVertical:8,
        width:'100%',
        marginTop:14,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        color:'#F3F3FF',
        fontSize:16,
        fontWeight:'bold'
    },
    buttonRegister:{
        marginTop:14,
        alignSelf:'center',
    },
    registerText:{
        color:'#DADADA'
    },
    buttonForget:{
        color:'#F3F3FF',
        fontSize:16,
        fontWeight:'bold',
        marginTop:5,
        marginBottom:15,
        alignItems:'flex-end'
    },
    forgetText:{
        color:'#DADADA'
    },
    underline: {
        textDecorationLine: 'underline'
    }
})