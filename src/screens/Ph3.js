import { View, Text, Dimensions, TouchableOpacity, Modal, SafeAreaView, KeyboardAvoidingView, ImageBackground, StatusBar, Image, FlatList, TextInput, ScrollView } from 'react-native'
import React, { useState, useContext, useRef } from 'react'
import { Colors } from '../theme/color'
import themeContext from '../theme/themeContex'
import style from '../theme/style'
import { useNavigation } from '@react-navigation/native'
import { Avatar } from 'react-native-paper'
import { AppBar, HStack } from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Ph3() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const [visible, setvisible] = useState(false)
    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: theme.bg, marginTop: 20 }]}>
                    <AppBar
                        color={theme.bg}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Ph2')}>
                            <Icon name="arrow-back" color={theme.txt} size={24} />
                        </TouchableOpacity>}
                        trailing={<HStack>
                            <Icon name="bookmark-sharp" color={Colors.red} size={24} />
                            <TouchableOpacity onPress={() => setvisible(true)}>

                            <Modal transparent={true} visible={visible}>
                                <View style={{
                                    height: height,
                                    backgroundColor: '#000000aa',
                                    transparent: 'true',
                                }}>
                                    <View style={[style.modalcontainer, { backgroundColor: theme.rb, width: width - 40, marginVertical: 240 }]}>
                                        <Text style={[style.apptitle, { color: theme.txt, textAlign: 'center', }]}>Test Exam</Text>
                                        <Text style={[style.r14, { color: theme.txt1, textAlign: 'center', marginTop: 10 }]}>You have not completed the lesson. Do you want to take the test too?</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                                            <TouchableOpacity onPress={() => setvisible(false)}
                                            style={[style.btnoutline, { flex: 1,borderColor:theme.input }]}>
                                            <Text style={[style.btntxt, { color:theme.lable}]}>Cancel</Text>
                                            </TouchableOpacity>
                                            <View style={{ marginHorizontal: 5 }}></View>
                                            <TouchableOpacity onPress={() => {setvisible(false),navigation.navigate('TExam')}}
                                                style={[style.btn, { paddingTop: 5, flex: 1 }]}>
                                                <Text style={[style.btntxt, { color: Colors.secondary }]}>Continue</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </Modal>

                                <Icon name="reader-outline" color={theme.txt} size={24} style={{ marginHorizontal: 10 }} />
                            </TouchableOpacity>
                            <Icon name="ellipsis-vertical" color={theme.txt} size={24} />
                        </HStack>}
                    />
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>
                        <Image source={require('../../assets/image/s18.png')} style={{ height: height / 4, width: width - 40, resizeMode: 'stretch' }} />
                        <Text style={[style.r14, { color: theme.txt1, marginTop: 20, lineHeight: 24 }]}>This course serves as an introduction to the physics of force and motion.  Upon completion, learners will have an understanding of how mathematical laws and conservation principles describe the motions and interactions of objects all around us. They will gain experience in solving physics problems with tools such as graphical analysis, algebra, vector analysis, and calculus.  The course follows the typical progression of topics of a first-semester university physics course:  Kinematics, Newton’s Laws, Energy, and Momentum.</Text>
                    </ScrollView>
                    <View style={{ alignItems: 'center', marginBottom: 10 }}>
                        <Text style={[style.r12, { color: theme.disable }]}>2 of 12 pages</Text>
                        <View style={{ padding: 5 }}>
                            <View style={[style.shadow, { shadowColor: Colors.active, backgroundColor: Colors.secondary, padding: 15, paddingVertical: 10, borderRadius: 30, flexDirection: 'row', alignItems: 'center' }]}>
                                <Icon name="arrow-back" color={Colors.active} size={32} />
                                <View style={[style.verticaldivider, { backgroundColor: '#E4E6EA', marginHorizontal: 15 ,width:2}]}></View>
                                <Icon name="arrow-forward" color={Colors.active} size={32} />
                            </View>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}