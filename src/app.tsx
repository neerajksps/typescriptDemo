import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Navigation from './Navigation/Navigation';
const App = () => {
    return (
        <View style={styles.wholeView}>
            <Navigation />
        </View>
    )
}

const styles = StyleSheet.create({
    wholeView: {
        flex: 1
    }
})

export default App;