// import axios from "axios"
// import { getCoordinates } from "./getCoordinate"

// const baseURL = "https://api.weather.gov"

// const getWeatherData = async (latitude: number, longitude: number) => {
//   try {
//     const response = await axios.get(
//       `${baseURL}/points/${latitude},${longitude}`
//     )

//     return response.data
//   } catch (error) {
//     console.error("Ошибка при получении погоды:", error)
//     throw error
//   }
// }

// export const getWeatherGovData = async (city: string) => {
//   try {
//     const coordinates:
//       | {
//           latitude: number
//           longitude: number
//         }
//       | undefined = await getCoordinates(city)

//     if (coordinates !== undefined) {
//       const { latitude, longitude } = coordinates
//       const weatherGovData = await getWeatherData(latitude, longitude)
//       // console.log(openWeatherData)
//       return weatherGovData
//     }
//   } catch (error) {
//     console.error("Ошибка при получении данных по городу:", error)
//   }
// }
