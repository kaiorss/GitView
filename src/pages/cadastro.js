import React,{Component}  from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import navigate from "@react-navigation/native";
import{
    view,
    Text,
    TextInput,
    TouchableOpacity,
    styleSheet
 } from 'react-native';

 export default class Cadastro extends Component {
    state = {
        email: '',
        password: '',
    };
    handleCadastro = async () => {
        const {email, password} = this.state;
        if (!email || !password) {
            alert('Por favor, preencha todos os campos');
            return;
        }
const user = {
    email,
    password,

        };
        await AsyncStorage.setItem('user', JSON.stringify(user));
        alert('Cadastro realizado com sucesso');
        this.props.navigation.navigate('Login');
};
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder="Email"
                    value={this.state.email}
                    onChangeText={(email) => this.setState({ email })}
                />
                <TextInput
                    placeholder="Password"
                    secureTextEntry
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                />
                <TouchableOpacity onPress={this.handleCadastro}>
                    <Text>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
