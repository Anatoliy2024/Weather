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
    today: { rainProbably: [], precipitation: [] },
    tomorrow: { rainProbably: [], precipitation: [] },
    "3day": {
      today: { rainProbably: [], precipitation: [] },
      tomorrow: { rainProbably: [], precipitation: [] },
      nextTomorrow: { rainProbably: [], precipitation: [] },
    },
    week: { rainProbably: [], precipitation: [] },
  }

  const [rainProbably, setRainProbably] = useState<InitialWeatherData>({
    openMeteo: initialWeatherData,
    stateWeatherApi: initialWeatherData,
    meteoState: initialWeatherData,
    crossingDate: initialWeatherData,
  })

  useEffect(() => {
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
  }, [state, stateDaily, stateWeatherApi, meteoState, сrossingDate]) // Зависимости useEffect

  // console.log("times", times)
  // console.log("state", state)
  // console.log("stateDaily", stateDaily)
  // console.log("stateWeatherApi", stateWeatherApi)
  // console.log("meteoState", meteoState)
  // console.log("сrossingDate", сrossingDate)

  console.log("Массив", rainProbably)

  return <div>Hellow World</div>
}
