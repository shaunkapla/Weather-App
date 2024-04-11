import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import WeatherSphereComp from './weatherSphereComp';
import gridStyle from '../styles/gridStyle';

const your_system_ip = 'input system ip'
const url = "http://${your_system_ip}:8080/current-weather?location='Colorado Springs'";

function SphereGrid() {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url)
                const data = await response.json();
                console.log(data)
                setWeatherData(data);
                
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <View style={gridStyle.border}>
            <View style={gridStyle.content}>
                <WeatherSphereComp size={100} color={"white"} text = {"temperature"} data={weatherData && weatherData.temperature} />
                <WeatherSphereComp size={100} color={"white"} text = {"temperature"} data={weatherData && weatherData.temperature} />
            </View>
            <View style={gridStyle.content}>
                <WeatherSphereComp size={100} color={"white"} text = {"temperature"} data={weatherData && weatherData.temperature} />
                <WeatherSphereComp size={100} color={"white"} text = {"temperature"} data={weatherData && weatherData.temperature} />
            </View>
            <View style={gridStyle.content}>
                <WeatherSphereComp size={100} color={"white"} text = {"temperature"} data={weatherData && weatherData.temperature} />
                <WeatherSphereComp size={100} color={"white"} text = {"temperature"} data={weatherData && weatherData.temperature} />
            </View>
        </View>
    );
}

export default SphereGrid;