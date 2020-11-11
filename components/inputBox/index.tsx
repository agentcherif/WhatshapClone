import React, { useState } from 'react';

import { View } from 'react-native';
import {
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';

import {
  Entypo,
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

import styles from './styles';

const InputBox = () =>{
    const [message, setMessage] = useState('');
    console.log(message);

    const onMicrophonePress = () =>{
        console.warn(`Microphone`);
    }
    const onSendPress = () =>{
        console.warn(`Sending: ${message}`);
        //send de masse to the bacend
        // setMessage('');
    }
    const onPress = () =>{
        if(!message) onMicrophonePress();
        else onSendPress();
    }
    return(
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <FontAwesome5 name="laugh-beam" size={24} color="grey"/>
                <TextInput 
                    placeholder={"type a message"}
                    style={styles.textInput}  
                    multiline
                    value={message}
                    onChangeText={setMessage}
                    
                />
                <Entypo name="attachment" size={24} color="grey" style={styles.icon}/>
                {!message && <Fontisto name="camera" size={24} color="grey" style={styles.icon}/>}
            </View>
            <TouchableOpacity onPress={onPress}>

            <View style={styles.buttonContainer}>
                {
                    !message ? 
                     <MaterialCommunityIcons name="microphone" size={28} color="white"></MaterialCommunityIcons>
                     :
                     <MaterialCommunityIcons name="send" size={28} color="white"></MaterialCommunityIcons>
                }
            </View>
            </TouchableOpacity>
        </View>
    )
}
export default InputBox;