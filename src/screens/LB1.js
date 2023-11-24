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

export default function LB1() {
  const navigation = useNavigation();
  const theme = useContext(themeContext);
  return (
    <SafeAreaView style={[style.area, {backgroundColor: theme.bg}]}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <View style={[style.main, {backgroundColor: theme.bg, marginTop: 25}]}>
          <AppBar
            color={theme.bg}
            elevation={0}
            centerTitle={true}
            title="Liderlik Tablosu"
            titleStyle={[style.title1, {color: theme.txt, fontWeight: 'bold'}]}
          />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{marginTop: 10}}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <View style={{alignItems: 'center', flex: 1, marginTop: 40}}>
                <Icon name="caret-up" color="#28CA6C" size={24} />
                <Text style={[style.m16, {color: theme.txt, lineHeight: 18}]}>
                  2
                </Text>
                <Avatar.Image
                  source={require('../../assets/image/s21.png')}
                  size={80}
                  style={{marginTop: 5, backgroundColor: theme.bg}}
                />
                <Text style={[style.s18, {color: theme.txt, marginTop: 5}]}>
                  Fatma
                </Text>
                <Text
                  style={[
                    style.subtitle,
                    {color: Colors.green, marginTop: -5},
                  ]}>
                  98P
                </Text>
              </View>
              <View style={{alignItems: 'center', flex: 1}}>
                <Text style={[style.m16, {color: theme.txt, lineHeight: 18}]}>
                  1
                </Text>
                <Image
                  source={require('../../assets/image/s24.png')}
                  style={{height: 33, width: 50, resizeMode: 'stretch'}}
                />
                <Avatar.Image
                  source={require('../../assets/image/s25.png')}
                  size={80}
                  style={{marginTop: 5, backgroundColor: theme.bg}}
                />
                <Text style={[style.s18, {color: theme.txt, marginTop: 5}]}>
                  Burak
                </Text>
                <Text
                  style={[
                    style.subtitle,
                    {color: Colors.green, marginTop: -5},
                  ]}>
                  100P
                </Text>
              </View>
              <View style={{alignItems: 'center', flex: 1, marginTop: 40}}>
                <Text style={[style.m16, {color: theme.txt, lineHeight: 18}]}>
                  3
                </Text>
                <Icon name="caret-down" color={Colors.red} size={24} />
                <Avatar.Image
                  source={require('../../assets/image/s23.png')}
                  size={80}
                  style={{marginTop: 5, backgroundColor: theme.bg}}
                />
                <Text style={[style.s18, {color: theme.txt, marginTop: 5}]}>
                  Abdullah
                </Text>
                <Text
                  style={[style.subtitle, {color: Colors.red, marginTop: -5}]}>
                  96P
                </Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <View style={{alignItems: 'center'}}>
                <Icon
                  name="caret-up"
                  color="#28CA6C"
                  size={24}
                  style={{marginTop: -10}}
                />
                <Text style={[style.m16, {color: theme.txt}]}>4</Text>
              </View>
              <View style={{padding: 5, marginLeft: 10, flex: 1}}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Board')}
                  style={[
                    style.shadow,
                    {
                      shadowColor: Colors.active,
                      backgroundColor: theme.rb,
                      padding: 3,
                      borderRadius: 30,
                      flexDirection: 'row',
                      alignItems: 'center',
                    },
                  ]}>
                  <Avatar.Image
                    source={require('../../assets/image/s7.png')}
                    size={44}
                    style={{backgroundColor: theme.bg}}
                  />
                  <Text
                    style={[
                      style.m16,
                      {color: theme.txt, marginLeft: 10, flex: 1},
                    ]}>
                    Selin
                  </Text>
                  <Text
                    style={[style.s18, {color: Colors.green, marginRight: 5}]}>
                    90P
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <View style={{alignItems: 'center'}}>
                <Text style={[style.m16, {color: theme.txt}]}>5</Text>
                <Icon
                  name="caret-down"
                  color={Colors.red}
                  size={24}
                  style={{marginTop: -10}}
                />
              </View>
              <View style={{padding: 5, marginLeft: 10, flex: 1}}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Board')}
                  style={[
                    style.shadow,
                    {
                      shadowColor: Colors.active,
                      backgroundColor: theme.rb,
                      padding: 3,
                      borderRadius: 30,
                      flexDirection: 'row',
                      alignItems: 'center',
                    },
                  ]}>
                  <Avatar.Image
                    source={require('../../assets/image/s22.png')}
                    size={44}
                    style={{backgroundColor: theme.bg}}
                  />
                  <Text
                    style={[
                      style.m16,
                      {color: theme.txt, marginLeft: 10, flex: 1},
                    ]}>
                    Deniz
                  </Text>
                  <Text
                    style={[style.s18, {color: Colors.green, marginRight: 5}]}>
                    88P
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <View style={{alignItems: 'center'}}>
                <Icon
                  name="caret-up"
                  color="#28CA6C"
                  size={24}
                  style={{marginTop: -10}}
                />
                <Text style={[style.m16, {color: theme.txt}]}>6</Text>
              </View>
              <View style={{padding: 5, marginLeft: 10, flex: 1}}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Board')}
                  style={[
                    style.shadow,
                    {
                      shadowColor: Colors.active,
                      backgroundColor: theme.rb,
                      padding: 3,
                      borderRadius: 30,
                      flexDirection: 'row',
                      alignItems: 'center',
                    },
                  ]}>
                  <Avatar.Image
                    source={require('../../assets/image/s26.png')}
                    size={44}
                    style={{backgroundColor: theme.bg}}
                  />
                  <Text
                    style={[
                      style.m16,
                      {color: theme.txt, marginLeft: 10, flex: 1},
                    ]}>
                    Hülya
                  </Text>
                  <Text
                    style={[style.s18, {color: Colors.green, marginRight: 5}]}>
                    86P
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <View style={{alignItems: 'center'}}>
                <Icon
                  name="caret-up"
                  color="#28CA6C"
                  size={24}
                  style={{marginTop: -10}}
                />
                <Text style={[style.m16, {color: theme.txt}]}>7</Text>
              </View>
              <View style={{padding: 5, marginLeft: 10, flex: 1}}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Board')}
                  style={[
                    style.shadow,
                    {
                      shadowColor: Colors.active,
                      backgroundColor: theme.rb,
                      padding: 3,
                      borderRadius: 30,
                      flexDirection: 'row',
                      alignItems: 'center',
                    },
                  ]}>
                  <Avatar.Image
                    source={require('../../assets/image/s27.png')}
                    size={44}
                    style={{backgroundColor: theme.bg}}
                  />
                  <Text
                    style={[
                      style.m16,
                      {color: theme.txt, marginLeft: 10, flex: 1},
                    ]}>
                    Almina
                  </Text>
                  <Text
                    style={[style.s18, {color: Colors.green, marginRight: 5}]}>
                    85P
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
                marginBottom: 80,
              }}>
              <View style={{alignItems: 'center'}}>
                <Text style={[style.m16, {color: theme.txt}]}>8</Text>
                <Icon
                  name="caret-down"
                  color={Colors.red}
                  size={24}
                  style={{marginTop: -10}}
                />
              </View>
              <View style={{padding: 5, marginLeft: 10, flex: 1}}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Board')}
                  style={[
                    style.shadow,
                    {
                      shadowColor: Colors.active,
                      backgroundColor: theme.rb,
                      padding: 3,
                      borderRadius: 30,
                      flexDirection: 'row',
                      alignItems: 'center',
                    },
                  ]}>
                  <Avatar.Image
                    source={require('../../assets/image/s28.png')}
                    size={44}
                    style={{backgroundColor: theme.bg}}
                  />
                  <Text
                    style={[
                      style.m16,
                      {color: theme.txt, marginLeft: 10, flex: 1},
                    ]}>
                    Ayşe
                  </Text>
                  <Text
                    style={[style.s18, {color: Colors.green, marginRight: 5}]}>
                    80P
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
