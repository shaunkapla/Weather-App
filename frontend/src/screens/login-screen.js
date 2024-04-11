import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import loginStyles from '../styles/loginStyle';

export default function LoginScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      // Check if username and password match
      if (username === 'Shaun' && password === 'Kapla') {
        // Navigate to WelcomeScreen and pass firstName and lastName
        navigation.navigate('Welcome', { firstName: username, lastName: password });
      } else {
        // Show an alert for incorrect credentials
        Alert.alert('Invalid Credentials', 'Please enter correct username and password.');
      }
    };
  
    return (
      <SafeAreaView style = {loginStyles.safeArea}>
        <View style={loginStyles.container}>
          <TextInput
            style={loginStyles.input}
            placeholder="Username"
            value={username}
            onChangeText={text => setUsername(text)}
          />
          <TextInput
            style={loginStyles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <Button
            title="Login"
            onPress={handleLogin}
          />
        </View>
      </SafeAreaView>
    );
  }