from flask import Flask
from flask_cors import CORS
from routes.weather_routes import weather_bp

app = Flask(__name__)
CORS(app)

# Register the weather blueprint
app.register_blueprint(weather_bp)

#Don't need debug=True right now
if __name__ == '__main__':
    app.run(host='yoursystemip', port=8080)