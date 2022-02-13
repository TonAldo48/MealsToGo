import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { ScrollView, TouchableOpacity } from "react-native";
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';
import { FavouritesContext } from '../../../services/favourites/favourites.context';
import { RestaurantInfoCard } from '../../../features/restaurants/components/restaurant-info-card.component'

const FavouritesWrapper = styled.View`
    padding: 10px;
`;
export const FavouritesScreen = ({ navigation }) => {

    const { favourites } = useContext(FavouritesContext);

    if(!favourites.length){
        return null
    }

    return (
        <FavouritesWrapper>
            <ScrollView showsHorizontalScrollIndicator={false}>
                {
                    favourites.map((restaurant) => {
                        const key = restaurant.name.split(" ").join("-");
                        return (
                            <Spacer position="left" size="medium" key={key}>
                                <TouchableOpacity onPress={() =>
                                    navigation.navigate("RestaurantDetail", {
                                        restaurant
                                    })
                                }>
                                    <RestaurantInfoCard restaurant={restaurant} />
                                </TouchableOpacity>
                            </Spacer>
                        )
                    })
                }
            </ScrollView>
        </FavouritesWrapper>
    )
};