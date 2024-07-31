// import axios from "axios"
// import { getCoordinates } from "./getCoordinate"

// const apiKey: string = import.meta.env.VITE_TOMORROW_API_KEY

// const baseURL = "https://api.tomorrow.io/v4/timelines"

// // const formatDateToISO = (date: Date) => {
// //   const year = date.getFullYear()
// //   const month = String(date.getMonth() + 1).padStart(2, "0")
// //   const day = String(date.getDate()).padStart(2, "0")
// //   return `${year}-${month}-${day}T00:00:00Z`
// // }

// const getWeatherData = async (latitude: number, longitude: number) => {
//   try {
//     // Получение текущей даты и времени
//     // const currentDate = new Date()
//     // currentDate.setHours(0, 0, 0, 0)
//     const startTime = new Date()
//     // // Форматирование текущей даты в формат ISO 8601
//     // const startTime = formatDateToISO(currentDate)

//     // Получение даты через 7 дней от текущей даты
//     // const endDate = new Date(currentDate)
//     // endDate.setDate(currentDate.getDate() + 3)

//     // // Форматирование даты через 7 дней в формат ISO 8601
//     // const endTime = formatDateToISO(endDate)

//     const endDate = new Date(startTime)
//     endDate.setDate(startTime.getDate() + 3)
//     const endTime = endDate

//     // const url = `${baseURL}?apikey=${apiKey}&location=${latitude},${longitude}&fields=temperature,windSpeed,windGust,weatherCode,precipitation&startTime=${startTime}&endTime=${endTime}&timestep=1h`

//     const response = await axios.get(baseURL, {
//       params: {
//         apikey: apiKey,
//         location: `${latitude},${longitude}`,
//         fields: [
//           "temperature",
//           "windSpeed",
//           "windGust",
//           "weatherCode",
//           "precipitation",
//         ],
//         startTime: startTime,
//         endTime: endTime,
//         timesteps: ["1h"], // Шаг времени, например, каждый час
//       },
//     })

//     return response.data

//     // const response = await axios.get(
//     //   `https://api.tomorrow.io/v4/weather/forecast?location=${latitude},${longitude}&apikey=${apiKey}`
//     // )

//     // return response.data
//   } catch (error) {
//     console.error("Ошибка при получении погоды:", error)
//     throw error
//   }
// }

// export const getTomorrowData = async (city: string) => {
//   try {
//     const coordinates:
//       | {
//           latitude: number
//           longitude: number
//         }
//       | undefined = await getCoordinates(city)

//     if (coordinates !== undefined) {
//       const { latitude, longitude } = coordinates
//       const tomorrowData = await getWeatherData(latitude, longitude)
//       // console.log(openWeatherData)
//       return tomorrowData
//     }
//   } catch (error) {
//     console.error("Ошибка при получении данных по городу:", error)
//   }
// }
