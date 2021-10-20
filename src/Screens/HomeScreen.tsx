import React from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import {manImage} from '../Assets/images';
import UserView from '../Components/UserView';

const users = [
  {
    image: manImage,
    name: 'Neeraj',
    address: 'Ambala',
    age: 25,
  },
  {
    image: manImage,
    name: 'Rahul',
    address: 'Mumbai',
    age: 22,
  },
  {
    image: manImage,
    name: 'Gagan',
    address: 'Delhi',
    age: 21,
  },
  {
    image: manImage,
    name: 'Anirudh',
    address: 'Mohali',
    age: 28,
  },
];

export type usersProps = {
  image: number;
  name: string;
  address: string;
  age: number;
};

const HomeScreen = () => {
  const renderItem = ({item}: {item: usersProps}) => {
    return <UserView item={item} />;
  };

  return (
    <View style={styles.wholeView}>
      <FlatList data={users} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  wholeView: {
    flex: 1,
    marginTop: 30,
  },
});

export default HomeScreen;
