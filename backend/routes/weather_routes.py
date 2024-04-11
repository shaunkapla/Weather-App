from flask import Blueprint, request, jsonify
from handlers.weather_handler import WeatherHandler

weather_bp = Blueprint('weather', __name__)

@weather_bp.route('/current-weather', methods=['GET'])
def get_current_weather():
    """
    Retrieves current weather data for a specific location.
    """
    
    location = request.args.get('location')
    if not location:
        return jsonify({'error': 'Location ID is required'}), 400
    
    weather_data = WeatherHandler.get_current_weather(location)
    return weather_data