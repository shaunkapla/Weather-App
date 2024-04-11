from services.weather_service import WeatherService

class WeatherHandler:
    
    @staticmethod
    def get_current_weather(location_id):
        """
        Retrieves current weather data for the specified location.
        """
        weather_data = WeatherService.fetch_current_weather(location_id)
        return weather_data