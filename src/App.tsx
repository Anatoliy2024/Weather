import { useState } from "react"
import { OpenMeteo } from "../components/open-meteo"
import { fetchWeatherByCity } from "../function/open-meteo"

function App() {
  const [statusShow, setStatusShow] = useState<string>("day")
  const [city, setCity] = useState("")
  const [loading, setLoading] = useState(false)
  const [state, setState] = useState<Record<string, number[]> | null>(null)
  const [times, setTimes] = useState<Date[]>([])

  const handleFetchWeather = async () => {
    try {
      console.log(city)
      if (city) {
        setLoading(true)
        // const {weatherHourly,weatherDaily}:{weatherHourly:Record<string, number[]>| null,weatherDaily:Record<string, number[]> | null} = await fetchWeatherByCity(city)
        const weatherData = await fetchWeatherByCity(city)

        if (weatherData) {
          const { weatherHourly, weatherDaily } = weatherData

          if (weatherHourly && weatherDaily) {
            setState(weatherHourly)
            const times = weatherHourly.time.map(
              (timestamp: string) => new Date(timestamp)
            )
            setTimes(times)
          } else {
            console.error("Нет данных о погоде")
          }

          // Если нужно использовать weatherDaily, добавьте проверку и обработку здесь
        } else {
          console.error("Нет данных о погоде для данного города")
          setLoading(false)
        }

        // setState(weatherHourly)
        // const times = weatherHourly.time.map(
        //   (timestamp: string) => new Date(timestamp)
        // )
        // setTimes(times)
        //   const temperatures = weatherData.temperature_2m

        //   // Вывод данных
        //   times.forEach((time: any, index: number) => {
        //     console.log(`${time.toISOString()}: ${temperatures[index]}°C`)
        //   })
        setLoading(false)
      }
    } catch (error) {
      console.error("Ошибка при получении данных о погоде:", error)
      setLoading(false)
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen flex-col ">
      <div className="flex justify-center  pb-6">Погода</div>
      <div className=" flex gap-3 flex-col">
        <div className="flex gap-4">
          <input
            className="border border-lime-400 rounded-md"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={handleFetchWeather} disabled={loading}>
            {loading ? "Загрузка..." : "Кликни"}
          </button>
        </div>
        <div className="flex gap-4">
          <button onClick={() => setStatusShow("day")}>Сегодня</button>
          <button onClick={() => setStatusShow("tomorrow")}>Завтра</button>
          <button onClick={() => setStatusShow("3day")}>3 день</button>
          <button onClick={() => setStatusShow("week")}>7 день</button>
        </div>

        <OpenMeteo statusShow={statusShow} times={times} state={state} />
      </div>
    </div>
  )
}

export default App
