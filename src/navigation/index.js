import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import Splash from '../screens/Splash'
import Main from '../screens/Main'
import Detail from '../screens/Detail'
import Contact from "../screens/Contact"
import { COLOR_DarkGray, COLOR_ORANGE, COLOR_WHITE } from "../../res/drawables"


const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Splash'
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Main'
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Detail'
          component={Detail}
          options={{headerStyle : {backgroundColor: COLOR_ORANGE},headerTintColor: COLOR_WHITE}}
        />
        <Stack.Screen
          name='Contact'
          component={Contact}
          options={{headerStyle : {backgroundColor: COLOR_ORANGE},headerTintColor: COLOR_WHITE}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation