import React, {useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import TextFormInput from '../Components/TextFormInput';
import Button from '../Components/Button';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
const navigation = useNavigation();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const onButtonPressed = (username: string, password: string) => {
    if((username.trim() === '') || (password.trim() === '')) {
        Alert.alert('Please fill details')
    }
    else {
        // @ts-ignore
        navigation.navigate('home')
    }
  };

  return (
    <View style={styles.wholeView}>
      <View style={styles.containerView}>
        <TextFormInput
          placeholder="username"
          onChangeText={(text: string) => setUsername(text)}
          value={username}
        />
        <TextFormInput
          placeholder="password"
          onChangeText={(text: string) => setPassword(text)}
          value={password}
        />
        <Button viewStyle={styles.buttonStyle} onPress={() => onButtonPressed(username,password)}>
          Submit
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wholeView: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerView: {
    marginTop: 70,
    marginHorizontal: 20,
  },
  buttonStyle: {
    marginTop: 20,
  },
});

export default LoginScreen;
