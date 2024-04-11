import requests

class WeatherService:

    @staticmethod
    def fetch_current_weather(location):
        """
        Fetches current weather data for the specified location from an Tomorrow.io API.
        
        Will fill in more later
        """

        api_key = 'tomorrow.io api key'
        units = 'imperial'
        location = location
        url = f"https://api.tomorrow.io/v4/weather/realtime?location={location}&apikey={api_key}&units={units}"

        headers = {"accept": "application/json"}

        response = requests.get(url, headers=headers)
        response = response.json()
        weather_data = response["data"]["values"]
        loc_data = response["location"]

        return {
            'location_id': loc_data["name"],
            'temperature': weather_data["temperature"],
            'humidity': weather_data["humidity"],
            'uvIndex': weather_data["uvIndex"]
        }