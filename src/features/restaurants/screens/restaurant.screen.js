import React, { useContext } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utilities/safe_area.component";


import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { RestaurantList } from "../components/restaurant-list.styles";

import { Search } from "../components/search.component"

const LoadingContainer = styled(View)`
    position: absolute;
    top: 290px;
    left: 50%;  
`;

const Loading = styled(ActivityIndicator)`
    margin-left: -25px;
`;

export const RestaurantsScreen = ({navigation}) => {
    const { restaurants, isLoading } = useContext(RestaurantsContext);
    // const { favourites } = useContext(FavouritesContext);
    
    return (
        <SafeArea >
            {isLoading && (
                <LoadingContainer>
                    <Loading 
                        size={50} 
                        animating={true} 
                        color={Colors.blue300} 
                    />
                </LoadingContainer>
            )}
            <Search />
            <View >
            <RestaurantList
                data={restaurants}
                renderItem={({ item }) => {
                    // console.log(item);
                    return (
                        <TouchableOpacity onPress={()=> navigation.navigate("RestaurantDetail", {
                            restaurant: item})} >
                        <RestaurantInfoCard restaurant={item} />
                        </TouchableOpacity>
                        )}
                    }
                keyExtractor={(item) => item.name}
            />
            </View>
        </SafeArea>
    )
};

