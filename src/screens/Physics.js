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

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Physics() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: theme.bg, marginTop: 20 }]}>
                    <AppBar
                        color={theme.bg}
                        elevation={0}
                        centerTitle={true}
                        title='Physics'
                        titleStyle={[style.subtitle, { color: theme.txt }]}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('ASub')}>
                            <Icon name="arrow-back" color={theme.txt} size={24} />
                        </TouchableOpacity>}
                    />
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>
                        <Image source={require('../../assets/image/s13.png')} style={{ height: height / 4, width: width - 40, resizeMode: 'stretch' }} />
                        <Text style={[style.subtitle, { color: theme.txt, marginTop: 15 }]}>Advanced Physics</Text>
                        <Text style={[style.r12, { color: theme.disable, }]}>This course serves as an introduction to the physics of force and motion... <Text style={{ color: Colors.primary }}>Read more</Text></Text>
                        <Text style={[style.s18, { color: theme.txt, marginTop: 10 }]}>Subject Details</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <Image source={require('../../assets/image/s14.png')}  style={{ height:48,width:48,resizeMode:'stretch' }} />
                            <View style={{ marginLeft: 12, flex: 1 }}>
                                <Text style={[style.m14, { color: theme.txt, }]}>18 online lectures</Text>
                                <Text style={[style.r12, { color: theme.txt1, }]}>Lectures can be viewd offline or download</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <Image source={require('../../assets/image/s15.png')}  style={{ height:48,width:48,resizeMode:'stretch' }} />
                            <View style={{ marginLeft: 12, flex: 1 }}>
                                <Text style={[style.m14, { color: theme.txt, }]}>15 Chapter + 5 Test Exam</Text>
                                <Text style={[style.r12, { color: theme.txt1, }]}>Each lesson will have a test</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <Image source={require('../../assets/image/s16.png')}  style={{ height:48,width:48,resizeMode:'stretch' }} />
                            <View style={{ marginLeft: 12, flex: 1 }}>
                                <Text style={[style.m14, { color: theme.txt, }]}>20 download resource</Text>
                                <Text style={[style.r12, { color: theme.txt1, }]}>Download lecture resources for testing</Text>
                            </View>
                        </View>
                    </ScrollView>
                    <TouchableOpacity onPress={() => navigation.navigate('Ph1')}
                        style={[style.btn, { paddingTop: 5, marginVertical: 20, }]}>
                        <Text style={[style.btntxt, { color: Colors.secondary }]}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}