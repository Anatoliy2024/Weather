import { Forecast } from "./weather-api.tsx"
import { MeteoState } from "./meteo-stats"
import { CrossingWeather } from "./crossing-weather"
import { useState, useEffect } from "react"
// import { getArrayNumber, getDayTime, getNewState } from "./open-meteo.tsx"
import {
  getOpenMeteo,
  getWeatherApi,
  getMeteoState,
  getCrossingDate,
} from "../function/average-chance-of-rain.ts"

import { RainProbability, Water } from "./iconSVG"
import clsx from "clsx"
import { DAYS, MONTHS } from "../constants/montsAndDayWeek.ts"

// import { getNewState, getArrayNumber } from "./weather-api"
// import { ForecastValue } from "./weather-api"
type AllValye = {
  statusShow: string
  state: Record<string, number[]> | null
  stateDaily: Record<string, number[]> | null
  times: Date[] | null
  stateWeatherApi: Forecast | null
  meteoState: MeteoState | null
  сrossingDate: CrossingWeather | null
}

interface WeatherData {
  time: (string | Date | null)[]
  icon: (string | number | null)[]
  temp: (number | null)[]
  tempMax?: (number | null)[]
  tempMin?: (number | null)[]
  windy: (number | null)[]
  rainProbably: (number | null)[]
  precipitation: (number | null)[]
}

export interface ThreeDayForecast {
  today: WeatherData
  tomorrow: WeatherData
  nextTomorrow: WeatherData
}

export interface WeatherState {
  today: WeatherData
  tomorrow: WeatherData
  "3day": ThreeDayForecast
  week: WeatherData
}

export interface InitialWeatherData {
  openMeteo: WeatherState
  stateWeatherApi: WeatherState
  meteoState: WeatherState
  crossingDate: WeatherState
}

function getDayTime(index: number) {
  let daytime: string = ""
  if (index === 0) {
    daytime = "Ночь"
  } else if (index === 1) {
    daytime = "Утро"
  } else if (index === 2) {
    daytime = "День"
  } else if (index === 3) {
    daytime = "Вечер"
  }
  return daytime
}

