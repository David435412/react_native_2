import React from "react"
import Contants from 'expo-constants'
import {Text, View } from 'react-native'

const Main = () => {
    return(
        <View style={{marginTop: Contants.statusBarHeight, flexGrow: 1}}>
            <Text>
                David Murcia
            </Text>
        </View>
    )
}

export default Main