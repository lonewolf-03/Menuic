import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MainMenu  from './routes/MainMenu';
import About from './routes/About';
import Home from './routes/Home';



const Stack = createStackNavigator();


export default function Navigator({menu}) {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} initialParams={{menu: menu}} options={{headerStyle: {backgroundColor:'#718F97'}, headerTintColor : 'black', headerTitleStyle: {fontWeight: 'bold'}}}/>
                <Stack.Screen name="Menu" component={MainMenu} initialParams={{menu : menu}} options={{headerStyle: {backgroundColor:'#718F97'}, headerTintColor : 'black', headerTitleStyle: {fontWeight: 'bold'}}}/>
                <Stack.Screen name="About" component={About} initialParams={{menu : menu}} options={{headerStyle: {backgroundColor:'#718F97'}, headerTintColor : 'black', headerTitleStyle: {fontWeight: 'bold'}}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

