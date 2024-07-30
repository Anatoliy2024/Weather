// import axios from "axios"
// import { getCoordinates } from "./getCoordinate"

// const apiKey: string = import.meta.env.VITE_OPEN_WEATHER_API_KEY

// const getWeatherData = async (latitude: number, longitude: number) => {
//   try {
//     const response = await axios.get(
//       `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
//     )

//     return response.data
//   } catch (error) {
//     console.error("Ошибка при получении погоды:", error)
//     throw error
//   }
// }

// export const getOpenWeather = async (city: string) => {
//   try {
//     const coordinates:
//       | {
//           latitude: number
//           longitude: number
//         }
//       | undefined = await getCoordinates(city)

//     if (coordinates !== undefined) {
//       const { latitude, longitude } = coordinates
//       const openWeatherData = await getWeatherData(latitude, longitude)
//       // console.log(openWeatherData)
//       return openWeatherData
//     }
//   } catch (error) {
//     console.error("Ошибка при получении данных по городу:", error)
//   }
// }
