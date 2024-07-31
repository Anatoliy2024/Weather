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
console.log(apiKey)
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
