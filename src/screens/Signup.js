import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  ImageBackground,
  StatusBar,
  Image,
  FlatList,
  TextInput,
  ScrollView,
} from 'react-native';
import React, {useState, useContext, useRef} from 'react';
import {Colors} from '../theme/color';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import {useNavigation} from '@react-navigation/native';
import {Avatar} from 'react-native-paper';
import {AppBar} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import PhoneInput from 'react-native-phone-number-input';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function Signup() {
  const navigation = useNavigation();
  const theme = useContext(themeContext);

  const [phoneNumber, setPhoneNumber] = useState('');
  const phoneInput = useRef(null);
  return (
    <SafeAreaView style={[style.area, {backgroundColor: theme.bg}]}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <View style={[style.main, {backgroundColor: theme.bg, marginTop: 20}]}>
          <AppBar
            color={theme.bg}
            elevation={0}
            leading={
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Icon name="arrow-back" color={theme.txt} size={24} />
              </TouchableOpacity>
            }
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{marginTop: 10}}>
            <Text style={[style.title, {color: theme.txt, marginTop: 10}]}>
              Yeni Hesap
            </Text>
            <Text style={[style.r14, {color: theme.txt}]}>
              Kurslara Hemen Erişmek İçin Yeni Bir Hesap Oluşturun.
            </Text>
            <View style={{paddingTop: 20}}>
              <PhoneInput
                selectionColor={Colors.primary}
                ref={phoneInput}
                defaultValue={phoneNumber}
                defaultCode="TR"
                layout="first"
                codeTextStyle={{color: theme.txt, fontSize: 16}}
                textInputProps={{
                  placeholderTextColor: Colors.disable,
                  color: theme.txt,
                }}
                containerStyle={{
                  height: 48,
                  width: '100%',
                  backgroundColor: theme.otp,
                  borderRadius: 30,
                  alignItems: 'center',
                }}
                textContainerStyle={{
                  paddingVertical: 0,
                  backgroundColor: theme.bg,
                  height: 42,
                  borderRadius: 20,
                  marginRight: 3,
                }}
                onChangeFormattedText={text => {
                  setPhoneNumber(text);
                }}
              />
            </View>
          </ScrollView>
          <TouchableOpacity
            onPress={() => navigation.navigate('Otp')}
            style={[style.btn, {paddingTop: 5, marginVertical: 20}]}>
            <Text style={[style.btntxt, {color: Colors.secondary}]}>
              Kayıt Ol
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
