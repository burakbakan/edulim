import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Modal,
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
import {Avatar, RadioButton} from 'react-native-paper';
import {AppBar, HStack} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function Chat() {
  const navigation = useNavigation();
  const theme = useContext(themeContext);
  return (
    <SafeAreaView style={[style.area, {backgroundColor: theme.bg}]}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <View style={[style.main, {backgroundColor: theme.bg, marginTop: 20}]}>
          <AppBar
            color={theme.bg}
            elevation={0}
            title="Mesajlar"
            titleStyle={[
              style.subtitle,
              {color: theme.txt, fontWeight: 'bold'},
            ]}
            leading={
              <TouchableOpacity>
                <Icon name="arrow-back" color={theme.txt} size={24} />
              </TouchableOpacity>
            }
            trailing={
              <TouchableOpacity>
                <Icon name="search-outline" color={theme.txt} size={24} />
              </TouchableOpacity>
            }
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{marginTop: 10}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Text
                style={[
                  style.m16,
                  {color: theme.txt, flex: 1, fontWeight: 'bold'},
                ]}>
                Gruplar
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('NG')}
                style={{
                  height: 32,
                  width: 32,
                  borderRadius: 16,
                  backgroundColor: theme.input,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name="add" color={theme.txt} size={24} />
              </TouchableOpacity>
            </View>

            <View
              style={[
                style.divider,
                {backgroundColor: theme.divider, marginVertical: 10},
              ]}></View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={{flex: 1}}>
                <Text style={[style.s18, {color: theme.txt}]}>
                  Fizik Sınıfı
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                  }}>
                  <Avatar.Image
                    source={require('../../assets/image/s2.png')}
                    size={32}
                    style={{backgroundColor: theme.bg}}
                  />
                  <Avatar.Image
                    source={require('../../assets/image/s1.png')}
                    size={32}
                    style={{marginLeft: -7, backgroundColor: theme.bg}}
                  />
                  <Avatar.Image
                    source={require('../../assets/image/s22.png')}
                    size={32}
                    style={{marginLeft: -7, backgroundColor: theme.bg}}
                  />
                  <Avatar.Image
                    source={require('../../assets/image/s21.png')}
                    size={32}
                    style={{marginLeft: -7, backgroundColor: theme.bg}}
                  />
                  <Avatar.Image
                    source={require('../../assets/image/s23.png')}
                    size={32}
                    style={{marginLeft: -7, backgroundColor: theme.bg}}
                  />
                  <View
                    style={{
                      marginLeft: -7,
                      height: 32,
                      width: 32,
                      borderRadius: 16,
                      backgroundColor: theme.input,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={[style.r12, {color: theme.txt, marginTop: 5}]}>
                      +5
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 5,
                  borderRadius: 20,
                  backgroundColor: Colors.primary,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={[style.b14, {color: Colors.secondary}]}>
                  Katıl
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <View style={{flex: 1}}>
                <Text style={[style.s18, {color: theme.txt}]}>
                  Biyoloji Sınıfı
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                  }}>
                  <Avatar.Image
                    source={require('../../assets/image/s2.png')}
                    size={32}
                    style={{backgroundColor: theme.bg}}
                  />
                  <Avatar.Image
                    source={require('../../assets/image/s1.png')}
                    size={32}
                    style={{marginLeft: -7, backgroundColor: theme.bg}}
                  />
                  <Avatar.Image
                    source={require('../../assets/image/s22.png')}
                    size={32}
                    style={{marginLeft: -7, backgroundColor: theme.bg}}
                  />
                  <Avatar.Image
                    source={require('../../assets/image/s21.png')}
                    size={32}
                    style={{marginLeft: -7, backgroundColor: theme.bg}}
                  />
                  <Avatar.Image
                    source={require('../../assets/image/s23.png')}
                    size={32}
                    style={{marginLeft: -7, backgroundColor: theme.bg}}
                  />
                  <View
                    style={{
                      marginLeft: -7,
                      height: 32,
                      width: 32,
                      borderRadius: 16,
                      backgroundColor: theme.input,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={[style.r12, {color: theme.txt, marginTop: 5}]}>
                      +5
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 5,
                  borderRadius: 20,
                  backgroundColor: Colors.primary,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={[style.b14, {color: Colors.secondary}]}>
                  Katıl
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Text
                style={[
                  style.m16,
                  {color: theme.txt, flex: 1, fontWeight: 'bold'},
                ]}>
                Mesajlar
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Chat2')}
                style={{
                  height: 32,
                  width: 32,
                  borderRadius: 16,
                  backgroundColor: theme.input,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name="add" color={theme.txt} size={24} />
              </TouchableOpacity>
            </View>

            <View
              style={[
                style.divider,
                {backgroundColor: theme.divider, marginVertical: 10},
              ]}></View>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Avatar.Image
                source={require('../../assets/image/s2.png')}
                size={44}
                style={{backgroundColor: theme.bg}}
              />
              <View style={{marginLeft: 12, flex: 1}}>
                <Text style={[style.m16, {color: theme.txt}]}>Selin</Text>
                <Text style={[style.r14, {color: theme.disable}]}>
                  Ödevi yaptın mı?
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Avatar.Image
                source={require('../../assets/image/s22.png')}
                size={44}
                style={{backgroundColor: theme.bg}}
              />
              <View style={{marginLeft: 12, flex: 1}}>
                <Text style={[style.m16, {color: theme.txt}]}>Erdem</Text>
                <Text style={[style.r14, {color: theme.disable}]}>
                  Selam, nasılsın?
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Avatar.Image
                source={require('../../assets/image/s26.png')}
                size={44}
                style={{backgroundColor: theme.bg}}
              />
              <View style={{marginLeft: 12, flex: 1}}>
                <Text style={[style.m16, {color: theme.txt}]}>Eylül</Text>
                <Text style={[style.r14, {color: theme.disable}]}>
                  Ders çalışıyoruz, sen nerdesin?
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
                marginBottom: 80,
              }}>
              <Avatar.Image
                source={require('../../assets/image/s23.png')}
                size={44}
                style={{backgroundColor: theme.bg}}
              />
              <View style={{marginLeft: 12, flex: 1}}>
                <Text style={[style.m16, {color: theme.txt}]}>David Bob</Text>
                <Text style={[style.r14, {color: theme.disable}]}>
                  No, i am best
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
