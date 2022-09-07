import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font'
import {FONT_SACRAMENTO} from '../../res/drawables'

SplashScreen.preventAutoHideAsync

const Navigation = () => {

  let [fontsLoaded] = useFonts({
    'Sacramento-Regular': FONT_SACRAMENTO
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
    <View  style={styles.mainContainer} onLayoutRootView={onLayoutRootView}>
      <Text style={{ fontSize: 40, fontFamily: 'Sacramento-Regular'}}>
        Hello world
      </Text>
    </View>
  )
}


const styles = StyleSheet.create({
mainContainer:{
  flex : 1,
  justifyContent : 'center',
  alignItems : 'center'
}
})


export default Navigation