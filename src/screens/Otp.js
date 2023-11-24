import { View, Text, Dimensions, TouchableOpacity, KeyboardAvoidingView, SafeAreaView, ImageBackground, StatusBar, Image, FlatList, TextInput, ScrollView } from 'react-native'
import React, { useState, useContext, useRef } from 'react'
import { Colors } from '../theme/color'
import themeContext from '../theme/themeContex'
import style from '../theme/style'
import { useNavigation } from '@react-navigation/native'
import { Avatar } from 'react-native-paper'
import { AppBar } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import OtpInputs from 'react-native-otp-inputs'
import Clipboard from '@react-native-clipboard/clipboard'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Otp() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: theme.bg, marginTop: 20 }]}>
                    <AppBar
                        color={theme.bg}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                            <Icon name="arrow-back" color={theme.txt} size={24} />
                        </TouchableOpacity>
                        }
                    />

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>
                        <Text style={[style.title, { color: theme.txt, }]}>Verify Account</Text>
                        <Text style={[style.r14, { color: theme.txt }]}>Please fill verification code that have been sent to your mobile phone</Text>
                        <OtpInputs
                            Clipboard={Clipboard}
                            numberOfInputs={4}
                            selectionColor={Colors.primary}
                            inputStyles={{
                                textAlign: 'center',
                                width: 54,
                                height: 72,
                                fontSize: 16,
                                color: theme.txt,
                                fontFamily: 'Poppins-Medium',
                                marginTop: 20,
                                borderRadius: 24,
                                backgroundColor: theme.otp
                            }}
                        />
                        <Text style={[style.r14, { color: theme.txt, textAlign: 'center', marginTop: 30 }]}>Didn’t recieve a code?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                            <Text style={[style.b14, { color: Colors.primary, textAlign: 'center' }]}>RESEND</Text>
                        </TouchableOpacity>
                    </ScrollView>
                    <TouchableOpacity onPress={() => navigation.navigate('MyTabs')}
                        style={[style.btn, { paddingTop: 5, marginVertical: 20, }]}>
                        <Text style={[style.btntxt, { color: Colors.secondary }]}>Send</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}