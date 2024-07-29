import { DAYS, MONTHS } from "../constants/montsAndDayWeek"

import clsx from "clsx"
import { Water, Windy, RainProbability } from "./iconSVG"

type Condition = {
  code: number
  icon: string
}

type Day = Record<string, number | Condition>

type Hour = Record<string, number | string | Condition>

type Location = Record<string, number | string>

type ForecastValue = {
  date: string
  day: Day
  hour: Hour[]
}

// type ForecastDay = ForecastValue[]

type Forecast = {
  current: object
  forecast: {
    forecastday: ForecastValue[]
  }
  location: Location
}
// type Forecast = Pick<WeatherState, 'forecast'>

export function WeatherAPI({
  stateWeatherApi,
  statusShow,
}: {
  stateWeatherApi: Forecast | null
  statusShow: string
}) {
  if (stateWeatherApi === null) return
  const { forecast }: Pick<Forecast, "forecast"> = stateWeatherApi

  const arrayDays: ForecastValue[] = forecast.forecastday
  const today = 0

  const tomorrow = 1

  const nextTomorrow = 2

  // const timesDaily = stateDaily?.time.map(
  //   (timestamp: number) => new Date(timestamp)
  // )

  function getNewState(
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

  function getArrayNumber(
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
  // interface RandomObject {
  //   [key: string]: any
  // }
  const weatherFromDay = (
    day: number,
    // times: Date[],
    arrayDays: ForecastValue[]
  ) => (
    <div className=" select-none">
      <h2>WeatherAPI</h2>
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
              return (
                <li
                  key={index}
                  className={clsx(
                    "flex flex-col w-[55px] justify-center items-center  rounded-md ",
                    (today.getHours() === time.getHours() ||
                      today.getHours() === time.getHours() + 1 ||
                      today.getHours() === time.getHours() + 2) &&
                      changeDate(arrayDays[day].date).getDate() ===
                        today.getDate()
                      ? "border border-lime-400 bg-lime-100"
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
                    {Math.max(
                      ...getArrayNumber(hours, "chance_of_rain", index, 3)
                    )}
                    {/* {Math.max(
                        (hourInfo.chance_of_rain,
                        arrayDays[day].hour[index + 1].chance_of_rain,
                        arrayDays[day].hour[index + 2].chance_of_rain)
                      )} */}
                  </span>
                  <span className="flex items-center gap-1">
                    <Water />
                    {getNewState(hours, "precip_mm", index, 3) === 0
                      ? 0
                      : getNewState(hours, "precip_mm", index, 3).toFixed(1)}
                    {/* {hourInfo.precip_mm +
                        arrayDays[day].hour[index + 1].precip_mm +
                        arrayDays[day].hour[index + 2].precip_mm ===
                      0
                        ? 0
                        : (
                            hourInfo.precip_mm +
                            arrayDays[day].hour[index + 1].precip_mm +
                            arrayDays[day].hour[index + 2].precip_mm
                          ).toFixed(1)} */}
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
          const hours = arrayDays[day].hour

          // getArrayNumber(hours, "wind_kph", index, 6)
          if (index % 6 === 0) {
            // console.log(
            //   Math.max(
            //     hours[index].wind_kph,
            //     hours[index + 1].wind_kph,
            //     hours[index + 2].wind_kph,
            //     hours[index + 3].wind_kph,
            //     hours[index + 4].wind_kph,
            //     hours[index + 5].wind_kph
            //   )
            // )
            if (
              typeof arrayDays[day].hour[index].condition === "object" &&
              arrayDays[day].hour[index].condition !== null
            ) {
              return (
                <li key={index} className="flex flex-col">
                  <div>{getDayTime(index)}</div>
                  {/* <WeatherIcon
                    weather_code={Math.max(
                      ...getArrayNumber(state, "weather_code", index, 6)
                    )}
                  /> */}
                  <div>
                    <img
                      src={arrayDays[day].hour[index].condition.icon}
                      alt="weatherImg"
                      width={40}
                    />
                  </div>
                  {/* <span>
                    {state.temperature_2m[index].toString()[0] === "-" ? "" : "+"}
                    {Math.round(
                      getNewState(state, "temperature_2m", index, 6) / 6
                    )}
                    °
                  </span> */}

                  <span>
                    {hours[index].temp_c.toString()[0] === "-" ? "" : "+"}
                    {Math.round(getNewState(hours, "temp_c", index, 6) / 6)}
                    {/* {Math.round(
                      (arrayDays[day].hour[index].temp_c +
                        arrayDays[day].hour[index + 1].temp_c +
                        arrayDays[day].hour[index + 2].temp_c +
                        arrayDays[day].hour[index + 3].temp_c +
                        arrayDays[day].hour[index + 4].temp_c +
                        arrayDays[day].hour[index + 5].temp_c) /
                        6
                    )} */}
                    °
                  </span>

                  <span className="flex gap-1">
                    <Windy />
                    {Math.round(
                      Math.max(...getArrayNumber(hours, "wind_kph", index, 6))
                    )}
                    {/* {getArrayNumber(hours,'wind_kph',index,6)}
                    {Math.round(
                      Math.max(
                        ...[
                          hours[index].wind_kph,
                          hours[index + 1].wind_kph,
                          hours[index + 2].wind_kph,
                          hours[index + 3].wind_kph,
                          hours[index + 4].wind_kph,
                          hours[index + 5].wind_kph,
                        ]
                      )
                    )} */}
                  </span>
                  <span className="flex gap-1">
                    <RainProbability />
                    {Math.max(
                      ...getArrayNumber(hours, "chance_of_rain", index, 6)
                    )}
                    {/* {Math.max(
                      (arrayDays[day].hour[index].chance_of_rain,
                      arrayDays[day].hour[index + 1].chance_of_rain,
                      arrayDays[day].hour[index + 2].chance_of_rain,
                      arrayDays[day].hour[index + 3].chance_of_rain,
                      arrayDays[day].hour[index + 4].chance_of_rain,
                      arrayDays[day].hour[index + 5].chance_of_rain)
                    )} */}
                  </span>

                  <span className="flex items-center gap-1">
                    <Water />
                    {getNewState(hours, "precip_mm", index, 6) === 0
                      ? 0
                      : getNewState(hours, "precip_mm", index, 6).toFixed(1)}

                    {/* {arrayDays[day].hour[index].precip_mm +
                      arrayDays[day].hour[index + 1].precip_mm +
                      arrayDays[day].hour[index + 2].precip_mm +
                      arrayDays[day].hour[index + 3].precip_mm +
                      arrayDays[day].hour[index + 4].precip_mm +
                      arrayDays[day].hour[index + 5].precip_mm ===
                    0
                      ? 0
                      : (
                          arrayDays[day].hour[index].precip_mm +
                          arrayDays[day].hour[index + 1].precip_mm +
                          arrayDays[day].hour[index + 2].precip_mm +
                          arrayDays[day].hour[index + 3].precip_mm +
                          arrayDays[day].hour[index + 4].precip_mm +
                          arrayDays[day].hour[index + 5].precip_mm
                        ).toFixed(1)} */}
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
    <div className=" ">
      <div className="border border-lime-400  flex flex-col gap-4  rounded-md">
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
                    return (
                      <li
                        key={index}
                        className={clsx(
                          "flex flex-col w-[55px] justify-center items-center  rounded-md "
                        )}
                      >
                        <div className="flex flex-col">
                          <span>{changeDate(day.date).getDate()}</span>
                          <span>{DAYS[changeDate(day.date).getDay()]}</span>
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
