import axios from "axios"
import { getCoordinates } from "./getCoordinate"

// const apiKey: string = import.meta.env.VITE_OPEN_WEATHER_API_KEY
const login: string = import.meta.env.VITE_METEOMATICS_LOGIN
const password: string = import.meta.env.VITE_METEOMATICS_PASSWORD
// const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

const formatDateToISO = (date: Date) => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")
  const hours = String(date.getHours()).padStart(2, "0")
  const minutes = String(date.getMinutes()).padStart(2, "0")
  const seconds = String(date.getSeconds()).padStart(2, "0")
  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`
}

const meteoMaticsData = async (latitude: number, longitude: number) => {
  try {
    // Получение текущей даты и времени
    const currentDate = new Date()

    currentDate.setHours(0, 0, 0, 0)
    // console.log("Дата", currentDate)

    // Форматирование текущей даты и времени в формат ISO 8601
    const start_time = formatDateToISO(currentDate)

    // Получение даты и времени через неделю
    const endDate = new Date(currentDate)
    endDate.setDate(currentDate.getDate() + 7)

    // Форматирование конечной даты и времени в формат ISO 8601
    const end_time = formatDateToISO(endDate)
    // "https://api.meteomatics.com/2024-07-30T00:00:00.000+03:00--2024-08-05T00:00:00.000+03:00:PT1H/t_2m:C/64.6863136,97.7453061+56.17534,47.2914+55.7823547,49.1242266/json?model=mix"

    // const url = `https://api.meteomatics.com/${start_time}--${end_time}:PT1H/t_2m:C,precip_1h:mm,prob_precip_1h:p,wind_speed_10m:ms,weather_code_1h_ww/csv?lat=${latitude}&lon=${longitude}&model=mix`
    const url = `https://api.meteomatics.com/${start_time}--${end_time}:PT1H/t_2m:C,wind_speed_10m:ms,wind_gusts_10m_24h:ms,weather_symbol_1h:idx,weather_symbol_24h:idx,precip_1h:mm,precip_24h:mm,t_min_2m_24h:C,t_max_2m_24h:C/${latitude},${longitude}/json?model=mix`

    // console.log("Start time:", start_time)
    // console.log("End time:", end_time)
    // console.log("URL:", url)
    // console.log("login:", login)
    // console.log("password:", password)
    const auth = "Basic " + btoa(`${login}:${password}`)
    const response = await axios.get(url, {
      headers: {
        Authorization: auth,
      },
    })

    return response.data
  } catch (error) {
    console.error("Ошибка при получении погоды:", error)
    throw error
  }
}

export const getMeteoMaticsData = async (city: string) => {
  try {
    const coordinates:
      | {
          latitude: number
          longitude: number
        }
      | undefined = await getCoordinates(city)

    console.log(coordinates)
    if (coordinates !== undefined) {
      const { latitude, longitude } = coordinates
      const openWeatherData = await meteoMaticsData(latitude, longitude)
      // console.log(openWeatherData)
      return openWeatherData
    }
  } catch (error) {
    console.error("Ошибка при получении данных по городу:", error)
  }
}
