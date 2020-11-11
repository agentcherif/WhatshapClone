import React from 'react';

import {
  Image,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { User } from '../../types';
import styles from './styles';

export type ContactListItemsProps = {
    user: User;
}

const ContactListItems = (props: ContactListItemsProps) =>{
    const {user } = props;
    const navigation = useNavigation();
    const onCLick = () =>{

    }
    return (
        <TouchableWithoutFeedback onPress={onCLick}>
            <View style={styles.container }>
            <View style={styles.lefContainer}>
                
                {/* <Image source={{ uri: user.imageUri }} style={styles.avatar}   /> */}
                <Image source={{uri: user.imageUri}} style={styles.avatar} />
                <View style={styles.midContainer}>
                    <Text style={styles.username}>{user.name}</Text>
                    <Text numberOfLines={1} style={styles.status}>{user.status}</Text>
                </View>
            </View>
        
        </View>
        </TouchableWithoutFeedback>
    )
};

export default ContactListItems;



// ellipsizeMode={"head"}