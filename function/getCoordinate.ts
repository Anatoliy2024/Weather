import axios from "axios"

export const getCoordinates = async (city: string) => {
  try {
    const response = await axios.get(
      "https://nominatim.openstreetmap.org/search",
      {
        params: {
          q: city,
          format: "json",
          limit: 1,
        },
      }
    )
    if (response.data.length > 0) {
      const { lat, lon } = response.data[0]
      return { latitude: lat, longitude: lon }
    } else {
      throw new Error("Город не найден")
    }
  } catch (error) {
    console.error("Ошибка при получении координат:", error)
  }
}
