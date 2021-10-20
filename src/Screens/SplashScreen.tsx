import React, { useEffect } from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
const SplashScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(()=> {
            // @ts-ignore
            navigation.navigate('login')
        },2000)
        
    },[])

    return (
        <ImageBackground
            source={{ uri: 'https://image.shutterstock.com/image-photo/nature-background-table-wood-product-260nw-285662423.jpg'}}
            style={styles.wholView}
        />
    )
}

const styles = StyleSheet.create({
    wholView: {
        flex: 1
    }
})

export default SplashScreen;