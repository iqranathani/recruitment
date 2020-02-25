import React, { useState } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import firebase from 'react-native-firebase';

const LoginScreen = ({ navigation }) => { 
    const[email,setEmail]=useState('zeeshan.sikander@live.com');
    const[password,setPassword]=useState('123456');

    const handleLogin = () => {
    
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then((user) => console.log(user))
          .catch(error => setErrorMessage(error.message))
    }
   

    return (
        <View>
            <TextInput 
               autoCapitalize="none"
               autoCorrect={false}
               style={styles.inputStyle} 
               placeholder="Enter Your Email"
               value={email}
               onChangeText={(newEmail) => setEmail(newEmail)}
            />
             <TextInput 
               autoCapitalize="none"
               autoCorrect={false}
               style={styles.inputStyle} 
               placeholder="Enter Your Password"
               secureTextEntry={true}
               value={password}
               onChangeText={(newPassword) => setPassword(newPassword)}
            />
            <TouchableOpacity 
                style={styles.TouchableOpacityStyle}
                onPress={()=>handleLogin()}
            >
                <Text style={styles.textStyle}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{ alignSelf: "center", marginTop: 5}}
                onPress={() => navigation.navigate('Register')}
            >
                <Text>New to App ? SignUp</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    inputStyle: {
        marginTop: 10 ,
        backgroundColor: 'white' ,
        height: 40 ,
        borderRadius: 30,
        width:"60%",
        alignSelf: "center",
        flexDirection: "row",
        borderWidth: 1 ,
        borderColor: '#DCDCDC',
        color: 'black',
        paddingHorizontal: 10
    },
    TouchableOpacityStyle: {
        marginTop: 20 ,
        backgroundColor: '#274962',
        height: 30 ,
        borderRadius: 30,
        alignSelf: "center",
        width: 220,
        color: 'white',
        justifyContent: "center"
    },
    textStyle: {
        color: 'white',
        alignSelf:"center"
    }
});

export default LoginScreen;