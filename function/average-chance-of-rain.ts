import {
  WeatherState,
  ThreeDayForecast,
  InitialWeatherData,
} from "../components/average-chance-of-rain.tsx"

import { getArrayNumber, getNewState } from "../components/open-meteo.tsx"

import {
  getArrayNumber as getArrayNumberWeatherApi,
  getNewState as getNewStateWeatherApi,
  Forecast,
  ForecastValue,
} from "../components/weather-api.tsx"

import {
  MeteoState,
  DataInfoHour,
  getWeatherHourly,
} from "../components/meteo-stats.tsx"

import {
  CrossingWeather,
  Day,
  getArrayNumber as getArrayNumberCrossingWeather,
  weatheeWatherMM,
} from "../components/crossing-weather.tsx"

export function getOpenMeteo(
  state: Record<string, number[]> | null,
  stateDaily: Record<string, number[]> | null,
  times: Date[] | null,
  setRainProbably: React.Dispatch<React.SetStateAction<InitialWeatherData>>
) {
  if (state !== null && stateDaily !== null && times !== null) {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(today.getDate() + 1)

    const nextTomorrow = new Date(today)
    nextTomorrow.setDate(today.getDate() + 2)

    const processTimes = (
      day: Date,
      stateKey: keyof Omit<WeatherState, "3day">,
      number: number
    ) => {
      return times
        .filter((time: Date) => time.getDate() === day.getDate())
        .forEach((time: Date, index: number) => {
          const today = new Date()
          const differenceInMilliseconds = day.getTime() - today.getTime()
          const differenceInHours = Math.round(
            differenceInMilliseconds / (1000 * 60 * 60)
          )

          index += differenceInHours

          if (index % number === 0) {
            const rainProbably = Math.max(
              ...getArrayNumber(
                state,
                "precipitation_probability",
                index,
                number
              )
            )
            const precipitation = getNewState(
              state,
              "precipitation",
              index,
              number
            ).toFixed(1)
            // console.log(rainProbably, precipitation)
            setRainProbably((prev) => ({
              ...prev,
              openMeteo: {
                ...prev.openMeteo,
                [stateKey]: {
                  ...prev.openMeteo[stateKey],
                  time: [...prev.openMeteo[stateKey].time, time],
                  rainProbably: [
                    ...prev.openMeteo[stateKey].rainProbably,
                    rainProbably,
                  ],
                  precipitation: [
                    ...prev.openMeteo[stateKey].precipitation,
                    +precipitation,
                  ],
                },
              },
            }))
          }
        })
    }

    const processTimesThreeDay = (
      day: Date,
      stateKey: keyof ThreeDayForecast,
      number: number
    ) => {
      return times
        .filter((time: Date) => time.getDate() === day.getDate())
        .forEach((time: Date, index: number) => {
          const today = new Date()
          const differenceInMilliseconds = day.getTime() - today.getTime()
          const differenceInHours = Math.round(
            differenceInMilliseconds / (1000 * 60 * 60)
          )

          index += differenceInHours

          if (index % number === 0) {
            const rainProbably = Math.max(
              ...getArrayNumber(
                state,
                "precipitation_probability",
                index,
                number
              )
            )
            const precipitation = getNewState(
              state,
              "precipitation",
              index,
              number
            ).toFixed(1)
            // console.log(rainProbably, precipitation)
            setRainProbably((prev) => ({
              ...prev,
              openMeteo: {
                ...prev.openMeteo,
                "3day": {
                  ...prev.openMeteo["3day"],
                  [stateKey]: {
                    ...prev.openMeteo["3day"][stateKey],
                    time: [...prev.openMeteo["3day"][stateKey].time, time],
                    rainProbably: [
                      ...prev.openMeteo["3day"][stateKey].rainProbably,
                      rainProbably,
                    ],
                    precipitation: [
                      ...prev.openMeteo["3day"][stateKey].precipitation,
                      +precipitation,
                    ],
                  },
                },
              },
            }))
          }
        })
    }
    setRainProbably((prev) => ({
      ...prev,
      openMeteo: {
        ...prev.openMeteo,
        week: {
          ...prev.openMeteo.week,
          time: stateDaily.time.map((timestamp) => new Date(timestamp)),
          rainProbably: [...stateDaily.precipitation_probability_max],
          precipitation: [...stateDaily.precipitation_sum],
        },
      },
    }))

    processTimes(today, "today", 3)
    processTimes(tomorrow, "tomorrow", 3)
    processTimesThreeDay(today, "today", 6)
    processTimesThreeDay(tomorrow, "tomorrow", 6)
    processTimesThreeDay(nextTomorrow, "nextTomorrow", 6)
  }
}

