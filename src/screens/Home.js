import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TextInput,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  Image,
  ScrollView,
  Platform,
  FlatList,
} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import style from '../theme/style';
import {Colors} from '../theme/color';
import {Avatar} from 'react-native-paper';
import {AppBar, HStack} from '@react-native-material/core';
import themeContext from '../theme/themeContex';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import SystemNavigationBar from 'react-native-system-navigation-bar';

// SystemNavigationBar.setBarMode('light');
// SystemNavigationBar.setBarMode('dark', 'navigation');
SystemNavigationBar.setNavigationColor('#FFFFFF', 'light');
SystemNavigationBar.setNavigationColor('#000000', 'dark', 'navigation');
// SystemNavigationBar.setBarMode('light', 'navigation');
// SystemNavigationBar.fullScreen(false);

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function Home() {
  const navigation = useNavigation();
  const theme = useContext(themeContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from the API
    fetch('https://demo.edulim.com.tr/api/categories')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data.data)) {
          // If data.data is an array, setCategories and log values
          setCategories(data.data);

          // Log the name and image values to the console
          data.data.forEach(category => {
            console.log('Category Name:', category.name);
            console.log(
              'Category Image:',
              `https://demo.edulim.com.tr/${category.image}`,
            );
          });
        } else {
          console.error('Data.data is not an array:', data);
        }
      })
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={{
        alignItems: 'center',
        marginHorizontal: 10,
      }}>
      <Image
        source={{uri: `https://demo.edulim.com.tr/${item.image}`}}
        resizeMode="stretch"
        style={{height: 54, width: 54}}
      />
      <Text
        style={[
          style.s12,
          {color: theme.txt, marginTop: 5, textAlign: 'center'},
        ]}>
        {item.name && typeof item.name === 'object' && item.name.tr
          ? item.name.tr.split(' ').map((word, index, array) => (
              <Text key={index}>
                {word}
                {index < array.length - 1 ? '\n' : ''}
              </Text>
            ))
          : 'Unknown Category'}
      </Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={[style.area, {backgroundColor: theme.bg}]}>
      <View
        style={[
          style.main,
          {
            marginTop: 20,
          },
        ]}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 15,
          }}
          onPress={() => navigation.navigate('Account1')}>
          <Image
            source={require('../../assets/image/a1.png')}
            resizeMode="stretch"
            style={{height: 38, width: 38}}
          />
          <Text
            style={[
              style.title,
              {color: theme.txt, fontSize: 25, marginLeft: 10},
            ]}>
            Merhaba,{' '}
            <Text style={{fontWeight: 'bold', color: theme.txt}}>Aslıhan</Text>
          </Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            style={{flex: 1, height: 35}}
            onPress={() => navigation.navigate('ASub')}>
            <Text
              // placeholder="Keşfet..."
              // placeholderTextColor={theme.disable}
              style={[
                style.apptitle,
                {
                  color: theme.disable,
                  flex: 1,
                  borderWidth: 1,
                  borderColor: '#ccc',
                  borderRadius: 10,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  marginRight: 10,
                  fontSize: 18,
                },
              ]}>
              Keşfet...
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ASub')}>
            <Icon name="search" size={24} color={theme.txt}></Icon>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <Icon
              name="notifications-outline"
              size={24}
              color={theme.txt}
              style={{marginHorizontal: 10}}></Icon>
          </TouchableOpacity>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{marginTop: 10}}>
          <View style={{marginTop: 130}}>
            <View
              style={{
                height: 50,
                borderRadius: 20,
                backgroundColor: '#DC95FB80',
                marginHorizontal: 40,
              }}></View>
            <View
              style={{
                height: 50,
                borderRadius: 20,
                backgroundColor: '#DA92FC',
                marginHorizontal: 20,
                marginTop: -65,
              }}></View>
            <View style={{flexDirection: 'row', marginTop: -160}}>
              <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 0, y: 1}}
                colors={['#8E96FF', '#A06AF9']}
                style={{
                  height: 137,
                  borderRadius: 24,
                  flexDirection: 'row',
                  marginTop: 10,
                  flex: 1,
                }}>
                <View
                  style={{
                    flex: 1,
                    marginTop: 10,
                    marginLeft: 12,
                    justifyContent: 'space-between',
                  }}>
                  <Text style={[style.subtitle, {color: Colors.secondary}]}>
                    Chemistry final{'\n'}exams
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginBottom: 20,
                    }}>
                    <Icon
                      name="notifications-outline"
                      size={24}
                      color={Colors.secondary}></Icon>
                    <Text
                      style={[
                        style.r14,
                        {color: Colors.secondary, marginLeft: 10},
                      ]}>
                      45 minutes
                    </Text>
                  </View>
                </View>
              </LinearGradient>
              <View style={{position: 'absolute', right: 10, top: -40}}>
                <Image
                  source={require('../../assets/image/z.png')}
                  style={{height: 170, width: 150, resizeMode: 'stretch'}}
                />
              </View>
            </View>
          </View>

          {/* <Image source={require('../../assets/image/a2.png')} resizeMode='stretch' style={{ height: height / 3.6, width: width - 30, marginTop: -55, alignSelf: 'center' }}></Image> */}

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 50,
            }}>
            <Text style={[style.s18, {color: theme.txt}]}>Katagoriler</Text>
            <TouchableOpacity onPress={() => navigation.navigate('ASub')}>
              <Text style={[style.m14, {color: Colors.primary}]}>
                Tümünü Gör
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={[style.m14, {color: theme.disable, marginTop: 2}]}>
            En İyi Online Kurslar
          </Text>

          {/* <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 15,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Physics')}
              style={{alignItems: 'center'}}>
              <Image
                source={require('../../assets/image/a3.png')}
                resizeMode="stretch"
                style={{height: 54, width: 54}}></Image>
              <Text
                style={[
                  style.s12,
                  {color: theme.txt, marginTop: 5, textAlign: 'center'},
                ]}>
                Canlı{'\n'}Dersler
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Physics')}
              style={{alignItems: 'center'}}>
              <Image
                source={require('../../assets/image/a4.png')}
                resizeMode="stretch"
                style={{height: 54, width: 54}}></Image>
              <Text
                style={[
                  style.s12,
                  {color: theme.txt, marginTop: 5, textAlign: 'center'},
                ]}>
                Sosyal{'\n'}Medya
              </Text>
            </TouchableOpacity>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../../assets/image/a5.png')}
                resizeMode="stretch"
                style={{height: 54, width: 54}}></Image>
              <Text style={[style.s12, {color: theme.txt, marginTop: 5}]}>
                E-Ticaret{'\n'}Yönetimi
              </Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../../assets/image/a6.png')}
                resizeMode="stretch"
                style={{height: 54, width: 54}}></Image>
              <Text
                style={[
                  style.s12,
                  {color: theme.txt, marginTop: 5, textAlign: 'center'},
                ]}>
                Dijital{'\n'}Pazarlama
              </Text>
            </View>
          </View> */}
          <FlatList
            style={{marginTop: 20}}
            showsHorizontalScrollIndicator={false}
            data={categories}
            renderItem={item => renderItem(item)}
            keyExtractor={item => item.id.toString()}
            horizontal
          />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <Text style={[style.s18, {color: theme.txt}]}>Video Kurslar</Text>
            <TouchableOpacity onPress={() => navigation.navigate('AVideo')}>
              <Text style={[style.m14, {color: Colors.primary}]}>
                Tümünü Gör
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 20,
              marginBottom: 80,
            }}>
            <Image
              source={require('../../assets/image/a7.png')}
              resizeMode="stretch"
              style={{height: height / 9, width: width / 3.3}}></Image>
            <View style={{flex: 1, marginLeft: 12}}>
              <Text style={[style.s12, {color: theme.txt}]}>⭐ 4.6</Text>
              <Text style={[style.m16, {color: theme.txt, lineHeight: 24}]}>
                Yapay Zeka ve Makine Öğrenmesi Kursu
              </Text>
              <Text style={[style.r12, {color: theme.disable, lineHeight: 20}]}>
                By Nozomi Sasaki
              </Text>
              <View
                style={{
                  backgroundColor: Colors.red,
                  width: width / 4.5,
                  borderRadius: 20,
                  alignItems: 'center',
                  paddingVertical: 2,
                }}>
                <Text style={[style.r12, {color: Colors.secondary}]}>
                  Canlı
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
