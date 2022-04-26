import React,{Component} from "react";
import {NavigationContainer} from '@react-navigation/native';
import {CreateBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TransactionScreen from '../screens/transaction';
import SearchScreen from '../screens/search';
const Tab = CreateBottomTabNavigator();
export default class BottomTabNavigator extends Component{
    render(){
        return(
            <NavigationContainer>

                <Tab.Navigator>
                    <Tab.Screen name='transaction' Component={TransactionScreen}></Tab.Screen>
                    <Tab.Screen name='search' Component={SearchScreen
                    }></Tab.Screen>
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
}