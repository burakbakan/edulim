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

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function ASub() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <View style={[style.main, { marginTop: 20 }]}>
                <AppBar
                    color={theme.bg}
                    elevation={0}
                    leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs')}>
                        <Icon name='arrow-back' size={24} color={theme.txt} />
                    </TouchableOpacity>}
                    trailing={<TouchableOpacity >
                        <Icon name='search' size={24} color={theme.txt} />
                    </TouchableOpacity>}
                />

                <Text style={[style.s18, { color: theme.txt }]}>All Subject</Text>
                <Text style={[style.m14, { color: theme.disable, marginTop: 2 }]}>High School - Grade 12</Text>

                <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Physics')}
                            style={{ alignItems: 'center' }}>
                            <Image source={require('../../assets/image/a3.png')} resizeMode='stretch' style={{ height: 54, width: 54, }}></Image>
                            <Text style={[style.s12, { color: theme.txt, marginTop: 5 }]}>Physics</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Physics')}
                            style={{ alignItems: 'center' }}>
                            <Image source={require('../../assets/image/a4.png')} resizeMode='stretch' style={{ height: 54, width: 54, }}></Image>
                            <Text style={[style.s12, { color: theme.txt, marginTop: 5 }]}>Science</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Physics')}
                            style={{ alignItems: 'center' }}>
                            <Image source={require('../../assets/image/a5.png')} resizeMode='stretch' style={{ height: 54, width: 54, }}></Image>
                            <Text style={[style.s12, { color: theme.txt, marginTop: 5 }]}>Chemistry</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Physics')}
                            style={{ alignItems: 'center' }}>
                            <Image source={require('../../assets/image/a6.png')} resizeMode='stretch' style={{ height: 54, width: 54, }}></Image>
                            <Text style={[style.s12, { color: theme.txt, marginTop: 5 }]}>Biology</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 25 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Physics')}
                            style={{ alignItems: 'center' }}>
                            <Image source={require('../../assets/image/a8.png')} resizeMode='stretch' style={{ height: 54, width: 54, }}></Image>
                            <Text style={[style.s12, { color: theme.txt, marginTop: 5 }]}>Math</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Physics')}
                            style={{ alignItems: 'center' }}>
                            <Image source={require('../../assets/image/a9.png')} resizeMode='stretch' style={{ height: 54, width: 54, }}></Image>
                            <Text style={[style.s12, { color: theme.txt, marginTop: 5 }]}>Science</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Physics')}
                            style={{ alignItems: 'center' }}>
                            <Image source={require('../../assets/image/a10.png')} resizeMode='stretch' style={{ height: 54, width: 54, }}></Image>
                            <Text style={[style.s12, { color: theme.txt, marginTop: 5 }]}>Literature</Text>
                        </TouchableOpacity>
                        <View style={{ alignItems: 'center', height: 54, width: 54, }}>

                        </View>
                    </View>

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
