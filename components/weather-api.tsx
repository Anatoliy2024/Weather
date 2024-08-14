import { DAYS, MONTHS } from "../constants/montsAndDayWeek"

import clsx from "clsx"
import { Water, Windy, RainProbability } from "./iconSVG"

export type Condition = {
  code: number
  icon: string
}

type Day = Record<string, number | Condition>

// type Hour = Record<string, number | string | Condition>
type Hour = {
  time: string
  [key: string]: number | string | Condition
}

type Location = Record<string, number | string>

export type ForecastValue = {
  date: string
  day: Day
  hour: Hour[]
}

// type ForecastDay = ForecastValue[]

export type Forecast = {
  current: object
  forecast: {
    forecastday: ForecastValue[]
  }
  location: Location
}
// type Forecast = Pick<WeatherState, 'forecast'>

function changeHours(day: string): Date {
  const value = new Date(day)

  return value
}

export function getNewState(
  state: Hour[] | null,
  value: string,
  index: number,
  number: number
) {
  if (state === null) return 0
  let count = 0

  for (let i = 0; i < number; i++) {
    count += state[index + i][value] as number
  }
  // console.log(count)
  return count
}

function getDayTime(index: number) {
  let daytime: string = ""
  if (index % 24 === 0) {
    daytime = "Ночь"
  } else if (index % 24 === 6) {
    daytime = "Утро"
  } else if (index % 24 === 12) {
    daytime = "День"
  } else if (index % 24 === 18) {
    daytime = "Вечер"
  }
  return daytime
}

export function getArrayNumber(
  state: Hour[] | null,
  value: string,
  index: number,
  number: number
) {
  if (state === null) return []
  const array: number[] = []
  for (let i = 0; i < number; i++) {
    array.push(state[index + i][value] as number)
  }
  // console.log(value, array)
  return array
}

function changeDate(num: string): Date {
  const day = new Date(num)
  return day
}

