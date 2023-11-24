import { View, Text, Dimensions, TouchableOpacity, Modal, SafeAreaView, KeyboardAvoidingView, Switch, ImageBackground, StatusBar, Image, FlatList, TextInput, ScrollView } from 'react-native'
import React, { useState, useContext, useRef } from 'react'
import { Colors } from '../theme/color'
import themeContext from '../theme/themeContex'
import style from '../theme/style'
import { useNavigation } from '@react-navigation/native'
import { Avatar } from 'react-native-paper'
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { EventRegister } from 'react-native-event-listeners'
import Icon1 from 'react-native-vector-icons/Octicons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';


const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Account1() {
    const navigation = useNavigation();
    const [visible, setVisible] = useState(false)
    const theme = useContext(themeContext);
    const [darkMode, setDarkMode] = useState('false')
    const [ison1, setIsOn1] = useState(true);
    const toggle1 = () => setIsOn1(previousState => !previousState);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: theme.bg, marginTop: 20 }]}>
                    <AppBar
                        color={theme.bg}
                        elevation={0}
                        leading={<Text style={[style.apptitle, { color: theme.txt }]}>Account</Text>}
                        trailing={<TouchableOpacity onPress={() => setVisible(true)}>
                            <Modal transparent={true} visible={visible}>
                                <TouchableOpacity activeOpacity={10} onPress={() => setVisible(false)}
                                    style={{ flex: 1, }}>
                                    <View style={{
                                        right: 35, height: 200, width: 240, backgroundColor: theme.modal, position: 'absolute', marginTop: 65, borderRadius: 12,
                                        shadowColor: 'black',
                                        shadowOffset: { width: 1, height: 1 },
                                        shadowOpacity: 0.2, borderColor: 'black',
                                        elevation: 10,
                                    }}>
                                        <TouchableOpacity onPress={() => { setVisible(false), navigation.navigate('Account') }}
                                            style={{ marginTop: 10, marginHorizontal: 15, flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={[style.m16, { color: theme.txt, flex: 1 }]}>Edit profile</Text>
                                            <Icon1 name="pencil" color={theme.disable} size={24} />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => setVisible(false)}
                                            style={{ marginTop: 10, marginHorizontal: 15, flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={[style.m16, { color: theme.txt, flex: 1 }]}>Notification</Text>
                                            <Icon name="notifications-outline" color={theme.disable} size={24} />
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => setVisible(false)}
                                            style={{ marginTop: 10, marginHorizontal: 15, flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={[style.m16, { color: theme.txt, flex: 1 }]}>Help</Text>
                                            <Icon name="help-circle-outline" color={theme.disable} size={24} />
                                        </TouchableOpacity>
                                        <View style={[style.divider, { backgroundColor: theme.divider, marginVertical: 15 }]}></View>
                                        <TouchableOpacity onPress={() => { setVisible(false), navigation.navigate('Login') }}
                                            style={{ marginHorizontal: 15, flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={[style.m16, { color: theme.txt, flex: 1 }]}>Log Out</Text>
                                            <Icon2 name="login" color={theme.txt} size={24} />
                                        </TouchableOpacity>
                                    </View>
                                </TouchableOpacity>
                            </Modal>
                            <Icon name="ellipsis-horizontal" color={theme.txt} size={24} />
                        </TouchableOpacity>}
                    />
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>
                        <Avatar.Image source={require('../../assets/image/s20.png')} size={100} style={{ alignSelf: 'center', backgroundColor: theme.bg }} />
                        <Text style={[style.apptitle, { color: theme.txt, textAlign: 'center' }]}>Ayano Nana</Text>
                        <Text style={[style.r12, { color: theme.disable, textAlign: 'center', marginHorizontal: 20 }]}>Hello every body, I will score high in this software.</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                            <View style={{ flex: 1, padding: 15, flexDirection: 'row', alignItems: 'center', borderRadius: 15, borderColor: theme.bord, borderWidth: 1 }}>
                                <View style={{ height: 40, width: 40, borderRadius: 20, backgroundColor: '#D3D5FE', justifyContent: 'center', alignItems: 'center' }}>
                                    <Icon name="reader-outline" color='#767DFF' size={24} />
                                </View>
                                <View style={{ marginLeft: 15, flex: 1 }}>
                                    <Text style={[style.r12, { color: theme.txt }]}>Courses</Text>
                                    <Text style={[style.s18, { color: theme.txt }]}>14</Text>
                                </View>
                            </View>
                            <View style={{ marginHorizontal: 10 }}></View>
                            <View style={{ flex: 1, padding: 15, flexDirection: 'row', alignItems: 'center', borderRadius: 15, borderColor: theme.bord, borderWidth: 1 }}>
                                <View style={{ height: 40, width: 40, borderRadius: 20, backgroundColor: '#DAFFD6', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('../../assets/image/a36.png')} resizeMode='stretch' style={{ height: 24, width: 24 }}></Image>
                                </View>
                                <View style={{ marginLeft: 15, flex: 1 }}>
                                    <Text style={[style.r12, { color: theme.txt }]}>Score</Text>
                                    <Text style={[style.s18, { color: theme.txt }]}>82</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                            <View style={{ flex: 1, padding: 15, flexDirection: 'row', alignItems: 'center', borderRadius: 15, borderColor: theme.bord, borderWidth: 1 }}>
                                <View style={{ height: 40, width: 40, borderRadius: 20, backgroundColor: '#CFE5FC', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('../../assets/image/t5.png')} resizeMode='stretch' style={{ height: 22, width: 22, tintColor: '#56AEFF' }}></Image>
                                </View>
                                <View style={{ marginLeft: 15, flex: 1 }}>
                                    <Text style={[style.r12, { color: theme.txt }]}>Courses</Text>
                                    <Text style={[style.s18, { color: theme.txt }]}>14</Text>
                                </View>
                            </View>
                            <View style={{ marginHorizontal: 10 }}></View>
                            <View style={{ flex: 1, padding: 15, flexDirection: 'row', alignItems: 'center', borderRadius: 15, borderColor: theme.bord, borderWidth: 1 }}>
                                <View style={{ height: 40, width: 40, borderRadius: 20, backgroundColor: '#FFE4F1', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('../../assets/image/t5.png')} resizeMode='stretch' style={{ height: 22, width: 22, tintColor: '#FF84AA' }}></Image>
                                </View>
                                <View style={{ marginLeft: 15, flex: 1 }}>
                                    <Text style={[style.r12, { color: theme.txt }]}>Score</Text>
                                    <Text style={[style.s18, { color: theme.txt }]}>82</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }} >
                            <View style={{ height: 40, width: 40, backgroundColor: '#458CFF', borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                                <Icon name='contrast' size={22} color={Colors.secondary}></Icon>
                            </View>
                            <Text style={[style.m16, { color: theme.txt, marginLeft: 10, flex: 1, }]}>Dark Mode</Text>
                            <Switch
                                value={darkMode}
                                onValueChange={
                                    (value) => {
                                        setDarkMode(value);
                                        EventRegister.emit('ChangeTheme', value)
                                    }
                                }
                                trackColor={{ false: '#78788070', true: Colors.primary }}
                                thumbColor={ison1 ? Colors.secondary : '#f4f3f4'}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <Image source={require('../../assets/image/a33.png')} resizeMode='stretch' style={{ height: 40, width: 40 }}></Image>
                            <Text style={[style.m16, { color: theme.txt, marginLeft: 10 }]}>Video Playback</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <Image source={require('../../assets/image/a34.png')} resizeMode='stretch' style={{ height: 40, width: 40 }}></Image>
                            <Text style={[style.m16, { color: theme.txt, marginLeft: 10 }]}>Download Resource</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginBottom: 90 }}>
                            <Image source={require('../../assets/image/a35.png')} resizeMode='stretch' style={{ height: 40, width: 40 }}></Image>
                            <Text style={[style.m16, { color: theme.txt, marginLeft: 10 }]}>Schedule</Text>
                        </View>


                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}