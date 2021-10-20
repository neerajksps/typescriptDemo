import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {usersProps} from '../Screens/HomeScreen';

type userViewProps = {
  item: usersProps;
};

const UserView = (props: userViewProps) => {
  const {image, name, address, age} = props.item;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.wholeView}
      //@ts-ignore
      onPress={() => navigation.navigate('userProfile', {item: props.item})}
      activeOpacity={0.7}>
      <Image source={image} style={styles.imageView} />
      <View style={styles.itemsInRow}>
        <View>
          <Text style={styles.placeholderLabel}>Name:-</Text>
          <Text style={styles.placeholderLabel}>Address:-</Text>
          <Text style={styles.placeholderLabel}>Age:-</Text>
        </View>
        <View>
          <Text style={styles.valueLabel}>{name}</Text>
          <Text style={styles.valueLabel}>{address}</Text>
          <Text style={styles.valueLabel}>{age}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wholeView: {
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageView: {
    height: 80,
    width: 80,
  },
  itemsInRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    marginHorizontal: 10,
  },
  placeholderLabel: {
    fontSize: 18,
    color: 'gray',
  },
  valueLabel: {
    fontSize: 18,
    color: 'black',
  },
});

export default UserView;
