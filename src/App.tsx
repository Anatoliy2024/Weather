import { useEffect, useState } from "react"

import { fetchWeatherByCity } from "../function/open-meteo"
import clsx from "clsx"
import { UiButton } from "../ui/ui-button"
import { getWeatherDate } from "../function/weather-api"

import {
  AverageChanceOfRain,
  InitialWeatherData,
} from "../components/average-chance-of-rain"

import { fetchWeatherMeteostat } from "../function/meteoStats"
import { crosingWeather } from "../function/crosingWeather"

import {
  getOpenMeteo,
  getWeatherApi,
  getMeteoState,
  getCrossingDate,
} from "../function/average-chance-of-rain.ts"
import { WeatherBlock } from "../components/weather-block"

const createWeatherTemplate = () => ({
  time: [],
  icon: [],
  temp: [],
  windy: [],
  rainProbably: [],
  precipitation: [],
})

function App() {
  const [statusShow, setStatusShow] = useState<string>("day")
  const [cityValue, setCityValue] = useState("")
  const [loading, setLoading] = useState(false)
  const [stateHoyrly, setStateHoyrly] = useState<Record<
    string,
    number[]
  > | null>(null)
  const [stateDaily, setStateDaily] = useState<Record<string, number[]> | null>(
    null
  )
  const [stateWeatherApi, setStateWeatherApi] = useState(null)
  const [meteoState, setMeteoState] = useState(null)
  const [сrossingDate, setCrossingDate] = useState(null)
  // const [tomorrowDate, setTomorrowDate] = useState(null)
  const [times, setTimes] = useState<Date[]>([])

  const initialWeatherData = {
    today: createWeatherTemplate(),
    tomorrow: createWeatherTemplate(),
    "3day": {
      today: createWeatherTemplate(),
      tomorrow: createWeatherTemplate(),
      nextTomorrow: createWeatherTemplate(),
    },
    week: {
      time: [],
      icon: [],
      tempMax: [],
      tempMin: [],
      windy: [],
      rainProbably: [],
      precipitation: [],
    },
  }

  const [rainProbably, setRainProbably] = useState<InitialWeatherData>({
    openMeteo: initialWeatherData,
    stateWeatherApi: initialWeatherData,
    meteoState: initialWeatherData,
    crossingDate: initialWeatherData,
  })

  useEffect(() => {
    setRainProbably({
      openMeteo: initialWeatherData,
      stateWeatherApi: initialWeatherData,
      meteoState: initialWeatherData,
      crossingDate: initialWeatherData,
    })
    if (stateHoyrly !== null && stateDaily !== null) {
      getOpenMeteo(stateHoyrly, stateDaily, times, setRainProbably)
    }
    if (stateWeatherApi !== null) {
      getWeatherApi(stateWeatherApi, setRainProbably)
    }
    if (meteoState !== null) {
      getMeteoState(meteoState, setRainProbably)
    }
    if (сrossingDate !== null) {
      getCrossingDate(сrossingDate, setRainProbably)
    }
  }, [stateHoyrly, stateDaily, stateWeatherApi, meteoState, сrossingDate]) // Зависимости useEffect

  console.log("Главная старница", rainProbably)

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

        const results = await Promise.allSettled([
          fetchWeatherByCity(city), // Ваш основной запрос
          getWeatherDate(city), // Дополнительный запрос
          fetchWeatherMeteostat(city),
          crosingWeather(city),
        ])

        const weatherData =
          results[0].status === "fulfilled" ? results[0].value : null
        const additionalData =
          results[1].status === "fulfilled" ? results[1].value : null
        const weatherMeteostat =
          results[2].status === "fulfilled" ? results[2].value : null
        const crosingWeatherDate =
          results[3].status === "fulfilled" ? results[3].value : null

        if (weatherData) {
          localStorage.setItem("city", city)
          const { weatherHourly, weatherDaily } = weatherData

          if (weatherHourly && weatherDaily) {
            setStateHoyrly(weatherHourly)
            setStateDaily(weatherDaily)
            const times = weatherHourly.time.map(
              (timestamp: string) => new Date(timestamp)
            )
            console.log("open meteo", weatherHourly, weatherDaily)
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
          console.log("WeatherAPI", additionalData)
        }

        if (weatherMeteostat) {
          setMeteoState(weatherMeteostat)
          console.log("weatherMeteostat", weatherMeteostat)
        }
        if (crosingWeatherDate) {
          setCrossingDate(crosingWeatherDate)
          console.log("crosingWeatherDate", crosingWeatherDate)
        }

        setLoading(false)
      }
    } catch (error) {
      console.error("Ошибка при получении данных о погоде:", error)
      setLoading(false)
    }
  }

  const borderButton = (state: string) =>
    statusShow === state ? "bg-violet-950" : ""

  const [activeIndex, setActiveIndex] = useState(3)

  const handleSlideChange = (index: number) => {
    setActiveIndex(index)
    // console.log("index", activeIndex)
  }

  return (
    <div className="min-h-screen  flex items-center justify-center bg-violet-950/80">
      <div className="flex flex-col items-center gap-2 py-8  text-pink-400 w-full">
        <div className="flex justify-center  pb-6">Погода В городе</div>
        <div className=" flex gap-3 flex-col">
          <div className="flex gap-3">
            <input
              className="pl-2 rounded-md w-52"
              type="text"
              value={cityValue}
              onChange={(e) => setCityValue(e.target.value)}
            />
            <button
              className="p-1 rounded bg-violet-950"
              onClick={() => {
                handleFetchWeather(cityValue)
              }}
              disabled={loading}
            >
              {loading ? "Загрузка..." : "Кликни"}
            </button>
          </div>
          <div className="flex gap-2">
            <UiButton
              className={clsx(borderButton("day"))}
              onClick={() => {
                handleSlideChange(3)
                setStatusShow("day")
              }}
            >
              Сегодня
            </UiButton>
            <UiButton
              className={clsx(borderButton("tomorrow"))}
              onClick={() => {
                handleSlideChange(3)
                setStatusShow("tomorrow")
              }}
            >
              Завтра
            </UiButton>
            <UiButton
              className={clsx(borderButton("3day"))}
              onClick={() => {
                handleSlideChange(0)
                setStatusShow("3day")
              }}
            >
              3 дня
            </UiButton>
            <UiButton
              className={clsx(borderButton("week"))}
              onClick={() => {
                handleSlideChange(0)
                setStatusShow("week")
              }}
            >
              7 дней
            </UiButton>
          </div>
        </div>
        <AverageChanceOfRain
          times={times}
          state={stateHoyrly}
          stateDaily={stateDaily}
          stateWeatherApi={stateWeatherApi}
          meteoState={meteoState}
          сrossingDate={сrossingDate}
          statusShow={statusShow}
          activeIndex={activeIndex}
          onSlideChange={handleSlideChange}
        />
        <WeatherBlock
          weatherData={rainProbably.openMeteo}
          statusShow={statusShow}
          name="open-meteo"
          activeIndex={activeIndex}
          onSlideChange={handleSlideChange}
        />

        <WeatherBlock
          weatherData={rainProbably.stateWeatherApi}
          statusShow={statusShow}
          name="WeatherAPI"
          activeIndex={activeIndex}
          onSlideChange={handleSlideChange}
        />

        <WeatherBlock
          weatherData={rainProbably.meteoState}
          statusShow={statusShow}
          name="MeteoStats"
          activeIndex={activeIndex}
          onSlideChange={handleSlideChange}
        />

        <WeatherBlock
          weatherData={rainProbably.crossingDate}
          statusShow={statusShow}
          name="CrossingWeather"
          activeIndex={activeIndex}
          onSlideChange={handleSlideChange}
        />
      </div>
    </div>
  )
}

export default App
