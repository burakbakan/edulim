import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import style from '../theme/style';
import {Colors} from '../theme/color';
import {AppBar, HStack} from '@react-native-material/core';
import themeContext from '../theme/themeContex';
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function Login() {
  const navigation = useNavigation();
  const theme = useContext(themeContext);
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <SafeAreaView style={[style.area, {backgroundColor: theme.bg}]}>
      <View style={[style.main, {marginTop: 20}]}>
        <AppBar
          color={theme.bg}
          elevation={0}
          leading={
            <TouchableOpacity
              onPress={() => navigation.navigate('Introduction')}>
              <Icon name="arrow-back" size={24} color={theme.txt} />
            </TouchableOpacity>
          }
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{marginTop: 10}}>
          <Text style={[style.title, {color: theme.txt}]}>
            Yeni Nesil Eğitim Platformu
          </Text>
          <Text style={[style.r14, {color: theme.txt}]}>
            Hesabınızda oturum açın
          </Text>
          <View
            style={[
              style.inputContainer,
              {
                borderColor:
                  isFocused === 'user' ? Colors.primary : theme.input,
                marginTop: 20,
              },
            ]}>
            <TextInput
              placeholder="Kullanıcı Adı Veya Cep Telefonu Numarası"
              onFocus={() => setIsFocused('user')}
              onBlur={() => setIsFocused(false)}
              placeholderTextColor={theme.lable}
              selectionColor={Colors.primary}
              style={[style.r16, {color: theme.txt, flex: 1, marginBottom: -6}]}
            />
          </View>
          <View
            style={[
              style.inputContainer,
              {
                borderColor:
                  isFocused === 'pass' ? Colors.primary : theme.input,
                marginTop: 12,
              },
            ]}>
            <TextInput
              placeholder="Şifre"
              secureTextEntry={!isPasswordVisible}
              onFocus={() => setIsFocused('pass')}
              onBlur={() => setIsFocused(false)}
              placeholderTextColor={theme.lable}
              selectionColor={Colors.primary}
              style={[style.r16, {color: theme.txt, flex: 1, marginBottom: -6}]}
            />
            <TouchableOpacity
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
              <Icon
                name={isPasswordVisible ? 'eye' : 'eye-off'}
                color={Colors.disable}
                size={20}
              />
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 30, marginBottom: 20}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Signup')}
              style={style.btn}>
              <Text style={[style.btntxt, {marginTop: 5}]}>Giriş</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
