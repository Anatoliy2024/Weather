import { DAYS, MONTHS } from "../constants/montsAndDayWeek"

import clsx from "clsx"
import { WeatherIcon, Water, Windy, RainProbability } from "./iconSVG"

export function getNewState(
  state: Record<string, number[]> | null,
  value: string,
  index: number,
  number: number
) {
  if (state === null) return 0
  let count = 0

  for (let i = 0; i < number; i++) {
    count += state[value][index + i]
  }
  // console.log(count)
  return count
}

export function getDayTime(index: number) {
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
  state: Record<string, number[]> | null,
  value: string,
  index: number,
  number: number
) {
  if (state === null) return []
  const array: number[] = []
  for (let i = 0; i < number; i++) {
    array.push(state[value][index + i])
  }
  // console.log(value, array)
  return array
}

export function OpenMeteo({
  statusShow,
  state,
  stateDaily,
  times,
}: {
  statusShow: string
  state: Record<string, number[]> | null
  stateDaily: Record<string, number[]> | null
  times: Date[]
}) {
  const today = new Date()

  const tomorrow = new Date(today)
  tomorrow.setDate(today.getDate() + 1)

  const nextTomorrow = new Date(today)
  nextTomorrow.setDate(today.getDate() + 2)

  const timesDaily = stateDaily?.time.map(
    (timestamp: number) => new Date(timestamp)
  )

  // function changeHours(day: string): Date {
  //   const value = new Date(day)

  //   return value
  // }

  const weatherFromDay = (
    date: Date,
    times: Date[],
    state: Record<string, number[]>
  ) => (
    <div className=" select-none">
      <div>
        {date.getDate()}:{DAYS[date.getDay()]}:{MONTHS[date.getMonth() + 1]}
      </div>
      <ul className="flex ">
        {times
          .filter((time) => time.getDate() === date.getDate())
          .map((time: Date, index: number) => {
            const today = new Date()

            const differenceInMilliseconds = date.getTime() - today.getTime()
            const differenceInHours = Math.round(
              differenceInMilliseconds / (1000 * 60 * 60)
            )

            index += differenceInHours
            if (index % 3 === 0) {
              const rainProbably = Math.max(
                ...getArrayNumber(state, "precipitation_probability", index, 3)
              )
              const precipitation =
                getNewState(state, "precipitation", index, 3) === 0
                  ? 0
                  : getNewState(state, "precipitation", index, 3).toFixed(1)
              // setRainProbably((prev) => ({ ...prev,openMeteo:{...prev.openMeteo,today:{rainProbably:[...prev.openMeteo.today.rainProbably],}} }))

              return (
                <li
                  key={index}
                  className={clsx(
                    "flex flex-col w-[60px] justify-center items-center  rounded-md ",
                    (today.getHours() === time.getHours() ||
                      today.getHours() === time.getHours() + 1 ||
                      today.getHours() === time.getHours() + 2) &&
                      time.getDate() === today.getDate()
                      ? "bg-purple-200 text-black"
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

                  <WeatherIcon
                    weather_code={Math.max(
                      ...getArrayNumber(state, "weather_code", index, 3)
                    )}
                  />

                  <span>
                    {state.temperature_2m[index].toString()[0] === "-"
                      ? ""
                      : "+"}
                    {Math.round(
                      getNewState(state, "temperature_2m", index, 3) / 3
                    )}
                    °
                  </span>
                  <span className="flex gap-1">
                    <Windy />
                    {Math.round(
                      Math.max(
                        ...getArrayNumber(state, "wind_speed_10m", index, 3)
                      )
                    )}
                  </span>
                  <span className="flex gap-1">
                    <RainProbability />
                    {rainProbably}
                  </span>
                  <span className="flex items-center gap-1">
                    <Water />
                    {precipitation}
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

  const renderWeather = (
    date: Date,
    times: Date[],
    state: Record<string, number[]>
  ) => (
    <div className="select-none " key={date.getDate()}>
      <div>
        {date.getDate()}:{DAYS[date.getDay()]}:{MONTHS[date.getMonth() + 1]}
      </div>
      <ul className="flex">
        {times
          .filter((time) => time.getDate() === date.getDate())
          .map((hour, index) => {
            const today = new Date()

            const differenceInMilliseconds = date.getTime() - today.getTime()
            const differenceInHours = Math.round(
              differenceInMilliseconds / (1000 * 60 * 60)
            )

            index += differenceInHours

            if (index % 6 === 0) {
              const rainProbably = Math.max(
                ...getArrayNumber(state, "precipitation_probability", index, 6)
              )
              const precipitation =
                getNewState(state, "precipitation", index, 6) === 0
                  ? 0
                  : getNewState(state, "precipitation", index, 6).toFixed(1)

              return (
                <li
                  key={index}
                  className={clsx(
                    "flex flex-col rounded items-center w-[60px]",
                    (today.getHours() === hour.getHours() ||
                      today.getHours() === hour.getHours() + 1 ||
                      today.getHours() === hour.getHours() + 2 ||
                      today.getHours() === hour.getHours() + 3 ||
                      today.getHours() === hour.getHours() + 4 ||
                      today.getHours() === hour.getHours() + 5) &&
                      today.getDate() === hour.getDate()
                      ? "bg-purple-200 text-black"
                      : ""
                  )}
                >
                  <div>{getDayTime(index)}</div>
                  <WeatherIcon
                    weather_code={Math.max(
                      ...getArrayNumber(state, "weather_code", index, 6)
                    )}
                  />
                  <span>
                    {state.temperature_2m[index].toString()[0] === "-"
                      ? ""
                      : "+"}
                    {Math.round(
                      getNewState(state, "temperature_2m", index, 6) / 6
                    )}
                    °
                  </span>
                  <span className="flex gap-1">
                    <Windy />
                    {Math.round(
                      Math.max(
                        ...getArrayNumber(state, "wind_speed_10m", index, 6)
                      )
                    )}
                  </span>
                  <span className="flex gap-1">
                    <RainProbability />
                    {rainProbably}
                    {/* {state.precipitation_probability[index]} */}
                  </span>

                  <span className="flex items-center gap-1">
                    <Water />
                    {precipitation}
                  </span>
                </li>
              )
            }
          })}
      </ul>
    </div>
  )

  // const day = 24
  return (
    <div className=" ">
      <h2 className="text-center">open-meteo</h2>
      <div className=" flex flex-col gap-4  rounded-md bg-violet-50 text-pink-800">
        {state !== null &&
          statusShow === "day" &&
          weatherFromDay(today, times, state)}
        {state !== null &&
          statusShow === "tomorrow" &&
          weatherFromDay(tomorrow, times, state)}
        {state !== null && statusShow === "3day" && (
          <div className="flex ">
            <div className="flex gap-3 ">
              {renderWeather(today, times, state)}
              {renderWeather(tomorrow, times, state)}
              {renderWeather(nextTomorrow, times, state)}
            </div>
          </div>
        )}
        {state !== null && statusShow === "week" && (
          <div className="w-full select-none">
            <ul className="flex ">
              {timesDaily?.map((time: Date, index: number) => {
                if (stateDaily !== null) {
                  const today = new Date()
                  const weekend =
                    DAYS[time.getDay()] === "Сб" || DAYS[time.getDay()] === "Вс"
                      ? "text-sky-400"
                      : ""

                  return (
                    <li
                      key={index}
                      className={clsx(
                        "flex flex-col w-[60px] justify-center items-center  rounded-md ",
                        today.getDate() === time.getDate()
                          ? "bg-purple-200 text-black"
                          : ""
                      )}
                    >
                      <div className="flex flex-col">
                        <span className={weekend}>{time.getDate()}</span>
                        <span className={weekend}>{DAYS[time.getDay()]}</span>
                        {/* <span>{MONTHS[time.getMonth() + 1]}</span> */}
                      </div>

                      <WeatherIcon
                        weather_code={stateDaily.weather_code[index]}
                      />

                      <span className="rounded bg-green-200">
                        {stateDaily.temperature_2m_max[index].toString()[0] ===
                        "-"
                          ? ""
                          : "+"}
                        {Math.round(stateDaily.temperature_2m_max[index])}°
                      </span>
                      <span className="rounded bg-blue-200">
                        {stateDaily.temperature_2m_min[index].toString()[0] ===
                        "-"
                          ? ""
                          : "+"}
                        {Math.round(stateDaily.temperature_2m_min[index])}°
                      </span>
                      <span className="flex gap-1">
                        <Windy />
                        {Math.round(stateDaily.wind_speed_10m_max[index])}
                      </span>
                      <span className="flex gap-1">
                        <RainProbability />
                        {stateDaily.precipitation_probability_max[index]}
                      </span>
                      <span className="flex items-center gap-1">
                        <Water />
                        {stateDaily.precipitation_sum[index]}
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
