import { StyleSheet, Text, View, Image, Pressable, ImageSourcePropType } from 'react-native'
import React, { PropsWithChildren } from 'react'
import {Ionicons, MaterialIcons} from '@expo/vector-icons'



interface RestaurantParams  {
    details: {
        _id:string,
        name:string,
        image:ImageSourcePropType,
        foodType?:string,
        ratingCount?:number,
        deliveryTimeFrom?:number,
        deliveryTimeTo?:number,
        deliveryMethod?: string,
        selectedRestaurant?: string,
        menuType?: string,
        onPress?:()=>void
    },

    // resStyleProp:{
    //     width?:number,
    //     resizeMode?: "contain"|"cover"|"stretch"
    // }

}

const RestaurantCard = ({details}:RestaurantParams) => {
  return (
    <View style={{backgroundColor:'#000'}}>
        <Pressable 
            style={styles.imageContainer} 
            key={details._id}
            onPress={details.onPress}
        >
            <View>
                <Pressable key={details._id} onPress={details.onPress} style={{alignItems:'center'}}>
                    <Image 
                        source={details.image}
                        style={{resizeMode:'cover', height:180, width:'100%', borderRadius:20}}
                    />
                </Pressable>

                <View style={
                    {
                        flexDirection:'row', justifyContent:'space-between', paddingHorizontal:10
                    }
                }>
                    <Text numberOfLines={1} style={{color:'#fff', fontSize:20, fontWeight:'bold'}}>{details?.name}</Text>
                    {details.foodType &&
                        <View style={{backgroundColor:'grey', borderWidth:1, borderRadius:7, padding:2, paddingTop:2, paddingHorizontal:5}}>
                            <Text numberOfLines={1} style={{color:'#fff', fontSize:13, fontWeight:'bold'}}>{details?.foodType}</Text>
                        </View>
                    }
                </View>

                <View style={{flexDirection:'row', paddingHorizontal:10}}>
                    <View style={{backgroundColor:'orange', borderWidth:1, borderRadius:7, padding:3, flexDirection:'row', alignItems:'center'}}>
                        <Ionicons name='bicycle-outline' color='#000' size={15} style={{paddingRight:3}}/>
                        <Text style={{color:'#000', fontSize:13, fontWeight:'bold'}}>{details?.deliveryMethod}</Text>
                    </View>
                    <Text style={{fontSize:15, color:'#fff', fontWeight:'bold', paddingLeft:3}}>.</Text>
                    <Text style={{fontSize:13, padding:4, color:'#fff'}}>{details?.deliveryTimeFrom}-{details?.deliveryTimeTo}mins</Text>
                </View>
            </View>

            <View style={{flexDirection:'row', justifyContent:'flex-end', paddingHorizontal:10, top:-80}}>
                <View style={{backgroundColor:'#fff', borderWidth:1, borderRadius:20, padding:3, flexDirection:'row', alignItems:'center'}}>
                    <MaterialIcons name='thumb-up-alt' color='#000' size={15} style={{paddingLeft:3}}/>
                    <Text style={{color:'#000', fontSize:13, fontWeight:'bold'}}>Like</Text>
                    <Text style={{color:'#000', fontSize:13, fontWeight:'bold'}}>{details?.ratingCount}</Text>
                </View>

            </View>
        </Pressable>
    </View>
  )
}

export default RestaurantCard

const styles = StyleSheet.create({
    imageContainer:{
        borderRadius:50,
    },
    cardName:{
        fontSize:12,
        fontWeight:'bold',
        color:"#fff",
        marginHorizontal:5,
    }
})