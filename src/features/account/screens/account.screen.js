import React, { useEffect } from 'react';
import LottieView from 'lottie-react-native';
import {
    AccountBackground,
    AccountCover,
    AccountContainer,
    Title,
    AnimationWrapper
} from '../components/account.styles';
import { Button } from 'react-native-paper';
import { Spacer } from '../../../components/spacer/spacer.component';

export const AccountScreen = ({ navigation }) => {
    
    return (
        <AccountBackground>
            <AccountCover>
                <AnimationWrapper>
                    <LottieView
                        animation="animation"
                        autoPlay={true}
                        loop
                        resizeMode="cover"
                        source={require("../../../../assets/watermelon.json")}
                    />
                </AnimationWrapper>
                <Title>MEALS TO GO</Title>
                <AccountContainer>
                    <Button
                        icon='lock-open-outline'
                        color='white'
                        mode='contained'
                        onPress={() => navigation.navigate('Login')}
                    >
                        Login
                    </Button>
                    <Spacer size='large'>
                        <Button
                            icon='email'
                            color='white'
                            mode='contained'
                            onPress={() => navigation.navigate('Register')}
                        >
                            Register
                        </Button>
                    </Spacer>
                </AccountContainer>
            </AccountCover>
        </AccountBackground>
    )
}