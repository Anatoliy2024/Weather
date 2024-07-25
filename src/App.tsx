import { useState } from "react"
import { OpenMeteo } from "../components/open-meteo"
import { fetchWeatherByCity } from "../function/open-meteo"
import clsx from "clsx"
import { UiButton } from "../ui/ui-button"

function App() {
  const [statusShow, setStatusShow] = useState<string>("day")
  const [city, setCity] = useState("")
  const [loading, setLoading] = useState(false)
  const [state, setState] = useState<Record<string, number[]> | null>(null)
  const [stateDaily, setStateDaily] = useState<Record<string, number[]> | null>(
    null
  )
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
            setStateDaily(weatherDaily)
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

  const borderButton = (state: string) =>
    statusShow === state ? "bg-lime-400 " : ""

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
          <button
            className="p-1 rounded bg-lime-400"
            onClick={handleFetchWeather}
            disabled={loading}
          >
            {loading ? "Загрузка..." : "Кликни"}
          </button>
        </div>
        <div className="flex gap-4">
          <UiButton
            className={clsx(borderButton("day"))}
            onClick={() => setStatusShow("day")}
          >
            Сегодня
          </UiButton>
          <UiButton
            className={clsx(borderButton("tomorrow"))}
            onClick={() => setStatusShow("tomorrow")}
          >
            Завтра
          </UiButton>
          <UiButton
            className={clsx(borderButton("3day"))}
            onClick={() => setStatusShow("3day")}
          >
            3 дня
          </UiButton>
          <UiButton
            className={clsx(borderButton("week"))}
            onClick={() => setStatusShow("week")}
          >
            7 дней
          </UiButton>
        </div>

        <OpenMeteo
          statusShow={statusShow}
          times={times}
          state={state}
          stateDaily={stateDaily}
        />
      </div>
    </div>
  )
}

export default App
