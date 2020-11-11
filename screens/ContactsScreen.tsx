import * as React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import ContactListItems from '../components/ContactListItems';
//import ChatListItems from '../components/ChatListItems/';
import users from '../data/Users';

export default function ContactsScreen() {
  return (
    <View style={styles.container}>
      {/* <ChatListItems  chatRoom={chatRooms[0]} /> */}

      <FlatList
        style={{width: '100%'}}
        data={users} 
        renderItem= {({ item}) => <ContactListItems  user={item} />}
        keyExtractor={(item) => item.id}
      />
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

// import React, {
//   useEffect,
//   useState,
// } from 'react';

// import { Camera } from 'expo-camera';
// import {
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';

// export default function App() {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [type, setType] = useState(Camera.Constants.Type.back);

//   useEffect(() => {
//     (async () => {
//     const { status } = await Camera.requestPermissionsAsync();
//     setHasPermission(status === 'granted');
//     })();
//   }, []);

//   if (hasPermission === null) {
//     return <View />;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }
//   return (
//   <View style={{ flex: 1 }}>
//   <Camera style={{ flex: 1 }} type={type}>
//   <View
//   style={{
//   flex: 1,
//   backgroundColor: 'transparent',
//   flexDirection: 'row',
//   }}>
//   <TouchableOpacity
//   style={{
//   flex: 0.1,
//   alignSelf: 'flex-end',
//   alignItems: 'center',
//   }}
//   onPress={() => {
//   setType(
//   type === Camera.Constants.Type.back
//   ? Camera.Constants.Type.front
//   : Camera.Constants.Type.back
//   );
//   }}>
//   <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
//   </TouchableOpacity>
//   </View>
//   </Camera>
//   </View>
//   );
// }