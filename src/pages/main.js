import React, { Component } from "react";
import { Keyboard, ActivityIndicator} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../services/api";
import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  User,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText
} from '../services/styles';


export default class Main extends Component {
state = {
    newUser: '',
    users: [],
    loading: false,
}
async componentDidMount() {
    const users = await AsyncStorage.getItem('users');
    if(users) {
        this.setState({users: JSON.parse(users)});


    }
}
componentDidUpdate (_, prevState) {
    const {users} = this.state;
    if(prevState.users !== users) {
        AsyncStorage.setItem('users', JSON.stringify(users));

    }
}

handleAAddUser = async () => {
        try{
            const {users, newUser} = this.state;
            this.setState({loading: true});
            const response =await api.get(`/users/${newUser}`);
            if(users.find(user => user.login === newUser)) {
                alert('Usuário já adicionado');
                this.setState({loading: false});
                return;
            }
            const data = {
                name: response.data.name,
                login: response.data.login,
                bio: response.data.bio,
                avatar: response.data.avatar_url,
                comp : response.data.companies,
            };
            this.setState({
                users: [...users, data],
                loading: false,
                newUser: '',
            });
            Keyboard.dismiss();
        }catch(error){
             alert("Usuário não encontrado");
      this.setState({ loading: false });
    }
  };

  render() {
    const { newUser, users, loading } = this.state;

    return(
        <Container>
            <Form>
                <Input
                
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Adicionar usuário"
                value={newUser}
                onChangeText={text => this.setState({ newUser: text })}
                returnKeyType="send"
                onSubmitEditing={this.handleAAddUser}
                 /> 
                <SubmitButton loading={loading} onPress={this.handleAAddUser}>
                    {loading ? (
                        <ActivityIndicator color="#fff" />
                    ) : (
                        <Icon name="add" size={20} color="#fff" />
                    )}
                </SubmitButton>
            </Form>
            <List
                showsVerticalScrollIndicator={false}
                data={users}
                keyExtractor={user => user.login}
                renderItem={({ item }) => (
                    <User>
                        <Avatar source={{ uri: item.avatar }} />
                        <Name>{item.name}</Name>
                        <Name>{item.comp}</Name>
                        <Bio>{item.bio}</Bio>
                        <ProfileButton onPress={() => {}}>
                            <ProfileButtonText>Ver perfil</ProfileButtonText>
                        </ProfileButton>
                    </User>
                )}
            />
        </Container>
    );
        }
}