// import axios from "axios"

// // Замените <YOUR_API_KEY> вашим фактическим ключом API
// const apiKey: string = import.meta.env.VITE_NINJAC_API_KEY
// const baseURL = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather"

// export const getNinjacData = async (city: string) => {
//   try {
//     const response = await axios.get(baseURL, {
//       params: {
//         city: city, // Название города
//       },
//       headers: {
//         "x-rapidapi-key": apiKey,
//         "x-rapidapi-host": "weather-by-api-ninjas.p.rapidapi.com",
//       },
//     })

//     return response.data
//   } catch (error) {
//     console.error("Ошибка при получении данных о погоде:", error)
//     throw error
//   }
// }
