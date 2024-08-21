import axios from "axios"
import { getCoordinates } from "./getCoordinate"

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

      return { weatherHourly, weatherDaily }
    }
  } catch (error) {
    console.error("Ошибка при получении данных по городу:", error)
  }
}

export function getNewState(
  state: Record<string, number[]> | null,
  value: string,
  index: number,
  number: number
) {
  if (state === null) return 0
  let count = 0

  for (let i = 0; i < number; i++) {
    count += state[value][index + i]
  }
  // console.log(count)
  return count
}

export function getDayTime(index: number) {
  let daytime: string = ""
  if (index % 24 === 0) {
    daytime = "Ночь"
  } else if (index % 24 === 6) {
    daytime = "Утро"
  } else if (index % 24 === 12) {
    daytime = "День"
  } else if (index % 24 === 18) {
    daytime = "Вечер"
  }
  return daytime
}

export function getArrayNumber(
  state: Record<string, number[]> | null,
  value: string,
  index: number,
  number: number
) {
  if (state === null) return []
  const array: number[] = []
  for (let i = 0; i < number; i++) {
    array.push(state[value][index + i])
  }
  // console.log(value, array)
  return array
}
