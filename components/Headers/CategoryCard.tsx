import { View, ImageSourcePropType, Pressable, Image, StyleSheet, Text } from 'react-native'
import React, {useRef, useState} from 'react'
import { RootStackScreenProps } from '@/Navigation/RootNavigation'
import HomeHeaders from '@/components/Headers/HomeHeaders'

interface CategoryParams  {
    details:{
        _id?:string,
        name?:string,
        image?:ImageSourcePropType,
        onPress?:()=>void
    },
    catProps:{
        activeCat?:string,
        onPressCat?:()=>void
    }
}

const CategoryCard = ({details, catProps}: CategoryParams) => {
    let isActive = details._id === catProps.activeCat
    let borderColor = isActive ? "orange" : "grey"
    let bgColor = isActive ? "orange" : "black"
    let textColor = isActive ? "orange" : "white"

  return (
    <View>
        <Pressable style={styles.container} key={details._id} onPress={catProps.onPressCat}>
            <View style={[styles.imageContainer, {backgroundColor:bgColor, borderColor:borderColor}]}>
                <Image source={details?.image} style={{width:55, height:55, resizeMode:'contain'}}/>
            </View>
            <Text style={[styles.catName, {color:textColor}]}>{details.name}</Text>
        </Pressable>
    </View>
  )
}

export default CategoryCard

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        padding:3,
        margin:3
    },
    imageContainer:{
        borderRadius:20,
        padding:3
    },
    catName:{
        fontSize:15,
        fontWeight:'bold',
    }
})