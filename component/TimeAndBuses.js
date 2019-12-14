import React from 'react';
import {Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

export default class DashBoard extends React.Component {
    static navigationOption = {
        header: null
    };

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('../assets/logo.jpg')}>
                </Image>
                <ScrollView>
                    <View style={styles.menuSet}>
                        <View style={styles.menurow}>
                            <TouchableOpacity style={styles.menu}>
                                <View>
                                    <Text style={styles.busesText}>Buses For Your Destination</Text>
                                </View>
                            </TouchableOpacity>

                            <View style={{backgroundColor: 'white', width: '4%'}}>

                            </View>
                            <TouchableOpacity style={styles.menu}>
                                <View>
                                    <Text style={styles.busesText}>Date, Time & Buses</Text>
                                </View>
                            </TouchableOpacity>

                        </View>

                        <View style={styles.menurow}>
                            <TouchableOpacity style={styles.menu}>
                                <View>
                                    <Text style={styles.busesText}>Stand Time Table</Text>
                                </View>
                            </TouchableOpacity>

                            <View style={{backgroundColor: 'white', width: '4%'}}>

                            </View>
                            <TouchableOpacity style={styles.menu}>
                                <View>
                                    <Text style={styles.busesText}>Distance</Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                    </View>

                    <View style={{backgroundColor: '#E6791D', height: 50, justifyContent: 'center'}}>
                        <Text style={{color: 'white', textAlign: 'center', fontSize: 20}}>Buses For Your
                            Destinations</Text>
                    </View>

                    <Text style={{
                        color: '#7f8c8d',
                        textAlign: 'center',
                        fontSize: 20,
                        marginTop: 30
                    }}>
                        Your City
                    </Text>
                    <TextInput
                        style={styles.textinput}
                    />

                    <Text style={{
                        color: '#7f8c8d',
                        textAlign: 'center',
                        fontSize: 20,
                        marginTop: 30
                    }}>
                        Your Destination
                    </Text>
                    <TextInput
                        style={styles.textinput}
                    />

                    <View style={styles.menurow}>
                        <View style={styles.menudates}
                        >
                            <View>
                                <Text style={{
                                    color: '#7f8c8d',
                                    textAlign: 'center',
                                    fontSize: 20,
                                    marginTop: 30
                                }}>
                                    Date
                                </Text>
                                <TextInput
                                    style={styles.textinput}
                                />
                            </View>
                        </View>

                        <View style={{backgroundColor: 'white', width: '4%'}}>

                        </View>
                        <View style={styles.menudates}
                        >
                            <View>
                                <Text style={{
                                    color: '#7f8c8d',
                                    textAlign: 'center',
                                    fontSize: 20,
                                    marginTop: 30
                                }}>
                                    Time
                                </Text>
                                <TextInput
                                    style={styles.textinput}
                                />
                            </View>
                        </View>

                    </View>

                    <TouchableOpacity style={styles.searchbutton}>
                        <Text style={{color: 'white', textAlign: 'center', fontSize: 18}}>Search</Text>
                    </TouchableOpacity>

                    <View style={styles.footer}>
                        <Text style={styles.footer_text}>All Rights Reserved © bustime.lk</Text>
                    </View>
                </ScrollView>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        marginTop: 15,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    logo: {
        width: '100%',
        height: 85,
        marginBottom: 30
    },
    menuSet: {
        width: '100%',
        height: 190,
    },
    menurow: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10
    },
    menu: {
        backgroundColor: '#2c3e50',
        width: '48%',
        height: 80,
        justifyContent: 'center',
    },
    menudates: {
        width: '48%',
        height: 80,
        justifyContent: 'center',
    },
    busesText: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white'
    },
    textinput: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        padding: 10,
        fontSize: 19,
        marginTop: 10
    },
    searchbutton: {
        backgroundColor: '#3498db',
        width: '100%',
        height: 50,
        marginTop: 20,
        justifyContent: 'center',
        marginBottom: 20
    },
    footer: {
        backgroundColor: '#2c3e50',
        width: '100%',
        height: 80,
        justifyContent: 'center',
        marginBottom: 70
    },
    footer_text: {
        textAlign: 'center',
        fontSize: 16,
        color: 'white',
    }
});