export function getWeatherApi(
  stateWeatherApi: Forecast | null,
  setRainProbably: React.Dispatch<React.SetStateAction<InitialWeatherData>>
) {
  if (stateWeatherApi !== null) {
    const arrayWeather = stateWeatherApi.forecast.forecastday

    const processTimesStateWeather = (
      state: ForecastValue,
      stateKey: keyof Omit<WeatherState, "3day" | "week">,
      number: number
    ) => {
      return state.hour.forEach((hour, index: number) => {
        if (index % number === 0) {
          const rainProbably = Math.max(
            ...getArrayNumberWeatherApi(
              state.hour,
              "chance_of_rain",
              index,
              number
            )
          )
          const precipitation = getNewStateWeatherApi(
            state.hour,
            "precip_mm",
            index,
            number
          ).toFixed(1)

          const timeHour = new Date(hour.time)
          // console.log(rainProbably, precipitation)
          setRainProbably((prev) => ({
            ...prev,
            stateWeatherApi: {
              ...prev.stateWeatherApi,
              [stateKey]: {
                ...prev.stateWeatherApi[stateKey],
                time: [...prev.stateWeatherApi[stateKey].time, timeHour],
                rainProbably: [
                  ...prev.stateWeatherApi[stateKey].rainProbably,
                  rainProbably,
                ],
                precipitation: [
                  ...prev.stateWeatherApi[stateKey].precipitation,
                  +precipitation,
                ],
              },
            },
          }))
        }
      })
    }

    const processTimesThreeDayStateWeather = (
      state: ForecastValue,
      stateKey: keyof ThreeDayForecast,
      number: number
    ) => {
      return state.hour.forEach((hour, index: number) => {
        if (index % number === 0) {
          const rainProbably = Math.max(
            ...getArrayNumberWeatherApi(
              state.hour,
              "chance_of_rain",
              index,
              number
            )
          )
          const precipitation = getNewStateWeatherApi(
            state.hour,
            "precip_mm",
            index,
            number
          ).toFixed(1)
          const timeHour = new Date(hour.time)
          //   console.log(rainProbably, precipitation)
          setRainProbably((prev) => ({
            ...prev,
            stateWeatherApi: {
              ...prev.stateWeatherApi,
              "3day": {
                ...prev.stateWeatherApi["3day"],
                [stateKey]: {
                  ...prev.stateWeatherApi["3day"][stateKey],
                  time: [
                    ...prev.stateWeatherApi["3day"][stateKey].time,
                    timeHour,
                  ],
                  rainProbably: [
                    ...prev.stateWeatherApi["3day"][stateKey].rainProbably,
                    rainProbably,
                  ],
                  precipitation: [
                    ...prev.stateWeatherApi["3day"][stateKey].precipitation,
                    +precipitation,
                  ],
                },
              },
            },
          }))
        }
      })
    }

    arrayWeather.forEach((day) => {
      const chance_of_rain = day.day.daily_chance_of_rain
      const precip_mm = day.day.totalprecip_mm
      const time = new Date(day.date)

      //   console.log(chance_of_rain, precip_mm)
      if (typeof chance_of_rain === "number" && typeof precip_mm === "number") {
        setRainProbably((prev) => ({
          ...prev,
          stateWeatherApi: {
            ...prev.stateWeatherApi,
            week: {
              ...prev.stateWeatherApi.week,
              time: [
                ...prev.stateWeatherApi.week.time,
                time, // Убедитесь, что chance_of_rain это число
              ],
              rainProbably: [
                ...prev.stateWeatherApi.week.rainProbably,
                chance_of_rain, // Убедитесь, что chance_of_rain это число
              ],
              precipitation: [
                ...prev.stateWeatherApi.week.precipitation,
                +precip_mm.toFixed(1), // Убедитесь, что precip_mm это число
              ],
            },
            // today: prev.stateWeatherApi.today,
            // tomorrow: prev.stateWeatherApi.tomorrow,
            // "3day": prev.stateWeatherApi["3day"],
          },
        }))
      } else {
        console.error("Invalid data types:", { chance_of_rain, precip_mm })
      }
    })

    processTimesStateWeather(arrayWeather[0], "today", 3)
    processTimesStateWeather(arrayWeather[1], "tomorrow", 3)
    processTimesThreeDayStateWeather(arrayWeather[0], "today", 6)
    processTimesThreeDayStateWeather(arrayWeather[1], "tomorrow", 6)
    processTimesThreeDayStateWeather(arrayWeather[2], "nextTomorrow", 6)
  }
}

