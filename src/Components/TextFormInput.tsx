import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';

interface InputProps {
  placeholder: string;
  onChangeText: (data: string) => void;
  value: string;
}

const TextFormInput = (props: InputProps) => {
  const {placeholder, onChangeText, value} = props;

  return (
    <View style={styles.wholeView}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        style={styles.inputView}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wholeView: {
    height: 50,
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  inputView: {
    flex: 1
  }
});

export default TextFormInput;
