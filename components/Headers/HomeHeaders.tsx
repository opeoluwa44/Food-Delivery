import { StyleSheet, Text, View, Pressable, Animated, Dimensions } from 'react-native'
import React from 'react'
import {Ionicons, AntDesign} from '@expo/vector-icons'


interface HomeHeaderParams {
    deliveryMethod?: boolean;
    setDeliveryMethod?: () => void;
    scrollOffsetY: Animated.Value;
}

const  maxHeaderHeight = 190;
const minHeaderHeight = 60;
const scrollDistance = 80;
const {width} = Dimensions.get('window')

const HomeHeaders = ({deliveryMethod, setDeliveryMethod, scrollOffsetY}:HomeHeaderParams) => {

    const animateSearchBar = {
        transform:[
            {
                translateX:scrollOffsetY.interpolate({
                    inputRange:[0, 50],
                    outputRange:[0, -23],
                    extrapolate:'clamp'
                })
            },

            {
                translateY:scrollOffsetY.interpolate({
                    inputRange:[0, 50],
                    outputRange:[0, -110],
                    extrapolate:'clamp'
                })
            },
            
            {
                scale:scrollOffsetY.interpolate({
                    inputRange:[0, 42],
                    outputRange:[1, 0.65],
                    extrapolate:'clamp'
                })
            }
        ]
    } 

    const animateTitle = {
        opacity:scrollOffsetY.interpolate({
            inputRange:[0, 20],
            outputRange:[1, 0],
            extrapolate:'clamp'
        })
    }

    const animateHeadersHeight = scrollOffsetY.interpolate({
        inputRange:[0, scrollDistance],
        outputRange:[maxHeaderHeight, minHeaderHeight],
        extrapolate:'clamp'
    })

  return (
    <Animated.View style={{height:animateHeadersHeight}}>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal: 10, height: 80}}>
            <Pressable style={{width: 50, height: 50, backgroundColor: '#000', borderRadius: 25, justifyContent:'center', alignItems:'center'}}>
                <Ionicons name='chevron-back' size={30} color='#fff'/>
            </Pressable>
            <Pressable 
            style={{
                flexDirection:'row', width: 60, height: 35, 
                backgroundColor: 'grey', borderRadius: 30, 
                justifyContent:'space-between', alignItems:'center', 
                opacity: 0.8, marginRight: 10
                }}
            >
                <Pressable onPress={setDeliveryMethod}>
                    {deliveryMethod !== false ? (
                        <View style={{
                            backgroundColor: 'orange',
                            borderRadius:30,
                            width:35,
                            height:35,
                            alignItems:'center',
                            justifyContent:'center',
                        }}>
                            <Ionicons name='bicycle-outline' size={24} color='#fff' style={{padding:5}}/>
                        </View>
                    ):( <View style={{
                        backgroundColor: 'grey',
                        borderRadius:30,
                        width:35,
                        height:35,
                        alignItems:'center',
                        justifyContent:'center'
                    }}>
                        <Ionicons name='bicycle-outline' size={20} color='#fff'/>
                    </View>)}
                </Pressable>

                <Pressable onPress={setDeliveryMethod} style={{alignItems:'center'}}>
                    {deliveryMethod !== true ? (
                        <View style={{
                            backgroundColor: 'orange',
                            borderRadius:30,
                            width:35,
                            height:35,
                            alignItems:'center',
                            justifyContent:'center',
                        }}>
                            <Ionicons name='walk-outline' size={24} color='#fff' style={{padding:5}}/>
                        </View>
                    ):( <View style={{
                        backgroundColor: 'grey',
                        borderRadius:30,
                        width:35,
                        height:35,
                        alignItems:'center',
                        justifyContent:'center',
                    }}>
                        <Ionicons name='walk-outline' size={20} color='#fff'/>
                    </View>)}
                </Pressable>

            </Pressable>
        </View>

        <Animated.View style={[{marginHorizontal:10, }, animateTitle]}>
            <Text style={{fontSize:30, fontWeight:'bold', color:'#fff', paddingHorizontal:5,}}>Restaurant</Text>
        </Animated.View>

        <Animated.View
            style={[{
                flexDirection:'row',
                backgroundColor:'#fff',
                borderRadius:10,
                height:38,
                marginHorizontal:10,
                marginVertical:12,
            }, animateSearchBar]}
        >
            <Pressable style={{position:'absolute', padding:10, flexDirection:'row', alignItems:'center'}}>
                <AntDesign name='search1' size={20} color='#000'/>
            </Pressable>
        </Animated.View>
    </Animated.View>
  )
}

export default HomeHeaders

const styles = StyleSheet.create({})