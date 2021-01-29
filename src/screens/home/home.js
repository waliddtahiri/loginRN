import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class Home extends Component {

    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
    }

    logOut = () => {
        this.props.navigation.navigate('Login');
    }

    render() {
        let username = this.props.route.params.username;
        return (
            <SafeAreaView style={styles.container}>
                <TouchableOpacity style={styles.headerContainer1}>
                    <Text style={styles.headerText}>Currently log with</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.userInformation}>
                    <Image source={require('../../../images/unknown.jpg')}
                        style={{ width: 70, height: 70, borderRadius: 70 / 2 }}
                    />
                    <Text style={styles.textInfo}>{username}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.headerContainer2}>
                    <Text style={styles.headerText}>Connect with</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.userInformation}>
                    <Image source={require('../../../images/unknown.jpg')}
                        style={{ width: 70, height: 70, borderRadius: 70 / 2 }}
                    />
                    <Text style={styles.textInfo}>Charlie Smith</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.userInformation}>
                    <Image source={require('../../../images/unknown.jpg')}
                        style={{ width: 70, height: 70, borderRadius: 70 / 2 }}
                    />
                    <Text style={styles.textInfo}>Business Account</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.userInformation}>
                    <Ionicons name="ios-add-circle" size={75} color="mediumslateblue" />
                    <Text style={styles.addAccountText}>Add another account</Text>
                </TouchableOpacity>
                <View>
                    <TouchableOpacity style={styles.buttonContainer1} onPress={this.logOut}>
                        <Text style={styles.buttonText1}>Log out from current account</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonContainer2} onPress={this.logOut}>
                        <Text style={styles.buttonText2}>Log out from all accounts</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }

}

const styles = StyleSheet.create({
    headerContainer1: {
        marginTop: 100,
        marginLeft: 20
    },
    headerContainer2: {
        marginTop: 70,
        marginLeft: 20
    },
    headerText: {
        fontSize: 32
    },
    userInformation: {
        marginTop: 15,
        marginLeft: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textInfo: {
        fontSize: 20,
        marginLeft: 5
    },
    addAccountText: {
        color: '#7B68EE',
        fontSize: 20,
        marginLeft: 5
    },
    buttonContainer1: {
        alignSelf: 'stretch',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 30,
        marginBottom: 5,
        padding: 15,
        borderRadius: 15,
        backgroundColor: '#7B68EE'
    },
    buttonContainer2: {
        alignSelf: 'stretch',
        marginLeft: 20,
        marginRight: 20,
        padding: 15,
    },
    buttonText1: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonText2: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    container: {
        flex: 1,
        backgroundColor:"#FFFFFF"
    }
});

export default Home;