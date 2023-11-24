import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  TextInput,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  Image,
  ScrollView,
  Platform,
} from 'react-native';
import React, {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import style from '../theme/style';
import {Colors} from '../theme/color';
import {Avatar} from 'react-native-paper';
import {AppBar, HStack} from '@react-native-material/core';
import themeContext from '../theme/themeContex';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function Account() {
  const navigation = useNavigation();
  const theme = useContext(themeContext);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <SafeAreaView style={[style.area, {backgroundColor: theme.bg}]}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <View style={[style.main, {marginTop: 20}]}>
          <AppBar
            color={theme.bg}
            title="Edit profile"
            titleStyle={[style.subtitle, {color: theme.txt}]}
            elevation={0}
            leading={
              <TouchableOpacity onPress={() => navigation.navigate('MyTabs')}>
                <Icon name="arrow-back" size={24} color={theme.txt} />
              </TouchableOpacity>
            }
            trailing={
              <TouchableOpacity onPress={() => navigation.navigate('MyTabs')}>
                <Text style={[style.m14, {color: Colors.primary}]}>Done</Text>
              </TouchableOpacity>
            }
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{marginTop: 10}}>
            <ImageBackground
              source={require('../../assets/image/a1.png')}
              resizeMode="stretch"
              style={{height: 100, width: 100, alignSelf: 'center'}}>
              <View
                style={{
                  backgroundColor: '#12121450',
                  height: 100,
                  width: 100,
                  borderRadius: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={require('../../assets/image/a32.png')}
                  resizeMode="stretch"
                  style={{height: 24, width: 24}}></Image>
              </View>
            </ImageBackground>

            <Text
              style={[
                style.r14,
                {color: theme.disable, textAlign: 'center', marginTop: 20},
              ]}>
              We recommend an image of at least 800x800px.
            </Text>

            <Text style={[style.b12, {color: theme.txt1, marginTop: 30}]}>
              FULL NAME
            </Text>
            <View
              style={[
                style.inputContainer,
                {
                  borderColor:
                    isFocused === 'user' ? Colors.primary : theme.input,
                  marginTop: 5,
                },
              ]}>
              <TextInput
                placeholder="Ayano Nana"
                onFocus={() => setIsFocused('user')}
                onBlur={() => setIsFocused(false)}
                placeholderTextColor={theme.lable}
                selectionColor={Colors.primary}
                style={[
                  style.r16,
                  {color: theme.txt, flex: 1, marginBottom: -6},
                ]}
              />
            </View>

            <Text style={[style.b12, {color: theme.txt1, marginTop: 20}]}>
              Email
            </Text>
            <View
              style={[
                style.inputContainer,
                {
                  borderColor:
                    isFocused === 'email' ? Colors.primary : theme.input,
                  marginTop: 5,
                },
              ]}>
              <TextInput
                placeholder="ayanonana@gmail.com"
                onFocus={() => setIsFocused('email')}
                onBlur={() => setIsFocused(false)}
                placeholderTextColor={theme.lable}
                selectionColor={Colors.primary}
                style={[
                  style.r16,
                  {color: theme.txt, flex: 1, marginBottom: -6},
                ]}
              />
            </View>

            <Text style={[style.b12, {color: theme.txt1, marginTop: 20}]}>
              Password
            </Text>
            <View
              style={[
                style.inputContainer,
                {
                  borderColor:
                    isFocused === 'ayano' ? Colors.primary : theme.input,
                  marginTop: 5,
                },
              ]}>
              <TextInput
                placeholder="ayano123321"
                onFocus={() => setIsFocused('ayano')}
                onBlur={() => setIsFocused(false)}
                placeholderTextColor={theme.lable}
                selectionColor={Colors.primary}
                style={[
                  style.r16,
                  {color: theme.txt, flex: 1, marginBottom: -6},
                ]}
              />
            </View>

            <Text style={[style.b12, {color: theme.txt1, marginTop: 20}]}>
              Slogan
            </Text>
            <View
              style={[
                style.inputContainer,
                {
                  borderColor:
                    isFocused === 'hello' ? Colors.primary : theme.input,
                  marginTop: 5,
                  marginBottom: 20,
                },
              ]}>
              <TextInput
                placeholder="Hello every body, i will..."
                onFocus={() => setIsFocused('hello')}
                onBlur={() => setIsFocused(false)}
                placeholderTextColor={theme.lable}
                selectionColor={Colors.primary}
                style={[
                  style.r16,
                  {color: theme.txt, flex: 1, marginBottom: -6},
                ]}
              />
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
