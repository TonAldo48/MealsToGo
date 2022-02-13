import React from 'react';
import { SafeArea } from '../../../components/utilities/safe_area.component';
import { Avatar, List } from 'react-native-paper';
import styled from 'styled-components/native';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';
import * as Linking from 'expo-linking';

const DevInfoItem = styled(List.Item)`
    padding: ${props => props.theme.space[3]}
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

export const DeveloperScreen = () => {
    return (
        <SafeArea>
            <AvatarContainer>
                <Avatar.Image
                    size={150} source={require('../../../../assets/profile.jpg')}
                />
                <Spacer position='top' size='large'>
                    <Text variant='label'>DAVID NINTANG JUNIOR</Text>
                </Spacer>
            </AvatarContainer>
            <List.Section>
                <DevInfoItem
                    title='Github'
                    description='View my other projects'
                    left={(props) => <List.Icon {...props} color='black' icon='github' />}
                    onPress={()=> Linking.openURL('https://github.com/TonAldo48')}
                />
                <DevInfoItem
                    title='LinkedIn'
                    description='Connect with me on LinkedIn'
                    left={(props) => <List.Icon {...props} color="black" icon='linkedin' />}
                    onPress={()=>Linking.openURL('https://linked.com/nintangdavid')}
                />
                <DevInfoItem
                    title='Twitter'
                    description='View my tweets'
                    left={(props) => <List.Icon {...props} color="black" icon='twitter' />}
                    onPress={()=>Linking.openURL('https://twitter.com/nintangd')}
                />
                <DevInfoItem
                    title='Email'
                    description='Good old email'
                    left={(props) => <List.Icon {...props} color="black" icon='email' />}
                    onPress={()=>Linking.openURL('mailto: nintang48@gmail.com')}
                />

            </List.Section>
        </SafeArea>
    )
}