import { View, Text, Dimensions, TouchableOpacity, Modal, SafeAreaView, KeyboardAvoidingView, ImageBackground, StatusBar, Image, FlatList, TextInput, ScrollView } from 'react-native'
import React, { useState, useContext, useRef } from 'react'
import { Colors } from '../theme/color'
import themeContext from '../theme/themeContex'
import style from '../theme/style'
import { useNavigation } from '@react-navigation/native'
import { Avatar } from 'react-native-paper'
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/Octicons'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Document() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: theme.bg, marginTop: 20 }]}>
                    <AppBar
                        color={theme.bg}
                        elevation={0}
                        title='Document'
                        titleStyle={[style.subtitle, { color: theme.txt }]}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs')}>
                            <Icon name="arrow-back" color={theme.txt} size={24} />
                        </TouchableOpacity>}
                        trailing={<Avatar.Image source={require('../../assets/image/s20.png')} size={48} style={{ backgroundColor: theme.bg }} />}
                    />
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>
                        <Text style={[style.subtitle, { color: theme.txt, }]}>Physics</Text>
                        <Text style={[style.m14, { color: theme.disable, }]}>2 new uploads</Text>

                        <View style={[style.divider, { backgroundColor: theme.divider, marginTop: 30 }]}></View>

                        <TouchableOpacity onPress={() => navigation.navigate('Exam')}
                        style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <Image source={require('../../assets/image/a39.png')} style={{ height: 48, width: 48, resizeMode: 'stretch' }} />
                            <View style={{ marginLeft: 12, flex: 1 }}>
                                <Text style={[style.m16, { color: theme.txt, }]}>Physics Tutorial</Text>
                                <Text style={[style.m14, { color: theme.disable, }]}>Ready to open</Text>
                            </View>
                            <Icon name="chevron-forward" color={theme.disable} size={28} />
                        </TouchableOpacity>
                        <View style={[style.divider, { backgroundColor: theme.divider, marginVertical: 20 }]}></View>
                        <TouchableOpacity onPress={() => navigation.navigate('Exam')}
                        style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Image source={require('../../assets/image/a38.png')} style={{ height: 48, width: 48, resizeMode: 'stretch' }} />
                            <View style={{ marginLeft: 12, flex: 1 }}>
                                <Text style={[style.m16, { color: theme.txt, }]}>Physics Practice</Text>
                                <Text style={[style.m14, { color: theme.disable, }]}>Ready to open</Text>
                            </View>
                            <Icon name="chevron-forward" color={theme.disable} size={28} />
                        </TouchableOpacity>
                        <View style={[style.divider, { backgroundColor: theme.divider, marginVertical: 20 }]}></View>
                        <TouchableOpacity onPress={() => navigation.navigate('Exam')}
                        style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Image source={require('../../assets/image/a37.png')} style={{tintColor:Colors.disable, height: 48, width: 48, resizeMode: 'stretch' }} />
                            <View style={{ marginLeft: 12, flex: 1 }}>
                                <Text style={[style.m16, { color: theme.txt, }]}>Physic Technology</Text>
                                <Text style={[style.m14, { color: theme.disable, }]}>Download</Text>
                            </View>
                            <Icon1 name="download" color={theme.disable} size={28} />
                        </TouchableOpacity>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}