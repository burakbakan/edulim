import { View, Text, StatusBar } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EventRegister } from 'react-native-event-listeners';
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import { Colors } from '../theme/color';

import Login from '../screens/Login';
import Home from '../screens/Home';
import ASub from '../screens/ASub';
import AVideo from '../screens/AVideo';
import Ph1 from '../screens/Ph1';
import TExam1 from '../screens/TExam1';
import Material from '../screens/Material';
import Board from '../screens/Board';
import NG from '../screens/NG';
import Account from '../screens/Account';
import MyTabs from './BottomNavigator';
import Signup from '../screens/Signup';
import Otp from '../screens/Otp';
import Notification from '../screens/Notification';
import Live from '../screens/Live';
import Physics from '../screens/Physics';
import Ph2 from '../screens/Ph2';
import Ph3 from '../screens/Ph3';
import TExam from '../screens/TExam';
import Document from '../screens/Document';
import Exam from '../screens/Exam';
import Exam2 from '../screens/Exam2';
import LB1 from '../screens/LB1';
import Chat from '../screens/Chat';
import Chat2 from '../screens/Chat2';
import Account1 from '../screens/Account1';
import Introduction from '../screens/Introduction';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    useEffect(() => {
        const listener = EventRegister.addEventListener('ChangeTheme', (data) => {
            setDarkMode(data)
            console.log(data)

        })

        return () => {
            EventRegister.removeAllListeners(listener)
        }
    }, [darkMode])

    const [darkMode, setDarkMode] = useState(false)


    return (
        <themeContext.Provider value={darkMode === true ? theme.dark : theme.light}>
            <NavigationContainer theme={darkMode === true ? DarkTheme : DefaultTheme}>
                <StatusBar backgroundColor={darkMode === true ? Colors.active : Colors.secondary}
                    barStyle={darkMode === true ? 'light-content' : 'dark-content'} translucent={false}
                />
                <Stack.Navigator>
                    <Stack.Screen
                        name="Introduction"
                        component={Introduction}
                        options={{ headerShown: false }} />
                    <Stack.Screen
                        name="MyTabs"
                        component={MyTabs}
                        options={{ headerShown: false }} />

                    <Stack.Screen
                        name="Account1"
                        component={Account1}
                        options={{ headerShown: false }} />

                    <Stack.Screen
                        name="Chat2"
                        component={Chat2}
                        options={{ headerShown: false }} />

                    <Stack.Screen
                        name="Chat"
                        component={Chat}
                        options={{ headerShown: false }} />

                    <Stack.Screen
                        name="LB1"
                        component={LB1}
                        options={{ headerShown: false }} />

                    <Stack.Screen
                        name="Exam2"
                        component={Exam2}
                        options={{ headerShown: false }} />

                    <Stack.Screen
                        name="Exam"
                        component={Exam}
                        options={{ headerShown: false }} />

                    <Stack.Screen
                        name="Document"
                        component={Document}
                        options={{ headerShown: false }} />

                    <Stack.Screen
                        name="TExam"
                        component={TExam}
                        options={{ headerShown: false }} />

                    <Stack.Screen
                        name="Ph3"
                        component={Ph3}
                        options={{ headerShown: false }} />

                    <Stack.Screen
                        name="Ph2"
                        component={Ph2}
                        options={{ headerShown: false }} />

                    <Stack.Screen
                        name="Physics"
                        component={Physics}
                        options={{ headerShown: false }} />

                    <Stack.Screen
                        name="Live"
                        component={Live}
                        options={{ headerShown: false }} />

                    <Stack.Screen
                        name="Notification"
                        component={Notification}
                        options={{ headerShown: false }} />

                    <Stack.Screen
                        name="Otp"
                        component={Otp}
                        options={{ headerShown: false }} />

                    <Stack.Screen
                        name="Signup"
                        component={Signup}
                        options={{ headerShown: false }} />

                    <Stack.Screen
                        name="Account"
                        component={Account}
                        options={{ headerShown: false }} />

                    <Stack.Screen
                        name="NG"
                        component={NG}
                        options={{ headerShown: false }} />

                    <Stack.Screen
                        name="Board"
                        component={Board}
                        options={{ headerShown: false }} />

                    <Stack.Screen
                        name="Material"
                        component={Material}
                        options={{ headerShown: false }} />

                    <Stack.Screen
                        name="TExam1"
                        component={TExam1}
                        options={{ headerShown: false }} />

                    <Stack.Screen
                        name="Ph1"
                        component={Ph1}
                        options={{ headerShown: false }} />

                    <Stack.Screen
                        name="AVideo"
                        component={AVideo}
                        options={{ headerShown: false }} />

                    <Stack.Screen
                        name="ASub"
                        component={ASub}
                        options={{ headerShown: false }} />

                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{ headerShown: false }} />

                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{ headerShown: false }} />

                </Stack.Navigator>
            </NavigationContainer>
        </themeContext.Provider>
    )
}