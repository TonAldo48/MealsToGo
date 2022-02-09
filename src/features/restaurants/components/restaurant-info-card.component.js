import React from 'react';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Text } from "../../../components/typography/text.component.js"
import { Spacer } from "../../../components/spacer/spacer.component.js";
import { 
    Address, 
    RestaurantCard, 
    Info, 
    Rating, 
    RatingIcons,
    CardImage
} from './restaurant-info-card.style';

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = "Some restaurant",
        photos = ["https://www.foodiesfeed.com/wp-content/uploads/2015/03/basic-italian-pizza-margherita-1024x683.jpg"],
        address = "100 random street",
        rating = 3.5,
        isClosedTemporarily = true,
        isOpenNow = true,
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return (
        <RestaurantCard elevation={8}>
            <CardImage key={name} source={{ uri: photos[0] }} />
            <Info>
                {/* <Spacer position="bottom" size="small"> */}
                    <Text variant="caption">{name}</Text>
                {/* </Spacer> */}
                <Rating>
                    <RatingIcons>
                        {ratingArray.map(() => (<Ionicons name='star' size={24} color='yellow' />))}
                    </RatingIcons>
                    <MaterialIcons name='store' size={24} color={(isOpenNow ? 'green' : 'red')} />
                </Rating>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    );
};
