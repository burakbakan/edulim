import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons"
import { Colors } from '../theme/color';
import themeContext from '../theme/themeContex';
import Icon from 'react-native-vector-icons/FontAwesome5'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Avatar } from 'react-native-paper';

import Home from '../screens/Home';
import Material from '../screens/Material';
import Account1 from '../screens/Account1';
import LB1 from '../screens/LB1';
import Chat from '../screens/Chat';


const Tab = createBottomTabNavigator();


export default function MyTabs() {

  const theme = useContext(themeContext);
  const [darkMode, setDarkMode] = useState('false')

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { position: 'absolute', height: 70, borderTopLeftRadius:20,borderTopRightRadius:20,borderWidth:1,borderColor:theme.bg ,backgroundColor:theme.bg}
      }}
      >

      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color }) => {
            return <Image
              source={focused ? require('../../assets/image/t1f.png') : require('../../assets/image/t1.png')}
              resizeMode='contain'
              style={{ height: 24, width: 24, tintColor: focused ? theme.d2 : theme.tab }}
            />
          },
          headerShown: false,
        }}
      />

      <Tab.Screen name="Material" component={Material}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color }) => {
            return <Image
              source={focused ? require('../../assets/image/t2f.png') : require('../../assets/image/t2.png')}
              resizeMode='contain'
              style={{ height: 24, width: 24, tintColor: focused ? theme.d2 : theme.tab }}
            />
          },
          headerShown: false,

        }} />
      <Tab.Screen name="LB1" component={LB1}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color }) => {
            return <Image
            source={focused ? require('../../assets/image/t3f.png') : require('../../assets/image/t3.png')}
              resizeMode='contain'
              style={{ height: 24, width: 24,  }}
            />
          },
          headerShown: false,
        }} />

      <Tab.Screen name="Chat" component={Chat}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color }) => {
            return <Image
              source={focused ? require('../../assets/image/t4f.png') : require('../../assets/image/t4.png')}
              resizeMode='contain'
              style={{ height: 24, width: 24, tintColor: focused ? theme.d2 : theme.tab }}
            />
          },
          headerShown: false,
        }} />


      <Tab.Screen name="Account1" component={Account1}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color }) => {
            return <Image
              source={focused ? require('../../assets/image/t5f.png') : require('../../assets/image/t5.png')}
              resizeMode='contain'
              style={{ height: 24, width: 24, tintColor: focused ? theme.d2 : theme.tab }}
            />
          },
          headerShown: false,
        }} />

    </Tab.Navigator>
  );
}