export function getMeteoState(
  meteoState: MeteoState | null,
  setRainProbably: React.Dispatch<React.SetStateAction<InitialWeatherData>>
) {
  if (meteoState !== null) {
    const { data } = meteoState
    const days: DataInfoHour[][] = [
      data.slice(0, 23),
      data.slice(24, 48),
      data.slice(49, 72),
      data.slice(73, 96),
      data.slice(97, 120),
      data.slice(121, 144),
      data.slice(145, 168),
    ]

    const processTimesMeteoState = (
      state: DataInfoHour[],
      stateKey: keyof Omit<WeatherState, "3day" | "week">,
      number: number
    ) => {
      return state.forEach((hour, index: number) => {
        if (index % number === 0) {
          const rainProbably = null
          const precipitation = getWeatherHourly(state, "prcp", index, number)
          const precipitationNumber =
            precipitation !== 999 ? +precipitation.toFixed(1) : null
          const time = new Date(hour.time)
          // console.log(rainProbably, precipitation)
          setRainProbably((prev) => ({
            ...prev,
            meteoState: {
              ...prev.meteoState,
              [stateKey]: {
                ...prev.meteoState[stateKey],
                time: [...prev.meteoState[stateKey].time, time],
                rainProbably: [
                  ...prev.meteoState[stateKey].rainProbably,
                  rainProbably,
                ],
                precipitation: [
                  ...prev.meteoState[stateKey].precipitation,
                  precipitationNumber,
                ],
              },
            },
          }))
        }
      })
    }

    const processTimesThreeDayMeteoState = (
      state: DataInfoHour[],
      stateKey: keyof ThreeDayForecast,
      number: number
    ) => {
      return state.forEach((hour, index: number) => {
        if (index % number === 0) {
          const rainProbably = null
          const precipitation = getWeatherHourly(state, "prcp", index, number)
          const precipitationNumber =
            precipitation !== 999 ? +precipitation.toFixed(1) : null
          const time = new Date(hour.time)
          //   console.log(rainProbably, precipitation)
          setRainProbably((prev) => ({
            ...prev,
            meteoState: {
              ...prev.meteoState,
              "3day": {
                ...prev.meteoState["3day"],
                [stateKey]: {
                  ...prev.meteoState["3day"][stateKey],
                  time: [...prev.meteoState["3day"][stateKey].time, time],
                  rainProbably: [
                    ...prev.meteoState["3day"][stateKey].rainProbably,
                    rainProbably,
                  ],
                  precipitation: [
                    ...prev.meteoState["3day"][stateKey].precipitation,
                    precipitationNumber,
                  ],
                },
              },
            },
          }))
        }
      })
    }

    days.forEach(() => {
      setRainProbably((prev) => ({
        ...prev,
        meteoState: {
          ...prev.meteoState,
          week: {
            ...prev.meteoState.week,
            time: [...prev.meteoState.week.time, null],
            rainProbably: [...prev.meteoState.week.rainProbably, null],
            precipitation: [...prev.meteoState.week.precipitation, null],
          },
        },
      }))
    })

    processTimesMeteoState(days[0], "today", 3)
    processTimesMeteoState(days[1], "tomorrow", 3)
    processTimesThreeDayMeteoState(days[0], "today", 6)
    processTimesThreeDayMeteoState(days[1], "tomorrow", 6)
    processTimesThreeDayMeteoState(days[2], "nextTomorrow", 6)
  }
}

