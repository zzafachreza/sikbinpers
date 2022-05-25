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
    TextInput,
} from 'react-native';
import { colors } from '../../utils/colors';
import { fonts, windowHeight, windowWidth } from '../../utils/fonts';
import { storeData, getData } from '../../utils/localStorage';
import { Icon } from 'react-native-elements';

export default function Chat({ navigation, route }) {

    const rr = route.params;
    return (
        <ImageBackground source={require('../../assets/back.png')} style={{
            flex: 1,
        }}>
            <View style={{
                flexDirection: 'row',
                padding: 10,
                backgroundColor: colors.primary
            }}>
                <TouchableOpacity onPress={() => navigation.navigate('ChatList')} style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 10,
                }}>
                    <Icon type='ionicon' name='arrow-back-outline' color={colors.white} />
                </TouchableOpacity>
                <View style={
                    {
                        flex: 1,
                        padding: 10,
                    }
                }>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: windowHeight / 35,
                        color: colors.white
                    }}>{rr.nama_lawan}</Text>
                </View>

            </View>

            <View style={{
                flex: 1,
            }}>

            </View>

            <View style={{
                backgroundColor: '#F2F0F0',
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <TouchableOpacity onPress={() => {
                    console.log('add')
                }} style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 40,
                    height: 40,
                    padding: 5,
                }}>
                    <Icon type='ionicon' name='attach' color={colors.primary} size={windowWidth / 15} />
                </TouchableOpacity>
                <View style={{
                    flex: 1,
                    backgroundColor: colors.white,
                    borderRadius: 10,
                }}>
                    <TextInput style={{


                    }} />
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('ChatList')} style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 40,
                    height: 40,
                    padding: 5,
                }}>
                    <Icon type='ionicon' name='send-outline' color={colors.primary} size={windowWidth / 15} />
                </TouchableOpacity>
            </View>
        </ImageBackground >
    )
}

