import { DAYS, MONTHS } from "../constants/montsAndDayWeek"

import clsx from "clsx"
import { Water, Windy, RainProbability } from "./iconSVG"

type MeteoState = {
  data: DataInfoHour[]
  meta: { generated: string; stations: string[] }
}

type DataInfoHour = {
  coco: number
  dwpt: number
  prcp: number
  pres: number
  rhum: number
  snow: number | null
  temp: number
  time: string
  tsun: number | null
  wdir: number
  wpgt: number
  wspd: number
}

export function MeteoStats({
  meteoState,
  statusShow,
}: {
  meteoState: MeteoState | null
  statusShow: string
}) {
  if (meteoState === null) return
  const { data }: { data: DataInfoHour[] } = meteoState

  const days = [
    data.slice(0, 23),
    data.slice(24, 48),
    data.slice(49, 72),
    data.slice(73, 96),
    data.slice(97, 120),
    data.slice(121, 144),
    data.slice(145, 168),
  ]
  // const timesDaily = stateDaily?.time.map(
  //   (timestamp: number) => new Date(timestamp)
  // )

  function getNewState(
    state: DataInfoHour[] | null,
    value: keyof DataInfoHour,
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
    state: DataInfoHour[] | null,
    value: keyof DataInfoHour,
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

  function changeDate(num: string): Date {
    const day = new Date(num)
    return day
  }
  // interface RandomObject {
  //   [key: string]: any
  // }
  const weatherFromDay = (day: DataInfoHour[]) => (
    <div className=" select-none">
      <h2>Meteo-Stats</h2>
      <div>
        {changeDate(day[0].time).getDate()}:
        {DAYS[changeDate(day[0].time).getDay()]}:
        {MONTHS[changeDate(day[0].time).getMonth() + 1]}
      </div>
      <ul className="flex ">
        {day.map((hourInfo: DataInfoHour, index: number) => {
          const today = new Date()
          const time = changeDate(hourInfo.time)
          if (index % 3 === 0) {
            // const hours = arrayDays[day].hour

            return (
              <li
                key={index}
                className={clsx(
                  "flex flex-col w-[55px] justify-center items-center  rounded-md ",
                  (today.getHours() === time.getHours() ||
                    today.getHours() === time.getHours() + 1 ||
                    today.getHours() === time.getHours() + 2) &&
                    changeDate(day[0].time).getDate() === today.getDate()
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
                {/* <div>
                    <img
                      src={hourInfo.condition.icon}
                      alt="weatherImg"
                      width={40}
                    />
                  </div> */}

                <span>
                  {getNewState(day, "temp", index, 3).toString()[0] === "-"
                    ? ""
                    : "+"}
                  {Math.round(getNewState(day, "temp", index, 3) / 3)}
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
                    Math.max(...getArrayNumber(day, "wspd", index, 3))
                  )}
                  {/* {Math.round(
                        Math.max(
                          (arrayDays[day].hour[index].wind_kph,
                          arrayDays[day].hour[index + 1].wind_kph,
                          arrayDays[day].hour[index + 2].wind_kph)
                        )
                      )} */}
                </span>
                {/* <span className="flex gap-1">
                  <RainProbability />
                  {Math.max(
                    ...getArrayNumber(day, "chance_of_rain", index, 3)
                  )}
                  
                </span> */}
                <span className="flex items-center gap-1">
                  <Water />
                  {getNewState(day, "prcp", index, 3) === 0
                    ? 0
                    : getNewState(day, "prcp", index, 3).toFixed(1)}
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

  const renderWeather = (day: DataInfoHour[]) => (
    <div className="select-none" key={day[0].time}>
      <div>
        {changeDate(day[0].time).getDate()}:
        {DAYS[changeDate(day[0].time).getDay()]}:
        {MONTHS[changeDate(day[0].time).getMonth() + 1]}
      </div>
      <ul className="flex">
        {day.map((_: DataInfoHour, index: number) => {
          if (index % 6 === 0) {
            return (
              <li key={index} className="flex flex-col">
                <div>{getDayTime(index)}</div>

                {/* <div>
                    <img
                      src={arrayDays[day].hour[index].condition.icon}
                      alt="weatherImg"
                      width={40}
                    />
                  </div> */}

                <span>
                  {getNewState(day, "temp", index, 6).toString()[0] === "-"
                    ? ""
                    : "+"}
                  {Math.round(getNewState(day, "temp", index, 6) / 6)}°
                </span>

                <span className="flex gap-1">
                  <Windy />
                  {Math.round(
                    Math.max(...getArrayNumber(day, "wspd", index, 6))
                  )}
                </span>
                {/* <span className="flex gap-1">
                    <RainProbability />
                    {Math.max(
                      ...getArrayNumber(hours, "chance_of_rain", index, 6)
                    )}
                    
                  </span> */}

                <span className="flex items-center gap-1">
                  <Water />
                  {getNewState(day, "prcp", index, 6) === 0
                    ? 0
                    : getNewState(day, "prcp", index, 6).toFixed(1)}
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
      <div className="border border-lime-400  flex flex-col gap-4  rounded-md">
        {data !== null && statusShow === "day" && weatherFromDay(days[0])}
        {data !== null && statusShow === "tomorrow" && weatherFromDay(days[1])}
        {data !== null && statusShow === "3day" && (
          <div className="flex">
            <div className="flex gap-3">
              {renderWeather(days[0])}
              {renderWeather(days[1])}
              {renderWeather(days[2])}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
