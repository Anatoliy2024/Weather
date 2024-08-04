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
    today: { time: [], rainProbably: [], precipitation: [] },
    tomorrow: { time: [], rainProbably: [], precipitation: [] },
    "3day": {
      today: { time: [], rainProbably: [], precipitation: [] },
      tomorrow: { time: [], rainProbably: [], precipitation: [] },
      nextTomorrow: { time: [], rainProbably: [], precipitation: [] },
    },
    week: { time: [], rainProbably: [], precipitation: [] },
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
      // const today = new Date()
      // const tomorrow = new Date(today)
      // tomorrow.setDate(today.getDate() + 1)

      // const nextTomorrow = new Date(today)
      // nextTomorrow.setDate(today.getDate() + 2)

      // const processTimes = (
      //   day: Date,
      //   stateKey: keyof Omit<WeatherState, "3day">,
      //   number: number
      // ) => {
      //   return times
      //     .filter((time) => time.getDate() === day.getDate())
      //     .forEach((time: Date, index: number) => {
      //       const today = new Date()
      //       const differenceInMilliseconds = day.getTime() - today.getTime()
      //       const differenceInHours = Math.round(
      //         differenceInMilliseconds / (1000 * 60 * 60)
      //       )

      //       index += differenceInHours

      //       if (index % number === 0) {
      //         const rainProbably = Math.max(
      //           ...getArrayNumber(
      //             state,
      //             "precipitation_probability",
      //             index,
      //             number
      //           )
      //         )
      //         const precipitation = getNewState(
      //           state,
      //           "precipitation",
      //           index,
      //           number
      //         ).toFixed(1)
      //         console.log(rainProbably, precipitation)
      //         setRainProbably((prev) => ({
      //           ...prev,
      //           openMeteo: {
      //             ...prev.openMeteo,
      //             [stateKey]: {
      //               ...prev.openMeteo[stateKey],
      //               rainProbably: [
      //                 ...prev.openMeteo[stateKey].rainProbably,
      //                 rainProbably,
      //               ],
      //               precipitation: [
      //                 ...prev.openMeteo[stateKey].precipitation,
      //                 +precipitation,
      //               ],
      //             },
      //           },
      //         }))
      //       }
      //     })
      // }

      // const processTimesThreeDay = (
      //   day: Date,
      //   stateKey: keyof ThreeDayForecast,
      //   number: number
      // ) => {
      //   return times
      //     .filter((time) => time.getDate() === day.getDate())
      //     .forEach((time: Date, index: number) => {
      //       const today = new Date()
      //       const differenceInMilliseconds = day.getTime() - today.getTime()
      //       const differenceInHours = Math.round(
      //         differenceInMilliseconds / (1000 * 60 * 60)
      //       )

      //       index += differenceInHours

      //       if (index % number === 0) {
      //         const rainProbably = Math.max(
      //           ...getArrayNumber(
      //             state,
      //             "precipitation_probability",
      //             index,
      //             number
      //           )
      //         )
      //         const precipitation = getNewState(
      //           state,
      //           "precipitation",
      //           index,
      //           number
      //         ).toFixed(1)
      //         console.log(rainProbably, precipitation)
      //         setRainProbably((prev) => ({
      //           ...prev,
      //           openMeteo: {
      //             ...prev.openMeteo,
      //             "3day": {
      //               ...prev.openMeteo["3day"],
      //               [stateKey]: {
      //                 ...prev.openMeteo["3day"][stateKey],
      //                 rainProbably: [
      //                   ...prev.openMeteo["3day"][stateKey].rainProbably,
      //                   rainProbably,
      //                 ],
      //                 precipitation: [
      //                   ...prev.openMeteo["3day"][stateKey].precipitation,
      //                   +precipitation,
      //                 ],
      //               },
      //             },
      //           },
      //         }))
      //       }
      //     })
      // }
      // setRainProbably((prev) => ({
      //   ...prev,
      //   openMeteo: {
      //     ...prev.openMeteo,
      //     week: {
      //       rainProbably: [...stateDaily.precipitation_probability_max],
      //       precipitation: [...stateDaily.precipitation_sum],
      //     },
      //   },
      // }))

      // processTimes(today, "today", 3)
      // processTimes(tomorrow, "tomorrow", 3)
      // processTimesThreeDay(today, "today", 6)
      // processTimesThreeDay(tomorrow, "tomorrow", 6)
      // processTimesThreeDay(nextTomorrow, "nextTomorrow", 6)
    }
    if (stateWeatherApi !== null) {
      getWeatherApi(stateWeatherApi, setRainProbably)

      // const arrayWeather = stateWeatherApi.forecast.forecastday

      // // const getDayInfo=(state,day,number)=>{

      // // }

      // const processTimesStateWeather = (
      //   state: ForecastValue,
      //   stateKey: keyof Omit<WeatherState, "3day" | "week">,
      //   number: number
      // ) => {
      //   return state.hour.forEach((hour, index: number) => {
      //     if (index % number === 0) {
      //       const rainProbably = Math.max(
      //         ...getArrayNumber(state.hour, "chance_of_rain", index, number)
      //       )
      //       const precipitation = getNewState(
      //         state.hour,
      //         "precip_mm",
      //         index,
      //         number
      //       ).toFixed(1)
      //       // console.log(rainProbably, precipitation)
      //       setRainProbably((prev) => ({
      //         ...prev,
      //         stateWeatherApi: {
      //           ...prev.stateWeatherApi,
      //           [stateKey]: {
      //             ...prev.stateWeatherApi[stateKey],
      //             rainProbably: [
      //               ...prev.stateWeatherApi[stateKey].rainProbably,
      //               rainProbably,
      //             ],
      //             precipitation: [
      //               ...prev.stateWeatherApi[stateKey].precipitation,
      //               +precipitation,
      //             ],
      //           },
      //         },
      //       }))
      //     }
      //   })
      // }

      // const processTimesThreeDayStateWeather = (
      //   state: ForecastValue,
      //   stateKey: keyof ThreeDayForecast,
      //   number: number
      // ) => {
      //   return state.hour.forEach((hour, index: number) => {
      //     if (index % number === 0) {
      //       const rainProbably = Math.max(
      //         ...getArrayNumber(state.hour, "chance_of_rain", index, number)
      //       )
      //       const precipitation = getNewState(
      //         state.hour,
      //         "precip_mm",
      //         index,
      //         number
      //       ).toFixed(1)
      //       console.log(rainProbably, precipitation)
      //       setRainProbably((prev) => ({
      //         ...prev,
      //         stateWeatherApi: {
      //           ...prev.stateWeatherApi,
      //           "3day": {
      //             ...prev.stateWeatherApi["3day"],
      //             [stateKey]: {
      //               ...prev.stateWeatherApi["3day"][stateKey],
      //               rainProbably: [
      //                 ...prev.stateWeatherApi["3day"][stateKey].rainProbably,
      //                 rainProbably,
      //               ],
      //               precipitation: [
      //                 ...prev.stateWeatherApi["3day"][stateKey].precipitation,
      //                 +precipitation,
      //               ],
      //             },
      //           },
      //         },
      //       }))
      //     }
      //   })
      // }

      // arrayWeather.forEach((day) => {
      //   const chance_of_rain = day.day.daily_chance_of_rain
      //   const precip_mm = day.day.totalprecip_mm

      //   console.log(rainProbably, precip_mm)
      //   if (
      //     typeof chance_of_rain === "number" &&
      //     typeof precip_mm === "number"
      //   ) {
      //     setRainProbably((prev) => ({
      //       ...prev,
      //       stateWeatherApi: {
      //         ...prev.stateWeatherApi,
      //         week: {
      //           rainProbably: [
      //             ...prev.stateWeatherApi.week.rainProbably,
      //             chance_of_rain, // Убедитесь, что chance_of_rain это число
      //           ],
      //           precipitation: [
      //             ...prev.stateWeatherApi.week.precipitation,
      //             +precip_mm.toFixed(1), // Убедитесь, что precip_mm это число
      //           ],
      //         },
      //         today: prev.stateWeatherApi.today,
      //         tomorrow: prev.stateWeatherApi.tomorrow,
      //         "3day": prev.stateWeatherApi["3day"],
      //       },
      //     }))
      //   } else {
      //     console.error("Invalid data types:", { chance_of_rain, precip_mm })
      //   }
      // })

      // processTimesStateWeather(arrayWeather[0], "today", 3)
      // processTimesStateWeather(arrayWeather[1], "tomorrow", 3)
      // processTimesThreeDayStateWeather(arrayWeather[0], "today", 6)
      // processTimesThreeDayStateWeather(arrayWeather[1], "tomorrow", 6)
      // processTimesThreeDayStateWeather(arrayWeather[2], "nextTomorrow", 6)
    }
    if (meteoState !== null) {
      getMeteoState(meteoState, setRainProbably)
    }
    if (сrossingDate !== null) {
      getCrossingDate(сrossingDate, setRainProbably)
    }

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
          // rainProbably.stateWeatherApi[day].rainProbably,
          // rainProbably.meteoState[day].rainProbably,
          // rainProbably.crossingDate[day].rainProbably,
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
          // rainProbably.openMeteo[day].precipitation,
          // rainProbably.stateWeatherApi[day].precipitation,
          // rainProbably.meteoState[day].precipitation,
          // rainProbably.crossingDate[day].precipitation,
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

          // rainProbably.openMeteo["3day"][day].rainProbably,
          // rainProbably.stateWeatherApi["3day"][day].rainProbably,
          // rainProbably.meteoState["3day"][day].rainProbably,
          // rainProbably.crossingDate["3day"][day].rainProbably,
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

          // rainProbably.openMeteo["3day"][day].precipitation,
          // rainProbably.stateWeatherApi["3day"][day].precipitation,
          // rainProbably.meteoState["3day"][day].precipitation,
          // rainProbably.crossingDate["3day"][day].precipitation,
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

          // rainProbably.openMeteo.week.rainProbably,
          // rainProbably.stateWeatherApi.week.rainProbably,
          // rainProbably.meteoState.week.rainProbably,
          // rainProbably.crossingDate.week.rainProbably,
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

          // rainProbably.openMeteo.week.precipitation,
          // rainProbably.stateWeatherApi.week.precipitation,
          // rainProbably.meteoState.week.precipitation,
          // rainProbably.crossingDate.week.precipitation,
        ],
      }
    }

    // dayAverage("tomorrow")
    // threeDayAverage("today")
    // threeDayAverage("tomorrow")
    // threeDayAverage("nextTomorrow")
    // weekAverage()

    const allAverege = {
      today: dayAverage("today"),
      tomorrow: dayAverage("tomorrow"),
      "3day": {
        today: threeDayAverage("today"),
        tomorrow: threeDayAverage("tomorrow"),
        nextTomorrow: threeDayAverage("nextTomorrow"),
      },
      week: weekAverage(),
    }

    setAllAvarage(allAverege)

    // const today = {
    //   time: rainProbably.openMeteo.today.time,
    //   rainProbably: [
    //     rainProbably.openMeteo.today.rainProbably,
    //     rainProbably.stateWeatherApi.today.rainProbably,
    //     rainProbably.meteoState.today.rainProbably,
    //     rainProbably.crossingDate.today.rainProbably,
    //   ],
    //   precipitation: [
    //     rainProbably.openMeteo.today.precipitation,
    //     rainProbably.stateWeatherApi.today.precipitation,
    //     rainProbably.meteoState.today.precipitation,
    //     rainProbably.crossingDate.today.precipitation,
    //   ],
    // }

    // const tomorrow = {
    //   time: rainProbably.openMeteo.tomorrow.time,
    //   rainProbably: [
    //     rainProbably.openMeteo.tomorrow.rainProbably,
    //     rainProbably.stateWeatherApi.tomorrow.rainProbably,
    //     rainProbably.meteoState.tomorrow.rainProbably,
    //     rainProbably.crossingDate.tomorrow.rainProbably,
    //   ],
    //   precipitation: [
    //     rainProbably.openMeteo.tomorrow.precipitation,
    //     rainProbably.stateWeatherApi.tomorrow.precipitation,
    //     rainProbably.meteoState.tomorrow.precipitation,
    //     rainProbably.crossingDate.tomorrow.precipitation,
    //   ],
    // }
  }, [state, stateDaily, stateWeatherApi, meteoState, сrossingDate]) // Зависимости useEffect

  // console.log("times", times)
  // console.log("state", state)
  // console.log("stateDaily", stateDaily)
  // console.log("stateWeatherApi", stateWeatherApi)
  // console.log("meteoState", meteoState)
  // console.log("сrossingDate", сrossingDate)

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
                    "flex flex-col w-[55px] justify-center items-center  rounded-md ",
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
        <ul className="flex">
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
                    "flex flex-col max-w-[48px] rounded",
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
    <div>
      <h2 className="text-center">Среднее занчение осадков</h2>
      <div className="border border-lime-400  flex flex-col gap-4  rounded-md bg-violet-50 text-pink-800">
        {statusShow === "day" && weatherFromDay(allAvarage.today)}
        {statusShow === "tomorrow" && weatherFromDay(allAvarage.tomorrow)}
        {statusShow === "3day" && (
          <div className="flex">
            <div className="flex gap-3">
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
                        "flex flex-col w-[55px] justify-center items-center  rounded-md ",
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
