import { DAYS, MONTHS } from "../constants/montsAndDayWeek"

import clsx from "clsx"
import { Water, Windy, RainProbability } from "./iconSVG"

type Day = {
  datetime: string
  hours: Hour[]
}

type Hour = {
  datetime: string
  temp: string
  [key: string]: number | string | string[]
}

type CrossingWeather = {
  address: string
  days: Day[]
  latitude: number

  longitude: number

  queryCost: number
  resolvedAddress: string

  stations: Record<string, string | number>

  timezone: string

  tzoffset: number
}

export function CrossingWeather({
  сrossingDate,
  statusShow,
}: {
  сrossingDate: CrossingWeather | null
  statusShow: string
}) {
  if (сrossingDate === null) return

  const { days }: { days: Day[] } = сrossingDate

  const today = 0
  const tomorrow = 1
  const nextTomorrow = 2

  // const timesDaily = stateDaily?.time.map(
  //   (timestamp: number) => new Date(timestamp)
  // )
  ////////////////////////
  function getNewState(
    state: Hour[] | null,
    value: keyof Hour,
    index: number,
    number: number
  ) {
    if (state === null) return 0
    let count = 0

    for (let i = 0; i < number; i++) {
      if (index + i < state.length && state[index + i]) {
        count += state[index + i][value] as number
      }
    }
    // console.log(count)
    return count
  }
  ///////////////////////
  //   function getNewState(
  //     state: DataInfoHour[] | null,
  //     value: keyof DataInfoHour,
  //     index: number,
  //     number: number
  //   ) {
  //     if (state === null) return 0

  //     let count = 0
  //     let currentIndex
  //     for (let i = 0; i < number; i++) {
  //       currentIndex = index + i

  //       // Функция для поиска ближайшего ненулевого значения
  //       const findClosestNonNullValue = (idx: number): number => {
  //         let offset = 1

  //         while (true) {
  //           // Проверяем индекс слева
  //           if (
  //             idx - offset >= 0 &&
  //             state[idx - offset] &&
  //             state[idx - offset][value] !== null
  //           ) {
  //             return state[idx - offset][value] as number
  //           }

  //           // Проверяем индекс справа
  //           if (
  //             idx + offset < state.length &&
  //             state[idx + offset] &&
  //             state[idx + offset][value] !== null
  //           ) {
  //             return state[idx + offset][value] as number
  //           }

  //           // Если ни слева, ни справа не нашли ненулевое значение, увеличиваем смещение
  //           offset++

  //           // Если смещение становится слишком большим, возвращаем 0 или какое-то значение по умолчанию
  //           if (idx - offset < 0 && idx + offset >= state.length) {
  //             return 0 // или любое другое значение по умолчанию
  //           }
  //         }
  //       }

  //       if (currentIndex < state.length && state[currentIndex]) {
  //         const valueAtCurrentIndex = state[currentIndex][value]
  //         if (valueAtCurrentIndex === null) {
  //           count += findClosestNonNullValue(currentIndex)
  //         } else {
  //           count += valueAtCurrentIndex as number
  //         }
  //       }
  //     }

  //     return count
  //   }

  //   function getWeatherHourly(
  //     state: DataInfoHour[] | null,
  //     value: keyof DataInfoHour,
  //     index: number,
  //     number: number
  //   ) {
  //     if (state === null) return 999 // Если state равно null, возвращаем 999

  //     let array = []
  //     let count = 0

  //     for (let i = 0; i < number; i++) {
  //       if (state[index + i] && state[index + i][value] !== null) {
  //         count += state[index + i][value] as number // Суммируем ненулевые значения
  //       } else {
  //         array.push(state[index + i] ? state[index + i][value] : null) // Добавляем null, если значение отсутствует
  //       }
  //     }

  //     // Если все значения равны null, длина массива будет равна number
  //     if (array.length === number) return 999

  //     return count
  //   }

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
  ///////////////
  function getArrayNumber(
    state: Hour[] | null,
    value: keyof Hour,
    index: number,
    number: number
  ) {
    if (state === null) return []
    const array: number[] = []
    for (let i = 0; i < number; i++) {
      if (index + i < state.length && state[index + i]) {
        array.push(state[index + i][value] as number)
      }
    }
    // console.log(value, array)
    return array
  }
  ///////////////////
  //   function getArrayNumber(
  //     state: DataInfoHour[] | null,
  //     value: keyof DataInfoHour,
  //     index: number,
  //     number: number
  //   ): number[] {
  //     if (state === null) return []

  //     const array: number[] = []

  //     // Функция для поиска ближайшего ненулевого значения при null
  //     const findClosestNonNullValue = (idx: number): number => {
  //       let offset = 1

  //       while (true) {
  //         // Проверяем индекс слева
  //         if (
  //           idx - offset >= 0 &&
  //           state[idx - offset] &&
  //           state[idx - offset][value] !== null &&
  //           state[idx - offset][value] !== undefined
  //         ) {
  //           return state[idx - offset][value] as number
  //         }

  //         // Проверяем индекс справа
  //         if (
  //           idx + offset < state.length &&
  //           state[idx + offset] &&
  //           state[idx + offset][value] !== null &&
  //           state[idx + offset][value] !== undefined
  //         ) {
  //           return state[idx + offset][value] as number
  //         }

  //         // Если смещение становится слишком большим, возвращаем 0 или значение по умолчанию
  //         if (idx - offset < 0 && idx + offset >= state.length) {
  //           return 0 // Возвращаем 0, если не нашли ненулевое значение
  //         }

  //         offset++
  //       }
  //     }

  //     for (let i = 0; i < number; i++) {
  //       const currentIndex = index + i
  //       if (currentIndex < state.length && state[currentIndex]) {
  //         const valueAtIndex = state[currentIndex][value]
  //         if (valueAtIndex === null) {
  //           // Если текущее значение null, ищем ближайшее ненулевое значение
  //           array.push(findClosestNonNullValue(currentIndex))
  //         } else {
  //           array.push(valueAtIndex as number)
  //         }
  //       } else {
  //         array.push(0) // Если состояние отсутствует, добавляем 0
  //       }
  //     }

  //     return array
  //   }

  function changeDate(num: string): Date {
    const day = new Date(num)

    return day
  }
  function changeHours(day: string, hours: string): Date {
    const string = day + " " + hours
    const value = new Date(string)

    return value
  }
  // interface RandomObject {
  //   [key: string]: any
  // }
  const weatherFromDay = (day: number) => {
    const dayData = days[day]

    if (typeof dayData.datetime === "string" && Array.isArray(dayData.hours)) {
      return (
        <div className=" select-none">
          <h2>Crossing Weather</h2>
          <div>
            {changeDate(dayData.datetime).getDate()}:
            {DAYS[changeDate(dayData.datetime).getDay()]}:
            {MONTHS[changeDate(dayData.datetime).getMonth() + 1]}
          </div>
          <ul className="flex ">
            {dayData.hours.map((hourInfo: Hour, index: number) => {
              if (index % 3 === 0) {
                // const hours = arrayDays[day].hour

                const today = new Date()
                const time = changeHours(dayData.datetime, hourInfo.datetime)

                return (
                  <li
                    key={index}
                    className={clsx(
                      "flex flex-col w-[55px] justify-center items-center  rounded-md ",
                      (today.getHours() === time.getHours() ||
                        today.getHours() === time.getHours() + 1 ||
                        today.getHours() === time.getHours() + 2) &&
                        changeDate(dayData.datetime).getDate() ===
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
                    {/* <WeatherIconMeteoSate
                      weather_code={Math.max(
                        ...getArrayNumber(day, "coco", index, 3)
                      )}
                    /> */}
                    <div>{hourInfo.icon}</div>
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
                    {/* <div>
                            <img
                              src={hourInfo.condition.icon}
                              alt="weatherImg"
                              width={40}
                            />
                          </div> */}

                    <span>
                      {getNewState(
                        dayData.hours,
                        "temp",
                        index,
                        3
                      ).toString()[0] === "-"
                        ? ""
                        : "+"}
                      {Math.round(
                        getNewState(dayData.hours, "temp", index, 3) / 3
                      )}
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
                        Math.max(
                          ...getArrayNumber(
                            dayData.hours,
                            "windspeed",
                            index,
                            3
                          )
                        )
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
                        ...getArrayNumber(dayData.hours, "precipprob", index, 3)
                      )}
                    </span>
                    <span className="flex items-center gap-1">
                      <Water />

                      {getNewState(dayData.hours, "precip", index, 3) === 0
                        ? 0
                        : getNewState(
                            dayData.hours,
                            "precip",
                            index,
                            3
                          ).toFixed(1)}
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
  }

  const renderWeather = (day: number) => {
    const dayData = days[day]

    if (typeof dayData.datetime === "string" && Array.isArray(dayData.hours)) {
      return (
        <div className="select-none" key={days[day].datetime}>
          <div>
            {changeDate(dayData.datetime).getDate()}:
            {DAYS[changeDate(dayData.datetime).getDay()]}:
            {MONTHS[changeDate(dayData.datetime).getMonth() + 1]}
          </div>
          <ul className="flex">
            {dayData.hours.map((hourInfo: Hour, index: number) => {
              if (index % 6 === 0) {
                const today = new Date()
                const time = changeHours(dayData.datetime, hourInfo.datetime)
                return (
                  <li
                    key={index}
                    className={clsx(
                      "flex flex-col rounded-md ",
                      (today.getHours() === time.getHours() ||
                        today.getHours() === time.getHours() + 1 ||
                        today.getHours() === time.getHours() + 2 ||
                        today.getHours() === time.getHours() + 3 ||
                        today.getHours() === time.getHours() + 4 ||
                        today.getHours() === time.getHours() + 5) &&
                        changeDate(dayData.datetime).getDate() ===
                          today.getDate()
                        ? "border border-lime-400 bg-lime-100"
                        : ""
                    )}
                  >
                    <div>{getDayTime(index)}</div>
                    {/* <WeatherIconMeteoSate
                      weather_code={Math.max(
                        ...getArrayNumber(dayData.hours, "coco", index, 6)
                      )}
                    /> */}
                    <div>{hourInfo.icon}</div>
                    {/* <div>
                                <img
                                  src={arrayDays[day].hour[index].condition.icon}
                                  alt="weatherImg"
                                  width={40}
                                />
                              </div> */}

                    <span>
                      {getNewState(
                        dayData.hours,
                        "temp",
                        index,
                        6
                      ).toString()[0] === "-"
                        ? ""
                        : "+"}
                      {Math.round(
                        getNewState(dayData.hours, "temp", index, 6) / 6
                      )}
                      °
                    </span>

                    <span className="flex gap-1">
                      <Windy />
                      {Math.round(
                        Math.max(
                          ...getArrayNumber(
                            dayData.hours,
                            "windspeed",
                            index,
                            6
                          )
                        )
                      )}
                    </span>
                    <span className="flex gap-1">
                      <RainProbability />
                      {Math.max(
                        ...getArrayNumber(dayData.hours, "precipprob", index, 6)
                      )}
                    </span>

                    <span className="flex items-center gap-1">
                      <Water />
                      {getNewState(dayData.hours, "precip", index, 6) === 0
                        ? 0
                        : getNewState(
                            dayData.hours,
                            "precip",
                            index,
                            6
                          ).toFixed(1)}
                    </span>
                  </li>
                )
              }
            })}
          </ul>
        </div>
      )
    }
  }

  // const day = 24
  return (
    <div className=" ">
      <div className="border border-lime-400  flex flex-col gap-4  rounded-md">
        {days !== null && statusShow === "day" && weatherFromDay(today)}
        {days !== null && statusShow === "tomorrow" && weatherFromDay(tomorrow)}
        {days !== null && statusShow === "3day" && (
          <div className="flex">
            <div className="flex gap-3">
              {renderWeather(today)}
              {renderWeather(tomorrow)}
              {renderWeather(nextTomorrow)}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
