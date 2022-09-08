import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font'
import { FONT_ACUMIN, FONT_ACUMIN_BOLD, FONT_SACRAMENTO } from '../../../res/drawables'

const Splash = (props) => {

    setTimeout(() => {
        props.navigation.navigate('Main')
    },3000)

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
            <Text style={{ fontSize: 30, fontFamily: 'Sacramento-Regular' }}>
                Personal
            </Text>
            <Text style={{ fontSize: 80, fontFamily: 'Acumin-bold' }}>
                Chef
            </Text>
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