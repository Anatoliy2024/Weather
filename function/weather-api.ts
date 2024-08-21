import axios from "axios"

const apiKey: string = import.meta.env.VITE_WEATHER_API_KEY

export const getWeatherDate = async (city: string) => {
  try {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7`
    )
    const dataWeather = response.data

    return dataWeather
  } catch (error) {
    console.error("Ошибка при получении погоды:", error)
    throw error
  }
}

export type Condition = {
  code: number
  icon: string
}

type Day = Record<string, number | Condition>

type Hour = {
  time: string
  [key: string]: number | string | Condition
}

type Location = Record<string, number | string>

export type ForecastValue = {
  date: string
  day: Day
  hour: Hour[]
}

export type Forecast = {
  current: object
  forecast: {
    forecastday: ForecastValue[]
  }
  location: Location
}

export function getNewState(
  state: Hour[] | null,
  value: string,
  index: number,
  number: number
) {
  if (state === null) return 0
  let count = 0

  for (let i = 0; i < number; i++) {
    count += state[index + i][value] as number
  }
  // console.log(count)
  return count
}

export function getArrayNumber(
  state: Hour[] | null,
  value: string,
  index: number,
  number: number
) {
  if (state === null) return []
  const array: number[] = []
  for (let i = 0; i < number; i++) {
    array.push(state[index + i][value] as number)
  }

  return array
}
