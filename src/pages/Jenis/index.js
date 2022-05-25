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
                    borderColor: colors.secondary,
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
                        color={colors.secondary}
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
                            color: colors.primary,
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
                    onPress={() => navigation.navigate('MenuGambar', {
                        id: 0
                    })}
                    icon="star-outline"
                    nama="KENAIKAN PANGKAT KE GOLONGAN III/a – III/d"
                />
                <DataKategori
                    warna={colors.primary}
                    onPress={() => navigation.navigate('MenuGambar', {
                        id: 1
                    })}
                    icon="medal-outline"
                    nama="KENAIKAN PANGKAT KE GOLONGAN IV/a KE ATAS"
                />
                <DataKategori
                    warna={colors.primary}
                    onPress={() => navigation.navigate('MenuGambar', {
                        id: 2
                    })}
                    icon="repeat-outline"
                    nama="PENGANGKATAN DALAM JABATAN STRUKTURAL (GOLJAB IX – VII)"
                />
                <DataKategori
                    warna={colors.primary}
                    onPress={() => navigation.navigate('MenuGambar', {
                        id: 3
                    })}
                    icon="receipt-outline"
                    nama="PENGANGKATAN DALAM JABATAN STRUKTURAL (GOLJAB VI – V)"
                />

                <DataKategori
                    warna={colors.primary}
                    onPress={() => navigation.navigate('MenuGambar', {
                        id: 4
                    })}
                    icon="swap-horizontal-outline"
                    nama="PENGANGKATAN DALAM JABATAN FUNGSIONAL"
                />
                <DataKategori
                    warna={colors.primary}
                    onPress={() => navigation.navigate('MenuGambar', {
                        id: 5
                    })}
                    icon="ribbon-outline"
                    nama="PINDAH ANTAR KOTAMA/BALAKPUS"
                />
                <DataKategori
                    warna={colors.primary}
                    onPress={() => navigation.navigate('MenuGambar', {
                        id: 6
                    })}
                    icon="add-circle-outline"
                    nama="PINDAH ANTAR ANGKATAN"
                />
                <DataKategori
                    warna={colors.primary}
                    onPress={() => navigation.navigate('MenuGambar', {
                        id: 7
                    })}
                    icon="exit-outline"
                    nama="PINDAH ANTAR KEMENTERIAN/LEMBAGA"
                />


                <DataKategori
                    warna={colors.primary}
                    onPress={() => navigation.navigate('MenuGambar', {
                        id: 8
                    })}
                    icon="ribbon-outline"
                    nama="PEMBERIAN TANDA KEHORMATAN SATYALANCANA KARYA SATYA"
                />


                <DataKategori
                    warna={colors.primary}
                    onPress={() => navigation.navigate('MenuGambar', {
                        id: 9
                    })}
                    icon="card-outline"
                    nama="TAMBAH GELAR PNS AD"
                />

                <DataKategori
                    warna={colors.primary}
                    onPress={() => navigation.navigate('MenuGambar', {
                        id: 10
                    })}
                    icon="shuffle-outline"
                    nama="HUKUMAN DISIPLIN PERSETUJUAN KEMHAN (KUMPLIN SEDANG)"
                />

                <DataKategori
                    warna={colors.primary}
                    onPress={() => navigation.navigate('MenuGambar', {
                        id: 11
                    })}
                    icon="archive-outline"
                    nama="HUKUMAN DISIPLIN WEWENANG KEMHAN (KUMPLIN BERAT)"
                />


                <DataKategori
                    warna={colors.primary}
                    onPress={() => navigation.navigate('MenuGambar', {
                        id: 12
                    })}
                    icon="hand-right-outline"
                    nama="PEMBERHENTIAN"
                />


            </ScrollView>



        </SafeAreaView >
    )
}
