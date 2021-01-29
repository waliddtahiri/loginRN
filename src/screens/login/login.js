import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

var _ = require('lodash');

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lastName: "Tahiri",
            firstName: "Walid",
            password: ['', '', '', '']
        }
    }

    onPressNum = number => {
        let { password, firstName, lastName } = this.state;
        let username = firstName + " " + lastName;
        let truePassword = ['5', '5', '5', '5'];
        for (let i = 0; i < password.length; ++i) {
            if (password[i] == '') {
                password[i] = number.id.toString();
                break;
            }
        }
        this.setState({
            password
        })

        if (_.isEqual(password, truePassword)) {
            this.setState({
                password: ['', '', '', '']
            })
            this.props.navigation.navigate('Home', {username});
        }

    }

    onPressDel = () => {
        let { password } = this.state;
        for (let i = password.length - 1; i >= 0; --i) {
            if (password[i] != '') {
                password[i] = ''
                break;
            }
        }
        console.log(password)
        this.setState({
            password
        })
    }

    render() {
        const { lastName } = this.state;
        const { firstName } = this.state;
        let numbers = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 },
        { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, , { id: 0 }]
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.userInformation}>
                    <Image source={require('../../../images/unknown.jpg')}
                        style={{ width: 70, height: 70, borderRadius: 70 / 2 }}
                    />
                    <Text style={styles.textInfo}>{firstName} {lastName}</Text>
                    <TouchableOpacity>
                        <Text style={styles.notMe}>Not me</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.passwordContainer}>
                    {this.state.password.map((p, i) => {
                        let style = p != '' ? styles.passwordFilled : styles.password;
                        return <View style={style} key={i}></View>;
                    })}
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={styles.numbersContainer}>
                        {numbers.map(number => {
                            return <TouchableOpacity style={styles.numberButton} key={number.id} onPress={() => this.onPressNum(number)}>
                                <Text style={styles.numberText}>{number.id}</Text>
                            </TouchableOpacity>
                        })}
                    </View>
                </View>
                <View style={styles.forgotButton}>
                    <TouchableOpacity>
                        <Text style={styles.buttonText}>Forgot?</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.arrowButton}>
                    <TouchableOpacity onPress={() => this.onPressDel()}>
                        <AntDesign name="arrowleft" size={34} color="black" />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }

}

const styles = StyleSheet.create({
    userInformation: {
        marginTop: 70,
        height: 173,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textInfo: {
        marginTop: 10,
        fontSize: 17,
        lineHeight: 22
    },
    notMe: {
        marginTop: 15,
        fontSize: 17,
        color: '#7B68EE',
        lineHeight: 22
    },
    passwordContainer: {
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    password: {
        width: 13,
        height: 13,
        borderRadius: 13,
        borderWidth: 1,
        margin: 15,
        borderColor: '#7B68EE',
    },
    passwordFilled: {
        width: 13,
        height: 13,
        borderRadius: 13,
        margin: 15,
        backgroundColor: '#7B68EE'
    },
    forgotButton: {
        marginTop: -10,
        marginLeft: -200
    },
    arrowButton: {
        marginTop: -20,
        marginLeft: 300
    },
    buttonText: {
        fontSize: 19,
        textAlign: 'center'
    },
    numberButton: {
        width: 75,
        height: 75,
        borderRadius: 75,
        margin: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numbersContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20,
        width: 350,
        height: 348,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        fontSize: 42,
        letterSpacing: 0,
        textAlign: 'center'
    },
    container: {
        flex: 1,
        backgroundColor:"#FFFFFF"
    }
});

export default Login;