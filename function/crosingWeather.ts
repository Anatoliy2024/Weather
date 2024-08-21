import axios from "axios"

// Функция для форматирования даты в ISO строку
const formatDateToISO = (date: Date): string => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")
  const hours = String(date.getHours()).padStart(2, "0")
  const minutes = String(date.getMinutes()).padStart(2, "0")
  const seconds = String(date.getSeconds()).padStart(2, "0")
  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`
}

const apiKey: string = import.meta.env.VITE_CROSSING_WEATHER_API_KEY
// console.log(apiKey)
export const crosingWeather = async (city: string) => {
  // Получение текущей даты и времени
  const startTime = new Date()
  startTime.setHours(0, 0, 0, 0)
  const startISO = formatDateToISO(startTime)

  // Получение даты через 7 дней от текущей даты
  const endTime = new Date(startTime)
  endTime.setDate(startTime.getDate() + 6)
  const endISO = formatDateToISO(endTime)

  try {
    // const response = await axios.request(options)
    const response = await axios.get(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}%2CUK/${startISO}/${endISO}?unitGroup=metric&include=hours&key=${apiKey}`
    )

    return response.data
  } catch (error) {
    console.error(error)
  }
}

export type Day = {
  datetime: string
  icon: string
  tempmax: number
  tempmin: number
  windspeed: number
  precipprob: number
  precip: number
  snow: number
  hours: Hour[]
}

export type Hour = {
  icon: string
  datetime: string
  temp: string
  [key: string]: number | string | string[]
}

export type CrossingWeather = {
  address: string
  days: Day[]
  latitude: number

  longitude: number

  queryCost: number
  resolvedAddress: string

  stations: Record<string, string | number>

  timezone: string

  tzoffset: number
}

const weatherPriority: { [key: string]: number } = {
  "clear-night": 0,
  "clear-day": 0,
  "partly-cloudy-night": 1,
  "partly-cloudy-day": 1,
  cloudy: 2,
  wind: 3,
  fog: 4,
  "showers-night": 5,
  "showers-day": 5,
  rain: 6,
  "thunder-showers-night": 7,
  "thunder-showers-day": 7,
  "thunder-rain": 8,
  "snow-showers-night": 9,
  "snow-showers-day": 9,
  snow: 10,
}

export function weatheeWatherMM(
  state: Hour[],
  index: number,
  number: number
): number | string {
  const rain = getNewState(state, "precip", index, number)

  const snow = getNewState(state, "snow", index, number)

  if (rain !== 0 && snow !== 0) {
    return rain > snow ? rain.toFixed(1) : snow.toFixed(1)
  } else if (rain !== 0) {
    return rain.toFixed(1)
  } else if (snow !== 0) {
    return snow.toFixed(1)
  } else {
    return 0
  }
}

export function getNewState(
  state: Hour[] | null,
  value: keyof Hour,
  index: number,
  number: number
) {
  if (state === null) return 0
  let count = 0

  for (let i = 0; i < number; i++) {
    if (index + i < state.length && state[index + i]) {
      count += state[index + i][value] as number
    }
  }
  // console.log(count)
  return count
}

export function getArrayNumber(
  state: Hour[] | null,
  value: keyof Hour,
  index: number,
  number: number
) {
  if (state === null) return []
  const array: number[] = []
  for (let i = 0; i < number; i++) {
    if (index + i < state.length && state[index + i]) {
      array.push(state[index + i][value] as number)
    }
  }
  // console.log(value, array)
  return array
}

function getMostSevereWeather(weather_codes: string[]): string {
  if (weather_codes.length === 0) return "null"

  // Найдите состояние с наивысшим приоритетом
  const highestPriority = Math.max(
    ...weather_codes.map((code) => weatherPriority[code] || 0)
  )
  const mostSevereWeather = weather_codes.find(
    (code) => weatherPriority[code] === highestPriority
  )

  return mostSevereWeather as string
}

export function getArrayWeather(
  state: Hour[] | null,
  index: number,
  number: number
) {
  if (state === null) return "null"
  const array: string[] = []
  for (let i = 0; i < number; i++) {
    if (index + i < state.length && state[index + i]) {
      array.push(state[index + i].icon as string)
    }
  }
  const weatherIconString = getMostSevereWeather(array)

  return weatherIconString
}
