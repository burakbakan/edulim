import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  StatusBar,
  Image,
  FlatList,
} from 'react-native';
import React, {useState, useContext} from 'react';
import {Colors} from '../theme/color';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import {useNavigation} from '@react-navigation/native';
import {Avatar} from 'react-native-paper';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function Introduction() {
  const navigation = useNavigation();
  const theme = useContext(themeContext);
  return (
    <SafeAreaView style={[style.area, {backgroundColor: theme.bg}]}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}>
        <View style={{width: width}}>
          <ImageBackground
            source={theme.bgs}
            resizeMode="stretch"
            style={{flex: 1}}>
            <View style={{flex: 1.5, justifyContent: 'center'}}>
              <Image
                source={require('../../assets/image/1.png')}
                style={{
                  width: width - 40,
                  height: height / 3,
                  resizeMode: 'stretch',
                  alignSelf: 'center',
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  height: 8,
                  width: 8,
                  borderRadius: 4,
                  backgroundColor: Colors.primary,
                }}></View>
              <View
                style={{
                  height: 8,
                  width: 8,
                  borderRadius: 4,
                  backgroundColor: Colors.secondary,
                  marginHorizontal: 8,
                }}></View>
              <View
                style={{
                  height: 8,
                  width: 8,
                  borderRadius: 4,
                  backgroundColor: Colors.secondary,
                }}></View>
            </View>
            <View style={{paddingHorizontal: 20, flex: 1, marginTop: 30}}>
              <Text
                style={[style.title, {color: theme.txt, textAlign: 'center'}]}>
                Brand new curriculum
              </Text>
              <Text
                style={[
                  style.r14,
                  {color: theme.txt, marginTop: 10, textAlign: 'center'},
                ]}>
                This is the first online education platform designed by the
                world s top professors.
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                style={[
                  style.btn,
                  {
                    paddingTop: 5,
                    width: width / 2.5,
                    alignSelf: 'center',
                    marginVertical: 20,
                    marginTop: 40,
                  },
                ]}>
                <Text style={[style.btntxt, {color: Colors.secondary}]}>
                  Get Started
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>

        <View style={{width: width}}>
          <ImageBackground
            source={theme.bgs}
            resizeMode="stretch"
            style={{flex: 1}}>
            <View style={{flex: 1.5, justifyContent: 'center'}}>
              <Image
                source={require('../../assets/image/2.png')}
                style={{
                  width: width - 40,
                  height: height / 3,
                  resizeMode: 'stretch',
                  alignSelf: 'center',
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  height: 8,
                  width: 8,
                  borderRadius: 4,
                  backgroundColor: Colors.secondary,
                }}></View>
              <View
                style={{
                  height: 8,
                  width: 8,
                  borderRadius: 4,
                  backgroundColor: Colors.primary,
                  marginHorizontal: 8,
                }}></View>
              <View
                style={{
                  height: 8,
                  width: 8,
                  borderRadius: 4,
                  backgroundColor: Colors.secondary,
                }}></View>
            </View>
            <View style={{paddingHorizontal: 20, flex: 1, marginTop: 30}}>
              <Text
                style={[style.title, {color: theme.txt, textAlign: 'center'}]}>
                Bring a fun atmosphere
              </Text>
              <Text
                style={[
                  style.r14,
                  {color: theme.txt, marginTop: 10, textAlign: 'center'},
                ]}>
                This is the first online education platform designed by the
                world s top professors.
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                style={[
                  style.btn,
                  {
                    paddingTop: 5,
                    width: width / 2.5,
                    alignSelf: 'center',
                    marginVertical: 20,
                    marginTop: 40,
                  },
                ]}>
                <Text style={[style.btntxt, {color: Colors.secondary}]}>
                  Get Started
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>

        <View style={{width: width}}>
          <ImageBackground
            source={theme.bgs}
            resizeMode="stretch"
            style={{flex: 1}}>
            <View style={{flex: 1.5, justifyContent: 'center'}}>
              <Image
                source={require('../../assets/image/3.png')}
                style={{
                  width: width,
                  height: height / 3.5,
                  resizeMode: 'stretch',
                  alignSelf: 'center',
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  height: 8,
                  width: 8,
                  borderRadius: 4,
                  backgroundColor: Colors.secondary,
                }}></View>
              <View
                style={{
                  height: 8,
                  width: 8,
                  borderRadius: 4,
                  backgroundColor: Colors.secondary,
                  marginHorizontal: 8,
                }}></View>
              <View
                style={{
                  height: 8,
                  width: 8,
                  borderRadius: 4,
                  backgroundColor: Colors.primary,
                }}></View>
            </View>
            <View style={{paddingHorizontal: 20, flex: 1, marginTop: 30}}>
              <Text
                style={[style.title, {color: theme.txt, textAlign: 'center'}]}>
                Brand new curriculum
              </Text>
              <Text
                style={[
                  style.r14,
                  {color: theme.txt, marginTop: 10, textAlign: 'center'},
                ]}>
                This is the first online education platform designed by the
                world s top professors.
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Login')}
                style={[
                  style.btn,
                  {
                    paddingTop: 5,
                    width: width / 2.5,
                    alignSelf: 'center',
                    marginVertical: 20,
                    marginTop: 40,
                  },
                ]}>
                <Text style={[style.btntxt, {color: Colors.secondary}]}>
                  Get Started
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
