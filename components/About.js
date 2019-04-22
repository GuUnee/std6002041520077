// import libray
import React, { Component } from 'react';
import { View, Text, ActivityIndicator, Button } from 'react-native';
import axios from 'axios';

// write component 
class About extends Component {
    static navigationOptions = {
        title: 'Profile'
    }
    constructor() {
        super();
        this.state ={
            name: '',
            email: ''
        }
    }

    componentDidMount() {
        const url = 'http://128.199.240.120:9999/api/auth/me';
        const config = {
            headers: {
                accept: '*/*',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1Y2FlZjUzMjBhYTc3ZjQwYzQyZjA1NDEiLCJpYXQiOjE1NTU5MTk5Njh9.6Ut4Z0oV1cFRdD36oK7PQ_mdeSWw3TYEzWh60WlYrAI'
            }
        }

        axios.get(url, config)
            .then(response => {
                console.log(response.data.data);
                this.setState({
                    email: response.data.data.email,
                    name: response.data.data.name
                })
            })
            .catch(error => {
                console.log('error', error);
            })
    }

    render() {
        if (this.state.name == '') {
            return <View>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        }
        return (
            <View>
                <Text style={styles.text}>Name: {this.state.name}</Text>
                <Text style={styles.lastText}>Email: {this.state.email}</Text>
                
                <Button 
                    title="Back"
                    onPress={() =>
                        this.props.navigation.push('Login')}
                />
                
            </View>
        );
    }
}

const styles = {
    text: {
        fontSize: 30
    },
    lastText: {
        fontSize: 30,
        marginBottom: 20
    }
}

// export 
export default About;
