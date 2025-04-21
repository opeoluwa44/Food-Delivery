import React from "react";
import {} from '@react-navigation/native'
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack'
import HomeScreen from "@/Screens/HomeScreen";




export type RootStackParams = {
    home: undefined,
}

const RootStack = createNativeStackNavigator<RootStackParams>()

export type RootStackScreenProps<T extends keyof RootStackParams>=NativeStackScreenProps<RootStackParams, T>

const RootNavigator = () => {
    return (
        <RootStack.Navigator >
            <RootStack.Screen name="home" component={HomeScreen} options={{headerShown:false}} />
        </RootStack.Navigator>
    )
}

export default RootNavigator