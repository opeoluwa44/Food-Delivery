import { ImageSourcePropType } from "react-native"

interface coordParams {
    latitude: number,
    longitude: number,
    address: string,
    latitudeDelta: number,
    longitudeDelta: number,
}

export interface restaurantParams  {
    _id:string,
    name:string,
    description:string,
    imageUrl:ImageSourcePropType,
    foodType:string,
    time:string,
    deliveryTimeFrom:number,
    deliveryTimeTo:number,
    deliveryMethod: string,
    rating:number,
    ratingCount?:number,
    selectedRestaurant?: string,
    coords:coordParams,
    
}

export interface restaurantCategoryParams {
    _id: string,
    name: string,
    imageUrl: ImageSourcePropType,
}