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

export default function Board() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <View style={[style.main, { marginTop: 10 }]}>
                <AppBar
                    color={theme.bg}
                    title='Learderboard'
                    titleStyle={[style.subtitle, { color: theme.txt }]}
                    elevation={0}
                    leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs')}>
                        <Icon name='arrow-back' size={24} color={theme.txt} />
                    </TouchableOpacity>}
                />

                <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Image source={require('../../assets/image/a28.png')} resizeMode='stretch' style={{ height: 44, width: 44 }}></Image>
                        <View style={{ marginLeft: 15, flex: 1 }}>
                            <Text style={[style.s18, { color: theme.txt }]}>Julian Fox</Text>
                            <Text style={[style.r12, { color: theme.txt1, marginTop: -4 }]}>completed <Text style={{ color: Colors.green }}>17/20</Text> exam</Text>
                        </View>
                        <Image source={require('../../assets/image/a22.png')} resizeMode='stretch' style={{ height: 60, width: 60 }}></Image>
                    </View>

                    <View style={[style.divider, { backgroundColor: theme.divider, marginVertical: 18, marginTop: 28 }]}></View>

                    <TouchableOpacity onPress={() => navigation.navigate('Document')}
                        style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Image source={require('../../assets/image/a3.png')} resizeMode='stretch' style={{ height: 54, width: 54 }}></Image>
                        <View style={{ marginLeft: 15, flex: 1 }}>
                            <Text style={[style.s18, { color: theme.txt }]}>Physics</Text>
                            <Text style={[style.r12, { color: theme.txt1, marginTop: -4 }]}>You have completed <Text style={{ color: Colors.green }}>28/35</Text> questions</Text>
                        </View>
                        <View style={{ height: 44, width: 44, borderRadius: 25, backgroundColor: Colors.green, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={[style.s18, { color: Colors.secondary, marginTop: 5 }]}>85</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={[style.divider, { backgroundColor: theme.divider, marginVertical: 18, }]}></View>

                    <TouchableOpacity onPress={() => navigation.navigate('Document')}
                        style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Image source={require('../../assets/image/a4.png')} resizeMode='stretch' style={{ height: 54, width: 54 }}></Image>
                        <View style={{ marginLeft: 15, flex: 1 }}>
                            <Text style={[style.s18, { color: theme.txt }]}>Science</Text>
                            <Text style={[style.r12, { color: theme.txt1, marginTop: -4 }]}>You have completed <Text style={{ color: Colors.green }}>22/35</Text> questions</Text>
                        </View>
                        <View style={{ height: 44, width: 44, borderRadius: 25, backgroundColor: Colors.green, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={[style.s18, { color: Colors.secondary, marginTop: 5 }]}>80</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={[style.divider, { backgroundColor: theme.divider, marginVertical: 18, }]}></View>

                    <TouchableOpacity onPress={() => navigation.navigate('Document')}
                        style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Image source={require('../../assets/image/a5.png')} resizeMode='stretch' style={{ height: 54, width: 54 }}></Image>
                        <View style={{ marginLeft: 15, flex: 1 }}>
                            <Text style={[style.s18, { color: theme.txt }]}>Chemistry</Text>
                            <Text style={[style.r12, { color: theme.txt1, marginTop: -4 }]}>You have completed <Text style={{ color: Colors.green }}>12/35</Text> questions</Text>
                        </View>
                        <View style={{ height: 44, width: 44, borderRadius: 25, backgroundColor: Colors.red, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={[style.s18, { color: Colors.secondary, marginTop: 5 }]}>30</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={[style.divider, { backgroundColor: theme.divider, marginVertical: 18, }]}></View>

                    <TouchableOpacity onPress={() => navigation.navigate('Document')}
                        style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Image source={require('../../assets/image/a6.png')} resizeMode='stretch' style={{ height: 54, width: 54 }}></Image>
                        <View style={{ marginLeft: 15, flex: 1 }}>
                            <Text style={[style.s18, { color: theme.txt }]}>Biology</Text>
                            <Text style={[style.r12, { color: theme.txt1, marginTop: -4 }]}>You have completed <Text style={{ color: Colors.green }}>20/35</Text> questions</Text>
                        </View>
                        <View style={{ height: 44, width: 44, borderRadius: 25, backgroundColor: '#FFB46D', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={[style.s18, { color: Colors.secondary, marginTop: 5 }]}>50</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={[style.divider, { backgroundColor: theme.divider, marginVertical: 18, }]}></View>

                    <TouchableOpacity onPress={() => navigation.navigate('Document')}
                        style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Image source={require('../../assets/image/a8.png')} resizeMode='stretch' style={{ height: 54, width: 54 }}></Image>
                        <View style={{ marginLeft: 15, flex: 1 }}>
                            <Text style={[style.s18, { color: theme.txt }]}>Chemistry</Text>
                            <Text style={[style.r12, { color: theme.txt1, marginTop: -4 }]}>You have completed <Text style={{ color: Colors.green }}>25/35</Text> questions</Text>
                        </View>
                        <View style={{ height: 44, width: 44, borderRadius: 25, backgroundColor: Colors.green, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={[style.s18, { color: Colors.secondary, marginTop: 5 }]}>70</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={[style.divider, { backgroundColor: theme.divider, marginVertical: 18, }]}></View>

                    <TouchableOpacity onPress={() => navigation.navigate('Document')}
                        style={{ flexDirection: 'row', alignItems: 'center',marginBottom:20 }}>
                        <Image source={require('../../assets/image/a10.png')} resizeMode='stretch' style={{ height: 54, width: 54 }}></Image>
                        <View style={{ marginLeft: 15, flex: 1 }}>
                            <Text style={[style.s18, { color: theme.txt }]}>Literature</Text>
                            <Text style={[style.r12, { color: theme.txt1, marginTop: -4 }]}>You have completed <Text style={{ color: Colors.green }}>12/35</Text> questions</Text>
                        </View>
                        <View style={{ height: 44, width: 44, borderRadius: 25, backgroundColor: Colors.green, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={[style.s18, { color: Colors.secondary, marginTop: 5 }]}>90</Text>
                        </View>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}