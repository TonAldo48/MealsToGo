import React, { useContext } from 'react';
import { List, Avatar } from 'react-native-paper';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import { SafeArea } from '../../../components/utilities/safe_area.component';
import styled from 'styled-components/native';
import { Text } from '../../../components/typography/text.component';
import { Spacer } from '../../../components/spacer/spacer.component';

const DevInfoItem = styled(List.Item)`
    padding: ${props => props.theme.space[3]}
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon size={180} icon='human' backgroundColor='#2182bd' />
        <Spacer position='top' size='large'>
          <Text variant='label'>{user.email}</Text>
        </Spacer>
      </AvatarContainer>

      <List.Section>
        <DevInfoItem
          title='Favorites'
          description='View your favorites'
          left={(props) => <List.Icon {...props} color='black' icon='heart' />}
          onPress={() => navigation.navigate("Favourites")}
        />
                <DevInfoItem
          title='Developer Info'
          left={(props) => <List.Icon {...props} color="black" icon='information' />}
          onPress={() => navigation.navigate("Developer Info")}
        />
        <DevInfoItem
          title='Logout'
          left={(props) => <List.Icon {...props} color="black" icon='logout' />}
          onPress={onLogout}
        />

      </List.Section>
    </SafeArea>
  );
  }