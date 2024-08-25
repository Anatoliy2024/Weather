import { DAYS, MONTHS } from "../constants/montsAndDayWeek"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"

import clsx from "clsx"

import "swiper/css"

import "swiper/css/pagination"

import {
  WeatherIcon,
  Water,
  Windy,
  RainProbability,
  WeatherIconMeteoSate,
} from "./iconSVG"
import { WeatherIconCrossing } from "./iconSVGcrossing"

import { WeatherState, WeatherData } from "./average-chance-of-rain" //Вроде так
import { useEffect, useRef } from "react"

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
  activeIndex,
  onSlideChange,
}: {
  weatherData: WeatherState
  statusShow: string
  name: string
  activeIndex: number
  onSlideChange: (index: number) => void
}) {
  // if (weatherData.today.time.length === 0) return null

  const swiperRef = useRef(null)
  // const swiperRef = useRef<SwiperType | null>(null)
  // Этот useEffect всегда будет вызываться, когда activeIndex изменяется
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(activeIndex)
    }
  }, [activeIndex])

  if (weatherData.today.time.length === 0) return null

  console.log("activeIndex", activeIndex)
  const weatherFromDay = (state: WeatherData) => {
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
            }}
            ref={swiperRef}
            initialSlide={activeIndex}
            onSlideChange={(swiper) => onSlideChange(swiper.activeIndex)}
            modules={[Pagination]}
            pagination={{ clickable: true }}

            // onSwiper={(swiper) => console.log(swiper)}
          >
            {state.time.map((time: Date, index: number) => {
              const today = new Date()

              return (
                <SwiperSlide
                  key={index}
                  style={{ width: "65px", paddingBottom: "10px" }}
                >
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
                      <div className="w-[40px] h-[40px] flex justify-center items-center">
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
                          width={50}
                        />
                      </div>
                    )}

                    <span>
                      {state.temp[index]?.toString()[0] === "-" ? "" : "+"}
                      {state.temp[index]}°
                    </span>

                    <span className="flex gap-[2px]">
                      <Windy />
                      {state.windy[index]}
                    </span>

                    {name !== "MeteoStats" && (
                      <span className="flex  gap-[2px]">
                        <RainProbability />
                        {state.rainProbably[index]}
                      </span>
                    )}
                    <span className="flex items-center  gap-[2px]">
                      <Water />
                      {state.precipitation[index] !== null
                        ? state.precipitation[index]
                        : "null"}
                    </span>
                  </li>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      )
    } else {
      return null
    }
  }

  const renderWeather = (state: WeatherData) => {
    if (state.time.every((item) => item instanceof Date)) {
      return (
        <div className="select-none landscape:text-lg landscape:text:text-lg ">
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
                    "flex flex-col rounded items-center min-w-[60px]",
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
                    <div className="w-[40px] h-[40px] flex justify-center items-center">
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
                        width={50}
                      />
                    </div>
                  )}

                  <span>
                    {state.temp[index]?.toString()[0] === "-" ? "" : "+"}
                    {state.temp[index]}°
                  </span>

                  <span className="flex gap-[2px]">
                    <Windy />
                    {state.windy[index]}
                  </span>
                  {name !== "MeteoStats" && (
                    <span className="flex gap-[2px]">
                      <RainProbability />
                      {state.rainProbably[index]}
                    </span>
                  )}

                  <span className="flex items-center gap-[2px]">
                    <Water />
                    {state.precipitation[index] !== null
                      ? state.precipitation[index]
                      : "null"}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      )
    } else {
      return null
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
          <div className="flex w-screen od:w-[850px]">
            <Swiper
              style={{ width: "100%", paddingBottom: "10px" }}
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
              }}
              ref={swiperRef}
              initialSlide={activeIndex}
              onSlideChange={(swiper) => onSlideChange(swiper.activeIndex)}
              onSwiper={(swiper) => console.log(swiper)}
              modules={[Pagination]}
              pagination={{ clickable: true }}
            >
              <SwiperSlide style={{ minWidth: "200px" }}>
                {renderWeather(weatherData["3day"].today)}
              </SwiperSlide>
              <SwiperSlide style={{ minWidth: "200px" }}>
                {renderWeather(weatherData["3day"].tomorrow)}
              </SwiperSlide>
              <SwiperSlide style={{ minWidth: "200px" }}>
                {renderWeather(weatherData["3day"].nextTomorrow)}
              </SwiperSlide>
            </Swiper>
          </div>
        )}
        {weatherData !== null && statusShow === "week" && (
          <div className="w-full select-none">
            <Swiper
              style={{ maxWidth: "100vw", paddingBottom: "10px" }}
              spaceBetween={0}
              slidesPerView={5}
              breakpoints={{
                723: {
                  // Если ширина экрана больше или равна 768px
                  slidesPerView: 7,
                  spaceBetween: 0,
                },
              }}
              ref={swiperRef}
              initialSlide={activeIndex}
              onSlideChange={(swiper) => onSlideChange(swiper.activeIndex)}
              onSwiper={(swiper) => console.log(swiper)}
              modules={[Pagination]}
              pagination={{ clickable: true }}
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
                    <SwiperSlide key={index} style={{ minWidth: "70px" }}>
                      <li
                        className={clsx(
                          "flex flex-col min-w-[70px] justify-center items-center  rounded-md ",
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
                          <div className="w-[40px] h-[40px] flex justify-center items-center">
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
                              width={50}
                            />
                          </div>
                        )}
                        <span className="rounded bg-green-200">
                          {weatherData.week.tempMax.toString()[0] === "-"
                            ? ""
                            : "+"}
                          {Math.round(
                            weatherData.week.tempMax[index] as number
                          )}
                          °
                        </span>
                        <span className="rounded bg-blue-200">
                          {weatherData.week.tempMin.toString()[0] === "-"
                            ? ""
                            : "+"}
                          {Math.round(
                            weatherData.week.tempMin[index] as number
                          )}
                          °
                        </span>
                        <span className="flex gap-[2px]">
                          <Windy />
                          {Math.round(weatherData.week.windy[index] as number)}
                        </span>
                        {name !== "MeteoStats" && (
                          <span className="flex gap-[2px]">
                            <RainProbability />
                            {weatherData.week.rainProbably[index]}
                          </span>
                        )}

                        <span className="flex items-center gap-[2px]">
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
