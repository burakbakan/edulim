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

export default function Exam2() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const [checked, setChecked] = useState(false);
    const [visible, setvisible] = useState(false)
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: theme.bg, marginTop: 20 }]}>
                    <AppBar
                        color={theme.bg}
                        elevation={0}
                        centerTitle={true}
                        title={<View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icons name="timer" color={Colors.red} size={24} />
                            <Text style={[style.s18, { color: Colors.red, marginTop: 5, marginLeft: 5 }]}>44:10</Text>
                        </View>}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Exam')}>
                            <Icon name="arrow-back" color={theme.txt} size={24} />
                        </TouchableOpacity>}
                        trailing={<TouchableOpacity onPress={() => setvisible(true)}>

                            <Modal transparent={true} visible={visible}>
                                <View style={{
                                    height: height,
                                    backgroundColor: '#000000aa',
                                    transparent: 'true',
                                }}>
                                    <View style={[style.modalcontainer, { backgroundColor: theme.rb, width: width - 40, marginVertical: 200 }]}>
                                        <Text style={[style.subtitle, { color: theme.txt, textAlign: 'center', marginHorizontal:20}]}>Do you want to submit the test?</Text>
                                        <Text style={[style.r14, { color: theme.txt1, textAlign: 'center', marginTop: 10,marginHorizontal:10,lineHeight:24 }]}>You have 44:10 minutes left. Do you want to submit the test? If you press submit, you will not be able to edit the test</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                                            <TouchableOpacity onPress={() => setvisible(false)}
                                                style={[style.btnoutline, { flex: 1, borderColor: theme.input }]}>
                                                <Text style={[style.btntxt, { color: theme.lable }]}>Cancel</Text>
                                            </TouchableOpacity>
                                            <View style={{ marginHorizontal: 5 }}></View>
                                            <TouchableOpacity onPress={() => { setvisible(false), navigation.navigate('TExam1') }}
                                                style={[style.btn, { paddingTop: 5, flex: 1 }]}>
                                                <Text style={[style.btntxt, { color: Colors.secondary }]}>Submit</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </Modal>

                            <Text style={[style.m16, { color: Colors.primary }]}>Submit</Text>
                        </TouchableOpacity>}
                    />
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <Text style={[style.subtitle, { color: theme.txt }]}>Question 1</Text>
                        <Image source={require('../../assets/image/s19.png')} style={{ marginTop: 10, height: height / 4, width: width - 40, resizeMode: 'stretch' }} />
                        <Text style={[style.s18, { color: theme.txt, marginTop: 15 }]}>In the following cases, when does the object make a sound?</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                            <RadioButton
                                value="first"
                                status={checked === 'first' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('first')}
                                color={Colors.primary}
                                uncheckedColor={Colors.disable}
                            />
                            <Text style={[style.m16, { color: theme.txt1, marginLeft: 10, flex: 1 }]}>A. When stretching the object</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                            <RadioButton
                                value="second"
                                status={checked === 'second' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('second')}
                                color={Colors.primary}
                                uncheckedColor={Colors.disable}
                            />
                            <Text style={[style.m16, { color: theme.txt1, marginLeft: 10, flex: 1 }]}>B. When bending objects</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                            <RadioButton
                                value="third"
                                status={checked === 'third' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('third')}
                                color={Colors.primary}
                                uncheckedColor={Colors.disable}
                            />
                            <Text style={[style.m16, { color: theme.txt1, marginLeft: 10, flex: 1 }]}>C. When compressing objects</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                            <RadioButton
                                value="fourth"
                                status={checked === 'fourth' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('fourth')}
                                color={Colors.primary}
                                uncheckedColor={Colors.disable}
                            />
                            <Text style={[style.m16, { color: theme.txt1, marginLeft: 10, flex: 1 }]}>D. When making an object vibrate</Text>
                        </View>
                    </ScrollView>

                    <View style={{ alignItems: 'center', marginBottom: 10 }}>
                        <Text style={[style.r12, { color: theme.disable }]}>Question 1 of 35</Text>
                        <View style={{ padding: 5 }}>
                            <View style={[style.shadow, { shadowColor: Colors.active, backgroundColor: Colors.secondary, padding: 15, paddingVertical: 10, borderRadius: 30, flexDirection: 'row', alignItems: 'center' }]}>
                                <Icon name="arrow-back" color={Colors.disable} size={30} />
                                <View style={[style.verticaldivider, { backgroundColor: '#E4E6EA', marginHorizontal: 15,width:2 }]}></View>
                                <Icon name="arrow-forward" color={Colors.active} size={30} />
                            </View>
                        </View>
                    </View>

                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}