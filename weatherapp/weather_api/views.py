from requests import get
from .models import WeatherData


def get_weather(request, city):
    # Fetch data from OpenWeatherMap API
    url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid=a01896a455ac98eb57240329f6388c43&units=metric"
    response = get(url)
    data = response.json()

    # Save data to model and return
    weather_data = WeatherData(
        city=city,
        temperature=data["main"]["temp"],
        icon=data["weather"][0]["icon"],
        description=data["weather"][0]["main"],
    )
    weather_data.save()
    return JsonResponse(weather_data)
