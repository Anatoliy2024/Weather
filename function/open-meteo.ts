import axios from "axios"

const getCoordinates = async (city: string) => {
  try {
    const response = await axios.get(
      "https://nominatim.openstreetmap.org/search",
      {
        params: {
          q: city,
          format: "json",
          limit: 1,
        },
      }
    )
    if (response.data.length > 0) {
      const { lat, lon } = response.data[0]
      return { latitude: lat, longitude: lon }
    } else {
      throw new Error("Город не найден")
    }
  } catch (error) {
    console.error("Ошибка при получении координат:", error)
  }
}

const getWeatherData = async (latitude: number, longitude: number) => {
  try {
    const response = await axios.get("https://api.open-meteo.com/v1/forecast", {
      params: {
        latitude: latitude,
        longitude: longitude,
        hourly: [
          "temperature_2m",
          "precipitation_probability",
          "precipitation",
          "rain",
          "showers",
          "snowfall",
          "weather_code",
          "wind_speed_10m",
        ],

        daily: [
          "weather_code",
          "temperature_2m_max",
          "temperature_2m_min",
          "precipitation_sum",
          "rain_sum",
          "showers_sum",
          "wind_speed_10m_max",
          "wind_gusts_10m_max",
          "precipitation_probability_max",
        ],
        timezone: "Europe/Berlin", // Укажите нужный часовой пояс
      },
    })

    return response.data
  } catch (error) {
    console.error("Ошибка при получении погоды:", error)
    throw error
  }
}

export const fetchWeatherByCity = async (city: string) => {
  try {
    const coordinates:
      | {
          latitude: number
          longitude: number
        }
      | undefined = await getCoordinates(city)

    if (coordinates !== undefined) {
      const { latitude, longitude } = coordinates
      const weatherData = await getWeatherData(latitude, longitude)
      const weatherHourly = weatherData.hourly
      const weatherDaily = weatherData.daily
      console.log({ weatherHourly, weatherDaily })
      // Формирование времени
      // const times = weather.time.map((timestamp: any) => new Date(timestamp))
      // const temperatures = weather.temperature_2m

      // // Вывод данных
      // times.forEach((time: any, index: number) => {
      //   console.log(`${time.toISOString()}: ${temperatures[index]}°C`)
      // })
      return { weatherHourly, weatherDaily }
    }
  } catch (error) {
    console.error("Ошибка при получении данных по городу:", error)
  }
}