export function getCrossingDate(
  сrossingDate: CrossingWeather | null,
  setRainProbably: React.Dispatch<React.SetStateAction<InitialWeatherData>>
) {
  if (сrossingDate !== null) {
    const { days } = сrossingDate

    const processTimesCrossingDate = (
      state: Day,
      stateKey: keyof Omit<WeatherState, "3day" | "week">,
      number: number
    ) => {
      return state.hours.forEach((hour, index: number) => {
        if (index % number === 0) {
          const rainProbably = Math.round(
            Math.max(
              ...getArrayNumberCrossingWeather(
                state.hours,
                "precipprob",
                index,
                number
              )
            )
          )
          const precipitation = weatheeWatherMM(state.hours, index, number)
          const timeHour = new Date(state.datetime + " " + hour.datetime)
          // console.log(rainProbably, precipitation)
          setRainProbably((prev) => ({
            ...prev,
            crossingDate: {
              ...prev.crossingDate,
              [stateKey]: {
                ...prev.crossingDate[stateKey],
                time: [...prev.crossingDate[stateKey].time, timeHour],
                rainProbably: [
                  ...prev.crossingDate[stateKey].rainProbably,
                  rainProbably,
                ],
                precipitation: [
                  ...prev.crossingDate[stateKey].precipitation,
                  +precipitation,
                ],
              },
            },
          }))
        }
      })
    }

    const processTimesThreeDayCrossingDate = (
      state: Day,
      stateKey: keyof ThreeDayForecast,
      number: number
    ) => {
      return state.hours.forEach((hour, index: number) => {
        if (index % number === 0) {
          const rainProbably = Math.round(
            Math.max(
              ...getArrayNumberCrossingWeather(
                state.hours,
                "precipprob",
                index,
                number
              )
            )
          )
          const precipitation = weatheeWatherMM(state.hours, index, number)
          const timeHour = new Date(state.datetime + " " + hour.datetime)
          //   console.log(rainProbably, precipitation)
          setRainProbably((prev) => ({
            ...prev,
            crossingDate: {
              ...prev.crossingDate,
              "3day": {
                ...prev.crossingDate["3day"],
                [stateKey]: {
                  ...prev.crossingDate["3day"][stateKey],
                  time: [...prev.crossingDate["3day"][stateKey].time, timeHour],
                  rainProbably: [
                    ...prev.crossingDate["3day"][stateKey].rainProbably,
                    rainProbably,
                  ],
                  precipitation: [
                    ...prev.crossingDate["3day"][stateKey].precipitation,
                    +precipitation,
                  ],
                },
              },
            },
          }))
        }
      })
    }

    days.forEach((day) => {
      const rainProbably = Math.round(day.precipprob)
      const precipitation = +Math.max(day.precip, day.snow).toFixed(1)
      const timeHour = new Date(day.datetime)
      //   console.log(chance_of_rain, precip_mm)

      setRainProbably((prev) => ({
        ...prev,
        crossingDate: {
          ...prev.crossingDate,
          week: {
            time: [
              ...prev.crossingDate.week.time,
              timeHour, // Убедитесь, что chance_of_rain это число
            ],
            rainProbably: [
              ...prev.crossingDate.week.rainProbably,
              rainProbably, // Убедитесь, что chance_of_rain это число
            ],
            precipitation: [
              ...prev.crossingDate.week.precipitation,
              precipitation, // Убедитесь, что precip_mm это число
            ],
          },
          // today: prev.stateWeatherApi.today,
          // tomorrow: prev.stateWeatherApi.tomorrow,
          // "3day": prev.stateWeatherApi["3day"],
        },
      }))
    })

    processTimesCrossingDate(days[0], "today", 3)
    processTimesCrossingDate(days[1], "tomorrow", 3)
    processTimesThreeDayCrossingDate(days[0], "today", 6)
    processTimesThreeDayCrossingDate(days[1], "tomorrow", 6)
    processTimesThreeDayCrossingDate(days[2], "nextTomorrow", 6)
  }
}
