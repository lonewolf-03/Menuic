import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import background from '../background.jpg'

export default function About(props) {

    const goToHome = () => {
        props.navigation.goBack();
    };

    const { menu } = props.route.params;

    return (
        <View style={styles.screen}>
            <ImageBackground source={background} style={styles.backgroundImg}>
                <View style={styles.main}>
                    <Text style={styles.txt}>
                        The staff of {menu.restaurant_name} is happy to {'\n'}
                        serve you:{'\n'}
                              {'\t\t\t\t'}Shehab Elhadary{'\n'}
                              {'\t\t\t\t'}Mohamed Ayman{'\n'}
                              {'\t\t\t\t'}Mostafa Osama{'\n'}
                              {'\t\t\t\t'}Maged Amgad{'\n'}
                        We are waiting for you at {menu.location} !{'\n'}
                        We are happy to hear your suggestions at the following {'\n'}
                        numbers : {'\n'}
                        {'\t\t\t\t'}+(20) 1042871985{'\n'}
                        {'\t\t\t\t'}+(20) 1143983497{'\n'}
                    </Text>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundImg : {
        flex: 1

    },
    screen : {
        flex: 1,
        backgroundColor: '#FFA605'
    },

    main : {
        flex: 9,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    txt : {
        padding: 20,
        fontWeight: '700',
        fontSize: 20,
        color: '#718F97'
    }
});

