import React , {useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Navigator from './Stack';
import useFetch from './hooks/useFetch';

function App() {
    const { menu, isLoading, error } = useFetch('http://10.0.2.2:8000/resturant');
    
    return(
        <>
            {isLoading && <View style={styles.loading}><Text>Loading...</Text></View>}
            {menu && <Navigator menu={menu} />}
        </>
    );
}

const styles = StyleSheet.create({
    loading : {
        flex: 1,
        backgroundColor: '#718F97',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default App;