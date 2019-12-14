import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './component/Home'
import DashBoard from './component/DashBoard'
import TimeAndBuses from './component/TimeAndBuses'


export default class App extends React.Component {
    render() {
        return <AppContainer/>;
    }
}

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen
    },
    DashBoard: {
        screen: DashBoard
    },
    TimeAndBuses: {
        screen: TimeAndBuses
    }
});

const AppContainer = createAppContainer(AppNavigator);

/*
export default function App() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('./assets/logo.jpg')}>
            </Image>

            <ScrollView>
                <Image
                    style={styles.lang}
                    source={require('./assets/eng.jpg')}>
                </Image>
                <Image
                    style={styles.lang}
                    source={require('./assets/sin.jpg')}>
                </Image>
                <Image
                    style={styles.lang}
                    source={require('./assets/tam.jpg')}>
                </Image>
            </ScrollView>

            <View style={styles.footer}>
                <Text style={styles.footer_text}>All Rights Reserved © bustime.lk</Text>
            </View>

        </View>
    );
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
    footer_text:{
        textAlign: 'center',
        fontSize:16,
        color:'white'
    }
});
*/
