import axios from "axios"

import { getCoordinates } from "./getCoordinate"

const apiKey: string = import.meta.env.VITE_METEO_STATE_API_KEY

const formatDateToYYYYMMDD = (date: Date) => {
  // Получаем строку в формате ISO 8601 (например, '2020-12-31T00:00:00.000Z')
  const isoString = date.toISOString()

  // Обрезаем время и зону, оставляя только дату в формате 'YYYY-MM-DD'
  return isoString.split("T")[0]
}

const getWeatherData = async (latitude: number, longitude: number) => {
  const currentDate = new Date()

  const startOfDayUTC = new Date(
    Date.UTC(
      currentDate.getUTCFullYear(),
      currentDate.getUTCMonth(),
      currentDate.getUTCDate()
    )
  )

  const startDate = formatDateToYYYYMMDD(startOfDayUTC)

  const currentEndDate = new Date(startOfDayUTC)
  currentEndDate.setDate(startOfDayUTC.getDate() + 6)
  const endDate = formatDateToYYYYMMDD(currentEndDate)
  console.log(startDate, endDate)
  const options = {
    method: "GET",
    url: `https://meteostat.p.rapidapi.com/point/hourly`,
    params: {
      lat: latitude,
      lon: longitude,
      start: startDate,
      end: endDate,
      tz: "Europe/Berlin",
    },
    headers: {
      "x-rapidapi-key": apiKey,
      "x-rapidapi-host": "meteostat.p.rapidapi.com",
    },
  }

  try {
    const response = await axios.request(options)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const fetchWeatherMeteostat = async (city: string) => {
  try {
    const coordinates:
      | {
          latitude: number
          longitude: number
        }
      | undefined = await getCoordinates(city)

    if (coordinates !== undefined) {
      const { latitude, longitude } = coordinates
      const hourlyWeatherData = await getWeatherData(latitude, longitude)

      return hourlyWeatherData
    }
  } catch (error) {
    console.error("Ошибка при получении данных по городу:", error)
  }
}

export type MeteoState = {
  data: DataInfoHour[]
  meta: { generated: string; stations: string[] }
}

export type DataInfoHour = {
  coco: number
  dwpt: number
  prcp: number
  pres: number
  rhum: number
  snow: number | null
  temp: number
  time: string
  tsun: number | null
  wdir: number
  wpgt: number
  wspd: number
}

export function getNewState(
  state: DataInfoHour[] | null,
  value: keyof DataInfoHour,
  index: number,
  number: number
) {
  if (state === null) return 0

  let count = 0
  let currentIndex
  for (let i = 0; i < number; i++) {
    currentIndex = index + i

    // Функция для поиска ближайшего ненулевого значения
    const findClosestNonNullValue = (idx: number): number => {
      let offset = 1

      while (true) {
        // Проверяем индекс слева
        if (
          idx - offset >= 0 &&
          state[idx - offset] &&
          state[idx - offset][value] !== null
        ) {
          return state[idx - offset][value] as number
        }

        // Проверяем индекс справа
        if (
          idx + offset < state.length &&
          state[idx + offset] &&
          state[idx + offset][value] !== null
        ) {
          return state[idx + offset][value] as number
        }

        // Если ни слева, ни справа не нашли ненулевое значение, увеличиваем смещение
        offset++

        // Если смещение становится слишком большим, возвращаем 0 или какое-то значение по умолчанию
        if (idx - offset < 0 && idx + offset >= state.length) {
          return 0 // или любое другое значение по умолчанию
        }
      }
    }

    if (currentIndex < state.length && state[currentIndex]) {
      const valueAtCurrentIndex = state[currentIndex][value]
      if (valueAtCurrentIndex === null) {
        count += findClosestNonNullValue(currentIndex)
      } else {
        count += valueAtCurrentIndex as number
      }
    }
  }

  return count
}

export function getWeatherHourly(
  state: DataInfoHour[] | null,
  value: keyof DataInfoHour,
  index: number,
  number: number
) {
  if (state === null) return 999 // Если state равно null, возвращаем 999

  let array = []
  let count = 0

  for (let i = 0; i < number; i++) {
    if (state[index + i] && state[index + i][value] !== null) {
      count += state[index + i][value] as number // Суммируем ненулевые значения
    } else {
      array.push(state[index + i] ? state[index + i][value] : null) // Добавляем null, если значение отсутствует
    }
  }

  // Если все значения равны null, длина массива будет равна number
  if (array.length === number) return 999

  return count
}

export function getArrayNumber(
  state: DataInfoHour[] | null,
  value: keyof DataInfoHour,
  index: number,
  number: number
): number[] {
  if (state === null) return []

  const array: number[] = []

  // Функция для поиска ближайшего ненулевого значения при null
  const findClosestNonNullValue = (idx: number): number => {
    let offset = 1

    while (true) {
      // Проверяем индекс слева
      if (
        idx - offset >= 0 &&
        state[idx - offset] &&
        state[idx - offset][value] !== null &&
        state[idx - offset][value] !== undefined
      ) {
        return state[idx - offset][value] as number
      }

      // Проверяем индекс справа
      if (
        idx + offset < state.length &&
        state[idx + offset] &&
        state[idx + offset][value] !== null &&
        state[idx + offset][value] !== undefined
      ) {
        return state[idx + offset][value] as number
      }

      // Если смещение становится слишком большим, возвращаем 0 или значение по умолчанию
      if (idx - offset < 0 && idx + offset >= state.length) {
        return 0 // Возвращаем 0, если не нашли ненулевое значение
      }

      offset++
    }
  }

  for (let i = 0; i < number; i++) {
    const currentIndex = index + i
    if (currentIndex < state.length && state[currentIndex]) {
      const valueAtIndex = state[currentIndex][value]
      if (valueAtIndex === null) {
        // Если текущее значение null, ищем ближайшее ненулевое значение
        array.push(findClosestNonNullValue(currentIndex))
      } else {
        array.push(valueAtIndex as number)
      }
    } else {
      array.push(0) // Если состояние отсутствует, добавляем 0
    }
  }

  return array
}
