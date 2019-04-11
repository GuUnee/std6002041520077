//import Library
import React from 'react';
import { View,Text } from 'react-native';
import Header from './Header';
import Card from './Card';
import Login from './Login';
//Writer components
class App extends React.Component {
    render(){
        return(
            <View>
                <Header title="ALBUMS" />
                {/* <Text>.....................................</Text> */}
                <Card/>
            </View>
        );
    }
}

//export
export default App;
