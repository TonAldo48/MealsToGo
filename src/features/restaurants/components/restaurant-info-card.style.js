import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const Address = styled.Text`
    font-family: ${(props) => props.theme.fonts.monospace};
`;

export const RestaurantCard = styled(Card)`
    padding: ${(props) => props.theme.sizes[1]};
    margin-bottom: ${(props) => props.theme.space[3]}
`;

export const Info = styled(Card)`
    padding: ${(props) => props.theme.sizes[1]};
`;

export const CardImage = styled(Card.Cover)`

`;

export const Rating = styled.View`
    flex-direction: row;
    padding-top: ${(props) => props.theme.sizes[0]};
    padding-bottom: ${(props) => props.theme.sizes[0]};
    justify-content: space-between;
`;

export const RatingIcons = styled.View`
    flex-direction: row;
`;