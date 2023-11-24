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

export default function Live() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
            <StatusBar backgroundColor="transparent" translucent={true} />
            <ImageBackground source={require('../../assets/image/s8.png')} resizeMode='stretch' style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <AppBar
                        elevation={0}
                        style={{ backgroundColor: 'transparent', marginHorizontal: 20, marginTop: 20 }}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('AVideo')}>
                            <Icon name="arrow-back" color={Colors.active} size={24} />
                        </TouchableOpacity>}
                        trailing={<View style={{ paddingHorizontal: 15, paddingVertical: 5, borderRadius: 15, backgroundColor: Colors.red, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={[style.r12, { color: Colors.secondary }]}>Live Now</Text>
                        </View>}
                    />
                    <View style={{ justifyContent: 'flex-end', flex: 1, paddingHorizontal: 20, paddingBottom: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <Avatar.Image source={require('../../assets/image/s9.png')} size={40} style={{ backgroundColor: Colors.active }} />
                            <Text style={[style.m16, { color: Colors.secondary, marginLeft: 15, flex: 1 }]}>Nozomi Sasaki</Text>
                        </View>
                        <Text style={[style.s18, { color: Colors.secondary, marginTop: 5 }]}>Teaching Science in Aboriginal and Urban Multicultural Schools</Text>
                    </View>
                </View>
                <View style={{ flex: 1, borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: theme.rb, paddingHorizontal: 20 }}>
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Avatar.Image source={require('../../assets/image/s10.png')} size={40} style={{ backgroundColor: theme.bg }} />
                            <View style={{ marginLeft: 12, flex: 1 }}>
                                <Text style={[style.b12, { color: theme.txt, }]}>Miaasna</Text>
                                <View style={{ marginTop:5,paddingHorizontal: 15, paddingVertical: 10, backgroundColor: theme.input, borderRadius: 30, width: width / 1.7, justifyContent: 'center' }}>
                                    <Text style={[style.m14, { color: theme.txt, }]}>Hi, how are you doing?</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <Avatar.Image source={require('../../assets/image/s11.png')} size={40} style={{ backgroundColor: theme.bg }} />
                            <View style={{ marginLeft: 12, flex: 1 }}>
                                <Text style={[style.b12, { color: '#8E96FF'}]}>You</Text>
                                <View style={{marginTop:5, paddingHorizontal: 20, paddingVertical: 20, backgroundColor: theme.cbg, borderRadius: 20, justifyContent: 'center' }}>
                                    <Text style={[style.m14, { color: '#8E96FF',lineHeight:28 }]}>Can you speak a little louder? The mic seems a bit small.</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <Avatar.Image source={require('../../assets/image/s5.png')} size={40} style={{ backgroundColor: theme.bg }} />
                            <View style={{ marginLeft: 12, flex: 1 }}>
                                <Text style={[style.b12, { color: theme.txt, }]}>Michky</Text>
                                <View style={{ marginTop:5,paddingHorizontal: 15, paddingVertical: 10, backgroundColor: theme.input, borderRadius: 30, width: width / 1.7, justifyContent: 'center' }}>
                                    <Text style={[style.m14, { color: theme.txt, }]}>so easy to understand!</Text>
                                </View>
                            </View>
                        </View>
                        <View style={[style.inputContainer,{marginVertical:20,backgroundColor:theme.comment,borderColor:theme.comment}]}>
                            <TextInput placeholder='Add Comment' placeholderTextColor={Colors.disable}
                            selectionColor={Colors.primary}
                            style={[style.r14,{color:theme.txt,flex:1,marginBottom:-4}]}
                            />
                             <Avatar.Image source={require('../../assets/image/s12.png')} size={32} style={{ backgroundColor: theme.bg }} />
                        </View>
                    </ScrollView>
                    
                </View>
            </ImageBackground>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}