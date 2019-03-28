//import library

import React from 'react';
import {View, Text} from 'react-native';
import Header from './Header';
import Card from './Card';

//component
class App extends React.Component{
    render(){
        return(
            <View>
                <Header title="index" />
                <Text> hello pairat jankai std6002041520077 </Text>
                <Card />
            </View>
        );
    }
}
export default App;
