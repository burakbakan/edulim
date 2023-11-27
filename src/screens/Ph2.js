import HTMLView from 'react-native-render-html';
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
import React, {useState, useContext, useEffect} from 'react';
import {Colors} from '../theme/color';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import {useNavigation} from '@react-navigation/native';
import {Avatar} from 'react-native-paper';
import {AppBar} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function Ph2() {
  const [courseData, setCourseData] = useState(null);
  const navigation = useNavigation();
  const theme = useContext(themeContext);

  useEffect(() => {
    // Fetch data when the component mounts
    fetch('https://smup.com.tr/api/get-all-courses')
      .then(response => response.json())
      .then(data => {
        // Set the fetched data in the state
        setCourseData(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <SafeAreaView style={[style.area, {backgroundColor: theme.bg}]}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <ImageBackground
        source={require('../../assets/image/s17.png')}
        resizeMode="stretch"
        style={{flex: 1}}>
        <View style={{flex: 1}}>
          <AppBar
            elevation={0}
            style={{
              backgroundColor: 'transparent',
              marginHorizontal: 20,
              marginTop: 25,
            }}
            leading={
              <TouchableOpacity onPress={() => navigation.navigate('Ph1')}>
                <Icon name="arrow-back" color={Colors.secondary} size={24} />
              </TouchableOpacity>
            }
            trailing={
              <Icon
                name="ellipsis-vertical"
                color={Colors.secondary}
                size={24}
              />
            }
          />
        </View>
        <View
          style={{
            flex: 0.8,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: theme.bg,
            paddingHorizontal: 20,
          }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{marginTop: 10}}>
            <Text style={[style.s18, {color: theme.txt}]}>
              Forces and Kinematics
            </Text>
            <Text style={[style.m14, {color: theme.disable}]}>12 Pages</Text>
            <HTMLView
              source={{html: courseData?.data[1].about.tr || 'Yükleniyor...'}}
              style={[style.r14, {color: theme.txt1, marginTop: 10}]}
            />
          </ScrollView>
          <TouchableOpacity
            onPress={() => navigation.navigate('Ph3')}
            style={[style.btn, {paddingTop: 5, marginVertical: 20}]}>
            <Text style={[style.btntxt, {color: Colors.secondary}]}>Learn</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
