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

export default function NG() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
            <View style={[style.main, { marginTop: 10 }]}>
                <AppBar
                    color={theme.bg}
                    title='New group'
                    titleStyle={[style.subtitle, { color: theme.txt }]}
                    elevation={0}
                    leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs')}>
                        <Icon name='arrow-back' size={24} color={theme.txt} />
                    </TouchableOpacity>}
                />

                <View style={[style.inputContainer, { backgroundColor: theme.otp, marginTop: 20, borderWidth: 0 }]}>
                    <TextInput placeholder='Search anything'
                        placeholderTextColor={theme.lable}
                        selectionColor={Colors.primary}
                        style={[style.r16, { color: theme.txt, flex: 1, marginBottom: -6, }]}
                    />
                    <Icon name='search' size={20} color={theme.lable}></Icon>
                </View>

                <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
                        <Image source={require('../../assets/image/a29.png')} resizeMode='stretch' style={{ height: 44, width: 44 }}></Image>
                        <Text style={[style.m16, { color: theme.txt, flex: 1, marginLeft: 10 }]}>Sanderly Suly</Text>
                        <Image source={require('../../assets/image/a31.png')} resizeMode='stretch' style={{ height: 24, width: 24 }}></Image>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
                        <Image source={require('../../assets/image/a30.png')} resizeMode='stretch' style={{ height: 44, width: 44 }}></Image>
                        <Text style={[style.m16, { color: theme.txt, flex: 1, marginLeft: 10 }]}>Erward Dory</Text>
                        <Image source={require('../../assets/image/a31.png')} resizeMode='stretch' style={{ height: 24, width: 24 }}></Image>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
                        <Image source={require('../../assets/image/a28.png')} resizeMode='stretch' style={{ height: 44, width: 44 }}></Image>
                        <Text style={[style.m16, { color: theme.txt, flex: 1, marginLeft: 10 }]}>Alex Fendere</Text>
                        <Image source={require('../../assets/image/a31.png')} resizeMode='stretch' style={{ height: 24, width: 24 }}></Image>
                    </View>

                </ScrollView>
                <View style={{ marginVertical: 20 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('MyTabs')}
                        style={style.btn}>
                        <Text style={[style.btntxt, { marginTop: 5 }]}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}