import { useState } from "react"
import { fetchWeatherByCity } from "../function/open-meteo"
import { DAYS, MONTHS } from "../constants/montsAndDayWeek"

// import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
// import "swiper/css"
import clsx from "clsx"
import { WeatherIcon, Water } from "./iconSVG"

export function OpenMeteo() {
  const [city, setCity] = useState("")
  const [loading, setLoading] = useState(false)
  const [state, setState] = useState<Record<string, number[]> | null>(null)
  const [times, setTimes] = useState<Date[]>([])
  const [statusShow, setStatusShow] = useState<string>("day")
  const handleFetchWeather = async () => {
    console.log(city)
    if (city) {
      setLoading(true)
      const weatherData = await fetchWeatherByCity(city)
      setState(weatherData)
      const times = weatherData.time.map(
        (timestamp: string) => new Date(timestamp)
      )
      setTimes(times)
      //   const temperatures = weatherData.temperature_2m

      //   // Вывод данных
      //   times.forEach((time: any, index: number) => {
      //     console.log(`${time.toISOString()}: ${temperatures[index]}°C`)
      //   })
      setLoading(false)
    }
  }

  const today = new Date()
  // const code:number[]|undefined = state?.weather_code
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="border border-lime-400 p-10 flex flex-col gap-4 max-w-[600px] rounded-md">
        <div className="flex justify-center">Погода</div>
        <div>
          <input
            className="border border-lime-400 rounded-md"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={handleFetchWeather} disabled={loading}>
            {loading ? "Загрузка..." : "Кликни"}
          </button>
        </div>
        {state !== null && statusShow === "day" && (
          <div className="w-full">
            <div>
              {today.getDate()}:{DAYS[today.getDay()]}:
              {MONTHS[today.getMonth() + 1]}
            </div>
            <ul className="flex">
              {times
                .filter((time) => time.getDate() === today.getDate())
                .map((time: Date, index: number) => {
                  if (index % 3 === 0) {
                    return (
                      <li
                        key={index}
                        className={clsx(
                          "flex flex-col w-[55px] items-center select-none rounded-md cursor-grab",
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
                          +
                          {Math.round(
                            (state.temperature_2m[index] +
                              state.temperature_2m[index + 1] +
                              state.temperature_2m[index + 2]) /
                              3
                          )}
                          °
                        </span>
                        <span className="flex items-center">
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
