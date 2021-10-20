import React, {ReactNode} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

interface ButtonProps {
  children: ReactNode;
  onPress: () => void;
  viewStyle: {};
}

const Button = (props: ButtonProps) => {
  const {children, viewStyle, onPress} = props;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => onPress && onPress()}
      style={[styles.buttonView, viewStyle]}>
      <Text style={styles.labelView}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    height: 50,
    backgroundColor: 'skyblue',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelView: {
    fontSize: 20,
    color: 'black',
  },
});

export default Button;
