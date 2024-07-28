import { useEffect, useState } from "react"
import { OpenMeteo } from "../components/open-meteo"
import { fetchWeatherByCity } from "../function/open-meteo"
import clsx from "clsx"
import { UiButton } from "../ui/ui-button"
import { getWeatherDate } from "../function/weather-api"
import { WeatherAPI } from "../components/weather-api"

function App() {
  const [statusShow, setStatusShow] = useState<string>("day")
  const [cityValue, setCityValue] = useState("")
  const [loading, setLoading] = useState(false)
  const [state, setState] = useState<Record<string, number[]> | null>(null)
  const [stateDaily, setStateDaily] = useState<Record<string, number[]> | null>(
    null
  )
  const [stateWeatherApi, setStateWeatherApi] = useState(null)
  const [times, setTimes] = useState<Date[]>([])
  useEffect(() => {
    const cityLocal = localStorage.getItem("city")
    if (cityLocal) {
      setCityValue(cityLocal)
      console.log("Пошло", cityLocal)
      handleFetchWeather(cityLocal)
    }
  }, [])

  const handleFetchWeather = async (city: string) => {
    try {
      console.log(city)
      if (city) {
        setLoading(true)
        // const {weatherHourly,weatherDaily}:{weatherHourly:Record<string, number[]>| null,weatherDaily:Record<string, number[]> | null} = await fetchWeatherByCity(city)
        const results = await Promise.allSettled([
          fetchWeatherByCity(city), // Ваш основной запрос
          getWeatherDate(city), // Дополнительный запрос
        ])

        const weatherData =
          results[0].status === "fulfilled" ? results[0].value : null
        const additionalData =
          results[1].status === "fulfilled" ? results[1].value : null

        if (weatherData) {
          localStorage.setItem("city", city)
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
          // setLoading(false)
        }

        if (additionalData) {
          setStateWeatherApi(additionalData)
          console.log(additionalData)
        }

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
      <div className="flex justify-center  pb-6">Погода В городе</div>
      <div className=" flex gap-3 flex-col">
        <div className="flex gap-4">
          <input
            className="border border-lime-400 rounded-md"
            type="text"
            value={cityValue}
            onChange={(e) => setCityValue(e.target.value)}
          />
          <button
            className="p-1 rounded bg-lime-400"
            onClick={() => {
              handleFetchWeather(cityValue)

              // const WeatherDate = getWeatherDate(cityValue)
              // setStateWeatherApi(WeatherDate)
            }}
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
        <div>
          <h2 className="text-center">open-meteo</h2>
          <OpenMeteo
            statusShow={statusShow}
            times={times}
            state={state}
            stateDaily={stateDaily}
          />
        </div>
        <div>
          <h2 className="text-center">WeatherAPI</h2>
          <WeatherAPI stateWeatherApi={stateWeatherApi} />
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default App

// const weatherAPI = "eabd204bd30242dc895134613242707"
// const apiKey = process.env.REACT_APP_API_KEY
