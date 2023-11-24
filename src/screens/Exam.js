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

export default function Exam() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: theme.bg, marginTop: 20 }]}>
                    <AppBar
                        color={theme.bg}
                        elevation={0}
                        title='Exam'
                        titleStyle={[style.subtitle, { color: theme.txt }]}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Document')}>
                            <Icon name="arrow-back" color={theme.txt} size={24} />
                        </TouchableOpacity>}
                        trailing={<Avatar.Image source={require('../../assets/image/s20.png')} size={48} style={{ backgroundColor: theme.bg }} />}
                    />
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>
                        <Image source={require('../../assets/image/a3.png')} style={{ marginTop: 10, height: 80, width: 80, resizeMode: 'stretch', alignSelf: 'center' }} />

                        <Text style={[style.subtitle, { color: theme.txt, textAlign: 'center', marginTop: 5 }]}>Physics Exam</Text>

                        <Text style={[style.r14, { color: theme.txt1, marginTop: 10, lineHeight: 24 }]}>This is the final exam in physics. You must answer all the questions correctly, the time given is only 45 minutes. If you get 70 points, you will pass the course. If your score is less than 40, you will have to retake the test.</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <Image source={require('../../assets/image/s14.png')} style={{ height: 48, width: 48, resizeMode: 'stretch' }} />
                            <View style={{ marginLeft: 12, flex: 1 }}>
                                <Text style={[style.m14, { color: theme.txt, }]}>45 minutes for the test</Text>
                                <Text style={[style.r12, { color: theme.txt1, }]}>Complete the test in 45 minutes</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <Image source={require('../../assets/image/s15.png')} style={{ height: 48, width: 48, resizeMode: 'stretch' }} />
                            <View style={{ marginLeft: 12, flex: 1 }}>
                                <Text style={[style.m14, { color: theme.txt, }]}>35 questions</Text>
                                <Text style={[style.r12, { color: theme.txt1, }]}>The test consists of 35 questions</Text>
                            </View>
                        </View>
                
                    </ScrollView>
                    <TouchableOpacity onPress={() => navigation.navigate('Exam2')}
                        style={[style.btn, { paddingTop: 5, marginVertical: 20, }]}>
                        <Text style={[style.btntxt, { color: Colors.secondary }]}>Exam Started</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}