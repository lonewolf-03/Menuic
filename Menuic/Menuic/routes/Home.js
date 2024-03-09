import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import background from '../background.jpg'

export default function Home(props) {
    const goToMenu = () => {
        props.navigation.navigate('Menu');
    }

    const goToAbout = () => {
        props.navigation.navigate('About');
    }

    const { menu } = props.route.params;
     
    return(
        <View style={styles.main}>
            <ImageBackground source={background} style={styles.backgroundImg}>
                <Text style={styles.logo}>{menu.restaurant_name}</Text>
                <TouchableOpacity style={styles.button} onPress={goToMenu}><Text style={styles.buttonTxt}>Explore Menu</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={goToAbout}><Text style={styles.buttonTxt}>About</Text></TouchableOpacity>
            </ImageBackground>
        </View>
    );

}



const styles = StyleSheet.create({
    backgroundImg: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    main : {
        flex: 1
    },

    logo: {
        fontSize: 50,
        marginBottom: 30,
        color : '#718F97',
        fontFamily: 'ADLaM Display Regular'
    },


    button: {
        backgroundColor: '#718F97',
        marginBottom: 20,
        borderRadius: 20,
        fontWeight: '400',
        height: 40,
        width: 150,
    }, 

    buttonTxt : {
        textAlign: 'center',
        fontSize: 20,
        color: 'black'
    }
});

