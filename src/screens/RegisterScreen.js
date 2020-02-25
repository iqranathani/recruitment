import React from 'react';
import {View, Text, StyleSheet, TextInput } from 'react-native';

const RegisterScreen = () => {
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
                <Text style={styles.textStyle}>SIGN UP</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({});

export default RegisterScreen;