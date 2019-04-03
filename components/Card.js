import React, {Component} from 'react';
import {View,Text,Image,Button,Dimensions} from 'react-native';
import CardSection from './CardSection';

class Card extends Component{
    render(){
        return(
        <View>
            <CardSection>
                <View>
                    <View style={{margin:5,marginTop:15,flexDirection: 'row'}}>
                            <View style={{ width: 100, height: 100 }}>
                                <Image 
                                    source={{ uri: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi_nLOFz7PhAhXP63MBHVHCBkIQjRx6BAgBEAU&url=https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUCK-JOh6HwRaA-0_g5NRQExg&psig=AOvVaw3kIiyC69wiqEKogfUUkRLl&ust=1554370336387351' }} 
                                    style={{ width: 100, height: 100 }}
                                />
                            </View>
                            <View style={{margin:10}}>
                                <Text style={styles.text}>  PLAYERUNKNOWN’S BATTLEGROUNDS</Text>
                                <Text style={styles.text}>  Boy Minoru</Text></View>
                    </View>
                </View>
            </CardSection>

            <CardSection>
            <View style={styles.button}>
                <Image 
                    source={{ uri: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiX4tH4zrPhAhWc7XMBHbc7BboQjRx6BAgBEAU&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DETbQy11SPW8&psig=AOvVaw3kIiyC69wiqEKogfUUkRLl&ust=1554370336387351' }} 
                    style={{ width: 400, height: 350}}/>
            </View>
            </CardSection>

            <CardSection >
                <View style={styles.button}>
                    <View style={{width: 100 }}>
                        <Button 
                            title="BUY NOWW" 
                            color= "#910606" />
                    </View>
                </View>
            </CardSection>
        </View>
        );
    }
}

const styles = {
    button : {
        alignItems : 'center',
        justifyContent : 'center',
        margin : 10

    },
    text : {
        fontSize:18
    }
}
export default Card;
