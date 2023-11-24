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

export default function TExam1() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <View style={[style.main, { marginTop: 25 }]}>
                <AppBar
                    color={theme.bg}
                    title='Test Exam'
                    titleStyle={[style.subtitle,{color:theme.txt}]}
                    elevation={0}
                    leading={<TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name='arrow-back' size={24} color={theme.txt} />
                    </TouchableOpacity>}
                />

                <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                    <View style={{flexDirection:'row',alignItems:'center',}}>
                        <Image source={require('../../assets/image/a3.png')} resizeMode='stretch' style={{height:54,width:54}}></Image>
                        <View style={{marginLeft:15,flex:1}}>
                            <Text style={[style.s18,{color:theme.txt}]}>Physics</Text>
                            <Text style={[style.r12,{color:theme.txt1,marginTop:-4}]}>You have completed <Text style={{color:Colors.green}}>11/15</Text> questions</Text>
                        </View>
                        <Image source={require('../../assets/image/a22.png')} resizeMode='stretch' style={{height:60,width:60}}></Image>
                    </View>

                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:30}}>
                        <View>
                            <Text style={[style.m16,{color:theme.txt}]}>Question 1</Text>
                            <Text style={[style.m14,{color:Colors.green,marginTop:-4}]}>Right</Text>
                        </View>
                        <Icon name='chevron-forward' size={20} color={Colors.disable}></Icon>
                    </View> 

                    <View style={[style.divider,{backgroundColor:theme.divider,marginVertical:12}]}></View>

                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <View>
                            <Text style={[style.m16,{color:theme.txt}]}>Question 2</Text>
                            <Text style={[style.m14,{color:Colors.red,marginTop:-4}]}>Wrong</Text>
                        </View>
                        <Icon name='chevron-forward' size={20} color={Colors.disable}></Icon>
                    </View> 

                    <View style={[style.divider,{backgroundColor:theme.divider,marginVertical:12}]}></View>

                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <View>
                            <Text style={[style.m16,{color:theme.txt}]}>Question 3</Text>
                            <Text style={[style.m14,{color:Colors.green,marginTop:-4}]}>Right</Text>
                        </View>
                        <Icon name='chevron-forward' size={20} color={Colors.disable}></Icon>
                    </View> 

                    <View style={[style.divider,{backgroundColor:theme.divider,marginVertical:12}]}></View>

                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <View>
                            <Text style={[style.m16,{color:theme.txt}]}>Question 4</Text>
                            <Text style={[style.m14,{color:Colors.red,marginTop:-4}]}>Wrong</Text>
                        </View>
                        <Icon name='chevron-forward' size={20} color={Colors.disable}></Icon>
                    </View> 

                    <View style={[style.divider,{backgroundColor:theme.divider,marginVertical:12}]}></View>

                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <View>
                            <Text style={[style.m16,{color:theme.txt}]}>Question 5</Text>
                            <Text style={[style.m14,{color:Colors.green,marginTop:-4}]}>Right</Text>
                        </View>
                        <Icon name='chevron-forward' size={20} color={Colors.disable}></Icon>
                    </View> 

                    <View style={[style.divider,{backgroundColor:theme.divider,marginVertical:12}]}></View>

                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <View>
                            <Text style={[style.m16,{color:theme.txt}]}>Question 6</Text>
                            <Text style={[style.m14,{color:Colors.green,marginTop:-4}]}>Right</Text>
                        </View>
                        <Icon name='chevron-forward' size={20} color={Colors.disable}></Icon>
                    </View> 

                    <View style={[style.divider,{backgroundColor:theme.divider,marginVertical:12}]}></View>

                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <View>
                            <Text style={[style.m16,{color:theme.txt}]}>Question 7</Text>
                            <Text style={[style.m14,{color:Colors.green,marginTop:-4}]}>Right</Text>
                        </View>
                        <Icon name='chevron-forward' size={20} color={Colors.disable}></Icon>
                    </View> 

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}