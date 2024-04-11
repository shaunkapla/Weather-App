import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import weatherSphereStyle from '../styles/weatherSphereStyle';

function WeatherSphereComp({ size, color, data, text }) {
    return (
        <SafeAreaView style={weatherSphereStyle.safeArea}>
            <View style={weatherSphereStyle.container}>
                <View style={[weatherSphereStyle.circle, { width: size, height: size, backgroundColor: color }]}>
                    <Text style={weatherSphereStyle.weatherInfo}>{data ? data : 'Loading...'}</Text>
                </View>
            </View>
            <Text style={weatherSphereStyle.sphereInfo}>{text}</Text>
        </SafeAreaView>
    );
}

export default WeatherSphereComp;