import { useEffect, useState } from "react"
import { OpenMeteo } from "../components/open-meteo"
import { fetchWeatherByCity } from "../function/open-meteo"
import clsx from "clsx"
import { UiButton } from "../ui/ui-button"
import { getWeatherDate } from "../function/weather-api"
import { WeatherAPI } from "../components/weather-api"
import { MeteoStats } from "../components/meteo-stats"
import { fetchWeatherMeteostat } from "../function/meteoStats"
// import { getWeatherGovData } from "../function/weatherGov"
// import { getTomorrowData } from "../function/tomorrow"
// import { getMeteoMaticsData } from "../function/meteoMatics"
// import { getOpenWeather } from "../function/open-wather"

function App() {
  const [statusShow, setStatusShow] = useState<string>("day")
  const [cityValue, setCityValue] = useState("")
  const [loading, setLoading] = useState(false)
  const [state, setState] = useState<Record<string, number[]> | null>(null)
  const [stateDaily, setStateDaily] = useState<Record<string, number[]> | null>(
    null
  )
  const [stateWeatherApi, setStateWeatherApi] = useState(null)
  const [meteoState, setMeteoState] = useState<Record<
    "hourly" | "daily",
    any
  > | null>(null)
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
          fetchWeatherMeteostat(city),
          // getWeatherGovData(city),
          // getTomorrowData(city),
          // getOpenWeather(city),
          // getMeteoMaticsData(city),
        ])

        const weatherData =
          results[0].status === "fulfilled" ? results[0].value : null
        const additionalData =
          results[1].status === "fulfilled" ? results[1].value : null
        const weatherMeteostat =
          results[2].status === "fulfilled" ? results[2].value : null

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

        if (weatherMeteostat) {
          setMeteoState(weatherMeteostat)
          console.log("Данные пришли", weatherMeteostat)
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
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-2 max-w-screen-md w-full px-4">
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
        </div>

        <OpenMeteo
          statusShow={statusShow}
          times={times}
          state={state}
          stateDaily={stateDaily}
        />

        <WeatherAPI stateWeatherApi={stateWeatherApi} statusShow={statusShow} />
        <MeteoStats meteoState={meteoState} statusShow={statusShow} />
        <div></div>
      </div>
    </div>
  )
}

export default App

// const weatherAPI = "eabd204bd30242dc895134613242707"
// const apiKey = process.env.REACT_APP_API_KEY
