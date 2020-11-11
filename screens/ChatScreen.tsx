import * as React from 'react';

import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import ChatListItems from '../components/ChatListItems';
import NewMessageButton from '../components/NewMessageButton';
//import ChatListItems from '../components/ChatListItems/';
import { View } from '../components/Themed';
import chatRooms from '../data/ChatRooms';

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      {/* <ChatListItems  chatRoom={chatRooms[0]} /> */}

      <FlatList
        style={{width: '100%'}}
        data={chatRooms} 
        renderItem= {({ item}) => <ChatListItems  chatRoom={item} />}
        keyExtractor={(item) => item.id}
      />
      <NewMessageButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
