import styled from 'styled-components/native';
import { colors } from '../../../infrastructure/theme/colors';
import { Button, TextInput } from "react-native-paper";

export const AccountBackground = styled.ImageBackground.attrs({
    source: require('../../../../assets/pizza.jpg'),
})`
    flex: 1;
    align-items: center;
    justify-content: center;

`;

export const AccountCover = styled.View`
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(255,255,255,0.1);
    flex: 1;
    align-items: center;
    justify-content: center;

`;

export const Title = styled.Text`
    font-size: 30px;
    font-weight: bold;

`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const AuthInput = styled(TextInput)`
  width: 250px;
`;

export const AccountContainer = styled.View`
    background-color: rgba(255,255,255,0.5);
    padding: ${(props) => props.theme.space[4]};
    margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
    color: colors.brand.primary,
  })`
    padding: ${(props) => props.theme.space[2]};
  `;

  export const AnimationWrapper = styled.View`
    width: 100%;
    height: 40%;
    position: absolute;
    top: 30px;
    padding; 20; 
  `;



