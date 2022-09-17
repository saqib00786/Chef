import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLOR_DarkGray, COLOR_LIGHT_GRAY, COLOR_ORANGE, COLOR_WHITE } from '../../../res/drawables'
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

const Contact = () => {

    useEffect(() => {
    
    }, [BannerAd])

    return (
        <View style={styles.mainContainer}>
            <View
                style={styles.fistContiner}>
                <Text style={styles.firstTextWrapper}>Ayesha Chaudhry</Text>
                <Text style={styles.firstTextWrapper1}>Developer</Text>
                <Text style={styles.firstTextWrapper2}>https://github.com/Ayesha-chaudhry</Text>
            </View>
            <View
                style={styles.fistContiner}>
                <Text style={styles.firstTextWrapper}>Saba Umer</Text>
                <Text style={styles.firstTextWrapper1}>Designer</Text>
                <Text style={styles.firstTextWrapper2}>hhttps://github.com/Saba-Faiz</Text>
            </View>
            <View
                style={styles.fistContiner}>
                <Text style={styles.firstTextWrapper}>Abaid Ur Rehman</Text>
                <Text style={styles.firstTextWrapper1}>Developer</Text>
                <Text style={styles.firstTextWrapper2}>https://github.com/devabaidurrehman</Text>
            </View>
            <View
                style={styles.fistContiner}>
                <Text style={styles.firstTextWrapper}>Muhammad Saqib</Text>
                <Text style={styles.firstTextWrapper1}>Developer</Text>
                <Text style={styles.firstTextWrapper2}>https://github.com/saqib00786</Text>
            </View>
            <View style={{ width : '100%',height : 70,position: 'absolute', bottom: 0 }}>
                <BannerAd
                    unitId='ca-app-pub-7992663111948996/6881415885'
                    size={BannerAdSize.FULL_BANNER}
                />
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: COLOR_DarkGray,
        alignItems: 'center'

    },
    fistContiner: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        width: "80%",
        height: 120,
        backgroundColor: COLOR_LIGHT_GRAY,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 16,
        borderColor: COLOR_ORANGE,
        borderWidth: 1,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    firstTextWrapper: {
        color: COLOR_WHITE,
        fontFamily: "Acumin-bold",
        fontSize: 28,
        alignSelf: 'center',
    },
    firstTextWrapper1: {
        color: COLOR_WHITE,
        fontSize: 18,
        alignSelf: 'center',
        fontFamily: "Acumin-Normal",
        marginTop: 16,
    },
    firstTextWrapper2: {
        color: COLOR_WHITE,
        fontFamily: "Acumin-Normal",
        fontSize: 14,
        alignSelf: 'center',
    }

})

export default Contact