import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import welcomeStyles from '../styles/welcomeStyle'
import { SafeAreaView } from 'react-native-safe-area-context';
import SphereGrid from '../components/sphereGridComp';
import image from '../../assets/star-background.jpeg'


export default function WelcomeScreen({ route }) {
  const { firstName, lastName } = route.params;

  return (
    <ImageBackground source={image} resizeMode="cover" style={welcomeStyles.image}>
      <SafeAreaView style = {welcomeStyles.safeArea}>
          <View style={welcomeStyles.container}>
                <Text style = {welcomeStyles.welcomeText}>
                  Welcome, {firstName} {lastName}!
                </Text>
                <View style={welcomeStyles.gridContainer}>
                  <SphereGrid />
                </View>
          </View>
      </SafeAreaView>
    </ImageBackground>
  );
}