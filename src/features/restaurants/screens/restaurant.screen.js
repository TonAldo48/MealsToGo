import React from 'react';
import {
    View,
    FlatList
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utilities/safe_area.component";

const SearchContainer = styled(View)`
    justify-content: center;
    padding: ${(props) => props.theme.sizes[1]};
`;

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: { padding: 16 }

})``;

export const RestaurantsScreen = () => (
    <SafeArea>
        <SearchContainer>
            <Searchbar />
        </SearchContainer>
        <RestaurantList
            data={[{ name: 1 }, { name: 2 }]}
            renderItem={() => <RestaurantInfoCard />}
            keyExtractor={(item) => item.name}
        />
    </SafeArea>
)

