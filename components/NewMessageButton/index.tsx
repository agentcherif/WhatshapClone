import React from 'react';

import {
  TouchableOpacity,
  View,
} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

MaterialCommunityIcons

const NewMessageButton = () =>{
    const navigation = useNavigation();
    
    const onPress = () =>{
        navigation.navigate('Contacts');
    }
    return (
        <TouchableOpacity onPress={onPress}>

        <View style={styles.container}>
            <MaterialCommunityIcons name="message-reply-text" size={28} color="white" />
        </View>
        </TouchableOpacity>
    )
}
export default NewMessageButton;