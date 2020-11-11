import React from 'react';

import moment from 'moment';
import {
  Image,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { ChatRoom } from '../../types';
import styles from './styles';

export type ChatListItemsProps = {
    chatRoom: ChatRoom;
}

const ChatListItems = (props: ChatListItemsProps) =>{
    const {chatRoom } = props;
    const user = chatRoom.users[1];
    const navigation = useNavigation();
    const onCLick = () =>{
        // console.warn(`Clicked on ${user.name}`)
        navigation.navigate('ChatRoom', {
            id : chatRoom.id,
            name: user.name,
        })
    }
    return (
        <TouchableWithoutFeedback onPress={onCLick}>
            <View style={styles.container }>
            <View style={styles.lefContainer}>
                
                {/* <Image source={{ uri: user.imageUri }} style={styles.avatar}   /> */}
                <Image source={{uri: user.imageUri}} style={styles.avatar} />
                <View style={styles.midContainer}>
                    <Text style={styles.username}>{user.name}</Text>
                    <Text numberOfLines={1}  style={styles.lastMessage}> {chatRoom.lastMessage.content }</Text>
                </View>
            </View>
            {/* <Text>{chatRoom.lastMessage.createdAt}</Text> */}
            <Text style={styles.time}>
                {/* {moment({chatRoom.lastMessage.createdAt, format: "DD/MM/YYYY"})} */}
                {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
                
            </Text>
        
        </View>
        </TouchableWithoutFeedback>
    )
};

export default ChatListItems;



// ellipsizeMode={"head"}