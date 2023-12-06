class WeatherData(models.Model):
    city = models.CharField(max_length=100)
    temperature = models.FloatField()
    icon = models.CharField(max_length=50)
    description = models.CharField(max_length=255)
