import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
  TouchableOpacity,
  TouchableNativeFeedback,
  Linking,
  FlatList,
  PermissionsAndroid,
  StatusBar,
  Alert,
} from 'react-native';
import { colors } from '../../utils/colors';
import { fonts } from '../../utils/fonts';
import { storeData, getData } from '../../utils/localStorage';
import { Icon } from 'react-native-elements';
import MyCarouser from '../../components/MyCarouser';
import MyTerbaik from '../../components/MyTerbaik';
import axios from 'axios';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import 'intl';
import 'intl/locale-data/jsonp/en';
import MyTerbaik2 from '../../components/MyTerbaik2';
import MyTerbaik3 from '../../components/MyTerbaik3';
import MyDashboard from '../../components/MyDashboard';


export default function Home({ navigation }) {
  const [user, setUser] = useState([]);
  const [data, setData] = useState([]);
  const [token, setToken] = useState('');
  const [tipe, setTipe] = useState('');
  const [company, setCompany] = useState({});

  const [absen, setAbsen] = useState(false);





  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Add', item)}
      style={{
        padding: 10,
        margin: 10,
        backgroundColor: 'white',
        elevation: 1,
      }}>
      <View style={{ flexDirection: 'row', padding: 10 }}>
        <Text
          style={{
            flex: 1,
            fontSize: windowWidth / 30,
            color: colors.primary,
            fontFamily: fonts.secondary[600],
          }}>
          {item.nama_asset}
        </Text>
        <Text
          style={{
            fontSize: windowWidth / 30,
            color: colors.black,
            fontFamily: fonts.secondary[600],
          }}>
          {item.harga_asset}
        </Text>
      </View>

      <View
        style={{

          padding: 10,
          borderTopWidth: 1,
          borderTopColor: colors.tertiary,
        }}>

        <Image source={{ uri: item.image }} style={{
          width: '100%', height: 100, resizeMode: 'contain'
        }} />
      </View>

    </TouchableOpacity>
  );





  useEffect(() => {

    const unsubscribe = messaging().onMessage(async remoteMessage => {

      const json = JSON.stringify(remoteMessage);
      const obj = JSON.parse(json);

      // navigation.navigate('ListDetail', {
      //   kode: obj.notification.title.toString().substring(0, 15)
      // })

      PushNotification.localNotification({
        /* Android Only Properties */
        channelId: 'sikbinpers', // (required) channelId, if the channel doesn't exist, notification will not trigger.
        title: obj.notification.title, // (optional)
        message: obj.notification.body, // (required)
      });
    });





    getData('company').then(res => {
      setCompany(res);
    });

    getData('tipe').then(res => {
      setTipe(res);
    });

    axios
      .post('https://sikbinpers.zavalabs.com/api/absen_asset.php')
      .then(x => {
        console.error('rate', x.data);
        setData(x.data);
      });

    getData('user').then(users => {
      console.log(users);
      setUser(users);


      getData('token').then(res => {
        console.log('data token,', res);
        setToken(res.token);

        axios
          .post('https://sikbinpers.zavalabs.com/api/update_token.php', {
            id: users.id,
            token: res.token,
          })
          .then(res => {
            console.error('update token', res.data);
          });
      });


    });
    return unsubscribe;
  }, []);

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const ratio = 192 / 108;
  const _renderItem = ({ item, index }) => {
    return (
      <Image
        resizeMode="contain"
        source={{ uri: item.image }}
        style={{
          width: windowWidth,
          height: Math.round((windowWidth * 9) / 16),
        }}
      />
    );
  };

  const DataKategori = ({
    icon,
    nama,
    nama2,
    onPress,
    warna = colors.primary,
  }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: warna,
          padding: 5,
          borderRadius: 10,
          width: windowWidth / 2.5,
          height: windowHeight / 5,
          elevation: 5,
          justifyContent: 'center',
        }}>
        <View>
          <Icon
            type="ionicon"
            name={icon}
            color={colors.white}
            size={windowWidth / 5}
          />
        </View>
        <View>
          <Text
            style={{
              fontFamily: fonts.secondary[600],
              color: colors.white,
              fontSize: windowWidth / 30,
              textAlign: 'center',
              // marginHorizontal: 10,
            }}>
            {nama}
          </Text>
          <Text
            style={{
              fontFamily: fonts.secondary[600],
              color: colors.white,
              fontSize: windowWidth / 35,
              textAlign: 'center',
              // marginHorizontal: 10,
            }}>
            {nama2}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ImageBackground
      // source={require('../../assets/back.jpeg')}
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}>


      <ScrollView>




        <View style={{ padding: 10, marginBottom: 10 }}>
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: windowHeight / 35,
            color: colors.black
          }}>Subditbinminpers PNS Ditajenad</Text>
          <Text
            style={{
              fontSize: windowWidth / 20,
              color: colors.primary,
              fontFamily: fonts.secondary[600],
            }}>
            Selamat datang, <Text
              style={{
                fontSize: windowWidth / 20,
                color: colors.black,
                fontFamily: fonts.secondary[600],
              }}>
              {user.nama_lengkap}
            </Text>
          </Text>

          <Text
            style={{
              fontSize: windowWidth / 30,
              color: colors.black,
              fontFamily: fonts.secondary[600],
            }}>
            {user.pangkat} - {user.kesatuan}
          </Text>
          <Text
            style={{
              fontSize: windowWidth / 30,
              color: colors.black,
              fontFamily: fonts.secondary[600],
            }}>
            {user.telepon}
          </Text>

        </View>


        <Image source={require('../../assets/atas.jpg')} style={{
          width: '100%',
          height: 50,
          marginBottom: 50,
          alignSelf: 'center'
        }} />

        <View style={{
          justifyContent: 'center'
        }}>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <DataKategori
              warna={colors.primary}
              onPress={() => navigation.navigate('Jadwal')}
              icon="book-outline"
              nama="PERSYARATAN"
              nama2="HANMIN"
            />
            <DataKategori
              warna={colors.primary}
              onPress={() => navigation.navigate('Jenis')}
              icon="move-outline"
              nama="ALUR PROSES"
              nama2="Menu alur proses"
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 20,
            }}>
            <DataKategori
              warna={colors.primary}
              onPress={() => navigation.navigate('Kategori')}
              icon="help-circle-outline"
              nama="FAQ"
              nama2="Menu tanya jawab"
            />
            <DataKategori
              warna={colors.primary}
              onPress={() => navigation.navigate('ChatList')}
              icon="chatbubble-ellipses-outline"
              nama="CHAT"
              nama2="Menu chatting"
            />
          </View>
        </View>

      </ScrollView>
    </ImageBackground>
  );
}
