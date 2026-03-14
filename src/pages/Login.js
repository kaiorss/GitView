import react, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, Alert, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();


    const handleLogin = () => {
        if (email === '' && password === '') {
            navigation.navigate('Main');
            } else {
                Alert.alert('Erro', 'E-mail ou senha incorretos');
        }
    }

    return (
        <View style={styles.container}>
            <TextInput 
            style={styles.input}
            placeholder='E-mail'
            value={email}
            onChangeText={setEmail}
            />
             <TextInput
             style={styles.input}
            placeholder='Senha'
            value={password}
            secureTextEntry={true}
            onChangeText={setPassword}
             />
             <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
                 </TouchableOpacity>
        </View>
    )


};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        width: '80%',

    },

    button:{
        backgroundColor: '#808080',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});


export default Login;