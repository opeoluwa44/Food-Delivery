import { StyleSheet, SafeAreaView, Platform, ScrollView, Animated, View, Pressable, Text } from 'react-native'
import React, {useRef, useState} from 'react'
import { RootStackScreenProps } from '@/Navigation/RootNavigation'
import HomeHeaders from '@/components/Headers/HomeHeaders'
import { restaurants, restuarantCategories } from '@/Data/RestaurantAllData'
import RestaurantCard from '@/components/RestaurantCard'
import CategoryCard from '@/components/Headers/CategoryCard'
import { Ionicons } from '@expo/vector-icons'
import { transform } from '@babel/core'
 

const HomeScreen = ({navigation, route}:RootStackScreenProps<"home">) => {
    const [deliveryMethod, setDeliveryMethod] = useState<boolean>(false)
    const scrollOffsetY = useRef(new Animated.Value(0)).current
    const [activeCat, setActiveCat] = useState<string>('')

    const animateCatHeight = scrollOffsetY.interpolate({
      inputRange:[50, 100],
      outputRange:[130, 40],
      extrapolate:'clamp'
    })

    const animateCategories = {
      transform:[
        {
          translateY:scrollOffsetY.interpolate({
            inputRange:[50, 100],
            outputRange:[0, -90],
            extrapolate:'clamp'
          })
        }
      ]
    }

    const animateFilters = {
      transform:[
        {
          translateY:scrollOffsetY.interpolate({
            inputRange:[0, 90],
            outputRange:[0, -1],
            extrapolate:'clamp'
          })
        }
      ]
    }

  return (
    <>
      <SafeAreaView style={{paddingTop: Platform.OS === 'android' ? 40 : 0, flex: 1, backgroundColor:'#000'}}>
        <HomeHeaders
            deliveryMethod={deliveryMethod}
            setDeliveryMethod={()=>setDeliveryMethod(!deliveryMethod)}
            scrollOffsetY={scrollOffsetY}
        />

        <Animated.View style={{height:animateCatHeight}}>
          <Animated.ScrollView>
            <Animated.ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{gap:10}} style={[animateCategories]}>
              {restuarantCategories.map((restuarantCategory, index)=>(
                <CategoryCard
                  key={index}
                  details={{
                    "_id":restuarantCategory._id,
                    "name":restuarantCategory.name,
                    "image": restuarantCategory.imageUrl,
                  }}
                  catProps={{
                    "activeCat": activeCat,
                    "onPressCat":()=>setActiveCat(restuarantCategory?._id)
                  }}
                />
              ))}
            </Animated.ScrollView>
          </Animated.ScrollView>
          <View>
            <Animated.ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{gap:10, paddingHorizontal:10}} style={[animateFilters]}>
              <Pressable style={{backgroundColor:'rgba(100, 100, 100, 0.4)', borderRadius:12, borderWidth:1, padding:7}}>
                <Text style={{fontSize:13, color:'#fff', fontWeight:'bold', textAlign:'center'}}>Promotions</Text>
              </Pressable>

              <Pressable style={{backgroundColor:'rgba(100, 100, 100, 0.4)', borderRadius:12, borderWidth:1, padding:7, flexDirection:'row', alignItems:'center', gap:5}}>
                <Text style={{fontSize:13, color:'#fff', fontWeight:'bold', textAlign:'center'}}>Food Type</Text>
                <Ionicons name='chevron-down' color='#fff'/>
              </Pressable>

              <Pressable style={{backgroundColor:'rgba(100, 100, 100, 0.4)', borderRadius:12, borderWidth:1, padding:7, flexDirection:'row', alignItems:'center', gap:5}}>
                <Text style={{fontSize:13, color:'#fff', fontWeight:'bold', textAlign:'center'}}>Sort By</Text>
                <Ionicons name='chevron-down' color='#fff'/>
              </Pressable>
            </Animated.ScrollView>
          </View>
        </Animated.View>

        <ScrollView 
          showsVerticalScrollIndicator={false}
          onScroll={e=>{
            const offSetY = e.nativeEvent.contentOffset.y
            scrollOffsetY.setValue(offSetY)
          }}
          scrollEventThrottle={16}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{marginHorizontal:10, marginTop:4}}
          >
           {
            restaurants.map((restaurant, index)=>(
              <RestaurantCard
                key={index}
                details={{
                  "image":restaurant.imageUrl,
                  "_id":restaurant._id,
                  "name":restaurant.name,
                  "foodType":restaurant.foodType,
                  "deliveryMethod":restaurant.deliveryMethod,
                  "deliveryTimeFrom":restaurant.deliveryTimeFrom,
                  "deliveryTimeTo":restaurant.deliveryTimeTo,
                  "ratingCount":restaurant.ratingCount,
                }}
              />
            ))
           }
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})