import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/Login.js";
import Main from "../pages/main.js";
import user from "../pages/user.js";
const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
        
            <Stack.Navigator>
                <Stack.Screen 
                name="Login"
                component={Login}
                options={{
                    title :"Login",
                    headerTitleAlign: "center",
                    headerStyle: {backgroundColor: "#2e2e2e"},
                    headerTitleStyle: {color: "#fff", fontWeight: "bold"},
                }}

                />
              <Stack.Screen 
                name="Main"
                component={Main}
                options={{
                    title :"GitHub Viewer",
                    headerTitleAlign: "center",
                    headerStyle: {backgroundColor: "#2e2e2e"},
                    headerTitleStyle: {color: "#fff", fontWeight: "bold"},
                }}
                 
                /> 
                

          <Stack.Screen
          name="user"
          component={user}
          options={{
            title: "Perfil do Usuário",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#b71ef4" },
            headerTitleStyle: { color: "#fff", fontFamily: typography.bold },
          }}
        />
            </Stack.Navigator>
        </NavigationContainer>
    );

}