export function WeatherAPI({
  stateWeatherApi,
  statusShow,
}: {
  stateWeatherApi: Forecast | null
  statusShow: string
}) {
  if (stateWeatherApi === null) return null
  const { forecast }: Pick<Forecast, "forecast"> = stateWeatherApi

  const arrayDays: ForecastValue[] = forecast.forecastday
  const today = 0

  const tomorrow = 1

  const nextTomorrow = 2

  // const timesDaily = stateDaily?.time.map(
  //   (timestamp: number) => new Date(timestamp)
  // )

  // interface RandomObject {
  //   [key: string]: any
  // }
  const weatherFromDay = (
    day: number,
    // times: Date[],
    arrayDays: ForecastValue[]
  ) => (
    <div className=" select-none ">
      <div>
        {changeDate(arrayDays[day].date).getDate()}:
        {DAYS[changeDate(arrayDays[day].date).getDay()]}:
        {MONTHS[changeDate(arrayDays[day].date).getMonth() + 1]}
      </div>
      <ul className="flex ">
        {arrayDays[day].hour.map((hourInfo: Hour, index: number) => {
          const today = new Date()
          const time = changeDate(hourInfo.time as string)
          if (index % 3 === 0) {
            const hours = arrayDays[day].hour
            if (
              typeof hourInfo.condition === "object" &&
              hourInfo.condition !== null
            ) {
              const rainProbably = Math.max(
                ...getArrayNumber(hours, "chance_of_rain", index, 3)
              )
              const precipitation =
                getNewState(hours, "precip_mm", index, 3) === 0
                  ? 0
                  : getNewState(hours, "precip_mm", index, 3).toFixed(1)

              return (
                <li
                  key={index}
                  className={clsx(
                    "flex flex-col w-[60px] justify-center items-center  rounded-md ",
                    (today.getHours() === time.getHours() ||
                      today.getHours() === time.getHours() + 1 ||
                      today.getHours() === time.getHours() + 2) &&
                      changeDate(arrayDays[day].date).getDate() ===
                        today.getDate()
                      ? " bg-purple-200 text-black"
                      : ""
                  )}
                >
                  <span>
                    {time.toLocaleTimeString("ru-RU", {
                      hour: "2-digit",
                      minute: "2-digit",

                      hour12: false, // Устанавливает 24-часовой формат
                    })}
                  </span>
                  {/* {code[index] ===} */}

                  {/* <WeatherIcon
                      weather_code={Math.max(
                        ...getArrayNumber(
                          arrayDays[day].hour,
                          "image_code",
                          index,
                          3
                        )
                      )}
                    /> */}
                  <div>
                    <img
                      src={hourInfo.condition.icon}
                      alt="weatherImg"
                      width={40}
                    />
                  </div>

                  <span>
                    {hourInfo.temp_c.toString()[0] === "-" ? "" : "+"}
                    {Math.round(getNewState(hours, "temp_c", index, 3) / 3)}
                    {/* {Math.round(
                        (arrayDays[day].hour[index].temp_c +
                          arrayDays[day].hour[index + 1].temp_c +
                          arrayDays[day].hour[index + 2].temp_c) /
                          3
                      )} */}
                    °
                  </span>
                  <span className="flex gap-1">
                    <Windy />
                    {Math.round(
                      Math.max(...getArrayNumber(hours, "wind_kph", index, 3))
                    )}
                    {/* {Math.round(
                        Math.max(
                          (arrayDays[day].hour[index].wind_kph,
                          arrayDays[day].hour[index + 1].wind_kph,
                          arrayDays[day].hour[index + 2].wind_kph)
                        )
                      )} */}
                  </span>
                  <span className="flex gap-1">
                    <RainProbability />
                    {rainProbably}
                    {/* {Math.max(
                      ...getArrayNumber(hours, "chance_of_rain", index, 3)
                    )} */}
                  </span>
                  <span className="flex items-center gap-1">
                    <Water />
                    {precipitation}
                    {/* {getNewState(hours, "precip_mm", index, 3) === 0
                      ? 0
                      : getNewState(hours, "precip_mm", index, 3).toFixed(1)} */}
                  </span>
                </li>
              )
            } else {
              return null
            }
          } else {
            return null
          }
        })}
      </ul>
    </div>
  )

  const renderWeather = (
    // date: Date,
    // times: Date[],
    // state: Record<string, number[]>
    day: number,
    // times: Date[],
    arrayDays: ForecastValue[]
  ) => (
    <div className="select-none" key={day}>
      <div>
        {changeDate(arrayDays[day].date).getDate()}:
        {DAYS[changeDate(arrayDays[day].date).getDay()]}:
        {MONTHS[changeDate(arrayDays[day].date).getMonth() + 1]}
      </div>
      <ul className="flex">
        {arrayDays[day].hour.map((_: Hour, index: number) => {
          // const today = new Date()

          // const differenceInMilliseconds = date.getTime() - today.getTime()
          // const differenceInHours = Math.round(
          //   differenceInMilliseconds / (1000 * 60 * 60)
          // )

          // index += differenceInHours
          // getArrayNumber(hours, "wind_kph", index, 6)
          if (index % 6 === 0) {
            const hours = arrayDays[day].hour
            const today = new Date()
            const change = changeHours(hours[index].time as string)

            if (
              typeof arrayDays[day].hour[index].condition === "object" &&
              arrayDays[day].hour[index].condition !== null
            ) {
              const rainProbably = Math.max(
                ...getArrayNumber(hours, "chance_of_rain", index, 6)
              )
              const precipitation =
                getNewState(hours, "precip_mm", index, 6) === 0
                  ? 0
                  : getNewState(hours, "precip_mm", index, 6).toFixed(1)

              return (
                <li
                  key={index}
                  className={clsx(
                    "flex flex-col w-[60px] rounded items-center",
                    (today.getHours() === change.getHours() ||
                      today.getHours() === change.getHours() + 1 ||
                      today.getHours() === change.getHours() + 2 ||
                      today.getHours() === change.getHours() + 3 ||
                      today.getHours() === change.getHours() + 4 ||
                      today.getHours() === change.getHours() + 5) &&
                      change.getDate() === today.getDate()
                      ? "bg-purple-200 text-black"
                      : ""
                  )}
                >
                  <div>{getDayTime(index)}</div>

                  <div>
                    <img
                      src={arrayDays[day].hour[index].condition.icon}
                      alt="weatherImg"
                      width={40}
                    />
                  </div>

                  <span>
                    {hours[index].temp_c.toString()[0] === "-" ? "" : "+"}
                    {Math.round(getNewState(hours, "temp_c", index, 6) / 6)}°
                  </span>

                  <span className="flex gap-1">
                    <Windy />
                    {Math.round(
                      Math.max(...getArrayNumber(hours, "wind_kph", index, 6))
                    )}
                  </span>
                  <span className="flex gap-1">
                    <RainProbability />
                    {rainProbably}
                    {/* {Math.max(
                      ...getArrayNumber(hours, "chance_of_rain", index, 6)
                    )} */}
                  </span>

                  <span className="flex items-center gap-1">
                    <Water />
                    {precipitation}
                    {/* {getNewState(hours, "precip_mm", index, 6) === 0
                      ? 0
                      : getNewState(hours, "precip_mm", index, 6).toFixed(1)} */}
                  </span>
                </li>
              )
            } else {
              return null
            }
          }
        })}
      </ul>
    </div>
  )

  // const day = 24
  return (
    <div className="max-w-full ">
      <h2 className="text-center">WeatherAPI</h2>
      <div className=" flex flex-col gap-4  rounded-md bg-violet-50 text-pink-800">
        {arrayDays !== null &&
          statusShow === "day" &&
          weatherFromDay(today, arrayDays)}
        {arrayDays !== null &&
          statusShow === "tomorrow" &&
          weatherFromDay(tomorrow, arrayDays)}
        {arrayDays !== null && statusShow === "3day" && (
          <div className="flex">
            <div className="flex gap-3">
              {renderWeather(today, arrayDays)}
              {renderWeather(tomorrow, arrayDays)}
              {renderWeather(nextTomorrow, arrayDays)}
            </div>
          </div>
        )}
        {arrayDays !== null && statusShow === "week" && (
          <div className="w-full select-none">
            <ul className="flex ">
              {arrayDays.map((day: ForecastValue, index: number) => {
                if (arrayDays !== null) {
                  const dayInfo = day.day

                  if (
                    typeof dayInfo.maxtemp_c === "number" &&
                    typeof dayInfo.mintemp_c === "number" &&
                    typeof dayInfo.maxwind_kph === "number" &&
                    typeof dayInfo.totalprecip_mm === "number" &&
                    typeof dayInfo.daily_chance_of_rain === "number" &&
                    typeof dayInfo.condition === "object" &&
                    dayInfo.condition !== null
                  ) {
                    const today = new Date()
                    const someDate = changeDate(day.date)
                    const weekend =
                      DAYS[someDate.getDay()] === "Сб" ||
                      DAYS[someDate.getDay()] === "Вс"
                        ? "text-sky-400"
                        : ""
                    return (
                      <li
                        key={index}
                        className={clsx(
                          "flex flex-col w-[60px] justify-center items-center  rounded-md ",
                          today.getDate() === someDate.getDate()
                            ? "bg-purple-200 text-black"
                            : ""
                        )}
                      >
                        <div className="flex flex-col">
                          <span className={weekend}>{someDate.getDate()}</span>
                          <span className={weekend}>
                            {DAYS[someDate.getDay()]}
                          </span>
                          {/* <span>{MONTHS[time.getMonth() + 1]}</span> */}
                        </div>

                        {/* <WeatherIcon
                            weather_code={stateDaily.weather_code[index]}
                          /> */}
                        <div>
                          <img
                            src={dayInfo.condition.icon}
                            alt="weatherImg"
                            width={40}
                          />
                        </div>
                        <span className="rounded bg-green-200">
                          {dayInfo.maxtemp_c.toString()[0] === "-" ? "" : "+"}
                          {Math.round(dayInfo.maxtemp_c)}°
                        </span>
                        <span className="rounded bg-blue-200">
                          {dayInfo.mintemp_c.toString()[0] === "-" ? "" : "+"}
                          {Math.round(dayInfo.mintemp_c)}°
                        </span>
                        <span className="flex gap-1">
                          <Windy />
                          {Math.round(dayInfo.maxwind_kph)}
                        </span>
                        <span className="flex gap-1">
                          <RainProbability />
                          {dayInfo.daily_chance_of_rain}
                        </span>
                        <span className="flex items-center gap-1">
                          <Water />
                          {dayInfo.totalprecip_mm.toFixed(1)}
                        </span>
                      </li>
                    )
                  } else {
                    return null
                  }
                }
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
