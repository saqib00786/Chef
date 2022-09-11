import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font'
import Lottie from 'lottie-react-native';
import { COLOR_DARK_BROWN, COLOR_EQUA_LIGHT_RED, COLOR_EQUA_RED, COLOR_LIGHT_RED, COLOR_REDISH, FONT_ACUMIN, FONT_ACUMIN_BOLD, FONT_SACRAMENTO, SPLASHSCR_ICON } from '../../../res/drawables'
import AnimatedLottieView from 'lottie-react-native';

const Splash = (props) => {

    setTimeout(() => {
        props.navigation.navigate('Main')
    }, 3000)

    let [fontsLoaded] = useFonts({
        'Sacramento-Regular': FONT_SACRAMENTO,
        'Acumin-Normal': FONT_ACUMIN,
        'Acumin-bold': FONT_ACUMIN_BOLD
    })

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null
    }

    return (
        <View style={styles.mainContainer} onLayoutRootView={onLayoutRootView}>

            <View style={{ alignItems: 'center', padding: 8, display: 'flex' }}>

                <View style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                    <Image
                        source={SPLASHSCR_ICON}
                        style={{ width: 150, height: 200, resizeMode: "contain" }}
                    />
                    <AnimatedLottieView
                        style={{ width: 300, height: 300, position: 'absolute', zIndex: -1 }}
                        source={require('../../../assets/bgAnim.json')}
                        autoPlay
                        loop
                    />
                </View>


                <Text style={{ fontSize: 30, fontFamily: 'Sacramento-Regular', lineHeight: 40, alignSelf: 'flex-start', color: COLOR_REDISH }}>
                    Personal
                </Text>
                <Text style={{ fontSize: 80, fontFamily: 'Acumin-bold', lineHeight: 80, color: COLOR_DARK_BROWN }}>
                    Chef
                </Text>
            </View>

        </View>
    )
}



const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Splash