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

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function ASub() {
  const navigation = useNavigation();
  const theme = useContext(themeContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Bu useEffect, bileşen ilk render edildiğinde çalışır
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://demo.edulim.com.tr/api/search-course?title=${searchQuery}`,
        );
        const data = await response.json();
        if (Array.isArray(data)) {
          setSearchResults(data);

          // Gelen datanın id'lerini konsola bas
          data.forEach(result => {
            console.log('ID:', result.id);
          });
        } else {
          setSearchResults([]);
          if (data.total === 0) {
            console.log('Sonuç bulunamadı.');
          }
        }
      } catch (error) {
        console.error('Arama sonuçları alınırken hata oluştu:', error);
      }
    };
    fetchData();
  }, [searchQuery]);

  const handleSearch = async () => {
    console.log('Search button clicked');

    try {
      const response = await fetch(
        `https://demo.edulim.com.tr/api/search-course?title=${searchQuery}`,
      );
      const data = await response.json();

      // Gelen veriyi konsola bas
      console.log('Search Results:', data);

      // Veri bir dizi mi kontrol et
      if (Array.isArray(data.data)) {
        // Arama sonuçları ile state'i güncelle
        setSearchResults(data.data);

        // Gelen datanın id'lerini konsola bas
        data.data.forEach(result => {
          console.log('ID:', result.id);
        });
      } else {
        // Veri bir dizi değilse veya undefined/null ise, searchResults'ı boş bir dizi yap
        setSearchResults([]);
      }
    } catch (error) {
      console.error('Arama sonuçları alınırken hata oluştu:', error);
    }
  };

  return (
    <SafeAreaView style={[style.area, {backgroundColor: theme.bg}]}>
      <View style={[style.main, {marginTop: 20}]}>
        <AppBar
          color={theme.bg}
          elevation={0}
          leading={
            <TouchableOpacity onPress={() => navigation.navigate('MyTabs')}>
              <Icon style={{}} name="arrow-back" size={24} color={theme.txt} />
            </TouchableOpacity>
          }
          trailing={
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
              onPress={handleSearch}>
              <View
                style={{
                  width: width * 0.7,
                  height: 40,
                  right: 25,
                }}>
                <TextInput
                  placeholder="Keşfet..."
                  placeholderTextColor={theme.disable}
                  style={[
                    style.apptitle,
                    {
                      color: theme.txt,
                      flex: 1,
                      borderWidth: 1,
                      borderColor: '#ccc',
                      borderRadius: 10,
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                      marginRight: 10,
                      fontSize: 18,
                    },
                  ]}
                  value={searchQuery}
                  onChangeText={text => setSearchQuery(text)}
                  onSubmitEditing={handleSearch}
                />
              </View>
              <Icon
                style={{right: 20}}
                name="search"
                size={24}
                color={theme.txt}
                onPress={handleSearch}
              />
            </TouchableOpacity>
          }
        />
        <Text style={[style.s18, {color: theme.txt}]}>Kategoriler</Text>
        <Text style={[style.m14, {color: theme.disable, marginTop: 2}]}>
          İstediğin kategoriyi seç ve öğrenmeye başla.
        </Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{marginTop: 10}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Physics')}
              style={{alignItems: 'center'}}>
              <Image
                source={require('../../assets/image/canli.png')}
                resizeMode="stretch"
                style={{height: 54, width: 54}}></Image>
              <Text style={[style.s12, {color: theme.txt, marginTop: 5}]}>
                Canlı Ders
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Physics')}
              style={{alignItems: 'center'}}>
              <Image
                source={require('../../assets/image/sosyal.png')}
                resizeMode="stretch"
                style={{height: 54, width: 54}}></Image>
              <Text style={[style.s12, {color: theme.txt, marginTop: 5}]}>
                Sosyal Medya
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Physics')}
              style={{alignItems: 'center'}}>
              <Image
                source={require('../../assets/image/sosyal.png')}
                resizeMode="stretch"
                style={{height: 54, width: 54}}></Image>
              <Text style={[style.s12, {color: theme.txt, marginTop: 5}]}>
                E-Ticaret{'\n'}Yönetimi
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Physics')}
              style={{alignItems: 'center'}}>
              <Image
                source={require('../../assets/image/sosyal.png')}
                resizeMode="stretch"
                style={{height: 54, width: 54}}></Image>
              <Text style={[style.s12, {color: theme.txt, marginTop: 5}]}>
                Dijital Pazarlama
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 25,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Physics')}
              style={{alignItems: 'center'}}>
              <Image
                source={require('../../assets/image/a8.png')}
                resizeMode="stretch"
                style={{height: 54, width: 54}}></Image>
              <Text style={[style.s12, {color: theme.txt, marginTop: 5}]}>
                Kariyer Gelişim
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Physics')}
              style={{alignItems: 'center'}}>
              <Image
                source={require('../../assets/image/a9.png')}
                resizeMode="stretch"
                style={{height: 54, width: 54}}></Image>
              <Text style={[style.s12, {color: theme.txt, marginTop: 5}]}>
                Yazılım
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Physics')}
              style={{alignItems: 'center'}}>
              <Image
                source={require('../../assets/image/a10.png')}
                resizeMode="stretch"
                style={{height: 54, width: 54}}></Image>
              <Text style={[style.s12, {color: theme.txt, marginTop: 5}]}>
                Kişisel Gelişim
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Physics')}
              style={{alignItems: 'center'}}>
              <Image
                source={require('../../assets/image/a10.png')}
                resizeMode="stretch"
                style={{height: 54, width: 54}}></Image>
              <Text style={[style.s12, {color: theme.txt, marginTop: 5}]}>
                Pazarlama
              </Text>
            </TouchableOpacity>
            <View style={{alignItems: 'center', height: 54, width: 54}}></View>
          </View>
          {searchResults.map(result => (
            <View key={result.id}>
              <Text style={{color: theme.txt}}>{result.title.tr}</Text>
              {/* Diğer detayları ekleyin gerekirse */}
              <Text style={{color: theme.txt}}>ID: {result.id}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
