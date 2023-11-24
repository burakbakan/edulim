import { View, Text, Dimensions, TouchableOpacity, Modal, SafeAreaView, KeyboardAvoidingView, ImageBackground, StatusBar, Image, FlatList, TextInput, ScrollView } from 'react-native'
import React, { useState, useContext, useRef } from 'react'
import { Colors } from '../theme/color'
import themeContext from '../theme/themeContex'
import style from '../theme/style'
import { useNavigation } from '@react-navigation/native'
import { Avatar, RadioButton } from 'react-native-paper'
import { AppBar, HStack } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Chat2() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: theme.bg, marginTop: 20 }]}>
                    <AppBar
                        color={theme.bg}
                        elevation={0}
                        title={<View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Avatar.Image source={require('../../assets/image/s23.png')} size={32} style={{ backgroundColor: theme.bg }} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.m16, { color: theme.txt, }]}>David Bob</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={[style.r12, { color: theme.txt, }]}>Online</Text>
                                    <View style={{ marginLeft: 5, height: 8, width: 8, borderRadius: 4, backgroundColor: Colors.red }}></View>
                                </View>
                            </View>
                        </View>}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs')}>
                            <Icon name="arrow-back" color={theme.txt} size={24} />
                        </TouchableOpacity>}
                        trailing={<Icon name="ellipsis-vertical" color={theme.txt} size={24} />}
                    />
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Avatar.Image source={require('../../assets/image/s23.png')} size={40} style={{ backgroundColor: theme.bg }} />
                            <View style={{ marginLeft: 12, flex: 1 }}>
                                <Text style={[style.b12, { color: theme.txt, }]}>David bob</Text>
                                <View style={{ marginTop: 5, paddingHorizontal: 15, paddingVertical: 10, backgroundColor: theme.input, borderRadius: 30, width: width / 1.7, justifyContent: 'center' }}>
                                    <Text style={[style.m14, { color: theme.txt, }]}>Hi, how are you doing?</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ marginTop: 15, alignItems: 'flex-end' }}>
                            <View style={{ marginTop: 5, paddingHorizontal: 15, paddingVertical: 10, backgroundColor: Colors.primary, borderRadius: 30, justifyContent: 'center' }}>
                                <Text style={[style.m14, { color: Colors.secondary }]}>Im good, thanks!</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image source={require('../../assets/image/s23.png')} size={40} style={{ backgroundColor: theme.bg }} />
                            <View style={{ marginLeft: 12, flex: 1 }}>
                                <Text style={[style.b12, { color: theme.txt, }]}>David bob</Text>
                                <View style={{ marginTop: 5, paddingHorizontal: 15, paddingVertical: 10, backgroundColor: theme.input, borderRadius: 30, width: width / 1.5, justifyContent: 'center' }}>
                                    <Text style={[style.m14, { color: theme.txt, }]}>Im great, are you free today?</Text>
                                </View>
                                <View style={{ marginTop: 5, paddingHorizontal: 15, paddingVertical: 10, backgroundColor: theme.input, borderRadius: 30, width: width / 1.5, justifyContent: 'center' }}>
                                    <Text style={[style.m14, { color: theme.txt, }]}>Can we will playing game?</Text>
                                </View>
                            </View>
                        </View>

                    </ScrollView>
                    <View style={[style.inputContainer, { marginVertical: 20, backgroundColor: theme.otp, borderColor: theme.comment }]}>
                        <TextInput placeholder='Message' placeholderTextColor={Colors.disable}
                            selectionColor={Colors.primary}
                            style={[style.r14, { color: theme.txt, flex: 1, marginBottom: -4 }]}
                        />
                        <Avatar.Image source={require('../../assets/image/s12.png')} size={32} style={{ backgroundColor: theme.bg }} />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}