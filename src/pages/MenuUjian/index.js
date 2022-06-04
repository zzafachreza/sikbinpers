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


export default function () {

    const SubMenu = ({ a, b }) => {
        return (
            <View style={{
                backgroundColor: colors.secondary,
                flexDirection: 'row',
                padding: 10,
                marginVertical: 10,
            }}>
                <Text style={{
                    color: colors.white,
                    fontFamily: fonts.secondary[600],
                    fontSize: windowWidth / 20,
                }}>{a}</Text>
                <Text style={{
                    color: colors.white,
                    fontFamily: fonts.secondary[600],
                    fontSize: windowWidth / 20,
                }}>{b}</Text>
            </View>
        )
    }


    const SubMenu2 = ({ a, b }) => {
        return (
            <View style={{
                marginTop: 10,
                flexDirection: 'row',
                left: 15,
            }}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{
                        backgroundColor: colors.primary,
                        color: colors.primary,
                        padding: 5,
                        borderRadius: 5,
                        height: 10,
                        width: 10,
                        fontFamily: fonts.secondary[600],
                        fontSize: windowWidth / 25,
                    }}></Text>
                </View>
                <Text style={{
                    left: 10,
                    color: colors.primary,
                    fontFamily: fonts.secondary[600],
                    fontSize: windowWidth / 25,
                }}>{b}</Text>
            </View>
        )
    }

    const SubMenuIsi = ({ a, b }) => {
        return (
            <View style={{
                flexDirection: 'row',
                left: 20,
                marginTop: 10,
            }}>
                <Text style={{
                    color: colors.black,
                    fontFamily: fonts.secondary[400],

                    fontSize: windowWidth / 25,
                }}>{a}</Text>
                <Text style={{
                    left: 5,
                    color: colors.black,
                    fontFamily: fonts.secondary[400],
                    fontSize: windowWidth / 25,
                    textAlign: 'justify',
                    maxWidth: windowWidth - 50,
                }}>{b}</Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white,
            padding: 10,
        }}>

            <ScrollView showsVerticalScrollIndicator={false}>

                <SubMenu a='a. ' b='Ujian Dinas' />

                <SubMenuIsi a='- ' b='Surat usul dari PDW' />
                <SubMenuIsi a='- ' b='Daftar Nominatif usul calon peserta Ujian Dinas Tk.I' />
                <SubMenuIsi a='- ' b='Fotokopi Kep CPNS dan Kep KP terakhir' />
                <SubMenuIsi a='- ' b='Fotokopi Ijazah Dikum' />
                <SubMenuIsi a='- ' b='Fotokopi Ijazah/Tanda lulus Diklat teknis/Kursus' />
                <SubMenuIsi a='- ' b='PPK 2 Tahun Terakhir' />

                <SubMenu a='a. ' b='Ujian Penyesuaian Kenaikan Pangkat' />


                <SubMenu2 b='Ujian Penyesuaian Kenaikan Pangkat Tk. Sarjana (S1) atau D-IV' />
                <SubMenuIsi a='- ' b='Berijazah S1 atau D-IV' />
                <SubMenuIsi a='- ' b='PPK baik dan dinilai potensial untuk golongan III' />
                <SubMenuIsi a='- ' b='Pangkat minimal Pengatur Muda Tk.I Golongan Ruang II/b sekurang-kurangnya telah naik pangkat sekali dan telah 2 tahun dalam pangkat terakhir (yg diangkat II/a)' />
                <SubMenuIsi a='- ' b='Ijazah diperoleh dari perguruan tinggi, fakultas dan program studi dengan status paling rendah terakreditasi B' />
                <SubMenuIsi a='- ' b='IPK minimal 2,50' />

                <SubMenu2 b='Ujian Penyesuaian Kenaikan Pangkat Tk. Sarjana (S1) atau D-IV' />
                <SubMenuIsi a='- ' b='Surat usul dari PDW' />
                <SubMenuIsi a='- ' b='Daftar nominatif usul calon peserta ujian penyesuaian kenaikan pangkat Tk. Sarjana' />
                <SubMenuIsi a='- ' b='Fotokopi Ijazah/STTB Dikum yang telah dilegalisir oleh pejabat yang berwenang baik yang diperoleh sebelum maupun sesudah menjadi PNS' />
                <SubMenuIsi a='- ' b='Fotokopi Akreditasi Program Studi sesuai dikeluarkannya Ijazah/STTB' />
                <SubMenuIsi a='- ' b='Fotokopi Kep CPNS dan Kep KP terakhir' />



            </ScrollView>




        </SafeAreaView>
    )
}

