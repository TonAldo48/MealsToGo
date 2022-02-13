import React, { useContext } from 'react';
import {
    AccountBackground,
    AccountCover,
    AccountContainer,
    AuthInput,
    AuthButton,
    Title,
    ErrorContainer,
} from '../components/account.styles';
import { Spacer } from '../../../components/spacer/spacer.component';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import { Button, Colors, ActivityIndicator } from 'react-native-paper';
import { Text } from "../../../components/typography/text.component";

export const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [repeatedPassword, setRepeatedPassword] = React.useState("");

    const { onRegister, error, isLoading } = useContext(AuthenticationContext);

    return (
        <AccountBackground>
            <AccountCover>
                <Title>MEALS TO GO</Title>
                <AccountContainer>
                    <Spacer size="large">
                        <AuthInput
                            label='E-mail'
                            value={email}
                            textContextType='emailAddress'
                            keyboardType='email-address'
                            autoCapitalize='none'
                            onChangeText={(u) => setEmail(u)}
                        />
                    </Spacer>
                    <Spacer size="large">
                        <AuthInput
                            label='Password'
                            value={password}
                            textContextType='password'
                            secureTextEntry
                            autoCapitalize='none'
                            onChangeText={(p) => setPassword(p)}
                        />
                    </Spacer>
                    <Spacer size="large">
                        <AuthInput
                            label='Repeat Password'
                            value={repeatedPassword}
                            textContextType='password'
                            secureTextEntry
                            autoCapitalize='none'
                            onChangeText={(p) => setRepeatedPassword(p)}
                        />
                    </Spacer>
                    {error && (
                        <ErrorContainer size="large">
                            <Text variant="error">{error}</Text>
                        </ErrorContainer>
                    )}
                    <Spacer size="large">
                        {!isLoading ? <Button
                            icon='email'
                            color='white'
                            mode='contained'
                            onPress={() => onRegister(email, password, repeatedPassword)}
                        >
                            Register
                        </Button> : <ActivityIndicator animating={true} color={Colors.blue300} />}
                    </Spacer>
                </AccountContainer>
                <Spacer size='large'>
                    <Button
                        icon='arrow-left'
                        color='white'
                        mode='contained'
                        onPress={() => navigation.navigate('Main')}
                    >
                        BACK
                    </Button>
                </Spacer>
            </AccountCover>

        </AccountBackground>)
}