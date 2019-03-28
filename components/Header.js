//library
import React, { Component } from 'react';
import { View, Text } from 'react-native';


//creaat component

class Header extends Component {
    render(){
        return(
            <View style={styles.Header}>
                <Text style={styles.text}>{this.props.title}</Text>
            </View>
        );
    }
}

//style
const styles={
    Header: {
        padding: 20,
        alignItems: 'center',
        backgroundColor: "#66ff99"
    },
    text:{
        fontSize: 35,
        color: "#3333ff"
    }
}
//export
export default Header;
