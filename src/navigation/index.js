import React, {Component} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ListWorks from "../screens/Listworks";
import Login from "../screens/Login";

const Stack = createStackNavigator();

function Navigation(){
    return(
        <NavigationContainer>
      	<Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="ListWorks" component={ListWorks} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;