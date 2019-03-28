import React, { Component } from 'react';
import { View, Text, Image,Button } from 'react-native';
import CardSection from './CardSection';

class Card extends Component{
    render(){
        return(
            <View>
                <CardSection>
                    <Image 
                        style={{width:50, height:50}}
                        source={{uri:'http://icons.iconarchive.com/icons/paomedia/small-n-flat/512/user-male-icon.png'}}
                    />
                    <Text>Why not?</Text>
                </CardSection>

                <CardSection>
                    <View style={styles.button}>
                        <Image 
                                style={{width:400, height:400}}
                                source={{uri:'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'}}
                        />
                    </View>
                </CardSection>  
                 
                <CardSection>
                    <View style={styles.button}>
                            <Button
                                title="Buy"
                            />
                    </View>
                </CardSection>
            </View>
        );
    }
}
const
    styles={
        Button:{
            justifyContent:'center', 
            alginItems:'center',
            marginTop:10
        },
        Image:{
            justifyContent:'center', 
            alginItems:'center',
        }
    }
//stype


export default Card;
