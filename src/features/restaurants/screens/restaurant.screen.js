import React from 'react';
import {
    View,
    StatusBar
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";


const SafeArea = styled.SafeAreaView`
    flex: 1;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled(View)`
    justify-content: center;
    padding: ${(props) => props.theme.sizes[1]};
`;

const CardList = styled(View)`
    flex: 1;
    background-color: ${(props) => props.theme.colors.bg.primary};
    padding: ${(props) => props.theme.sizes[1]};
`;

export const RestaurantsScreen = () => (
    <SafeArea>
        <SearchContainer>
            <Searchbar />
        </SearchContainer>
        <CardList>
            <RestaurantInfoCard />
        </CardList>
    </SafeArea>
)

