import styled from "styled-components/native";

import {
    View,
    StatusBar,
} from 'react-native';

export const SafeArea = styled.SafeAreaView` 
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;