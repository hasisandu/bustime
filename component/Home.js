import React from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('../assets/logo.jpg')}>
                </Image>

                <ScrollView>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('DashBoard')
                        }}
                    >
                        <Image
                            style={styles.lang}
                            source={require('../assets/eng.jpg')}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('DashBoard')
                        }}
                    >
                        <Image
                            style={styles.lang}
                            source={require('../assets/sin.jpg')}>
                        </Image>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('DashBoard')
                        }} s
                    >
                        <Image
                            style={styles.lang}
                            source={require('../assets/tam.jpg')}>
                        </Image>
                    </TouchableOpacity>


                </ScrollView>

                <View style={styles.footer}>
                    <Text style={styles.footer_text}>All Rights Reserved © bustime.lk</Text>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        marginTop: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    logo: {
        width: '100%',
        height: 85,
        marginBottom: 30
    },
    lang: {
        width: '100%',
        height: 50,
        marginBottom: 25
    },
    footer: {
        backgroundColor: '#2c3e50',
        width: '100%',
        height: 50,
        justifyContent: 'center',
    },
    footer_text: {
        textAlign: 'center',
        fontSize: 16,
        color: 'white'
    }
});