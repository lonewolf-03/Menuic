import React, { useState, useMemo } from 'react';
import {ScrollView, View, Text, TouchableOpacity, StyleSheet, Modal, ImageBackground, Image, Pressable } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import background from '../background.jpg'

export default function MainMenu(props) {

    const goToHome = () => {
        props.navigation.goBack();
    };

    const { menu } = props.route.params;

    const [modals, setModals] = useState(Array.from({length: menu.dishesNum}, (value, index) => false));

    const show = (i) => {
        setModals(modals.map((value, index) => ((index === i)?true:false)));
    }

    const hide = () => {
        setModals(modals.map(() => (false)));
    }


    return (
            <View style={styles.screen}>
                <ImageBackground source={background} style={styles.backgroundImg}>
                    <FlatList style={styles.items} data={menu.menu_sections}
                    renderItem={({item}) => (
                        <View style={styles.section}>
                            <Text style={styles.sectionTxt}>{item.section_name}</Text>
                            <FlatList style={styles.dish} data={item.dishes} renderItem={({item}) => (
                                <>
                                    <TouchableOpacity id={item.id} style={styles.dishTouch} onPress={() => {show(item.id)}}><Text style={styles.dishTxt}>{item.dish_name}</Text><Text style={styles.dishTxt}>{item.price} EGP</Text></TouchableOpacity>
                                    <Modal id={item.id} style={styles.modal} visible={modals[item.id]} animationType='fade' onRequestClose={hide} transparent>
                                        <Pressable onPress={hide} style={styles.upper}/>
                                        <View style={styles.lower}>
                                            <Text style={styles.lowerTitle}>{item.dish_name}</Text>
                                            <Image style={styles.lowerImg} source={{uri: item.image_url}}/>
                                            <Text style={styles.lowerTxt}>{item.description}</Text>
                                            <Text style={styles.lowerTxt}>Price: {item.price} EGP</Text>
                                            <Text style={styles.lowerTxt}>Rating: {item.rating}</Text>
                                        </View>
                                    </Modal>
                                </>               
                            )}/>
                        </View>
                    )}/>
                </ImageBackground>
            </View>
    );
}

const styles = StyleSheet.create({
    backgroundImg: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    screen : {
        flex: 1
    },

    items: {
        flex: 1
    },

    section: {
        marginBottom: 15,
        borderRadius: 15,
        backgroundColor: '#718F97',
        padding: 10
    },

    dish: {
        
    },
    
    dishTouch: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        marginBottom: 10,
    },

    dishTxt: {
        fontWeight: '700',
        fontSize: 20,
        color: 'black'
    },

    sectionTxt: {
        fontSize: 30,
        fontWeight: '900',
        color: 'black'
    },

    modal: {
        flex: 1
    },

    upper: {
        flex: 1
    },

    lower: {
        flex: 4,
        padding: 15,
        backgroundColor: '#718F97'
    },

    lowerTitle: {
        marginTop: 30,
        fontSize: 30,
        fontWeight: '900',
        color: 'black'
    },

    lowerTxt : {
        marginTop: 20,
        fontSize: 20,
        fontWeight: '700',
        color: 'black'
    },

    lowerImg : {
        marginBottom: 10,
        marginTop: 10,
        width: '100%',
        height: '40%'
    }
});

