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

export default function Notification() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const [visible, setVisible] = useState(false)
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: theme.bg, marginTop: 20 }]}>
                    <AppBar
                        color={theme.bg}
                        elevation={0}
                        title='Notifications'
                        titleStyle={[style.subtitle, { color: theme.txt }]}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs')}>
                            <Icon name="arrow-back" color={theme.txt} size={24} />
                        </TouchableOpacity>}
                        trailing={<TouchableOpacity onPress={() => setVisible(true)}>

                            <Modal transparent={true} visible={visible}>
                                <TouchableOpacity activeOpacity={10} onPress={() => setVisible(false)}
                                    style={{ flex: 1, }}>
                                    <View style={{
                                        right: 35, height: 90, width: 220, backgroundColor: theme.modal, position: 'absolute', marginTop: 65, borderRadius: 12,
                                        shadowColor: 'black',
                                        shadowOffset: { width: 1, height: 1 },
                                        shadowOpacity: 0.2, borderColor: 'black',
                                        elevation: 10,
                                    }}>
                                        <TouchableOpacity onPress={() => setVisible(false)}
                                            style={{ marginTop: 20, marginHorizontal: 20 }}>
                                            <Text style={[style.m16, { color: theme.txt }]}>Mute notification</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => setVisible(false)}
                                            style={{ marginHorizontal: 20 }}>
                                            <Text style={[style.m16, { color: theme.txt ,marginTop:5}]}>Activity log</Text>
                                        </TouchableOpacity>

                                    </View>
                                </TouchableOpacity>
                            </Modal>

                            <Icon name="ellipsis-vertical" color={theme.txt} size={24} />
                        </TouchableOpacity>}
                    />
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <Avatar.Image source={require('../../assets/image/s1.png')} size={48} style={{ backgroundColor: theme.bg }} />
                            <View style={{ marginLeft: 12, flex: 1 }}>
                                <Text style={[style.m14, { color: theme.txt, }]}>Erika send a new message</Text>
                                <Text style={[style.r12, { color: theme.disable, }]}>2 min ago</Text>
                            </View>
                            <View style={{ height: 8, width: 8, borderRadius: 4, backgroundColor: Colors.red }}></View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <Avatar.Image source={require('../../assets/image/s2.png')} size={48} style={{ backgroundColor: theme.bg }} />
                            <View style={{ marginLeft: 12, flex: 1 }}>
                                <Text style={[style.m14, { color: theme.txt, }]}>Shion send a new message</Text>
                                <Text style={[style.r12, { color: theme.disable, }]}>3 min ago</Text>
                            </View>
                            <View style={{ height: 8, width: 8, borderRadius: 4, backgroundColor: Colors.red }}></View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <Avatar.Image source={require('../../assets/image/s3.png')} size={48} style={{ backgroundColor: theme.bg }} />
                            <View style={{ marginLeft: 12, flex: 1 }}>
                                <Text style={[style.m14, { color: theme.txt, }]}>You have purchased the course</Text>
                                <Text style={[style.r12, { color: theme.disable, }]}>5 min ago</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <Avatar.Image source={require('../../assets/image/s4.png')} size={48} style={{ backgroundColor: theme.bg }} />
                            <View style={{ marginLeft: 12, flex: 1 }}>
                                <Text style={[style.m14, { color: theme.txt, }]}>Your account has expired</Text>
                                <Text style={[style.r12, { color: theme.disable, }]}>10 min ago</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <Avatar.Image source={require('../../assets/image/s5.png')} size={48} style={{ backgroundColor: theme.bg }} />
                            <View style={{ marginLeft: 12, flex: 1 }}>
                                <Text style={[style.m14, { color: theme.txt, }]}>Mason send a new mesage</Text>
                                <Text style={[style.r12, { color: theme.disable, }]}>40 min ago</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <Avatar.Image source={require('../../assets/image/s6.png')} size={48} style={{ backgroundColor: theme.bg }} />
                            <View style={{ marginLeft: 12, flex: 1 }}>
                                <Text style={[style.m14, { color: theme.txt, }]}>Sange send a new mesage</Text>
                                <Text style={[style.r12, { color: theme.disable, }]}>1 days ago</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <Avatar.Image source={require('../../assets/image/s3.png')} size={48} style={{ backgroundColor: theme.bg }} />
                            <View style={{ marginLeft: 12, flex: 1 }}>
                                <Text style={[style.m14, { color: theme.txt, }]}>You have purchased the course</Text>
                                <Text style={[style.r12, { color: theme.disable, }]}>2 days ago</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginBottom: 20 }}>
                            <Avatar.Image source={require('../../assets/image/s7.png')} size={48} style={{ backgroundColor: theme.bg }} />
                            <View style={{ marginLeft: 12, flex: 1 }}>
                                <Text style={[style.m14, { color: theme.txt, }]}>Njug send a new mesage</Text>
                                <Text style={[style.r12, { color: theme.disable, }]}>3 days ago</Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}