import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import Splash from '../screens/Splash'
import Main from '../screens/Main'
import Detail from '../screens/Detail'
import Contact from "../screens/Contact"


const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
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
        />
        <Stack.Screen
          name='Contact'
          component={Contact}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation