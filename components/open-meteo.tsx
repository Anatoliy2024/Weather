import { DAYS, MONTHS } from "../constants/montsAndDayWeek"

import clsx from "clsx"
import { WeatherIcon, Water, Windy } from "./iconSVG"

export function OpenMeteo({
  statusShow,
  state,
  times,
}: {
  statusShow: string
  state: Record<string, number[]> | null
  times: Date[]
}) {
  const today = new Date()

  const tomorrow = new Date(today)
  tomorrow.setDate(today.getDate() + 1)

  const nextTomorrow = new Date(today)
  tomorrow.setDate(today.getDate() + 2)

  const day = 24
  return (
    <div className="flex items-center justify-center ">
      <div className="border border-lime-400  flex flex-col gap-4 max-w-[600px] rounded-md">
        {state !== null && statusShow === "day" && (
          <div className="w-full">
            <div>
              {today.getDate()}:{DAYS[today.getDay()]}:
              {MONTHS[today.getMonth() + 1]}
            </div>
            <ul className="flex ">
              {times
                .filter((time) => time.getDate() === today.getDate())
                .map((time: Date, index: number) => {
                  if (index % 3 === 0) {
                    return (
                      <li
                        key={index}
                        className={clsx(
                          "flex flex-col w-[55px] justify-center items-center select-none rounded-md cursor-grab",
                          today.getHours() === time.getHours() ||
                            today.getHours() === time.getHours() + 1 ||
                            today.getHours() === time.getHours() + 2
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

                        <WeatherIcon weather_code={state.weather_code[index]} />

                        <span>
                          {state.temperature_2m[index].toString()[0] === "-"
                            ? ""
                            : "+"}
                          {Math.round(
                            (state.temperature_2m[index] +
                              state.temperature_2m[index + 1] +
                              state.temperature_2m[index + 2]) /
                              3
                          )}
                          °
                        </span>
                        <span className="flex gap-1">
                          <Windy />
                          {Math.round(state.wind_speed_10m[index])}
                        </span>

                        <span className="flex items-center gap-1">
                          <Water />
                          {state.precipitation[index] +
                            state.precipitation[index + 1] +
                            state.precipitation[index + 2] ===
                          0
                            ? 0
                            : (
                                state.precipitation[index] +
                                state.precipitation[index + 1] +
                                state.precipitation[index + 2]
                              ).toFixed(1)}
                        </span>
                      </li>
                    )
                  } else {
                    return null
                  }
                })}
            </ul>

            {/* <ul className="flex ">
              {times
                .filter((time) => time.getDate() === today.getDate())
                .map((time: Date, index: number) => (
                  <li
                    className="flex flex-col w-[55px] items-center"
                    key={index}
                  >
                    <span>
                      {time.toLocaleTimeString("ru-RU", {
                        hour: "2-digit",
                        minute: "2-digit",

                        hour12: false, // Устанавливает 24-часовой формат
                      })}
                    </span>
                    <span>+{Math.round(state.temperature_2m[index])}°</span>
                  </li>
                ))}
            </ul> */}
          </div>
        )}
        {state !== null && statusShow === "tomorrow" && (
          <div className="w-full">
            <div>
              {tomorrow.getDate()}:{DAYS[tomorrow.getDay()]}:
              {MONTHS[tomorrow.getMonth() + 1]}
            </div>
            <ul className="flex ">
              {times
                .filter((time) => time.getDate() === tomorrow.getDate())
                .map((time: Date, index: number) => {
                  index += day

                  if (index % 3 === 0) {
                    return (
                      <li
                        key={index}
                        className={clsx(
                          "flex flex-col w-[55px] justify-center items-center select-none rounded-md cursor-grab"
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

                        <WeatherIcon weather_code={state.weather_code[index]} />

                        <span>
                          {state.temperature_2m[index].toString()[0] === "-"
                            ? ""
                            : "+"}
                          {Math.round(
                            (state.temperature_2m[index] +
                              state.temperature_2m[index + 1] +
                              state.temperature_2m[index + 2]) /
                              3
                          )}
                          °
                        </span>
                        <span className="flex gap-1">
                          <Windy />
                          {Math.round(state.wind_speed_10m[index])}
                        </span>

                        <span className="flex items-center gap-1">
                          <Water />
                          {state.precipitation[index] +
                            state.precipitation[index + 1] +
                            state.precipitation[index + 2] ===
                          0
                            ? 0
                            : (
                                state.precipitation[index] +
                                state.precipitation[index + 1] +
                                state.precipitation[index + 2]
                              ).toFixed(1)}
                        </span>
                      </li>
                    )
                  }
                })}
            </ul>
          </div>
        )}
        {state !== null && statusShow === "3day" && (
          <div className="flex w-min-full">
            <div>
              <div>
                {today.getDate()}:{DAYS[today.getDay()]}:
                {MONTHS[today.getMonth() + 1]}
              </div>

              {/*************************************************** */}
              <div>
                <div>Ночь</div>
                <div>Значок</div>
                <div></div>
              </div>
              <div>Утро</div>
              <div>День</div>
              <div>Вечер</div>
              <ul className="flex ">
                {times
                  .filter(
                    (time) =>
                      time.getDate() === today.getDate() ||
                      time.getDate() === tomorrow.getDate() ||
                      time.getDate() === nextTomorrow.getDate()
                  )
                  .map((time: Date, index: number) => {
                    // index += day

                    if (index % 6 === 0) {
                      return (
                        <li
                          key={index}
                          className={clsx(
                            "flex flex-col w-[55px] justify-center items-center select-none rounded-md cursor-grab"
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
                            weather_code={state.weather_code[index]}
                          />

                          <span>
                            {state.temperature_2m[index].toString()[0] === "-"
                              ? ""
                              : "+"}
                            {Math.round(
                              (state.temperature_2m[index] +
                                state.temperature_2m[index + 1] +
                                state.temperature_2m[index + 2]) /
                                3
                            )}
                            °
                          </span>
                          <span className="flex gap-1">
                            <Windy />
                            {Math.round(state.wind_speed_10m[index])}
                          </span>
                          <span> {state.precipitation_probability[index]}</span>
                          <span className="flex items-center gap-1">
                            <Water />
                            {state.precipitation[index] +
                              state.precipitation[index + 1] +
                              state.precipitation[index + 2] ===
                            0
                              ? 0
                              : (
                                  state.precipitation[index] +
                                  state.precipitation[index + 1] +
                                  state.precipitation[index + 2]
                                ).toFixed(1)}
                          </span>
                        </li>
                      )
                    }
                  })}
              </ul>

              {/*************************************************** */}

              <div>
                <div>
                  <div>Ночь</div>
                  <div>Значок</div>
                </div>
                <div>Утро</div>
                <div>День</div>
                <div>Вечер</div>
              </div>
            </div>
            <div>
              <div>
                {today.getDate() + 1}:{DAYS[today.getDay() + 1]}:
                {MONTHS[today.getMonth() + 1]}
              </div>
            </div>
            <div>
              <div>
                {today.getDate() + 2}:{DAYS[today.getDay() + 2]}:
                {MONTHS[today.getMonth() + 1]}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// {times
//     .filter((time) => time.getDate() === today.getDate())
//     .map((time: Date, index: number) => (
//       <li key={index}>{`${time.toLocaleDateString("ru-RU", {
//         day: "2-digit",
//         month: "2-digit",
//         year: "numeric",
//       })}  ${time.toLocaleTimeString("ru-RU", {
//         hour: "2-digit",
//         minute: "2-digit",

//         hour12: false, // Устанавливает 24-часовой формат
//       })}: ${state.temperature_2m[index]}°C`}</li>
//     ))}
