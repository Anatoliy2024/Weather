// import axios from "axios"
// import { getCoordinates } from "./getCoordinate"

// const apiKey: string = import.meta.env.VITE_TOMORROW_API_KEY

// const getWeatherData = async (latitude: number, longitude: number) => {
//   try {
//     const response = await axios.get(
//       `https://api.tomorrow.io/v4/weather/forecast?location=${latitude},${longitude}&apikey=${apiKey}`
//     )
//     return response.data
//   } catch (error) {
//     console.error("Ошибка при получении погоды:", error)
//     throw error
//   }
// }

// export const getTomorrowData = async (city: string) => {
//   try {
//     const coordinates: { latitude: number; longitude: number } | undefined =
//       await getCoordinates(city)

//     if (coordinates !== undefined) {
//       const { latitude, longitude } = coordinates
//       const weatherData = await getWeatherData(latitude, longitude)
//       return weatherData
//     }
//   } catch (error) {
//     console.error("Ошибка при получении данных по городу:", error)
//   }
// }