export const AverageChanceOfRain = ({
  times,
  state,
  stateDaily,
  stateWeatherApi,
  meteoState,
  сrossingDate,
  statusShow,
}: AllValye) => {
  const initialWeatherData = {
    today: {
      time: [],
      icon: [],
      temp: [],
      windy: [],
      rainProbably: [],
      precipitation: [],
    },
    tomorrow: {
      time: [],
      icon: [],
      temp: [],
      windy: [],
      rainProbably: [],
      precipitation: [],
    },
    "3day": {
      today: {
        time: [],
        icon: [],
        temp: [],
        windy: [],
        rainProbably: [],
        precipitation: [],
      },
      tomorrow: {
        time: [],
        icon: [],
        temp: [],
        windy: [],
        rainProbably: [],
        precipitation: [],
      },
      nextTomorrow: {
        time: [],
        icon: [],
        temp: [],
        windy: [],
        rainProbably: [],
        precipitation: [],
      },
    },
    week: {
      time: [],
      icon: [],
      temp: [],
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

  const [allAvarage, setAllAvarage] = useState<WeatherState>(initialWeatherData)

  useEffect(() => {
    setRainProbably({
      openMeteo: initialWeatherData,
      stateWeatherApi: initialWeatherData,
      meteoState: initialWeatherData,
      crossingDate: initialWeatherData,
    })
    if (state !== null && stateDaily !== null) {
      getOpenMeteo(state, stateDaily, times, setRainProbably)
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
  }, [state, stateDaily, stateWeatherApi, meteoState, сrossingDate]) // Зависимости useEffect

  useEffect(() => {
    const dayAverage = (day: "today" | "tomorrow") => {
      return {
        time: [...rainProbably.openMeteo[day].time],
        rainProbably: [
          ...rainProbably.openMeteo[day].rainProbably.map((hour, index) => {
            const avaregeHour = [
              hour,
              rainProbably.stateWeatherApi[day].rainProbably[index],
              rainProbably.meteoState[day].rainProbably[index],
              rainProbably.crossingDate[day].rainProbably[index],
            ].filter((value) => value !== null && value !== undefined)
            return (
              avaregeHour.reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                0
              ) / avaregeHour.length
            )
          }),
        ],
        precipitation: [
          ...rainProbably.openMeteo[day].precipitation.map((hour, index) => {
            const avaregeHour = [
              hour,
              rainProbably.stateWeatherApi[day].precipitation[index],
              rainProbably.meteoState[day].precipitation[index],
              rainProbably.crossingDate[day].precipitation[index],
            ].filter((value) => value !== null && value !== undefined)
            return (
              avaregeHour.reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                0
              ) / avaregeHour.length
            )
          }),
        ],
      }
    }
    const threeDayAverage = (day: "today" | "tomorrow" | "nextTomorrow") => {
      return {
        time: [...rainProbably.openMeteo["3day"][day].time],
        rainProbably: [
          ...rainProbably.openMeteo["3day"][day].rainProbably.map(
            (hour, index) => {
              const avaregeHour = [
                hour,
                rainProbably.stateWeatherApi["3day"][day].rainProbably[index],
                rainProbably.meteoState["3day"][day].rainProbably[index],
                rainProbably.crossingDate["3day"][day].rainProbably[index],
              ].filter((value) => value !== null && value !== undefined)
              return (
                avaregeHour.reduce(
                  (accumulator, currentValue) => accumulator + currentValue,
                  0
                ) / avaregeHour.length
              )
            }
          ),
        ],
        precipitation: [
          ...rainProbably.openMeteo["3day"][day].precipitation.map(
            (hour, index) => {
              const avaregeHour = [
                hour,
                rainProbably.stateWeatherApi["3day"][day].precipitation[index],
                rainProbably.meteoState["3day"][day].precipitation[index],
                rainProbably.crossingDate["3day"][day].precipitation[index],
              ].filter((value) => value !== null && value !== undefined)
              return (
                avaregeHour.reduce(
                  (accumulator, currentValue) => accumulator + currentValue,
                  0
                ) / avaregeHour.length
              )
            }
          ),
        ],
      }
    }

    const weekAverage = () => {
      return {
        time: [...rainProbably.openMeteo.week.time],
        rainProbably: [
          ...rainProbably.openMeteo.week.rainProbably.map((day, index) => {
            const avaregeDay = [
              day,
              rainProbably.stateWeatherApi.week.rainProbably[index],
              rainProbably.meteoState.week.rainProbably[index],
              rainProbably.crossingDate.week.rainProbably[index],
            ].filter((value) => value !== null && value !== undefined)
            return (
              avaregeDay.reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                0
              ) / avaregeDay.length
            )
          }),
        ],
        precipitation: [
          ...rainProbably.openMeteo.week.precipitation.map((day, index) => {
            const avaregeDay = [
              day,
              rainProbably.stateWeatherApi.week.precipitation[index],
              rainProbably.meteoState.week.precipitation[index],
              rainProbably.crossingDate.week.precipitation[index],
            ].filter((value) => value !== null && value !== undefined)
            return (
              avaregeDay.reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                0
              ) / avaregeDay.length
            )
          }),
        ],
      }
    }

    setAllAvarage({
      today: dayAverage("today"),
      tomorrow: dayAverage("tomorrow"),
      "3day": {
        today: threeDayAverage("today"),
        tomorrow: threeDayAverage("tomorrow"),
        nextTomorrow: threeDayAverage("nextTomorrow"),
      },
      week: weekAverage(),
    })
  }, [rainProbably])

  console.log("Массив", rainProbably)
  console.log("allAvarage", allAvarage)

  const weatherFromDay = (arrayDays: WeatherData) => {
    if (
      !arrayDays.time ||
      arrayDays.time.length === 0 ||
      arrayDays.time.every((item) => item === null || !(item instanceof Date))
    ) {
      return null
    }

    // Проверяем, что все значения в массиве time - это даты
    const firstDate =
      arrayDays.time[0] instanceof Date ? arrayDays.time[0] : new Date()

    return (
      <div className=" select-none ">
        <div>
          {firstDate.getDate()}:{DAYS[firstDate.getDay()]}:
          {MONTHS[firstDate.getMonth() + 1]}
        </div>
        <ul className="flex ">
          {arrayDays.time.map((hourInfo: any, index: number) => {
            if (
              arrayDays.time[0] !== null &&
              arrayDays.time[0] instanceof Date &&
              arrayDays.rainProbably[index] !== null &&
              arrayDays.precipitation[index] !== null
            ) {
              const today = new Date()
              return (
                <li
                  key={index}
                  className={clsx(
                    "flex flex-col  justify-center items-center  rounded-md min-w-[60px]",
                    (today.getHours() === hourInfo.getHours() ||
                      today.getHours() === hourInfo.getHours() + 1 ||
                      today.getHours() === hourInfo.getHours() + 2) &&
                      arrayDays.time[0].getDate() === today.getDate()
                      ? "bg-purple-200 text-black"
                      : ""
                  )}
                >
                  <span>
                    {hourInfo.toLocaleTimeString("ru-RU", {
                      hour: "2-digit",
                      minute: "2-digit",

                      hour12: false, // Устанавливает 24-часовой формат
                    })}
                  </span>

                  <span className="flex gap-1">
                    <RainProbability />
                    {Math.round(arrayDays.rainProbably[index])}
                    {/* {Math.max(
                        ...getArrayNumber(hours, "chance_of_rain", index, 3)
                      )} */}
                  </span>
                  <span className="flex items-center gap-1">
                    <Water />
                    {+arrayDays.precipitation[index].toFixed(1)}
                    {/* {getNewState(hours, "precip_mm", index, 3) === 0
                        ? 0
                        : getNewState(hours, "precip_mm", index, 3).toFixed(1)} */}
                  </span>
                </li>
              )
            } else {
              return null
            }
          })}
        </ul>
      </div>
    )
  }

  const weatherFromThreeDay = (arrayDays: WeatherData) => {
    if (
      !arrayDays.time ||
      arrayDays.time.length === 0 ||
      arrayDays.time.every((item) => item === null || !(item instanceof Date))
    ) {
      return <div>No data available</div>
    }

    // Проверяем, что все значения в массиве time - это даты
    const firstDate =
      arrayDays.time[0] instanceof Date ? arrayDays.time[0] : new Date()

    return (
      <div className="select-none" key={firstDate.getDate()}>
        <div>
          {firstDate.getDate()}:{DAYS[firstDate.getDay()]}:
          {MONTHS[firstDate.getMonth() + 1]}
        </div>
        <ul className="flex ">
          {arrayDays.time.map((hours: any, index: number) => {
            const today = new Date()
            if (
              arrayDays.rainProbably[index] !== null &&
              arrayDays.precipitation[index] !== null
            ) {
              return (
                <li
                  key={index}
                  className={clsx(
                    "flex flex-col w-[60px] rounded items-center",
                    (today.getHours() === hours.getHours() ||
                      today.getHours() - 1 === hours.getHours() ||
                      today.getHours() - 2 === hours.getHours() ||
                      today.getHours() - 3 === hours.getHours() ||
                      today.getHours() - 4 === hours.getHours() ||
                      today.getHours() - 5 === hours.getHours()) &&
                      hours.getDate() === today.getDate()
                      ? "bg-purple-200 text-black"
                      : ""
                  )}
                >
                  <div>{getDayTime(index)}</div>
                  <span className="flex gap-1">
                    <RainProbability />
                    {Math.round(arrayDays.rainProbably[index])}
                  </span>

                  <span className="flex items-center gap-1">
                    <Water />
                    {+arrayDays.precipitation[index].toFixed(1)}
                  </span>
                </li>
              )
            }
          })}
        </ul>
      </div>
    )
  }

  return (
    <div className="max-w-full">
      <h2 className="text-center">Среднее занчение осадков</h2>
      <div className="  flex flex-col gap-4  rounded-md bg-violet-50 text-pink-800">
        {statusShow === "day" && weatherFromDay(allAvarage.today)}
        {statusShow === "tomorrow" && weatherFromDay(allAvarage.tomorrow)}
        {statusShow === "3day" && (
          <div className="flex">
            <div className="flex gap-3 ">
              {weatherFromThreeDay(allAvarage["3day"].today)}
              {weatherFromThreeDay(allAvarage["3day"].tomorrow)}
              {weatherFromThreeDay(allAvarage["3day"].nextTomorrow)}
            </div>
          </div>
        )}

        {statusShow === "week" && (
          <div className="w-full select-non">
            <ul className="flex ">
              {allAvarage.week.time.map((day: any, index: number) => {
                const today = new Date()

                const weekend =
                  DAYS[day.getDay()] === "Сб" || DAYS[day.getDay()] === "Вс"
                    ? "text-sky-400"
                    : ""
                if (
                  allAvarage.week.rainProbably[index] !== null &&
                  allAvarage.week.precipitation[index] !== null
                ) {
                  return (
                    <li
                      key={index}
                      className={clsx(
                        "flex flex-col w-[60px] justify-center items-center  rounded-md ",
                        today.getDate() === day.getDate()
                          ? "bg-purple-200 text-black"
                          : ""
                      )}
                    >
                      <div className="flex flex-col">
                        <span className={weekend}>{day.getDate()}</span>
                        <span className={weekend}>{DAYS[day.getDay()]}</span>
                      </div>
                      <span className="flex gap-1">
                        <RainProbability />
                        {Math.round(allAvarage.week.rainProbably[index])}
                      </span>
                      <span className="flex items-center gap-1">
                        <Water />
                        {+allAvarage.week.precipitation[index].toFixed(1)}
                      </span>
                    </li>
                  )
                }
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
