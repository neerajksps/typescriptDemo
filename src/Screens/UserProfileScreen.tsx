import React from 'react';
import {View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { backIcon } from '../Assets/images';

interface UserProfileScreenProps {
  route: {
    params: {
      item: {
        image: number;
        name: string;
        address: string;
        age: number;
      };
    };
  };
}

const UserProfileScreen = (props: UserProfileScreenProps) => {
  const navigation = useNavigation();
  const {image, name, address, age} = props.route.params.item;
  return (
    <View style={styles.wholeView}>
      <ImageBackground source={image} style={styles.userImageView} >
        <TouchableOpacity 
            onPress={() => navigation.goBack()}
        >
            <Image
                source={backIcon}
            />
            </TouchableOpacity>
    </ImageBackground>
      <View style={styles.userDetailView}>
        <View style={styles.itemInRow}>
          <View>
            <Text style={styles.placeholderLabel}>Name:-</Text>
            <Text style={styles.placeholderLabel}>Address:-</Text>
            <Text style={styles.placeholderLabel}>Age:-</Text>
          </View>
          <View>
            <Text>{name}</Text>
            <Text>{address}</Text>
            <Text>{age}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wholeView: {
    flex: 1,
  },

  userImageView: {
    flex: 0.5,
    paddingTop: 30,
    paddingLeft: 10
  },

  userDetailView: {
    flex: 0.5,
    paddingTop: 10
  },

  itemInRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10
  },

  placeholderLabel: {
    fontSize: 18,
    color: 'grey',
  },

  valueLabel: {
    fontSize: 18,
    color: 'black',
  },
});

export default UserProfileScreen;
