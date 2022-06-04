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
import { fonts, windowHeight, windowWidth } from '../../utils/fonts';
import { storeData, getData } from '../../utils/localStorage';
import { Icon } from 'react-native-elements';

export default function ({ navigation }) {

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
          borderWidth: 1,
          borderColor: colors.primary,
          padding: 5,
          // borderRadius: 10,
          height: 80,
          flexDirection: 'row',
          marginBottom: 10,
        }}>
        <View style={{
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Icon
            type="ionicon"
            name={icon}
            color={colors.primary}
            size={windowWidth / 10}
          />
        </View>
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'flex-start'
        }}>

          <Text
            style={{
              fontFamily: fonts.secondary[600],
              color: colors.black,
              fontSize: windowWidth / 30,
              textAlign: 'left',
              // marginHorizontal: 10,
            }}>
            {nama}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };



  return (
    <SafeAreaView style={{
      padding: 10,
      backgroundColor: colors.white,
      flex: 1,
    }}>

      <ScrollView showsVerticalScrollIndicator={false}>
        <DataKategori
          warna={colors.primary}
          onPress={() => navigation.navigate('MenuKenaikanPangkat')}
          icon="star-outline"
          nama="Kenaikan Pangkat"
        />
        <DataKategori
          warna={colors.primary}
          onPress={() => navigation.navigate('MenuJabatan')}
          icon="medal-outline"
          nama="Jabatan"
        />
        <DataKategori
          warna={colors.primary}
          onPress={() => navigation.navigate('MenuPemindahan')}
          icon="repeat-outline"
          nama="Pemindahan"
        />
        <DataKategori
          warna={colors.primary}
          onPress={() => navigation.navigate('MenuUjian')}
          icon="receipt-outline"
          nama="Ujian"
        />

        <DataKategori
          warna={colors.primary}
          onPress={() => navigation.navigate('MenuDiklat')}
          icon="swap-horizontal-outline"
          nama="Diklat Alih Golongan"
        />
        <DataKategori
          warna={colors.primary}
          onPress={() => navigation.navigate('MenuTanda')}
          icon="ribbon-outline"
          nama="Tanda Penghargaan Satya Lencana Karya Satya"
        />
        <DataKategori
          warna={colors.primary}
          onPress={() => navigation.navigate('MenuGelar')}
          icon="add-circle-outline"
          nama="Tambah Gelar"
        />
        <DataKategori
          warna={colors.primary}
          onPress={() => navigation.navigate('MenuCuti')}
          icon="exit-outline"
          nama="Cuti di Luar Tanggungan Negara"
        />


        <DataKategori
          warna={colors.primary}
          onPress={() => navigation.navigate('MenuKartu')}
          icon="card-outline"
          nama="Kartu Pegawai"
        />


        {/* <DataKategori
          warna={colors.primary}
          onPress={() => navigation.navigate('MenuKaris')}
          icon="male-female-outline"
          nama="Karis/Karsu"
        /> */}

        <DataKategori
          warna={colors.primary}
          onPress={() => navigation.navigate('MenuGanti')}
          icon="shuffle-outline"
          nama="Ganti"
        />

        <DataKategori
          warna={colors.primary}
          onPress={() => navigation.navigate('MenuHukuman')}
          icon="archive-outline"
          nama="Hukuman Disiplin"
        />

        <DataKategori
          warna={colors.primary}
          onPress={() => navigation.navigate('MenuPemberitahuan')}
          icon="hand-right-outline"
          nama="Pemberhentian"
        />

        <DataKategori
          warna={colors.primary}
          onPress={() => navigation.navigate('MenuDosir')}
          icon="library-outline"
          nama="Dosir"
        />


      </ScrollView>



    </SafeAreaView >
  )
}
