import { View, Text, SafeAreaView, Dimensions, TextInput, TouchableOpacity, StatusBar, KeyboardAvoidingView, Image, ScrollView, Platform, ImageBackground } from 'react-native'
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

export default function Ph1() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    return (
        <SafeAreaView style={[style.area, {  }]}>
            <StatusBar backgroundColor={'transparent'} translucent={true}></StatusBar>
            <ImageBackground source={require('../../assets/image/a16.png')} resizeMode='stretch' style={{height:height/4}}>
                <AppBar
                    elevation={0}
                    style={{backgroundColor:'transparent',marginHorizontal:20,marginTop:20}}
                    leading={<TouchableOpacity onPress={() => navigation.navigate('Physics')}>
                        <Icon name='arrow-back' size={24} color={Colors.secondary} />
                    </TouchableOpacity>}
                    
                />
            </ImageBackground>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
            <View style={[style.main, {borderTopLeftRadius:30,borderTopRightRadius:30,marginTop:-20,backgroundColor:theme.bg}]}>

                <View style={[style.shadow,{backgroundColor:theme.rb,padding:15,borderRadius:25,marginTop:-70,marginHorizontal:10}]}>
                    <Text style={[style.subtitle,{color:theme.txt}]}>Advanced Physics</Text>
                    <Text style={[style.m14,{color:theme.txt1,marginTop:-5}]}>12 Chapter + 5 Exams</Text>
                    <View style={[style.divider,{backgroundColor:'#AFB3C130',marginVertical:10}]}></View>
                    <View style={{flexDirection:'row',alignItems:'center',marginTop:5}}>
                        <Image source={require('../../assets/image/a17.png')} resizeMode='stretch' style={{height:48,width:48}}></Image>
                        <View style={{marginLeft:10,flex:1}}>
                            <Text style={[style.m16,{color:theme.txt}]}>Nozomi Sasaki</Text>
                            <Text style={[style.r14,{color:theme.txt,marginTop:-5}]}>Teacher</Text>
                        </View>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 20 }}>

                    <Text style={[style.m14,{color:theme.disable}]}>Select Chapter</Text>

                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:10}}>
                        <View style={{}}>
                            <Text style={[style.s18,{color:theme.txt}]}>Introduction</Text>
                            <Text style={[style.r14,{color:theme.disable,marginTop:-5}]}>Introduction to Science</Text>
                        </View>
                        <Image source={require('../../assets/image/a18.png')} resizeMode='stretch' style={{height:48,width:48}}></Image>
                    </View>

                    <View style={[style.divider,{backgroundColor:theme.divider,marginVertical:15}]}></View>

                    <TouchableOpacity onPress={()=>navigation.navigate('Ph2')} style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:0}}>
                        <View style={{}}>
                            <Text style={[style.s18,{color:theme.txt}]}>Forces and Kinematics</Text>
                            <Text style={[style.r14,{color:theme.disable,marginTop:-5}]}>Teaching Science in Rural...</Text>
                        </View>
                        <Image source={require('../../assets/image/a19.png')} resizeMode='stretch' style={{height:45,width:45}}></Image>
                    </TouchableOpacity>

                    <View style={[style.divider,{backgroundColor:theme.divider,marginVertical:15}]}></View>

                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:0}}>
                        <View style={{}}>
                            <Text style={[style.s18,{color:theme.txt}]}>Energy and Momentum</Text>
                            <Text style={[style.r14,{color:theme.disable,marginTop:-5}]}>If schools are going to respond to...</Text>
                        </View>
                        <Image source={require('../../assets/image/a20.png')} resizeMode='stretch' style={{height:45,width:45}}></Image>
                    </View>

                    <View style={[style.divider,{backgroundColor:theme.divider,marginVertical:15}]}></View>

                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:0}}>
                        <View style={{}}>
                            <Text style={[style.s18,{color:theme.txt}]}>Electric Charges and Fields</Text>
                            <Text style={[style.r14,{color:theme.disable,marginTop:-5}]}>Particularly distressing, is that...</Text>
                        </View>
                        <Image source={require('../../assets/image/a21.png')} resizeMode='stretch' style={{height:45,width:45}}></Image>
                    </View>

                    <View style={[style.divider,{backgroundColor:theme.divider,marginVertical:15}]}></View>

                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:0}}>
                        <View style={{}}>
                            <Text style={[style.s18,{color:theme.txt}]}>Pennsylvania Department</Text>
                            <Text style={[style.r14,{color:theme.disable,marginTop:-5}]}>Clearly, there are a number of...</Text>
                        </View>
                        <Image source={require('../../assets/image/a21.png')} resizeMode='stretch' style={{height:45,width:45}}></Image>
                    </View>

                </ScrollView>
            </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}