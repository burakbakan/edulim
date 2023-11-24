import { View, Text, SafeAreaView, Dimensions, TextInput, TouchableOpacity, StatusBar, KeyboardAvoidingView, Image, ScrollView, Platform } from 'react-native'
import React, { useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '../theme/style'
import { Colors } from '../theme/color'
import { Avatar } from 'react-native-paper'
import { AppBar, HStack, } from '@react-native-material/core';
import themeContext from '../theme/themeContex'
import Icon from 'react-native-vector-icons/Ionicons'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height


const Tab = createMaterialTopTabNavigator();

const Top = () => {

    const theme = useContext(themeContext);

    return <Tab.Navigator
        screenOptions={{
            tabBarStyle: { backgroundColor: theme.bg, shadowColor: theme.bg },
            tabBarShowLabel: true,
            swipeEnabled: false,
            tabBarIndicatorStyle: { display: 'none' },
            tabBarPressOpacity: 0.2,
            tabBarPressColor: theme.bg,

        }}>

        <Tab.Screen name="Document1" component={Document1}
            options={{
                tabBarShowLabel: true,
                tabBarLabel: ({ focused, color, }) => (
                    <View style={{
                        backgroundColor: focused ? theme.input : theme.bg,
                        borderRadius: 25, paddingVertical: 10, width: width / 3.5, alignItems: 'center'
                    }}>
                        <Text style={[style.m14, { color: focused ? theme.txt : Colors.disable, }]}>Document</Text>
                    </View>
                ),
                headerShown: false,
            }}
        />
        <Tab.Screen name="Exam" component={Exam}
            options={{
                tabBarShowLabel: true,
                tabBarLabel: ({ focused, color, }) => (
                    <View style={{
                        backgroundColor: focused ? theme.input : theme.bg,
                        borderRadius: 25, paddingVertical: 10, width: width / 3.5, alignItems: 'center'
                    }}>
                        <Text style={[style.m14, { color: focused ? theme.txt : Colors.disable, }]}>Exam</Text>
                    </View>
                ),
                headerShown: false,
            }} />

        <Tab.Screen name="Passed" component={Passed}
            options={{
                tabBarShowLabel: true,
                tabBarLabel: ({ focused, color, }) => (
                    <View style={{
                        backgroundColor: focused ? theme.input : theme.bg,
                        borderRadius: 25, paddingVertical: 10, width: width / 3.5, alignItems: 'center'
                    }}>
                        <Text style={[style.m14, { color: focused ? theme.txt : Colors.disable, }]}>Passed</Text>
                    </View>
                ),
                headerShown: false,
            }}
        />
    </Tab.Navigator>
}

const Document1 = () => {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20, marginHorizontal: 10 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Document')}
                        style={{ alignItems: 'center' }}>
                        <Image source={require('../../assets/image/a3.png')} resizeMode='stretch' style={{ height: 54, width: 54, }}></Image>
                        <Text style={[style.s12, { color: theme.txt, marginTop: 5 }]}>Physics</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Document')}
                        style={{ alignItems: 'center' }}>
                        <Image source={require('../../assets/image/a4.png')} resizeMode='stretch' style={{ height: 54, width: 54, }}></Image>
                        <Text style={[style.s12, { color: theme.txt, marginTop: 5 }]}>Science</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Document')}
                        style={{ alignItems: 'center' }}>
                        <Image source={require('../../assets/image/a5.png')} resizeMode='stretch' style={{ height: 54, width: 54, }}></Image>
                        <Text style={[style.s12, { color: theme.txt, marginTop: 5 }]}>Chemistry</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Document')}
                        style={{ alignItems: 'center' }}>
                        <Image source={require('../../assets/image/a6.png')} resizeMode='stretch' style={{ height: 54, width: 54, }}></Image>
                        <Text style={[style.s12, { color: theme.txt, marginTop: 5 }]}>Biology</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 25, marginHorizontal: 10 ,marginBottom:80}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Document')}
                        style={{ alignItems: 'center' }}>
                        <Image source={require('../../assets/image/a8.png')} resizeMode='stretch' style={{ height: 54, width: 54, }}></Image>
                        <Text style={[style.s12, { color: theme.txt, marginTop: 5 }]}>Math</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Document')}
                        style={{ alignItems: 'center' }}>
                        <Image source={require('../../assets/image/a9.png')} resizeMode='stretch' style={{ height: 54, width: 54, }}></Image>
                        <Text style={[style.s12, { color: theme.txt, marginTop: 5 }]}>Science</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Document')}
                        style={{ alignItems: 'center' }}>
                        <Image source={require('../../assets/image/a10.png')} resizeMode='stretch' style={{ height: 54, width: 54, }}></Image>
                        <Text style={[style.s12, { color: theme.txt, marginTop: 5 }]}>Literature</Text>
                    </TouchableOpacity>
                    <View style={{ alignItems: 'center', height: 54, width: 54, }}>

                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const Exam = () => {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20, marginHorizontal: 10 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Document')}
                        style={{ alignItems: 'center' }}>
                        <Image source={require('../../assets/image/a3.png')} resizeMode='stretch' style={{ height: 54, width: 54, }}></Image>
                        <Text style={[style.s12, { color: theme.txt, marginTop: 5 }]}>Physics</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Document')}
                        style={{ alignItems: 'center' }}>
                        <Image source={require('../../assets/image/a4.png')} resizeMode='stretch' style={{ height: 54, width: 54, }}></Image>
                        <Text style={[style.s12, { color: theme.txt, marginTop: 5 }]}>Science</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Document')}
                        style={{ alignItems: 'center' }}>
                        <Image source={require('../../assets/image/a5.png')} resizeMode='stretch' style={{ height: 54, width: 54, }}></Image>
                        <Text style={[style.s12, { color: theme.txt, marginTop: 5 }]}>Chemistry</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Document')}
                        style={{ alignItems: 'center' }}>
                        <Image source={require('../../assets/image/a6.png')} resizeMode='stretch' style={{ height: 54, width: 54, }}></Image>
                        <Text style={[style.s12, { color: theme.txt, marginTop: 5 }]}>Biology</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 25, marginHorizontal: 10 ,marginBottom:80}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Document')}
                        style={{ alignItems: 'center' }}>
                        <Image source={require('../../assets/image/a8.png')} resizeMode='stretch' style={{ height: 54, width: 54, }}></Image>
                        <Text style={[style.s12, { color: theme.txt, marginTop: 5 }]}>Math</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Document')}
                        style={{ alignItems: 'center' }}>
                        <Image source={require('../../assets/image/a9.png')} resizeMode='stretch' style={{ height: 54, width: 54, }}></Image>
                        <Text style={[style.s12, { color: theme.txt, marginTop: 5 }]}>Science</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Document')}
                        style={{ alignItems: 'center' }}>
                        <Image source={require('../../assets/image/a10.png')} resizeMode='stretch' style={{ height: 54, width: 54, }}></Image>
                        <Text style={[style.s12, { color: theme.txt, marginTop: 5 }]}>Literature</Text>
                    </TouchableOpacity>
                    <View style={{ alignItems: 'center', height: 54, width: 54, }}>

                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const Passed = () => {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <TouchableOpacity onPress={() => navigation.navigate('Document')}
                style={{ flexDirection: 'row', alignItems: 'center', marginTop:10}}>
                    <Image source={require('../../assets/image/a3.png')} resizeMode='stretch' style={{ height: 54, width: 54 }}></Image>
                    <View style={{ marginLeft: 15, flex: 1 }}>
                        <Text style={[style.s18, { color: theme.txt }]}>Physics</Text>
                        <Text style={[style.r12, { color: theme.txt1, marginTop: -4 }]}>You have completed <Text style={{ color: Colors.green }}>28/35</Text> questions</Text>
                    </View>
                    <Image source={require('../../assets/image/a22.png')} resizeMode='stretch' style={{ height: 60, width: 60 }}></Image>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Document')}
                style={{ flexDirection: 'row', alignItems: 'center', marginTop:20}}>
                    <Image source={require('../../assets/image/a4.png')} resizeMode='stretch' style={{ height: 54, width: 54 }}></Image>
                    <View style={{ marginLeft: 15, flex: 1 }}>
                        <Text style={[style.s18, { color: theme.txt }]}>Science</Text>
                        <Text style={[style.r12, { color: theme.txt1, marginTop: -4 }]}>You have completed <Text style={{ color: Colors.green }}>22/35</Text> questions</Text>
                    </View>
                    <Image source={require('../../assets/image/a26.png')} resizeMode='stretch' style={{ height: 60, width: 60 }}></Image>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Document')}
                style={{ flexDirection: 'row', alignItems: 'center', marginTop:20,marginBottom:80}}>
                    <Image source={require('../../assets/image/a5.png')} resizeMode='stretch' style={{ height: 54, width: 54 }}></Image>
                    <View style={{ marginLeft: 15, flex: 1 }}>
                        <Text style={[style.s18, { color: theme.txt }]}>Chemistry</Text>
                        <Text style={[style.r12, { color: theme.txt1, marginTop: -4 }]}>You have completed <Text style={{ color: Colors.red }}>12/35</Text> questions</Text>
                    </View>
                    <Image source={require('../../assets/image/a27.png')} resizeMode='stretch' style={{ height: 60, width: 60 }}></Image>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    )
}

export default function Material() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <View style={[style.main, { marginTop: 30 }]}>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={[style.apptitle, { color: theme.txt }]}>Materials</Text>
                    <Image source={require('../../assets/image/a1.png')} resizeMode='stretch' style={{ height: 48, width: 48 }}></Image>
                </View>

                <View style={{ marginBottom: 30 ,marginTop:40}}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={{ width: width - 40, alignItems: 'center', alignSelf: 'center' }}>
                            <Image source={require('../../assets/image/a23.png')} resizeMode='stretch' style={{ height: height / 4.2, width: width / 2.5 }}></Image>
                        </View>
                        <View style={{ width: width - 40, alignItems: 'center', alignSelf: 'center' }}>
                            <Image source={require('../../assets/image/a24.png')} resizeMode='stretch' style={{ height: height / 4.2, width: width / 2 }}></Image>
                        </View>
                        <View style={{ width: width - 40, alignItems: 'center', alignSelf: 'center' }}>
                            <Image source={require('../../assets/image/a25.png')} resizeMode='stretch' style={{ height: height / 4.5, width: width / 2 }}></Image>
                        </View>
                    </ScrollView>
                </View>

                <Top></Top>

            </View>
        </SafeAreaView>
    )
}