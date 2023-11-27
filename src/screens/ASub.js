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
  FlatList,
} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import style from '../theme/style';
import {Colors} from '../theme/color';
import {AppBar} from '@react-native-material/core';
import themeContext from '../theme/themeContex';
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function ASub() {
  const navigation = useNavigation();
  const theme = useContext(themeContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [categories, setCategories] = useState([]);
  const [numColumns, setNumColumns] = useState(4);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          'https://demo.edulim.com.tr/api/categories',
        );
        const data = await response.json();
        if (Array.isArray(data.data)) {
          setCategories(data.data);
        } else {
          console.error('Data.data is not an array:', data);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://demo.edulim.com.tr/api/search-course?title=${searchQuery}`,
        );
        const data = await response.json();
        if (Array.isArray(data)) {
          setSearchResults(data);
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

      console.log('Search Results:', data);

      if (Array.isArray(data.data)) {
        setSearchResults(data.data);
      } else {
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
              <Icon name="arrow-back" size={24} color={theme.txt} />
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
        {/* <Text style={[style.s18, {color: theme.txt}]}>Kategoriler</Text>
        <Text style={[style.m14, {color: theme.disable, marginTop: 2}]}>
          İstediğin kategoriyi seç ve öğrenmeye başla.
        </Text>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FlatList
            scrollEnabled={false}
            key={numColumns}
            numColumns={numColumns}
            style={{marginTop: 20}}
            showsHorizontalScrollIndicator={false}
            data={categories}
            renderItem={({item}) => (
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  borderWidth: 1,
                  borderRadius: 10,
                  width: width / 6,
                  height: height / 6,
                }}
                onPress={() =>
                  navigation.navigate('CategoryDetail', {categoryId: item.id})
                }>
                <Image
                  source={{uri: `https://demo.edulim.com.tr/${item.image}`}}
                  resizeMode="stretch"
                  style={{height: 40, width: 40}}
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
            )}
            keyExtractor={item => item.id.toString()}
          />
        </View> */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 25,
          }}></View>
        {searchResults.map(result => (
          <View key={result.id}>
            <Text style={{color: theme.txt}}>{result.title.tr}</Text>
            <Text style={{color: theme.txt}}>ID: {result.id}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}
