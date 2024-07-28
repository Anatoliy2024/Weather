import axios from "axios"
// const localApi = import.meta.env.VITE_WEATHER_API_KEY
// const serverGit = process.env.VITE_WEATHER_API_KEY

const apiKey = import.meta.env.VITE_WEATHER_API_KEY

export const getWeatherDate = async (city: string) => {
  console.log(apiKey)
  try {
    const response = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7`
    )
    const dataWeather = response.data
    console.log(response.data)
    return dataWeather
  } catch (error) {
    console.error("Ошибка при получении погоды:", error)
    throw error
  }
}
