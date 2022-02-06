import React from 'react';
import { Text, StyleSheet, View } from "react-native";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const Title = styled.Text`
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.sizes[1]}
`;
const Address = styled.Text`
    font-family: ${(props) => props.theme.fonts.monospace};
`;

const RestaurantCard = styled(Card)`
    padding: ${(props) => props.theme.sizes[1]};
`;

const Info = styled(Card)`
    padding: ${(props) => props.theme.sizes[1]};
`;

const Rating = styled.View`
    flex-direction: row;
    padding-top: ${(props) => props.theme.sizes[0]};
    padding-bottom: ${(props) => props.theme.sizes[0]};
    justify-content: space-between;
`;

const RatingIcons = styled.View`
    flex-direction: row;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = "Some restaurant",
        photos = ["https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Waakye_Festival_05.jpg/220px-Waakye_Festival_05.jpg"],
        address = "100 random street",
        rating = 3.5,
        isClosedTemporarily = true,
        isOpenNow = true,
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return (
        <RestaurantCard elevation={8}>
            <RestaurantCard.Cover key={name} source={{ uri: photos[0] }} />
            <Info>
                <Title>{name}</Title>
                <Rating>
                    <RatingIcons>
                        {ratingArray.map(() => (<Ionicons name='star' size={24} color='yellow' />))}
                    </RatingIcons>
                    <MaterialIcons name='store' size={24} color={(isOpenNow ? 'green':'red')} />
                </Rating>
                <Address>{address}</Address>
            </Info>

        </RestaurantCard>
    );
};
