import React, { useContext } from 'react';
import {
    View,
    FlatList
} from 'react-native';
import { Searchbar, ActivityIndicator, Colors } from 'react-native-paper';
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utilities/safe_area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { RestaurantList } from "../components/restaurant-list.styles";

const SearchContainer = styled(View)`
    justify-content: center;
    padding: ${(props) => props.theme.sizes[1]};
`;

const LoadingContainer = styled(View)`
    position: absolute;
    top: 50%;
    left: 50%;
`;

const Loading = styled(ActivityIndicator)`
    margin-left: -25px;
`;

export const RestaurantsScreen = () => {
    const { restaurants, isLoading, error } = useContext(RestaurantsContext);
    return (
        <SafeArea>
            {isLoading && (
                <LoadingContainer>
                    <Loading size={50} animating={true} color={Colors.blue300}/>
                </LoadingContainer>
            )

            }
            <SearchContainer>
                <Searchbar />
            </SearchContainer>
            <RestaurantList
                data={restaurants}
                renderItem={({item}) => {
                return (
                <RestaurantInfoCard restaurant={item}/>)}}
                keyExtractor={(item) => item.name}
            />
        </SafeArea>
    )
};

