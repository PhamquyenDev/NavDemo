import React, {Component} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ListWorks from "../screens/Listworks";
import Login from "../screens/Login";

const Tab = createBottomTabNavigator();

function Tabbar(){
    return(
        <NavigationContainer>
            
        </NavigationContainer>
    );
}

export default Tabbar;