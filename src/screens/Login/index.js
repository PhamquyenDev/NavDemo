import { StatusBar } from 'expo-status-bar';
import React,  { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import ListWorks from "../Listworks";


function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <TextInput
				style={[styles.input, styles.username]}
				placeholder='Username'
			></TextInput>
			<TextInput 
        style={styles.input} placeholder='Password'
        secureTextEntry
      ></TextInput>

      <TouchableOpacity 
        style={styles.btnLogin}
				onPress={() => navigation.navigate('ListWorks')}
      >
        <Text style={styles.textLogin}>Login</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
		width: 300,
		height: 40,
		backgroundColor: 'rgba(0,0,0,.1)',
		borderRadius: 7,
		fontSize: 20,
		paddingHorizontal: 15,
	},
	username: {
		marginBottom: 10,
	},
  btnLogin: {
    width: 300,
    height: 40,
    borderRadius: 7,
    backgroundColor: '#000',
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textLogin: {
      color: '#fff',
      fontSize: 17,
      fontWeight: 'bold'
  }
});

export default Login;
