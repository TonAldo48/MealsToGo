import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
    justify-content: center;
    padding: ${(props) => props.theme.sizes[1]};
`;

export const Search = ({ isFavouritesToggled, onFavouritesToggle }) => {
    const { keyword, search } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    useEffect(() => {
        setSearchKeyword(keyword);
    }, [keyword]);

    return (
        <SearchContainer>
            <Searchbar
                icon={isFavouritesToggled ? "heart" : "heart-outline"}
                onIconPress={onFavouritesToggle}
                placeholder='Search for a location'
                value={searchKeyword}
                onSubmitEditing={() => {
                    search(searchKeyword);
                }}
                onChangeText={(text) => {
                    setSearchKeyword(text);
                }}
            />
        </SearchContainer>
    );
};