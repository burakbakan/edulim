import { View, Text, SafeAreaView,ImageBackground, Dimensions, TextInput, TouchableOpacity, StatusBar, KeyboardAvoidingView, Image, ScrollView, Platform } from 'react-native'
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

export default function AVideo() {
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

                <Text style={[style.s18, { color: theme.txt }]}>Video Course</Text>
                <Text style={[style.m14, { color: theme.disable, marginTop: 2 }]}>All Cousre</Text>

                <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 15 }}>
                    
                    <TouchableOpacity onPress={() => navigation.navigate('Live')}
                    style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                        <ImageBackground source={require('../../assets/image/a7.png')} resizeMode='stretch' style={{ height: height / 9, width: width / 3.5, }}>
                            <View style={{backgroundColor:'#757C8E50',height: height / 9, width: width / 3.5,borderRadius:22,alignItems:'center',justifyContent:'center'}}>
                                <Image source={require('../../assets/image/a15.png')} resizeMode='stretch' style={{height:height/22,width:width/10}}></Image>
                            </View>
                        </ImageBackground>
                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <Text style={[style.s12, { color: theme.txt }]}>⭐ 4.6</Text>
                            <Text style={[style.m16, { color: theme.txt, lineHeight: 24 }]}>Science Technology</Text>
                            <Text style={[style.r12, { color: theme.disable, lineHeight: 20 }]}>By Nozomi Sasaki</Text>
                            <View style={{ backgroundColor: Colors.red, width: width / 4.5, borderRadius: 20, alignItems: 'center' ,paddingVertical:2,justifyContent:'center'}}>
                                <Text style={[style.r12, { color: Colors.secondary,  }]}>Live Now</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Live')}
                    style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                        <Image source={require('../../assets/image/a12.png')} resizeMode='stretch' style={{ height: height / 9, width: width / 3.5, }}></Image>
                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <Text style={[style.s12, { color: theme.txt }]}>⭐ 4.2</Text>
                            <Text style={[style.m16, { color: theme.txt, lineHeight: 24 }]}>Science Technology</Text>
                            <Text style={[style.r12, { color: theme.disable, lineHeight: 20 }]}>By Nozomi Sasaki</Text>
                            <View style={{ backgroundColor: Colors.disable, width: width / 3.8, borderRadius: 20, alignItems: 'center',paddingVertical:2 ,justifyContent:'center'}}>
                                <Text style={[style.r12, { color: Colors.secondary,}]}>Live at 04:20</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Live')}
                    style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                        <Image source={require('../../assets/image/a14.png')} resizeMode='stretch' style={{ height: height / 9, width: width / 3.5, }}></Image>
                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <Text style={[style.s12, { color: theme.txt }]}>⭐ 4.6</Text>
                            <Text style={[style.m16, { color: theme.txt, lineHeight: 24 }]}>Science Technology</Text>
                            <Text style={[style.r12, { color: theme.disable, lineHeight: 20 }]}>By Nozomi Sasaki</Text>
                            <View style={{ backgroundColor: Colors.disable, width: width / 3.8, borderRadius: 20, alignItems: 'center',paddingVertical:2 ,justifyContent:'center'}}>
                                <Text style={[style.r12, { color: Colors.secondary, }]}>Live at 05:30</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Live')}
                    style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                        <Image source={require('../../assets/image/a13.png')} resizeMode='stretch' style={{ height: height / 9, width: width / 3.5, }}></Image>
                        <View style={{ flex: 1, marginLeft: 12 }}>
                            <Text style={[style.s12, { color: theme.txt }]}>⭐ 4.6</Text>
                            <Text style={[style.m16, { color: theme.txt, lineHeight: 24 }]}>Science Technology</Text>
                            <Text style={[style.r12, { color: theme.disable, lineHeight: 20 }]}>By Nozomi Sasaki</Text>
                            <View style={{ backgroundColor: Colors.disable, width: width / 3.8, borderRadius: 20, alignItems: 'center',paddingVertical:2,justifyContent:'center' }}>
                                <Text style={[style.r12, { color: Colors.secondary, }]}>Live at 06:30</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}