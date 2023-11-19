import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import { login } from '../../public/integrations';
import config from '../../config/config';


const LoginScreen = ({navigation}) => {
    const [phone, setPhone] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const PhoneValues = (phoneInput) => {
        let phoneTrimmed = phoneInput.trim();
        if (phoneTrimmed.length === 0) {
            setErrorMessage('El campo no puede estar vacío');
            setPhone('')
            return false;
        } else if (phoneTrimmed.length < 10) {
            setErrorMessage('El campo debe tener al menos 10 dígitos');
            setPhone(phoneTrimmed)
            return false;
        } else {
            setErrorMessage('');
            setPhone(phoneTrimmed);
            return true;
        }
    };

    const Login = async() => {
        if(PhoneValues(phone)){
            await login(phone).then(result => {
                if(result.status == 200){
                    config.JWT = result.data;
                    config.PhoneNumber = phone;
                    navigation.navigate('LoadingScreen');
                }
                else{
                    setErrorMessage(result.message || 'Error desconocido');
                }
            });
    
        }
        
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>WhatsApp Login</Text>
            <Text style={styles.text}>Iniciar Sesión</Text>
            <TextInput
                keyboardType="numeric"
                style={styles.input}
                placeholder="Phone Number"
                value={phone}
                onChangeText={(text) => PhoneValues(text)}
            />
            {errorMessage.length > 0 && (
                <Text style={styles.errorText}>{errorMessage}</Text> 
            )}
            <TouchableOpacity title="Iniciar Sesión" onPress={() => Login()} style={styles.button}>
                <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#009688',
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 20,
        position: 'absolute',
        top:200,
        color: "#006C62"
    },
    text: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 60,
        color: "#fff"
    },
    input: {
        width: '80%',
        color: '#fff',
        height: 40,
        borderWidth: 2,
        borderColor: '#fff',
        backgroundColor:'transparent',
        borderRadius: 5,
        marginBottom: 15,
        padding: 10,
    },
    button:{
        width: '80%',
        height: 40,
        backgroundColor: '#006C62',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText:{
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    errorText: {
        position: 'absolute',
        top: 420,
        color: 'red',
        fontSize: 16,
        fontWeight: 'bold',
        margin: 10,
    },
    
});

export default LoginScreen;
