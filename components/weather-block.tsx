import { DAYS, MONTHS } from "../constants/montsAndDayWeek"
import { Swiper, SwiperSlide } from "swiper/react"
import clsx from "clsx"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"

import {
  WeatherIcon,
  Water,
  Windy,
  RainProbability,
  WeatherIconMeteoSate,
} from "./iconSVG"
import { WeatherIconCrossing } from "./iconSVGcrossing"

import { WeatherState, WeatherData } from "./average-chance-of-rain" //Вроде так

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

export function WeatherBlock({
  weatherData,
  statusShow,
  name,
}: {
  weatherData: WeatherState
  statusShow: string
  name: string
}) {
  if (weatherData.today.time.length === 0) return
  console.log(weatherData)
  const weatherFromDay = (
    state: WeatherData
    //   date: Date,
    //   times: Date[],
    //   state: Record<string, number[]>
  ) => {
    if (state.time.every((item) => item instanceof Date)) {
      return (
        <div className=" select-none ">
          <div>
            {state.time[0].getDate()}:{DAYS[state.time[0].getDay()]}:
            {MONTHS[state.time[0].getMonth() + 1]}
          </div>

          <Swiper
            style={{ maxWidth: "100vw" }}
            spaceBetween={0}
            slidesPerView={5}
            breakpoints={{
              500: {
                // Если ширина экрана больше или равна 576px
                slidesPerView: 8,
                spaceBetween: 0,
              },
              // 768: {
              //   // Если ширина экрана больше или равна 768px
              //   slidesPerView: 7,
              //   spaceBetween: 0,
              // },
              // 1200: {
              //   // Если ширина экрана больше или равна 1200px
              //   slidesPerView: 8,
              //   spaceBetween: 0,
              // },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {state.time.map((time: Date, index: number) => {
              const today = new Date()

              return (
                <SwiperSlide key={index} style={{ width: "65px" }}>
                  <li
                    className={clsx(
                      "flex flex-col w-[65px] justify-center items-center  rounded-md ",
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

                    {name === "open-meteo" && (
                      <WeatherIcon weather_code={state.icon[index] as number} />
                    )}
                    {name === "MeteoStats" && (
                      <WeatherIconMeteoSate
                        weather_code={state.icon[index] as number}
                      />
                    )}
                    {name === "CrossingWeather" && (
                      <div className="w-[30px] h-[30px] flex justify-center items-center">
                        <WeatherIconCrossing
                          weather_code={state.icon[index] as string}
                        />
                      </div>
                    )}

                    {name === "WeatherAPI" && (
                      <div>
                        <img
                          src={state.icon[index] as string}
                          alt="weatherImg"
                          width={40}
                        />
                      </div>
                    )}

                    <span>
                      {state.temp[index]?.toString()[0] === "-" ? "" : "+"}
                      {state.temp[index]}°
                    </span>

                    <span className="flex gap-1">
                      <Windy />
                      {state.windy[index]}
                    </span>

                    <span className="flex gap-1">
                      <RainProbability />
                      {state.rainProbably[index]}
                    </span>
                    <span className="flex items-center gap-1">
                      <Water />
                      {state.precipitation[index]}
                    </span>
                  </li>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      )
    }
  }

  const renderWeather = (
    state: WeatherData
    //   date: Date,
    //   times: Date[],
    //   state: Record<string, number[]>
  ) => {
    if (state.time.every((item) => item instanceof Date)) {
      return (
        <div className="select-none ">
          <div>
            {state.time[0].getDate()}:{DAYS[state.time[0].getDay()]}:
            {MONTHS[state.time[0].getMonth() + 1]}
          </div>
          <ul className="flex justify-between">
            {state.time.map((hour: Date, index: number) => {
              const today = new Date()

              return (
                <li
                  key={index}
                  className={clsx(
                    "flex flex-col rounded items-center w-[70px]",
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
                  {name === "open-meteo" && (
                    <WeatherIcon weather_code={state.icon[index] as number} />
                  )}

                  {name === "MeteoStats" && (
                    <WeatherIconMeteoSate
                      weather_code={state.icon[index] as number}
                    />
                  )}
                  {name === "CrossingWeather" && (
                    <div className="w-[30px] h-[30px] flex justify-center items-center">
                      <WeatherIconCrossing
                        weather_code={state.icon[index] as string}
                      />
                    </div>
                  )}

                  {name === "WeatherAPI" && (
                    <div>
                      <img
                        src={state.icon[index] as string}
                        alt="weatherImg"
                        width={40}
                      />
                    </div>
                  )}

                  <span>
                    {state.temp[index]?.toString()[0] === "-" ? "" : "+"}
                    {state.temp[index]}°
                  </span>

                  <span className="flex gap-1">
                    <Windy />
                    {state.windy[index]}
                  </span>

                  <span className="flex gap-1">
                    <RainProbability />
                    {state.rainProbably[index]}
                  </span>
                  <span className="flex items-center gap-1">
                    <Water />
                    {state.precipitation[index]}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      )
    }
  }

  return (
    <div className=" ">
      <h2 className="text-center">{name}</h2>
      <div className=" flex flex-col gap-4  rounded-md bg-violet-50 text-pink-800">
        {weatherData !== null &&
          statusShow === "day" &&
          weatherFromDay(weatherData.today)}
        {weatherData !== null &&
          statusShow === "tomorrow" &&
          weatherFromDay(weatherData.tomorrow)}
        {weatherData !== null && statusShow === "3day" && (
          <div className="flex w-screen  md:w-[750px] ">
            <Swiper
              style={{ width: "100%" }}
              spaceBetween={10}
              slidesPerView={1}
              breakpoints={{
                482: {
                  // Если ширина экрана больше или равна 576px
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                723: {
                  // Если ширина экрана больше или равна 768px
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                // 1200: {
                //   // Если ширина экрана больше или равна 1200px
                //   slidesPerView: 8,
                //   spaceBetween: 0,
                // },
              }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                {renderWeather(weatherData["3day"].today)}
              </SwiperSlide>
              <SwiperSlide>
                {renderWeather(weatherData["3day"].tomorrow)}
              </SwiperSlide>
              <SwiperSlide>
                {renderWeather(weatherData["3day"].nextTomorrow)}
              </SwiperSlide>
            </Swiper>
          </div>
        )}
        {weatherData !== null && statusShow === "week" && (
          <div className="w-full select-none">
            <Swiper
              style={{ maxWidth: "100vw" }}
              spaceBetween={0}
              slidesPerView={5}
              breakpoints={{
                723: {
                  // Если ширина экрана больше или равна 768px
                  slidesPerView: 7,
                  spaceBetween: 0,
                },
                // 1200: {
                //   // Если ширина экрана больше или равна 1200px
                //   slidesPerView: 8,
                //   spaceBetween: 0,
                // },
              }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {weatherData.week.time.map((time: any, index: number) => {
                if (
                  weatherData !== null &&
                  weatherData.week.time.every((item) => item instanceof Date)
                ) {
                  const today = new Date()
                  const day = weatherData.week.time[index]
                  const weekend =
                    DAYS[day.getDay()] === "Сб" || DAYS[day.getDay()] === "Вс"
                      ? "text-sky-400"
                      : ""

                  return (
                    <SwiperSlide key={index} style={{ width: "60px" }}>
                      <li
                        className={clsx(
                          "flex flex-col w-[60px] justify-center items-center  rounded-md ",
                          today.getDate() === time.getDate()
                            ? "bg-purple-200 text-black"
                            : ""
                        )}
                      >
                        <div className="flex flex-col">
                          <span className={weekend}>{day.getDate()}</span>
                          <span className={weekend}>{DAYS[day.getDay()]}</span>
                        </div>

                        {name === "open-meteo" && (
                          <WeatherIcon
                            weather_code={
                              weatherData.week.icon[index] as number
                            }
                          />
                        )}

                        {name === "MeteoStats" && (
                          <WeatherIconMeteoSate
                            weather_code={
                              weatherData.week.icon[index] as number
                            }
                          />
                        )}
                        {name === "CrossingWeather" && (
                          <div className="w-[30px] h-[30px] flex justify-center items-center">
                            <WeatherIconCrossing
                              weather_code={
                                weatherData.week.icon[index] as string
                              }
                            />
                          </div>
                        )}

                        {name === "WeatherAPI" && (
                          <div>
                            <img
                              src={weatherData.week.icon[index] as string}
                              alt="weatherImg"
                              width={40}
                            />
                          </div>
                        )}
                        <span className="rounded bg-green-200">
                          {weatherData.week.tempMax.toString()[0] === "-"
                            ? ""
                            : "+"}
                          {weatherData.week.tempMax[index]}°
                        </span>
                        <span className="rounded bg-blue-200">
                          {weatherData.week.tempMin.toString()[0] === "-"
                            ? ""
                            : "+"}
                          {weatherData.week.tempMin[index]}°
                        </span>
                        <span className="flex gap-1">
                          <Windy />
                          {weatherData.week.windy[index]}
                        </span>
                        <span className="flex gap-1">
                          <RainProbability />
                          {weatherData.week.rainProbably[index]}
                        </span>
                        <span className="flex items-center gap-1">
                          <Water />
                          {weatherData.week.precipitation[index]}
                        </span>
                      </li>
                    </SwiperSlide>
                  )
                }
              })}
            </Swiper>
          </div>
        )}
      </div>
    </div>
  )
}
