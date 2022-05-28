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
                        id: [
                            {
                                id: 0
                            },
                            {
                                id: 1
                            }
                        ]
                    })}
                    icon="star-outline"
                    nama="KENAIKAN PANGKAT"
                />

                <DataKategori
                    warna={colors.primary}
                    onPress={() => navigation.navigate('MenuGambar', {
                        id: [
                            {
                                id: 2
                            },
                            {
                                id: 3
                            },
                            {
                                id: 4
                            }
                        ]
                    })}
                    icon="receipt-outline"
                    nama="JABATAN"
                />
                <DataKategori
                    warna={colors.primary}
                    onPress={() => navigation.navigate('MenuGambar', {
                        id: [
                            {
                                id: 5
                            },
                            {
                                id: 6
                            },
                            {
                                id: 7
                            }
                        ]
                    })}
                    icon="repeat-outline"
                    nama="PEMINDAHAN"
                />

                <DataKategori
                    warna={colors.primary}
                    onPress={() => navigation.navigate('MenuGambar', {
                        id: [
                            {
                                id: 8
                            }

                        ]
                    })}
                    icon="ribbon-outline"
                    nama="TANDA KEHORMATAN SLKS"
                />
                <DataKategori
                    warna={colors.primary}
                    onPress={() => navigation.navigate('MenuGambar', {
                        id: [
                            {
                                id: 9
                            }
                        ]
                    })}
                    icon="add-circle-outline"
                    nama="TAMBAH GELAR"
                />

                <DataKategori
                    warna={colors.primary}
                    onPress={() => navigation.navigate('MenuGambar', {
                        id: [
                            {
                                id: 13
                            },

                        ]
                    })}
                    icon="expand-outline"
                    nama="GANTI"
                />

                <DataKategori
                    warna={colors.primary}
                    onPress={() => navigation.navigate('MenuGambar', {
                        id: [
                            {
                                id: 14
                            },

                        ]
                    })}
                    icon="log-out-outline"
                    nama="CUTI DI LUAR TANGGUNGAN NEGARA"
                />

                <DataKategori
                    warna={colors.primary}
                    onPress={() => navigation.navigate('MenuGambar', {
                        id: [
                            {
                                id: 15
                            },

                        ]
                    })}
                    icon="flash-outline"
                    nama="KARPEG"
                />


                <DataKategori
                    warna={colors.primary}
                    onPress={() => navigation.navigate('MenuGambar', {
                        id: [
                            {
                                id: 10
                            },
                            {
                                id: 11
                            },
                        ]
                    })}
                    icon="close-outline"
                    nama="HUKUMAN DISIPLIN"
                />





                <DataKategori
                    warna={colors.primary}
                    onPress={() => navigation.navigate('MenuGambar', {
                        id: [
                            {
                                id: 12
                            },

                        ]
                    })}
                    icon="hand-right-outline"
                    nama="PEMBERHENTIAN"
                />


            </ScrollView>



        </SafeAreaView >
    )
}
