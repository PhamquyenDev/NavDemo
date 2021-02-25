import React, {Component} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ListWorks from "../screens/Listworks";
import Login from "../screens/Login";

const Tab = createBottomTabNavigator();

function Tabbar(){
    return(
        <NavigationContainer>
            <Tab.Navigator 
                tabBarOptions={{
                    labelStyle:{
                        fontSize: 16
                    },
                    activeTintColor: 'red',
                    inactiveTintColor: 'black'
                }}>
                <Tab.Screen name="Home" component={ListWorks} options={{
                    tabBarLabel: "Home"
                }} />
                <Tab.Screen name="Profile" component={Login} options={{
                    tabBarLabel: "Profile"
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Tabbar;
