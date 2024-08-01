export function WeatherIconCrossing({
  weather_code,
}: {
  weather_code: string
}) {
  switch (true) {
    case weather_code === "clear-night":
      return <ClearNight />
    case weather_code === "clear-day":
      return <ClearDay />
    case weather_code === "partly-cloudy-night":
      return <PartlyCloudyNight />
    case weather_code === "partly-cloudy-day":
      return <PartlyCloudyDay />
    case weather_code === "cloudy":
      return <Cloudy />
    case weather_code === "wind":
      return <Wind />
    case weather_code === "fog":
      return <Fog />
    case weather_code === "showers-night":
      return <ShowersNight />
    case weather_code === "showers-day":
      return <ShowersDay />
    case weather_code === "rain":
      return <Rain />
    case weather_code === "thunder-showers-night":
      return <ThunderShowersNight />
    case weather_code === "thunder-showers-day	":
      return <ThunderShowersDay />
    case weather_code === "thunder-rain":
      return <ThunderRain />
    case weather_code === "snow-showers-night":
      return <SnowShowersNight />
    case weather_code === "snow-showers-day	":
      return <SnowShowersDay />
    case weather_code === "Snow":
      return <Snow />
    default:
      return null
  }
}

const ClearDay = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.47 57.47">
      <defs>
        <style>
          {`
          .cls-1, .cls-2 {
            fill: none;
            stroke: #000;
            stroke-miterlimit: 10;
            stroke-width: 3px;
          }
          .cls-1 {
            stroke-linecap: round;
          }
        `}
        </style>
      </defs>
      <title>Clear Day Icon</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <line className="cls-1" x1="8.55" y1="28.73" x2="1.5" y2="28.73" />
          <line className="cls-1" x1="14.15" y1="42.85" x2="9.07" y2="47.75" />
          <line className="cls-1" x1="14.75" y1="14.28" x2="9.82" y2="9.24" />
          <line className="cls-1" x1="10.03" y1="36.46" x2="3.51" y2="39.14" />
          <line className="cls-1" x1="21.11" y1="10.12" x2="18.39" y2="3.62" />
          <line className="cls-1" x1="20.57" y1="47.38" x2="17.75" y2="53.85" />
          <line className="cls-1" x1="10.25" y1="20.74" x2="3.78" y2="17.95" />
          <path
            className="cls-2"
            d="M28.7,43.71h0a14.86,14.86,0,1,0,0-29.71h.05a14.86,14.86,0,1,0,0,29.71H28.7Z"
          />
          <line className="cls-1" x1="48.92" y1="28.73" x2="55.97" y2="28.73" />
          <line className="cls-1" x1="28.73" y1="8.55" x2="28.73" y2="1.5" />
          <line className="cls-1" x1="28.73" y1="48.92" x2="28.73" y2="55.97" />
          <line className="cls-1" x1="43.32" y1="42.85" x2="48.39" y2="47.75" />
          <line className="cls-1" x1="42.72" y1="14.28" x2="47.65" y2="9.24" />
          <line className="cls-1" x1="47.44" y1="36.46" x2="53.96" y2="39.14" />
          <line className="cls-1" x1="36.36" y1="10.12" x2="39.08" y2="3.62" />
          <line className="cls-1" x1="36.89" y1="47.38" x2="39.72" y2="53.85" />
          <line className="cls-1" x1="47.21" y1="20.74" x2="53.69" y2="17.95" />
        </g>
      </g>
    </svg>
  )
}
const ClearNight = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.11 40.96">
      <defs>
        <style>
          {`
          .cls-1 {
            fill: none;
            stroke: #000;
            stroke-miterlimit: 10;
            stroke-width: 3px;
          }
        `}
        </style>
      </defs>
      <title>clear-nightAsset 69</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            className="cls-1"
            d="M30.56,34.05h0a13.57,13.57,0,1,1,0-27.13,13.79,13.79,0,0,1,3.71.52,19,19,0,1,0-13.79,32h0a18.94,18.94,0,0,0,13.78-5.94A14.15,14.15,0,0,1,30.56,34.05Z"
          />
        </g>
      </g>
    </svg>
  )
}
const Cloudy = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98.7 34.32">
      <defs>
        <style>
          {`
              .cls-1 {
                fill: none;
                stroke: #000;
                stroke-miterlimit: 10;
                stroke-width: 3px;
              }
            `}
        </style>
      </defs>
      <title>cloudyAsset 72</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            className="cls-1"
            d="M59.26,31.64H97.15a15.06,15.06,0,0,0-12.1-14.06,15.87,15.87,0,0,0-7.62.47c-1.76.56-2.5.2-3.26-1.52a15.1,15.1,0,0,0-14.88-9.1A14.82,14.82,0,0,0,52,9.93c-1.62,1.06-2.55.86-3.63-.79a16.47,16.47,0,0,0-30.13,6.18c-.53,3.41-1.13,3.15-3.77,3.45-12.16,0-13,12.67-12.95,12.87H39.61"
          />
          <path d="M49.24,34.32a2.64,2.64,0,0,1-2.7-2.73,2.71,2.71,0,0,1,5.41,0A2.65,2.65,0,0,1,49.24,34.32Z" />
        </g>
      </g>
    </svg>
  )
}
const Fog = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98.7 58.99">
      <defs>
        <style>
          {`
              .cls-1, .cls-3 {
                fill: none;
                stroke-width: 3px;
              }
              .cls-1, .cls-2, .cls-3 {
                stroke: #231f20;
                stroke-miterlimit: 10;
              }
              .cls-2 {
                fill: #231f20;
              }
              .cls-3 {
                stroke-linecap: round;
              }
            `}
        </style>
      </defs>
      <title>4Asset 229FOG</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            className="cls-1"
            d="M59.26,31.64H97.15a15.06,15.06,0,0,0-12.1-14.06,15.87,15.87,0,0,0-7.62.47c-1.76.56-2.5.2-3.26-1.52a15.1,15.1,0,0,0-14.88-9.1A14.82,14.82,0,0,0,52,9.93c-1.62,1.06-2.55.86-3.63-.79a16.47,16.47,0,0,0-30.13,6.18c-.53,3.41-1.13,3.15-3.77,3.45-12.16,0-13,12.67-12.95,12.87H39.61"
          />
          <path
            className="cls-2"
            d="M49.24,34.32a2.64,2.64,0,0,1-2.7-2.73,2.71,2.71,0,0,1,5.41,0A2.65,2.65,0,0,1,49.24,34.32Z"
          />
          <line className="cls-3" x1="29.06" y1="40.28" x2="86" y2="40.28" />
          <line className="cls-3" x1="12.13" y1="40.28" x2="23.52" y2="40.28" />
          <line className="cls-3" x1="69.08" y1="48.79" x2="12.13" y2="48.79" />
          <line className="cls-3" x1="86" y1="48.79" x2="74.62" y2="48.79" />
          <line className="cls-3" x1="32" y1="57.49" x2="20.62" y2="57.49" />
          <line className="cls-3" x1="76.22" y1="57.49" x2="70.83" y2="57.49" />
          <line className="cls-3" x1="63.13" y1="57.4" x2="39.51" y2="57.4" />
        </g>
      </g>
    </svg>
  )
}
const Hail = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98.7 66.61">
      <defs>
        <style>
          {`
          .cls-1, .cls-2 {
            fill: none;
            stroke: #000;
            stroke-miterlimit: 10;
          }
          .cls-1 {
            stroke-width: 3px;
          }
          .cls-2 {
            stroke-width: 2px;
          }
        `}
        </style>
      </defs>
      <title>hailAsset 86</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <polygon
            className="cls-1"
            points="26.95 40.13 30.52 40.16 31.66 43.57 32.75 47.02 29.87 49.16 26.91 51.27 23.94 49.16 21.07 47.02 22.17 43.52 23.3 40.16 26.95 40.13"
          />
          <polygon
            className="cls-1"
            points="48.91 40.13 52.48 40.16 53.62 43.57 54.72 47.02 51.83 49.16 48.87 51.27 45.91 49.16 43.03 47.02 44.13 43.52 45.26 40.16 48.91 40.13"
          />
          <polygon
            className="cls-1"
            points="70.87 40.13 74.44 40.16 75.58 43.57 76.68 47.02 73.79 49.16 70.83 51.27 67.87 49.16 64.99 47.02 66.09 43.52 67.22 40.16 70.87 40.13"
          />
          <polygon
            className="cls-2"
            points="33.28 57.46 35.82 57.48 36.63 59.91 37.41 62.37 35.35 63.89 33.25 65.39 31.14 63.89 29.09 62.37 29.88 59.87 30.68 57.48 33.28 57.46"
          />
          <polygon
            className="cls-2"
            points="48.9 57.46 51.44 57.48 52.25 59.91 53.03 62.37 50.98 63.89 48.87 65.39 46.76 63.89 44.71 62.37 45.5 59.87 46.3 57.48 48.9 57.46"
          />
          <polygon
            className="cls-2"
            points="64.52 57.46 67.06 57.48 67.88 59.91 68.65 62.37 66.6 63.89 64.49 65.39 62.38 63.89 60.34 62.37 61.12 59.87 61.92 57.48 64.52 57.46"
          />
          <path
            className="cls-1"
            d="M59.26,31.64H97.15a15.06,15.06,0,0,0-12.1-14.06,15.87,15.87,0,0,0-7.62.47c-1.76.56-2.5.2-3.26-1.52a15.1,15.1,0,0,0-14.88-9.1A14.82,14.82,0,0,0,52,9.93c-1.62,1.06-2.55.86-3.63-.79a16.47,16.47,0,0,0-30.13,6.18c-.53,3.41-1.13,3.15-3.77,3.45-12.16,0-13,12.67-12.95,12.87H39.61"
          />
          <path d="M49.24,34.32a2.64,2.64,0,0,1-2.7-2.73,2.71,2.71,0,0,1,5.41,0A2.65,2.65,0,0,1,49.24,34.32Z" />
        </g>
      </g>
    </svg>
  )
}
const PartlyCloudyDay = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 106.58 60.63">
      <defs>
        <style>
          {`
          .cls-1, .cls-2, .cls-3 {
            fill: none;
            stroke: #000;
            stroke-miterlimit: 10;
          }
          .cls-1 {
            stroke-width: 3px;
          }
          .cls-2 {
            stroke-linecap: round;
            stroke-width: 2px;
          }
          .cls-3 {
            stroke-width: 2px;
          }
        `}
        </style>
      </defs>
      <title>partly-cloudy-dayAsset 70</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            className="cls-1"
            d="M59.26,58H97.15a15.05,15.05,0,0,0-12.1-14.06,15.87,15.87,0,0,0-7.62.47c-1.76.56-2.5.2-3.26-1.53a15.11,15.11,0,0,0-14.88-9.09A14.91,14.91,0,0,0,52,36.23c-1.62,1.07-2.55.86-3.63-.78a16.47,16.47,0,0,0-30.13,6.18c-.53,3.41-1.13,3.15-3.77,3.45C2.29,45.08,1.48,57.75,1.5,58H39.61"
          />
          <path d="M49.24,60.63a2.64,2.64,0,0,1-2.7-2.73,2.71,2.71,0,0,1,5.41,0A2.65,2.65,0,0,1,49.24,60.63Z" />
          <line className="cls-2" x1="73.2" y1="19.6" x2="68.39" y2="19.6" />
          <line className="cls-2" x1="77.02" y1="29.24" x2="73.56" y2="32.58" />
          <line className="cls-2" x1="77.43" y1="9.73" x2="74.07" y2="6.29" />
          <line className="cls-2" x1="74.21" y1="24.87" x2="69.76" y2="26.7" />
          <line className="cls-2" x1="81.78" y1="6.89" x2="79.92" y2="2.45" />
          <line className="cls-2" x1="81.41" y1="32.33" x2="79.48" y2="36.74" />
          <line className="cls-2" x1="74.37" y1="14.14" x2="69.94" y2="12.23" />
          <path
            className="cls-3"
            d="M87,29.82h0A10.15,10.15,0,1,0,87,9.53h0a10.15,10.15,0,1,0,0,20.29h0Z"
          />
          <line className="cls-2" x1="100.76" y1="19.6" x2="105.58" y2="19.6" />
          <line className="cls-2" x1="86.98" y1="5.82" x2="86.98" y2="1" />
          <line className="cls-2" x1="86.98" y1="33.38" x2="86.98" y2="38.19" />
          <line
            className="cls-2"
            x1="96.94"
            y1="29.24"
            x2="100.41"
            y2="32.58"
          />
          <line className="cls-2" x1="96.53" y1="9.73" x2="99.9" y2="6.29" />
          <line className="cls-2" x1="99.76" y1="24.87" x2="104.21" y2="26.7" />
          <line className="cls-2" x1="92.19" y1="6.89" x2="94.05" y2="2.45" />
          <line className="cls-2" x1="92.56" y1="32.33" x2="94.49" y2="36.74" />
          <line className="cls-2" x1="99.6" y1="14.14" x2="104.03" y2="12.23" />
        </g>
      </g>
    </svg>
  )
}
const PartlyCloudyNight = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102.12 54.41">
      <defs>
        <style>
          {`
          .cls-1 {
            fill: none;
            stroke: #000;
            stroke-miterlimit: 10;
            stroke-width: 3px;
          }
        `}
        </style>
      </defs>
      <title>partly-cloudy-nightAsset 71</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            className="cls-1"
            d="M59.26,51.74H97.15a15.05,15.05,0,0,0-12.1-14.06,15.63,15.63,0,0,0-7.62.47c-1.76.56-2.5.2-3.26-1.53a15.1,15.1,0,0,0-14.88-9.09A14.81,14.81,0,0,0,52,30c-1.62,1.06-2.55.86-3.63-.78A16.42,16.42,0,0,0,31.51,21.9c-7,1.45-12.22,6.6-13.29,13.52-.53,3.41-1.13,3.14-3.77,3.45-12.16,0-13,12.67-12.95,12.87H39.61"
          />
          <path d="M49.24,54.41a2.64,2.64,0,0,1-2.7-2.72,2.71,2.71,0,1,1,5.41,0A2.64,2.64,0,0,1,49.24,54.41Z" />
          <path
            className="cls-1"
            d="M99,17.47h0A10.77,10.77,0,1,1,84.35,1.93,15.07,15.07,0,1,0,97.29,26.41h0a15,15,0,0,0,3.19-11.48A10.56,10.56,0,0,1,99,17.47Z"
          />
        </g>
      </g>
    </svg>
  )
}
const Rain = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98.7 70.44">
      <defs>
        <style>
          {`
          .cls-1 {
            fill: none;
            stroke: #000;
            stroke-miterlimit: 10;
            stroke-width: 3px;
          }
        `}
        </style>
      </defs>
      <title>rainAsset 73</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            className="cls-1"
            d="M28.67,40.29c-2.47,1.5-4.71,2.77-6.85,4.2a4.45,4.45,0,0,0,3.37,8,4.53,4.53,0,0,0,3.47-4.36C28.71,45.65,28.67,43.18,28.67,40.29Z"
          />
          <path
            className="cls-1"
            d="M50.29,40.29c-2.48,1.5-4.72,2.77-6.85,4.2a4.45,4.45,0,0,0,3.37,8,4.54,4.54,0,0,0,3.47-4.36C50.33,45.65,50.29,43.18,50.29,40.29Z"
          />
          <path
            className="cls-1"
            d="M71.91,40.29c-2.48,1.5-4.72,2.77-6.85,4.2a4.45,4.45,0,0,0,3.36,8,4.51,4.51,0,0,0,3.47-4.36C72,45.65,71.91,43.18,71.91,40.29Z"
          />
          <path
            className="cls-1"
            d="M36.67,56.67c-2.47,1.51-4.71,2.78-6.85,4.2a4.41,4.41,0,1,0,6.84,3.64C36.71,62,36.67,59.56,36.67,56.67Z"
          />
          <path
            className="cls-1"
            d="M58.29,56.67c-2.48,1.51-4.72,2.78-6.85,4.2a4.45,4.45,0,0,0,3.37,8,4.52,4.52,0,0,0,3.47-4.36C58.33,62,58.29,59.56,58.29,56.67Z"
          />
          <path
            className="cls-1"
            d="M59.26,31.64H97.15a15.06,15.06,0,0,0-12.1-14.06,15.87,15.87,0,0,0-7.62.47c-1.76.56-2.5.2-3.26-1.52a15.1,15.1,0,0,0-14.88-9.1A14.82,14.82,0,0,0,52,9.93c-1.62,1.06-2.55.86-3.63-.79a16.47,16.47,0,0,0-30.13,6.18c-.53,3.41-1.13,3.15-3.77,3.45-12.16,0-13,12.67-12.95,12.87H39.61"
          />
          <path d="M49.24,34.32a2.64,2.64,0,0,1-2.7-2.73,2.71,2.71,0,0,1,5.41,0A2.65,2.65,0,0,1,49.24,34.32Z" />
        </g>
      </g>
    </svg>
  )
}
const RainSnow = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98.7 70.65">
      <defs>
        <style>
          {`
          .cls-1, .cls-2, .cls-3 {
            fill: none;
            stroke-miterlimit: 10;
          }
          .cls-1, .cls-2 {
            stroke: #231f20;
          }
          .cls-1 {
            stroke-linecap: round;
          }
          .cls-3 {
            stroke: #000;
            stroke-width: 3px;
          }
        `}
        </style>
      </defs>
      <title>rain-snowAsset 77</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <line className="cls-1" x1="47.46" y1="40.7" x2="48.71" y2="39.93" />
          <line className="cls-1" x1="48.71" y1="51.78" x2="47.49" y2="51.08" />
          <line className="cls-1" x1="47.49" y1="45.87" x2="52.11" y2="50.48" />
          <polyline
            className="cls-1"
            points="52.55 49.18 51.19 49.53 50.85 50.95"
          />
          <line className="cls-1" x1="52.18" y1="41.2" x2="47.47" y2="45.94" />
          <polyline
            className="cls-1"
            points="50.81 40.84 51.17 42.2 52.59 42.53"
          />
          <line className="cls-1" x1="54.12" y1="45.87" x2="47.49" y2="45.87" />
          <polyline
            className="cls-1"
            points="53.41 44.65 52.7 45.86 53.47 47.1"
          />
          <line className="cls-2" x1="47.49" y1="52.16" x2="47.49" y2="39.28" />
          <line className="cls-1" x1="47.49" y1="52.4" x2="47.49" y2="39.28" />
          <line className="cls-1" x1="47.5" y1="50.98" x2="46.26" y2="51.75" />
          <line className="cls-1" x1="46.26" y1="39.9" x2="47.47" y2="40.61" />
          <line className="cls-1" x1="47.47" y1="45.81" x2="42.85" y2="41.2" />
          <polyline
            className="cls-1"
            points="42.42 42.51 43.77 42.15 44.11 40.73"
          />
          <line className="cls-1" x1="42.79" y1="50.48" x2="47.5" y2="45.74" />
          <polyline
            className="cls-1"
            points="44.15 50.84 43.8 49.49 42.38 49.15"
          />
          <line className="cls-1" x1="40.85" y1="45.81" x2="47.47" y2="45.81" />
          <polyline
            className="cls-1"
            points="41.56 47.03 42.27 45.82 41.5 44.58"
          />
          <line className="cls-1" x1="56.34" y1="57.89" x2="57.58" y2="57.13" />
          <line className="cls-1" x1="57.58" y1="68.98" x2="56.37" y2="68.27" />
          <line className="cls-1" x1="56.36" y1="63.06" x2="60.99" y2="67.67" />
          <polyline
            className="cls-1"
            points="61.42 66.37 60.06 66.72 59.73 68.14"
          />
          <line className="cls-1" x1="61.05" y1="58.39" x2="56.34" y2="63.13" />
          <polyline
            className="cls-1"
            points="59.69 58.03 60.04 59.39 61.46 59.72"
          />
          <line className="cls-1" x1="62.99" y1="63.06" x2="56.36" y2="63.06" />
          <polyline
            className="cls-1"
            points="62.28 61.84 61.57 63.05 62.34 64.29"
          />
          <line className="cls-2" x1="56.36" y1="69.35" x2="56.36" y2="56.48" />
          <line className="cls-1" x1="56.36" y1="69.59" x2="56.36" y2="56.48" />
          <line className="cls-1" x1="56.37" y1="68.17" x2="55.13" y2="68.94" />
          <line className="cls-1" x1="55.13" y1="57.09" x2="56.34" y2="57.8" />
          <line className="cls-1" x1="56.35" y1="63" x2="51.72" y2="58.39" />
          <polyline
            className="cls-1"
            points="51.29 59.7 52.65 59.34 52.98 57.92"
          />
          <line className="cls-1" x1="51.66" y1="67.67" x2="56.37" y2="62.93" />
          <polyline
            className="cls-1"
            points="53.02 68.04 52.67 66.68 51.25 66.34"
          />
          <line className="cls-1" x1="49.72" y1="63" x2="56.35" y2="63" />
          <polyline
            className="cls-1"
            points="50.43 64.23 51.14 63.01 50.37 61.77"
          />
          <path
            className="cls-3"
            d="M28.67,40.49C26.2,42,24,43.27,21.82,44.7a4.44,4.44,0,0,0,3.37,8,4.51,4.51,0,0,0,3.47-4.36C28.71,45.86,28.67,43.38,28.67,40.49Z"
          />
          <path
            className="cls-3"
            d="M71.91,40.49c-2.48,1.51-4.72,2.78-6.85,4.21a4.44,4.44,0,0,0,3.36,8,4.5,4.5,0,0,0,3.47-4.36C72,45.86,71.91,43.38,71.91,40.49Z"
          />
          <path
            className="cls-3"
            d="M36.67,56.88c-2.47,1.5-4.71,2.77-6.85,4.2a4.41,4.41,0,1,0,6.84,3.64C36.71,62.24,36.67,59.77,36.67,56.88Z"
          />
          <path
            className="cls-3"
            d="M59.26,31.64H97.15a15.06,15.06,0,0,0-12.1-14.06,15.87,15.87,0,0,0-7.62.47c-1.76.56-2.5.2-3.26-1.52a15.1,15.1,0,0,0-14.88-9.1A14.82,14.82,0,0,0,52,9.93c-1.62,1.06-2.55.86-3.63-.79a16.47,16.47,0,0,0-30.13,6.18c-.53,3.41-1.13,3.15-3.77,3.45-12.16,0-13,12.67-12.95,12.87H39.61"
          />
          <path d="M49.24,34.32a2.64,2.64,0,0,1-2.7-2.73,2.71,2.71,0,0,1,5.41,0A2.65,2.65,0,0,1,49.24,34.32Z" />
        </g>
      </g>
    </svg>
  )
}
const RainSnowShowersDay = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 116.8 102.52">
      <defs>
        <style>
          {`
          .cls-1, .cls-2, .cls-3, .cls-4 {
            fill: none;
            stroke-miterlimit: 10;
          }
          .cls-1, .cls-2 {
            stroke: #231f20;
          }
          .cls-1, .cls-4 {
            stroke-linecap: round;
          }
          .cls-3, .cls-4 {
            stroke: #000;
            stroke-width: 3px;
          }
        `}
        </style>
      </defs>
      <title>rain-snow-showers-dayAsset 78</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <line className="cls-1" x1="47.46" y1="72.57" x2="48.71" y2="71.8" />
          <line className="cls-1" x1="48.71" y1="83.65" x2="47.49" y2="82.94" />
          <line className="cls-1" x1="47.49" y1="77.74" x2="52.11" y2="82.35" />
          <polyline
            className="cls-1"
            points="52.55 81.04 51.19 81.4 50.85 82.82"
          />
          <line className="cls-1" x1="52.18" y1="73.07" x2="47.47" y2="77.81" />
          <polyline
            className="cls-1"
            points="50.81 72.7 51.17 74.06 52.59 74.4"
          />
          <line className="cls-1" x1="54.12" y1="77.74" x2="47.49" y2="77.74" />
          <polyline
            className="cls-1"
            points="53.41 76.51 52.7 77.73 53.47 78.97"
          />
          <line className="cls-2" x1="47.49" y1="84.02" x2="47.49" y2="71.15" />
          <line className="cls-1" x1="47.49" y1="84.26" x2="47.49" y2="71.15" />
          <line className="cls-1" x1="47.5" y1="82.85" x2="46.26" y2="83.61" />
          <line className="cls-1" x1="46.26" y1="71.76" x2="47.47" y2="72.47" />
          <line className="cls-1" x1="47.47" y1="77.68" x2="42.85" y2="73.07" />
          <polyline
            className="cls-1"
            points="42.42 74.37 43.77 74.02 44.11 72.6"
          />
          <line className="cls-1" x1="42.79" y1="82.35" x2="47.5" y2="77.61" />
          <polyline
            className="cls-1"
            points="44.15 82.71 43.8 81.35 42.38 81.02"
          />
          <line className="cls-1" x1="40.85" y1="77.68" x2="47.47" y2="77.68" />
          <polyline
            className="cls-1"
            points="41.56 78.9 42.27 77.69 41.5 76.45"
          />
          <line className="cls-1" x1="56.34" y1="89.76" x2="57.58" y2="88.99" />
          <line
            className="cls-1"
            x1="57.58"
            y1="100.84"
            x2="56.37"
            y2="100.13"
          />
          <line className="cls-1" x1="56.36" y1="94.93" x2="60.99" y2="99.54" />
          <polyline
            className="cls-1"
            points="61.42 98.23 60.06 98.59 59.73 100.01"
          />
          <line className="cls-1" x1="61.05" y1="90.26" x2="56.34" y2="95" />
          <polyline
            className="cls-1"
            points="59.69 89.89 60.04 91.25 61.46 91.59"
          />
          <line className="cls-1" x1="62.99" y1="94.93" x2="56.36" y2="94.93" />
          <polyline
            className="cls-1"
            points="62.28 93.7 61.57 94.92 62.34 96.16"
          />
          <line
            className="cls-2"
            x1="56.36"
            y1="101.21"
            x2="56.36"
            y2="88.34"
          />
          <line
            className="cls-1"
            x1="56.36"
            y1="101.46"
            x2="56.36"
            y2="88.34"
          />
          <line
            className="cls-1"
            x1="56.37"
            y1="100.04"
            x2="55.13"
            y2="100.81"
          />
          <line className="cls-1" x1="55.13" y1="88.96" x2="56.34" y2="89.66" />
          <line className="cls-1" x1="56.35" y1="94.87" x2="51.72" y2="90.26" />
          <polyline
            className="cls-1"
            points="51.29 91.56 52.65 91.21 52.98 89.79"
          />
          <line className="cls-1" x1="51.66" y1="99.54" x2="56.37" y2="94.8" />
          <polyline
            className="cls-1"
            points="53.02 99.9 52.67 98.54 51.25 98.21"
          />
          <line className="cls-1" x1="49.72" y1="94.87" x2="56.35" y2="94.87" />
          <polyline
            className="cls-1"
            points="50.43 96.09 51.14 94.88 50.37 93.64"
          />
          <path
            className="cls-3"
            d="M28.67,72.36c-2.47,1.51-4.71,2.78-6.85,4.2a4.45,4.45,0,0,0,3.37,8,4.51,4.51,0,0,0,3.47-4.36C28.71,77.73,28.67,75.25,28.67,72.36Z"
          />
          <path
            className="cls-3"
            d="M71.91,72.36c-2.48,1.51-4.72,2.78-6.85,4.2a4.45,4.45,0,0,0,3.36,8,4.5,4.5,0,0,0,3.47-4.36C72,77.73,71.91,75.25,71.91,72.36Z"
          />
          <path
            className="cls-3"
            d="M36.67,88.74c-2.47,1.5-4.71,2.77-6.85,4.2a4.44,4.44,0,0,0,3.37,8,4.51,4.51,0,0,0,3.47-4.36C36.71,94.11,36.67,91.63,36.67,88.74Z"
          />
          <path
            className="cls-3"
            d="M59.26,62.32H97.15a15.07,15.07,0,0,0-12.1-14.06,15.87,15.87,0,0,0-7.62.47c-1.76.56-2.5.2-3.26-1.52a15.1,15.1,0,0,0-14.88-9.1A14.82,14.82,0,0,0,52,40.61c-1.62,1.06-2.55.86-3.63-.79a16.43,16.43,0,0,0-16.84-7.33c-7,1.45-12.22,6.59-13.29,13.51-.53,3.41-1.13,3.15-3.77,3.45-12.16,0-13,12.68-12.95,12.87H39.61"
          />
          <path d="M49.24,65a2.64,2.64,0,0,1-2.7-2.73,2.71,2.71,0,1,1,5.41,0A2.65,2.65,0,0,1,49.24,65Z" />
          <line className="cls-4" x1="69.07" y1="28.05" x2="62.2" y2="28.05" />
          <line className="cls-4" x1="75.11" y1="13.96" x2="70.3" y2="9.05" />
          <line className="cls-4" x1="81.32" y1="9.91" x2="78.66" y2="3.56" />
          <line className="cls-4" x1="70.73" y1="20.26" x2="64.42" y2="17.54" />
          <path
            className="cls-3"
            d="M88.72,42.66h0a14.49,14.49,0,0,0,0-29h0a14.49,14.49,0,1,0,0,29h0Z"
          />
          <line
            className="cls-4"
            x1="108.43"
            y1="28.05"
            x2="115.3"
            y2="28.05"
          />
          <line className="cls-4" x1="88.75" y1="8.38" x2="88.75" y2="1.5" />
          <line
            className="cls-4"
            x1="102.97"
            y1="41.82"
            x2="107.92"
            y2="46.59"
          />
          <line className="cls-4" x1="102.39" y1="13.96" x2="107.2" y2="9.05" />
          <line
            className="cls-4"
            x1="106.99"
            y1="35.59"
            x2="113.35"
            y2="38.2"
          />
          <line className="cls-4" x1="96.18" y1="9.91" x2="98.84" y2="3.56" />
          <line
            className="cls-4"
            x1="106.77"
            y1="20.26"
            x2="113.08"
            y2="17.54"
          />
        </g>
      </g>
    </svg>
  )
}
const RainSnowShowersNight = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102.12 92.94">
      <defs>
        <style>
          {`
          .cls-1, .cls-2, .cls-3 {
            fill: none;
            stroke-miterlimit: 10;
          }
          .cls-1, .cls-2 {
            stroke: #231f20;
          }
          .cls-1 {
            stroke-linecap: round;
          }
          .cls-3 {
            stroke: #000;
            stroke-width: 3px;
          }
        `}
        </style>
      </defs>
      <title>rain-snow-showers-nightAsset 79</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <line className="cls-1" x1="47.46" y1="62.99" x2="48.71" y2="62.23" />
          <line className="cls-1" x1="48.71" y1="74.08" x2="47.49" y2="73.37" />
          <line className="cls-1" x1="47.49" y1="68.16" x2="52.11" y2="72.77" />
          <polyline
            className="cls-1"
            points="52.55 71.47 51.19 71.83 50.85 73.25"
          />
          <line className="cls-1" x1="52.18" y1="63.5" x2="47.47" y2="68.23" />
          <polyline
            className="cls-1"
            points="50.81 63.13 51.17 64.49 52.59 64.83"
          />
          <line className="cls-1" x1="54.12" y1="68.16" x2="47.49" y2="68.16" />
          <polyline
            className="cls-1"
            points="53.41 66.94 52.7 68.15 53.47 69.39"
          />
          <line className="cls-2" x1="47.49" y1="74.45" x2="47.49" y2="61.58" />
          <line className="cls-1" x1="47.49" y1="74.69" x2="47.49" y2="61.58" />
          <line className="cls-1" x1="47.5" y1="73.28" x2="46.26" y2="74.04" />
          <line className="cls-1" x1="46.26" y1="62.19" x2="47.47" y2="62.9" />
          <line className="cls-1" x1="47.47" y1="68.11" x2="42.85" y2="63.5" />
          <polyline
            className="cls-1"
            points="42.42 64.8 43.77 64.44 44.11 63.02"
          />
          <line className="cls-1" x1="42.79" y1="72.77" x2="47.5" y2="68.04" />
          <polyline
            className="cls-1"
            points="44.15 73.14 43.8 71.78 42.38 71.44"
          />
          <line className="cls-1" x1="40.85" y1="68.11" x2="47.47" y2="68.11" />
          <polyline
            className="cls-1"
            points="41.56 69.33 42.27 68.12 41.5 66.88"
          />
          <line className="cls-1" x1="56.34" y1="80.19" x2="57.58" y2="79.42" />
          <line className="cls-1" x1="57.58" y1="91.27" x2="56.37" y2="90.56" />
          <line className="cls-1" x1="56.36" y1="85.36" x2="60.99" y2="89.97" />
          <polyline
            className="cls-1"
            points="61.42 88.66 60.06 89.02 59.73 90.44"
          />
          <line className="cls-1" x1="61.05" y1="80.69" x2="56.34" y2="85.43" />
          <polyline
            className="cls-1"
            points="59.69 80.32 60.04 81.68 61.46 82.02"
          />
          <line className="cls-1" x1="62.99" y1="85.36" x2="56.36" y2="85.36" />
          <polyline
            className="cls-1"
            points="62.28 84.13 61.57 85.34 62.34 86.59"
          />
          <line className="cls-2" x1="56.36" y1="91.64" x2="56.36" y2="78.77" />
          <line className="cls-1" x1="56.36" y1="91.88" x2="56.36" y2="78.77" />
          <line className="cls-1" x1="56.37" y1="90.47" x2="55.13" y2="91.23" />
          <line className="cls-1" x1="55.13" y1="79.38" x2="56.34" y2="80.09" />
          <line className="cls-1" x1="56.35" y1="85.3" x2="51.72" y2="80.69" />
          <polyline
            className="cls-1"
            points="51.29 81.99 52.65 81.64 52.98 80.22"
          />
          <line className="cls-1" x1="51.66" y1="89.97" x2="56.37" y2="85.23" />
          <polyline
            className="cls-1"
            points="53.02 90.33 52.67 88.97 51.25 88.64"
          />
          <line className="cls-1" x1="49.72" y1="85.3" x2="56.35" y2="85.3" />
          <polyline
            className="cls-1"
            points="50.43 86.52 51.14 85.31 50.37 84.07"
          />
          <path
            className="cls-3"
            d="M28.67,62.79C26.2,64.29,24,65.56,21.82,67a4.45,4.45,0,0,0,3.37,8,4.53,4.53,0,0,0,3.47-4.36C28.71,68.15,28.67,65.68,28.67,62.79Z"
          />
          <path
            className="cls-3"
            d="M71.91,62.79c-2.48,1.5-4.72,2.77-6.85,4.2a4.45,4.45,0,0,0,3.36,8,4.51,4.51,0,0,0,3.47-4.36C72,68.15,71.91,65.68,71.91,62.79Z"
          />
          <path
            className="cls-3"
            d="M36.67,79.17C34.2,80.68,32,82,29.82,83.37A4.41,4.41,0,1,0,36.66,87C36.71,84.54,36.67,82.06,36.67,79.17Z"
          />
          <path
            className="cls-3"
            d="M59.26,51.74H97.15a15.05,15.05,0,0,0-12.1-14.06,15.63,15.63,0,0,0-7.62.47c-1.76.56-2.5.2-3.26-1.53a15.1,15.1,0,0,0-14.88-9.09A14.81,14.81,0,0,0,52,30c-1.62,1.06-2.55.86-3.63-.78A16.42,16.42,0,0,0,31.51,21.9c-7,1.45-12.22,6.6-13.29,13.52-.53,3.41-1.13,3.14-3.77,3.45-12.16,0-13,12.67-12.95,12.87H39.61"
          />
          <path d="M49.24,54.41a2.64,2.64,0,0,1-2.7-2.72,2.71,2.71,0,1,1,5.41,0A2.64,2.64,0,0,1,49.24,54.41Z" />
          <path
            className="cls-3"
            d="M99,17.47h0A10.77,10.77,0,1,1,84.35,1.93,15.07,15.07,0,1,0,97.29,26.41h0a15,15,0,0,0,3.19-11.48A10.56,10.56,0,0,1,99,17.47Z"
          />
        </g>
      </g>
    </svg>
  )
}
const ShowersDay = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 116.8 101.13">
      <defs>
        <style>
          {`
          .cls-1, .cls-2 {
            fill: none;
            stroke: #000;
            stroke-miterlimit: 10;
            stroke-width: 3px;
          }
          .cls-2 {
            stroke-linecap: round;
          }
        `}
        </style>
      </defs>
      <title>showers-dayAsset 74</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            className="cls-1"
            d="M28.67,71c-2.47,1.51-4.71,2.77-6.85,4.2a4.45,4.45,0,0,0,3.37,8,4.51,4.51,0,0,0,3.47-4.36C28.71,76.33,28.67,73.86,28.67,71Z"
          />
          <path
            className="cls-1"
            d="M50.29,71c-2.48,1.51-4.72,2.77-6.85,4.2a4.45,4.45,0,0,0,3.37,8,4.52,4.52,0,0,0,3.47-4.36C50.33,76.33,50.29,73.86,50.29,71Z"
          />
          <path
            className="cls-1"
            d="M71.91,71c-2.48,1.51-4.72,2.77-6.85,4.2a4.45,4.45,0,0,0,3.36,8,4.5,4.5,0,0,0,3.47-4.36C72,76.33,71.91,73.86,71.91,71Z"
          />
          <path
            className="cls-1"
            d="M36.67,87.35c-2.47,1.51-4.71,2.78-6.85,4.21a4.44,4.44,0,0,0,3.37,8,4.51,4.51,0,0,0,3.47-4.36C36.71,92.72,36.67,90.24,36.67,87.35Z"
          />
          <path
            className="cls-1"
            d="M58.29,87.35c-2.48,1.51-4.72,2.78-6.85,4.21a4.44,4.44,0,0,0,3.37,8,4.52,4.52,0,0,0,3.47-4.36C58.33,92.72,58.29,90.24,58.29,87.35Z"
          />
          <path
            className="cls-1"
            d="M59.26,62.32H97.15a15.07,15.07,0,0,0-12.1-14.06,15.87,15.87,0,0,0-7.62.47c-1.76.56-2.5.2-3.26-1.52a15.1,15.1,0,0,0-14.88-9.1A14.82,14.82,0,0,0,52,40.61c-1.62,1.06-2.55.86-3.63-.79a16.43,16.43,0,0,0-16.84-7.33c-7,1.45-12.22,6.59-13.29,13.51-.53,3.41-1.13,3.15-3.77,3.45-12.16,0-13,12.68-12.95,12.87H39.61"
          />
          <path d="M49.24,65a2.64,2.64,0,0,1-2.7-2.73,2.71,2.71,0,1,1,5.41,0A2.65,2.65,0,0,1,49.24,65Z" />
          <line className="cls-2" x1="69.07" y1="28.05" x2="62.2" y2="28.05" />
          <line className="cls-2" x1="75.11" y1="13.96" x2="70.3" y2="9.05" />
          <line className="cls-2" x1="81.32" y1="9.91" x2="78.66" y2="3.56" />
          <line className="cls-2" x1="70.73" y1="20.26" x2="64.42" y2="17.54" />
          <path
            className="cls-1"
            d="M88.72,42.66h0a14.49,14.49,0,0,0,0-29h0a14.49,14.49,0,1,0,0,29h0Z"
          />
          <line
            className="cls-2"
            x1="108.43"
            y1="28.05"
            x2="115.3"
            y2="28.05"
          />
          <line className="cls-2" x1="88.75" y1="8.38" x2="88.75" y2="1.5" />
          <line
            className="cls-2"
            x1="102.97"
            y1="41.82"
            x2="107.92"
            y2="46.59"
          />
          <line className="cls-2" x1="102.39" y1="13.96" x2="107.2" y2="9.05" />
          <line
            className="cls-2"
            x1="106.99"
            y1="35.59"
            x2="113.35"
            y2="38.2"
          />
          <line className="cls-2" x1="96.18" y1="9.91" x2="98.84" y2="3.56" />
          <line
            className="cls-2"
            x1="106.77"
            y1="20.26"
            x2="113.08"
            y2="17.54"
          />
        </g>
      </g>
    </svg>
  )
}
const ShowersNight = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102.12 90.74">
      <defs>
        <style>
          {`
          .cls-1 {
            fill: none;
            stroke: #000;
            stroke-miterlimit: 10;
            stroke-width: 3px;
          }
        `}
        </style>
      </defs>
      <title>showers-nightAsset 75</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            className="cls-1"
            d="M28.67,60.59c-2.47,1.51-4.71,2.77-6.85,4.2a4.45,4.45,0,0,0,3.37,8,4.52,4.52,0,0,0,3.47-4.36C28.71,66,28.67,63.48,28.67,60.59Z"
          />
          <path
            className="cls-1"
            d="M50.29,60.59c-2.48,1.51-4.72,2.77-6.85,4.2a4.45,4.45,0,0,0,3.37,8,4.53,4.53,0,0,0,3.47-4.36C50.33,66,50.29,63.48,50.29,60.59Z"
          />
          <path
            className="cls-1"
            d="M71.91,60.59c-2.48,1.51-4.72,2.77-6.85,4.2a4.45,4.45,0,0,0,3.36,8,4.51,4.51,0,0,0,3.47-4.36C72,66,71.91,63.48,71.91,60.59Z"
          />
          <path
            className="cls-1"
            d="M36.67,77c-2.47,1.51-4.71,2.78-6.85,4.21a4.44,4.44,0,0,0,3.37,8,4.51,4.51,0,0,0,3.47-4.36C36.71,82.34,36.67,79.86,36.67,77Z"
          />
          <path
            className="cls-1"
            d="M58.29,77c-2.48,1.51-4.72,2.78-6.85,4.21a4.44,4.44,0,0,0,3.37,8,4.52,4.52,0,0,0,3.47-4.36C58.33,82.34,58.29,79.86,58.29,77Z"
          />
          <path
            className="cls-1"
            d="M59.26,51.74H97.15a15.05,15.05,0,0,0-12.1-14.06,15.63,15.63,0,0,0-7.62.47c-1.76.56-2.5.2-3.26-1.53a15.1,15.1,0,0,0-14.88-9.09A14.81,14.81,0,0,0,52,30c-1.62,1.06-2.55.86-3.63-.78A16.42,16.42,0,0,0,31.51,21.9c-7,1.45-12.22,6.6-13.29,13.52-.53,3.41-1.13,3.14-3.77,3.45-12.16,0-13,12.67-12.95,12.87H39.61"
          />
          <path d="M49.24,54.41a2.64,2.64,0,0,1-2.7-2.72,2.71,2.71,0,1,1,5.41,0A2.64,2.64,0,0,1,49.24,54.41Z" />
          <path
            className="cls-1"
            d="M99,17.47h0A10.77,10.77,0,1,1,84.35,1.93,15.07,15.07,0,1,0,97.29,26.41h0a15,15,0,0,0,3.19-11.48A10.56,10.56,0,0,1,99,17.47Z"
          />
        </g>
      </g>
    </svg>
  )
}
const Sleet = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98.7 48.25">
      <defs>
        <style>
          {`
          .cls-1 {
            fill: none;
            stroke-miterlimit: 10;
            stroke: #231f20;
            stroke-width: 2px;
          }
          .cls-2 {
            fill: none;
            stroke: #231f20;
            stroke-miterlimit: 10;
            stroke-width: 2px;
            stroke-linecap: round;
          }
          .cls-3 {
            fill: none;
            stroke: #000;
            stroke-miterlimit: 10;
            stroke-width: 3px;
          }
        `}
        </style>
      </defs>
      <title>sleet Asset 76</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <line className="cls-1" x1="49.29" y1="16.34" x2="49.29" y2="47.25" />
          <line className="cls-2" x1="49.29" y1="15.76" x2="49.29" y2="47.25" />
          <line className="cls-2" x1="49.27" y1="19.16" x2="52.25" y2="17.32" />
          <line className="cls-2" x1="52.25" y1="45.77" x2="49.34" y2="44.07" />
          <line className="cls-2" x1="49.33" y1="31.57" x2="60.43" y2="42.64" />
          <polyline
            className="cls-2"
            points="61.48 39.51 58.22 40.37 57.41 43.78"
          />
          <line className="cls-2" x1="60.59" y1="20.36" x2="49.28" y2="31.74" />
          <polyline
            className="cls-2"
            points="57.31 19.49 58.16 22.75 61.58 23.56"
          />
          <line className="cls-2" x1="65.24" y1="31.57" x2="49.33" y2="31.57" />
          <polyline
            className="cls-2"
            points="63.54 28.64 61.84 31.55 63.68 34.53"
          />
          <line className="cls-1" x1="49.23" y1="46.67" x2="49.23" y2="15.76" />
          <line className="cls-2" x1="49.23" y1="47.25" x2="49.23" y2="15.76" />
          <line className="cls-2" x1="49.26" y1="43.85" x2="46.28" y2="45.69" />
          <line className="cls-2" x1="46.28" y1="17.23" x2="49.19" y2="18.93" />
          <line className="cls-2" x1="49.19" y1="31.43" x2="38.1" y2="20.36" />
          <polyline
            className="cls-2"
            points="37.05 23.5 40.31 22.64 41.12 19.23"
          />
          <line className="cls-2" x1="37.94" y1="42.64" x2="49.25" y2="31.27" />
          <polyline
            className="cls-2"
            points="41.22 43.52 40.36 40.26 36.95 39.45"
          />
          <line className="cls-2" x1="33.29" y1="31.43" x2="49.19" y2="31.43" />
          <polyline
            className="cls-2"
            points="34.99 34.37 36.69 31.46 34.85 28.48"
          />
          <path
            className="cls-3"
            d="M69.26,31.64H97.15a15.06,15.06,0,0,0-12.1-14.06,15.87,15.87,0,0,0-7.62.47c-1.76.56-2.5.2-3.26-1.52a15.1,15.1,0,0,0-14.88-9.1A14.82,14.82,0,0,0,52,9.93c-1.62,1.06-2.55.86-3.63-.79a16.47,16.47,0,0,0-30.13,6.18c-.53,3.41-1.13,3.15-3.77,3.45-12.16,0-13,12.67-12.95,12.87H29.61"
          />
        </g>
      </g>
    </svg>
  )
}
const Snow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 98.7 72.29"
      transform="scale(0.5)"
    >
      <defs>
        <style>
          {`.cls-1,
      .cls-2,
      .cls-3 {
        fill: none;
        stroke-miterlimit: 10;
      }
      .cls-1,
      .cls-2 {
        stroke: #231f20;
      }
      .cls-1 {
        stroke-linecap: round;
      }
      .cls-3 {
        stroke: #000;
        stroke-width: 3px;
      }`}
        </style>
      </defs>
      <title>snowAsset 87</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <line className="cls-1" x1="47.46" y1="42.9" x2="48.71" y2="42.13" />
          <line className="cls-1" x1="48.71" y1="53.98" x2="47.49" y2="53.28" />
          <line className="cls-1" x1="47.49" y1="48.07" x2="52.11" y2="52.68" />
          <polyline
            className="cls-1"
            points="52.55 51.38 51.19 51.73 50.85 53.15"
          />
          <line className="cls-1" x1="52.18" y1="43.4" x2="47.47" y2="48.14" />
          <polyline
            className="cls-1"
            points="50.81 43.04 51.17 44.4 52.59 44.73"
          />
          <line className="cls-1" x1="54.12" y1="48.07" x2="47.49" y2="48.07" />
          <polyline
            className="cls-1"
            points="53.41 46.85 52.7 48.06 53.47 49.3"
          />
          <line className="cls-2" x1="47.49" y1="54.36" x2="47.49" y2="41.48" />
          <line className="cls-1" x1="47.49" y1="54.6" x2="47.49" y2="41.48" />
          <line className="cls-1" x1="47.5" y1="53.18" x2="46.26" y2="53.95" />
          <line className="cls-1" x1="46.26" y1="42.1" x2="47.47" y2="42.81" />
          <line className="cls-1" x1="47.47" y1="48.01" x2="42.85" y2="43.4" />
          <polyline
            className="cls-1"
            points="42.42 44.71 43.77 44.35 44.11 42.93"
          />
          <line className="cls-1" x1="42.79" y1="52.68" x2="47.5" y2="47.94" />
          <polyline
            className="cls-1"
            points="44.15 53.04 43.8 51.69 42.38 51.35"
          />
          <line className="cls-1" x1="40.85" y1="48.01" x2="47.47" y2="48.01" />
          <polyline
            className="cls-1"
            points="41.56 49.23 42.27 48.02 41.5 46.78"
          />
          <line className="cls-1" x1="22.42" y1="42.9" x2="23.66" y2="42.13" />
          <line className="cls-1" x1="23.66" y1="53.98" x2="22.45" y2="53.28" />
          <line className="cls-1" x1="22.45" y1="48.07" x2="27.07" y2="52.68" />
          <polyline
            className="cls-1"
            points="27.51 51.38 26.15 51.73 25.81 53.15"
          />
          <line className="cls-1" x1="27.14" y1="43.4" x2="22.43" y2="48.14" />
          <polyline
            className="cls-1"
            points="25.77 43.04 26.13 44.4 27.55 44.73"
          />
          <line className="cls-1" x1="29.07" y1="48.07" x2="22.45" y2="48.07" />
          <polyline
            className="cls-1"
            points="28.37 46.85 27.66 48.06 28.42 49.3"
          />
          <line className="cls-2" x1="22.45" y1="54.36" x2="22.45" y2="41.48" />
          <line className="cls-1" x1="22.45" y1="54.6" x2="22.45" y2="41.48" />
          <line className="cls-1" x1="22.46" y1="53.18" x2="21.22" y2="53.95" />
          <line className="cls-1" x1="21.22" y1="42.1" x2="22.43" y2="42.81" />
          <line className="cls-1" x1="22.43" y1="48.01" x2="17.81" y2="43.4" />
          <polyline
            className="cls-1"
            points="17.37 44.71 18.73 44.35 19.07 42.93"
          />
          <line className="cls-1" x1="17.74" y1="52.68" x2="22.45" y2="47.94" />
          <polyline
            className="cls-1"
            points="19.11 53.04 18.75 51.69 17.33 51.35"
          />
          <line className="cls-1" x1="15.81" y1="48.01" x2="22.43" y2="48.01" />
          <polyline
            className="cls-1"
            points="16.52 49.23 17.22 48.02 16.46 46.78"
          />
          <line className="cls-1" x1="71.78" y1="42.9" x2="73.03" y2="42.13" />
          <line className="cls-1" x1="73.03" y1="53.98" x2="71.81" y2="53.28" />
          <line className="cls-1" x1="71.81" y1="48.07" x2="76.43" y2="52.68" />
          <polyline
            className="cls-1"
            points="76.87 51.38 75.51 51.73 75.17 53.15"
          />
          <line className="cls-1" x1="76.5" y1="43.4" x2="71.79" y2="48.14" />
          <polyline
            className="cls-1"
            points="75.13 43.04 75.49 44.4 76.91 44.73"
          />
          <line className="cls-1" x1="78.44" y1="48.07" x2="71.81" y2="48.07" />
          <polyline
            className="cls-1"
            points="77.73 46.85 77.02 48.06 77.79 49.3"
          />
          <line className="cls-2" x1="71.81" y1="54.36" x2="71.81" y2="41.48" />
          <line className="cls-1" x1="71.81" y1="54.6" x2="71.81" y2="41.48" />
          <line className="cls-1" x1="71.82" y1="53.18" x2="70.58" y2="53.95" />
          <line className="cls-1" x1="70.58" y1="42.1" x2="71.79" y2="42.81" />
          <line className="cls-1" x1="71.79" y1="48.01" x2="67.17" y2="43.4" />
          <polyline
            className="cls-1"
            points="66.74 44.71 68.09 44.35 68.43 42.93"
          />
          <line className="cls-1" x1="67.11" y1="52.68" x2="71.82" y2="47.94" />
          <polyline
            className="cls-1"
            points="68.47 53.04 68.11 51.69 66.69 51.35"
          />
          <line className="cls-1" x1="65.17" y1="48.01" x2="71.79" y2="48.01" />
          <polyline
            className="cls-1"
            points="65.88 49.23 66.58 48.02 65.82 46.78"
          />
          <line className="cls-1" x1="57.34" y1="60.09" x2="58.58" y2="59.32" />
          <line className="cls-1" x1="58.58" y1="71.18" x2="57.37" y2="70.47" />
          <line className="cls-1" x1="57.36" y1="65.26" x2="61.99" y2="69.87" />
          <polyline
            className="cls-1"
            points="62.42 68.57 61.06 68.92 60.73 70.34"
          />
          <line className="cls-1" x1="62.05" y1="60.59" x2="57.34" y2="65.33" />
          <polyline
            className="cls-1"
            points="60.69 60.23 61.04 61.59 62.46 61.92"
          />
          <line className="cls-1" x1="63.99" y1="65.26" x2="57.36" y2="65.26" />
          <polyline
            className="cls-1"
            points="63.28 64.04 62.57 65.25 63.34 66.49"
          />
          <line className="cls-2" x1="57.36" y1="71.55" x2="57.36" y2="58.67" />
          <line className="cls-1" x1="57.36" y1="71.79" x2="57.36" y2="58.67" />
          <line className="cls-1" x1="57.37" y1="70.37" x2="56.13" y2="71.14" />
          <line className="cls-1" x1="56.13" y1="59.29" x2="57.34" y2="60" />
          <line className="cls-1" x1="57.35" y1="65.2" x2="52.72" y2="60.59" />
          <polyline
            className="cls-1"
            points="52.29 61.9 53.65 61.54 53.98 60.12"
          />
          <line className="cls-1" x1="52.66" y1="69.87" x2="57.37" y2="65.13" />
          <polyline
            className="cls-1"
            points="54.02 70.24 53.67 68.88 52.25 68.54"
          />
          <line className="cls-1" x1="50.72" y1="65.2" x2="57.35" y2="65.2" />
          <polyline
            className="cls-1"
            points="51.43 66.43 52.14 65.21 51.37 63.97"
          />
          <line className="cls-1" x1="36.02" y1="60.09" x2="37.26" y2="59.32" />
          <line className="cls-1" x1="37.26" y1="71.18" x2="36.05" y2="70.47" />
          <line className="cls-1" x1="36.05" y1="65.26" x2="40.67" y2="69.87" />
          <polyline
            className="cls-1"
            points="41.1 68.57 39.74 68.92 39.41 70.34"
          />
          <line className="cls-1" x1="40.73" y1="60.59" x2="36.02" y2="65.33" />
          <polyline
            className="cls-1"
            points="39.37 60.23 39.72 61.59 41.14 61.92"
          />
          <line className="cls-1" x1="42.67" y1="65.26" x2="36.05" y2="65.26" />
          <polyline
            className="cls-1"
            points="41.96 64.04 41.25 65.25 42.02 66.49"
          />
          <line className="cls-2" x1="36.04" y1="71.55" x2="36.04" y2="58.67" />
          <line className="cls-1" x1="36.04" y1="71.79" x2="36.04" y2="58.67" />
          <line className="cls-1" x1="36.05" y1="70.37" x2="34.81" y2="71.14" />
          <line className="cls-1" x1="34.81" y1="59.29" x2="36.03" y2="60" />
          <line className="cls-1" x1="36.03" y1="65.2" x2="31.41" y2="60.59" />
          <polyline
            className="cls-1"
            points="30.97 61.9 32.33 61.54 32.66 60.12"
          />
          <line className="cls-1" x1="31.34" y1="69.87" x2="36.05" y2="65.13" />
          <polyline
            className="cls-1"
            points="32.7 70.24 32.35 68.88 30.93 68.54"
          />
          <line className="cls-1" x1="29.4" y1="65.2" x2="36.03" y2="65.2" />
          <polyline
            className="cls-1"
            points="30.11 66.43 30.82 65.21 30.05 63.97"
          />
          <path
            className="cls-3"
            d="M59.26,31.64H97.15a15.06,15.06,0,0,0-12.1-14.06,15.87,15.87,0,0,0-7.62.47c-1.76.56-2.5.2-3.26-1.52a15.1,15.1,0,0,0-14.88-9.1A14.82,14.82,0,0,0,52,9.93c-1.62,1.06-2.55.86-3.63-.79a16.47,16.47,0,0,0-30.13,6.18c-.53,3.41-1.13,3.15-3.77,3.45-12.16,0-13,12.67-12.95,12.87H39.61"
          />
          <path d="M49.24,34.32a2.64,2.64,0,0,1-2.7-2.73,2.71,2.71,0,0,1,5.41,0A2.65,2.65,0,0,1,49.24,34.32Z" />
        </g>
      </g>
    </svg>
  )
}
const SnowShowersDay = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 116.8 102.82"
      {...props}
    >
      <defs>
        <style>
          {`
              .cls-1,.cls-2,.cls-3,.cls-4{fill:none;stroke-miterlimit:10;}
              .cls-1,.cls-2{stroke:#231f20;}
              .cls-1,.cls-4{stroke-linecap:round;}
              .cls-3,.cls-4{stroke:#000;stroke-width:3px;}
            `}
        </style>
      </defs>
      <title>snow-showers-dayAsset 88</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <line className="cls-1" x1="47.46" y1="73.43" x2="48.71" y2="72.66" />
          <line className="cls-1" x1="48.71" y1="84.51" x2="47.49" y2="83.81" />
          <line className="cls-1" x1="47.49" y1="78.6" x2="52.11" y2="83.21" />
          <polyline
            className="cls-1"
            points="52.55 81.91 51.19 82.26 50.85 83.68"
          />
          <line className="cls-1" x1="52.18" y1="73.93" x2="47.47" y2="78.67" />
          <polyline
            className="cls-1"
            points="50.81 73.57 51.17 74.93 52.59 75.26"
          />
          <line className="cls-1" x1="54.12" y1="78.6" x2="47.49" y2="78.6" />
          <polyline
            className="cls-1"
            points="53.41 77.38 52.7 78.59 53.47 79.83"
          />
          <line className="cls-2" x1="47.49" y1="84.89" x2="47.49" y2="72.01" />
          <line className="cls-1" x1="47.49" y1="85.13" x2="47.49" y2="72.01" />
          <line className="cls-1" x1="47.5" y1="83.71" x2="46.26" y2="84.48" />
          <line className="cls-1" x1="46.26" y1="72.63" x2="47.47" y2="73.34" />
          <line className="cls-1" x1="47.47" y1="78.54" x2="42.85" y2="73.93" />
          <polyline
            className="cls-1"
            points="42.42 75.24 43.77 74.88 44.11 73.46"
          />
          <line className="cls-1" x1="42.79" y1="83.21" x2="47.5" y2="78.47" />
          <polyline
            className="cls-1"
            points="44.15 83.58 43.8 82.22 42.38 81.88"
          />
          <line className="cls-1" x1="40.85" y1="78.54" x2="47.47" y2="78.54" />
          <polyline
            className="cls-1"
            points="41.56 79.77 42.27 78.55 41.5 77.31"
          />
          <line className="cls-1" x1="22.42" y1="73.43" x2="23.66" y2="72.66" />
          <line className="cls-1" x1="23.66" y1="84.51" x2="22.45" y2="83.81" />
          <line className="cls-1" x1="22.45" y1="78.6" x2="27.07" y2="83.21" />
          <polyline
            className="cls-1"
            points="27.51 81.91 26.15 82.26 25.81 83.68"
          />
          <line className="cls-1" x1="27.14" y1="73.93" x2="22.43" y2="78.67" />
          <polyline
            className="cls-1"
            points="25.77 73.57 26.13 74.93 27.55 75.26"
          />
          <line className="cls-1" x1="29.07" y1="78.6" x2="22.45" y2="78.6" />
          <polyline
            className="cls-1"
            points="28.37 77.38 27.66 78.59 28.42 79.83"
          />
          <line className="cls-2" x1="22.45" y1="84.89" x2="22.45" y2="72.01" />
          <line className="cls-1" x1="22.45" y1="85.13" x2="22.45" y2="72.01" />
          <line className="cls-1" x1="22.46" y1="83.71" x2="21.22" y2="84.48" />
          <line className="cls-1" x1="21.22" y1="72.63" x2="22.43" y2="73.34" />
          <line className="cls-1" x1="22.43" y1="78.54" x2="17.81" y2="73.93" />
          <polyline
            className="cls-1"
            points="17.37 75.24 18.73 74.88 19.07 73.46"
          />
          <line className="cls-1" x1="17.74" y1="83.21" x2="22.45" y2="78.47" />
          <polyline
            className="cls-1"
            points="19.11 83.58 18.75 82.22 17.33 81.88"
          />
          <line className="cls-1" x1="15.81" y1="78.54" x2="22.43" y2="78.54" />
          <polyline
            className="cls-1"
            points="16.52 79.77 17.22 78.55 16.46 77.31"
          />
          <line className="cls-1" x1="71.78" y1="73.43" x2="73.03" y2="72.66" />
          <line className="cls-1" x1="73.03" y1="84.51" x2="71.81" y2="83.81" />
          <line className="cls-1" x1="71.81" y1="78.6" x2="76.43" y2="83.21" />
          <polyline
            className="cls-1"
            points="76.87 81.91 75.51 82.26 75.17 83.68"
          />
          <line className="cls-1" x1="76.5" y1="73.93" x2="71.79" y2="78.67" />
          <polyline
            className="cls-1"
            points="75.13 73.57 75.49 74.93 76.91 75.26"
          />
          <line className="cls-1" x1="78.44" y1="78.6" x2="71.81" y2="78.6" />
          <polyline
            className="cls-1"
            points="77.73 77.38 77.02 78.59 77.79 79.83"
          />
          <line className="cls-2" x1="71.81" y1="84.89" x2="71.81" y2="72.01" />
          <line className="cls-1" x1="71.81" y1="85.13" x2="71.81" y2="72.01" />
          <line className="cls-1" x1="71.82" y1="83.71" x2="70.58" y2="84.48" />
          <line className="cls-1" x1="70.58" y1="72.63" x2="71.79" y2="73.34" />
          <line className="cls-1" x1="71.79" y1="78.54" x2="67.17" y2="73.93" />
          <polyline
            className="cls-1"
            points="66.74 75.24 68.1 74.88 68.43 73.46"
          />
          <line className="cls-1" x1="66.11" y1="83.21" x2="71.81" y2="78.47" />
          <polyline
            className="cls-1"
            points="68.48 83.58 68.13 82.22 66.7 81.88"
          />
          <line className="cls-1" x1="64.56" y1="78.54" x2="71.18" y2="78.54" />
          <polyline
            className="cls-1"
            points="65.28 79.77 65.98 78.55 65.22 77.31"
          />
          <line className="cls-3" x1="81.35" y1="48.83" x2="95.1" y2="39.03" />
          <line className="cls-3" x1="93.69" y1="54.43" x2="88.27" y2="45.84" />
          <line className="cls-3" x1="83.35" y1="50.83" x2="93.69" y2="54.43" />
          <line className="cls-3" x1="95.1" y1="39.03" x2="85.58" y2="46.19" />
          <line className="cls-4" x1="69.35" y1="56.38" x2="66.91" y2="54.49" />
          <line className="cls-4" x1="63.61" y1="58.39" x2="67.22" y2="54.43" />
          <line className="cls-4" x1="63.61" y1="58.39" x2="69.35" y2="56.38" />
          <line className="cls-4" x1="67.22" y1="54.43" x2="69.35" y2="56.38" />
          <line className="cls-4" x1="69.35" y1="56.38" x2="66.91" y2="54.49" />
        </g>
      </g>
    </svg>
  )
}
const SnowShowersNight = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 102.12 92.89"
      {...props}
    >
      <defs>
        <style>
          {`
          .cls-1, .cls-2, .cls-3 {
            fill: none;
            stroke-miterlimit: 10;
          }
          .cls-1, .cls-2 {
            stroke: #231f20;
          }
          .cls-1 {
            stroke-linecap: round;
          }
          .cls-3 {
            stroke: #000;
            stroke-width: 3px;
          }
        `}
        </style>
      </defs>
      <title>snow-showers-nightAsset 89</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <line className="cls-1" x1="47.46" y1="63.5" x2="48.71" y2="62.73" />
          <line className="cls-1" x1="48.71" y1="74.58" x2="47.49" y2="73.87" />
          <line className="cls-1" x1="47.49" y1="68.67" x2="52.11" y2="73.28" />
          <polyline
            className="cls-1"
            points="52.55 71.97 51.19 72.33 50.85 73.75"
          />
          <line className="cls-1" x1="52.18" y1="64" x2="47.47" y2="68.74" />
          <polyline
            className="cls-1"
            points="50.81 63.63 51.17 64.99 52.59 65.33"
          />
          <line className="cls-1" x1="54.12" y1="68.67" x2="47.49" y2="68.67" />
          <polyline
            className="cls-1"
            points="53.41 67.44 52.7 68.66 53.47 69.9"
          />
          <line className="cls-2" x1="47.49" y1="74.95" x2="47.49" y2="62.08" />
          <line className="cls-1" x1="47.49" y1="75.2" x2="47.49" y2="62.08" />
          <line className="cls-1" x1="47.5" y1="73.78" x2="46.26" y2="74.55" />
          <line className="cls-1" x1="46.26" y1="62.69" x2="47.47" y2="63.4" />
          <line className="cls-1" x1="47.47" y1="68.61" x2="42.85" y2="64" />
          <polyline
            className="cls-1"
            points="42.42 65.3 43.77 64.95 44.11 63.53"
          />
          <line className="cls-1" x1="42.79" y1="73.28" x2="47.5" y2="68.54" />
          <polyline
            className="cls-1"
            points="44.15 73.64 43.8 72.28 42.38 71.95"
          />
          <line className="cls-1" x1="40.85" y1="68.61" x2="47.47" y2="68.61" />
          <polyline
            className="cls-1"
            points="41.56 69.83 42.27 68.62 41.5 67.38"
          />
          <line className="cls-1" x1="22.42" y1="63.5" x2="23.66" y2="62.73" />
          <line className="cls-1" x1="23.66" y1="74.58" x2="22.45" y2="73.87" />
          <line className="cls-1" x1="22.45" y1="68.67" x2="27.07" y2="73.28" />
          <polyline
            className="cls-1"
            points="27.51 71.97 26.15 72.33 25.81 73.75"
          />
          <line className="cls-1" x1="27.14" y1="64" x2="22.43" y2="68.74" />
          <polyline
            className="cls-1"
            points="25.77 63.63 26.13 64.99 27.55 65.33"
          />
          <line className="cls-1" x1="29.07" y1="68.67" x2="22.45" y2="68.67" />
          <polyline
            className="cls-1"
            points="28.37 67.44 27.66 68.66 28.42 69.9"
          />
          <line className="cls-2" x1="22.45" y1="74.95" x2="22.45" y2="62.08" />
          <line className="cls-1" x1="22.45" y1="75.2" x2="22.45" y2="62.08" />
          <line className="cls-1" x1="22.46" y1="73.78" x2="21.22" y2="74.55" />
          <line className="cls-1" x1="21.22" y1="62.69" x2="22.43" y2="63.4" />
          <line className="cls-1" x1="22.43" y1="68.61" x2="17.81" y2="64" />
          <polyline
            className="cls-1"
            points="17.37 65.3 18.73 64.95 19.07 63.53"
          />
          <line className="cls-1" x1="17.74" y1="73.28" x2="22.45" y2="68.54" />
          <polyline
            className="cls-1"
            points="19.11 73.64 18.75 72.28 17.33 71.95"
          />
          <line className="cls-1" x1="15.81" y1="68.61" x2="22.43" y2="68.61" />
          <polyline
            className="cls-1"
            points="16.52 69.83 17.22 68.62 16.46 67.38"
          />
          <line className="cls-1" x1="71.78" y1="63.5" x2="73.03" y2="62.73" />
          <line className="cls-1" x1="73.03" y1="74.58" x2="71.81" y2="73.87" />
          <line className="cls-1" x1="71.81" y1="68.67" x2="76.43" y2="73.28" />
          <polyline
            className="cls-1"
            points="76.87 71.97 75.51 72.33 75.17 73.75"
          />
          <line className="cls-1" x1="76.5" y1="64" x2="71.79" y2="68.74" />
          <polyline
            className="cls-1"
            points="75.13 63.63 75.49 64.99 76.91 65.33"
          />
          <line className="cls-1" x1="78.44" y1="68.67" x2="71.81" y2="68.67" />
          <polyline
            className="cls-1"
            points="77.73 67.44 77.02 68.66 77.79 69.9"
          />
          <line className="cls-2" x1="71.81" y1="74.95" x2="71.81" y2="62.08" />
          <line className="cls-1" x1="71.81" y1="75.2" x2="71.81" y2="62.08" />
          <line className="cls-1" x1="71.82" y1="73.78" x2="70.58" y2="74.55" />
          <line className="cls-1" x1="70.58" y1="62.69" x2="71.79" y2="63.4" />
          <line className="cls-1" x1="71.79" y1="68.61" x2="67.17" y2="64" />
          <polyline
            className="cls-1"
            points="66.74 65.3 68.09 64.95 68.43 63.53"
          />
          <line className="cls-1" x1="67.11" y1="73.28" x2="71.82" y2="68.54" />
          <polyline
            className="cls-1"
            points="68.47 73.64 68.11 72.28 66.69 71.95"
          />
          <line className="cls-1" x1="65.17" y1="68.61" x2="71.79" y2="68.61" />
          <polyline
            className="cls-1"
            points="65.88 69.83 66.58 68.62 65.82 67.38"
          />
          <line className="cls-1" x1="57.34" y1="80.69" x2="58.58" y2="79.92" />
          <line className="cls-1" x1="58.58" y1="91.77" x2="57.37" y2="91.06" />
          <line className="cls-1" x1="57.36" y1="85.86" x2="61.99" y2="90.47" />
          <polyline
            className="cls-1"
            points="62.42 89.16 61.06 89.52 60.73 90.94"
          />
          <line className="cls-1" x1="62.05" y1="81.19" x2="57.34" y2="85.93" />
          <polyline
            className="cls-1"
            points="60.69 80.83 61.04 82.18 62.46 82.52"
          />
          <line className="cls-1" x1="63.99" y1="85.86" x2="57.36" y2="85.86" />
          <polyline
            className="cls-1"
            points="63.28 84.64 62.57 85.85 63.34 87.09"
          />
          <line className="cls-2" x1="57.36" y1="92.14" x2="57.36" y2="79.27" />
          <line className="cls-1" x1="57.36" y1="92.39" x2="57.36" y2="79.27" />
          <line className="cls-1" x1="57.37" y1="90.97" x2="56.13" y2="91.74" />
          <line className="cls-1" x1="56.13" y1="79.89" x2="57.34" y2="80.59" />
          <line className="cls-1" x1="57.35" y1="85.8" x2="52.72" y2="81.19" />
          <polyline
            className="cls-1"
            points="52.29 82.49 53.65 82.14 53.98 80.72"
          />
          <line className="cls-1" x1="52.66" y1="90.47" x2="57.37" y2="85.73" />
          <polyline
            className="cls-1"
            points="54.02 90.83 53.67 89.47 52.25 89.14"
          />
          <line className="cls-1" x1="50.72" y1="85.8" x2="57.35" y2="85.8" />
          <polyline
            className="cls-1"
            points="51.43 87.02 52.14 85.81 51.37 84.57"
          />
          <line className="cls-1" x1="36.02" y1="80.69" x2="37.26" y2="79.92" />
          <line className="cls-1" x1="37.26" y1="91.77" x2="36.05" y2="91.06" />
          <line className="cls-1" x1="36.05" y1="85.86" x2="40.67" y2="90.47" />
          <polyline
            className="cls-1"
            points="41.1 89.16 39.74 89.52 39.41 90.94"
          />
          <line className="cls-1" x1="40.73" y1="81.19" x2="36.02" y2="85.93" />
          <polyline
            className="cls-1"
            points="39.37 80.83 39.72 82.18 41.14 82.52"
          />
          <line className="cls-1" x1="42.67" y1="85.86" x2="36.05" y2="85.86" />
          <polyline
            className="cls-1"
            points="41.96 84.64 41.25 85.85 42.02 87.09"
          />
          <line className="cls-2" x1="36.04" y1="92.14" x2="36.04" y2="79.27" />
          <line className="cls-1" x1="36.04" y1="92.39" x2="36.04" y2="79.27" />
          <line className="cls-1" x1="36.05" y1="90.97" x2="34.81" y2="91.74" />
          <line className="cls-1" x1="34.81" y1="79.89" x2="36.03" y2="80.59" />
          <line className="cls-1" x1="36.03" y1="85.8" x2="31.41" y2="81.19" />
          <polyline
            className="cls-1"
            points="30.97 82.49 32.33 82.14 32.66 80.72"
          />
          <line className="cls-1" x1="31.34" y1="90.47" x2="36.05" y2="85.73" />
          <polyline
            className="cls-1"
            points="32.7 90.83 32.35 89.47 30.93 89.14"
          />
          <line className="cls-1" x1="29.4" y1="85.8" x2="36.03" y2="85.8" />
          <polyline
            className="cls-1"
            points="30.11 87.02 30.82 85.81 30.05 84.57"
          />
          <path
            className="cls-3"
            d="M59.26,51.74H97.15a15.05,15.05,0,0,0-12.1-14.06,15.63,15.63,0,0,0-7.62.47c-1.76.56-2.5.2-3.26-1.53a15.1,15.1,0,0,0-14.88-9.09A14.81,14.81,0,0,0,52,30c-1.62,1.06-2.55.86-3.63-.78A16.42,16.42,0,0,0,31.51,21.9c-7,1.45-12.22,6.6-13.29,13.52-.53,3.41-1.13,3.14-3.77,3.45-12.16,0-13,12.67-12.95,12.87H39.61"
          />
          <path d="M49.24,54.41a2.64,2.64,0,0,1-2.7-2.72,2.71,2.71,0,1,1,5.41,0A2.64,2.64,0,0,1,49.24,54.41Z" />
          <path
            className="cls-3"
            d="M99,17.47h0A10.77,10.77,0,1,1,84.35,1.93,15.07,15.07,0,1,0,97.29,26.41h0a15,15,0,0,0,3.19-11.48A10.56,10.56,0,0,1,99,17.47Z"
          />
        </g>
      </g>
    </svg>
  )
}
const Thunder = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98.7 47.07" {...props}>
      <defs>
        <style>
          {`
          .cls-1 {
            fill: none;
            stroke: #231f20;
            stroke-miterlimit: 10;
            stroke-width: 3px;
          }
          .cls-2 {
            fill: #231f20;
          }
        `}
        </style>
      </defs>
      <title>thunder Asset 82</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            className="cls-1"
            d="M61.26,31.64H97.15a15.06,15.06,0,0,0-12.1-14.06,15.87,15.87,0,0,0-7.62.47c-1.76.56-2.5.2-3.26-1.52a15.1,15.1,0,0,0-14.88-9.1A14.82,14.82,0,0,0,52,9.93c-1.62,1.06-2.55.86-3.63-.79a16.47,16.47,0,0,0-30.13,6.18c-.53,3.41-1.13,3.15-3.77,3.45-12.16,0-13,12.67-12.95,12.87H36.61"
          />
          <polygon
            className="cls-2"
            points="56.48 20.29 44.71 32.99 43.46 30.3 55.58 30.91 57.98 31.03 56.34 32.64 41.58 47.07 54.82 31.24 55.58 32.97 43.46 33.58 40.04 33.75 42.2 30.89 52.65 17.07 56.48 20.29"
          />
        </g>
      </g>
    </svg>
  )
}
const ThunderRain = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98.7 70.65" {...props}>
      <defs>
        <style>
          {`
          .cls-1 {
            fill: none;
            stroke: #000;
            stroke-miterlimit: 10;
            stroke-width: 3px;
          }
          .cls-2 {
            fill: #231f20;
          }
        `}
        </style>
      </defs>
      <title>thunder-rainAsset 83</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            className="cls-1"
            d="M23.67,40.49C21.2,42,19,43.27,16.82,44.7a4.44,4.44,0,0,0,3.37,8,4.51,4.51,0,0,0,3.47-4.36C23.71,45.86,23.67,43.38,23.67,40.49Z"
          />
          <path
            className="cls-1"
            d="M45.29,40.49c-2.48,1.51-4.72,2.78-6.85,4.21a4.44,4.44,0,0,0,3.37,8,4.52,4.52,0,0,0,3.47-4.36C45.33,45.86,45.29,43.38,45.29,40.49Z"
          />
          <path
            className="cls-1"
            d="M66.91,40.49c-2.48,1.51-4.72,2.78-6.85,4.21a4.44,4.44,0,0,0,3.36,8,4.5,4.5,0,0,0,3.47-4.36C67,45.86,66.91,43.38,66.91,40.49Z"
          />
          <path
            className="cls-1"
            d="M31.67,56.88c-2.47,1.5-4.71,2.77-6.85,4.2a4.41,4.41,0,1,0,6.84,3.64C31.71,62.24,31.67,59.77,31.67,56.88Z"
          />
          <path
            className="cls-1"
            d="M53.29,56.88c-2.48,1.5-4.72,2.77-6.85,4.2a4.44,4.44,0,0,0,3.37,8,4.52,4.52,0,0,0,3.47-4.35C53.33,62.24,53.29,59.77,53.29,56.88Z"
          />
          <path
            className="cls-1"
            d="M59.26,31.64H97.15a15.06,15.06,0,0,0-12.1-14.06,15.87,15.87,0,0,0-7.62.47c-1.76.56-2.5.2-3.26-1.52a15.1,15.1,0,0,0-14.88-9.1A14.82,14.82,0,0,0,52,9.93c-1.62,1.06-2.55.86-3.63-.79a16.47,16.47,0,0,0-30.13,6.18c-.53,3.41-1.13,3.15-3.77,3.45-12.16,0-13,12.67-12.95,12.87H39.61"
          />
          <path d="M49.24,34.32a2.64,2.64,0,0,1-2.7-2.73,2.71,2.71,0,0,1,5.41,0A2.65,2.65,0,0,1,49.24,34.32Z" />
          <polygon
            className="cls-2"
            points="86.46 40.8 74.69 53.5 73.44 50.81 85.56 51.42 87.96 51.54 86.31 53.15 71.56 67.58 84.8 51.75 85.56 53.48 73.44 54.09 70.02 54.26 72.18 51.4 82.63 37.59 86.46 40.8"
          />
        </g>
      </g>
    </svg>
  )
}
const ThunderShowersDay = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 116.8 101.94"
      {...props}
    >
      <defs>
        <style>
          {`
              .cls-1, .cls-2 {
                fill: none;
                stroke: #000;
                stroke-miterlimit: 10;
                stroke-width: 3px;
              }
              .cls-2 {
                stroke-linecap: round;
              }
              .cls-3 {
                fill: #231f20;
              }
            `}
        </style>
      </defs>
      <title>thunder-showers-day Asset 84</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            className="cls-1"
            d="M59.26,62.32H97.15a15.07,15.07,0,0,0-12.1-14.06,15.87,15.87,0,0,0-7.62.47c-1.76.56-2.5.2-3.26-1.52a15.1,15.1,0,0,0-14.88-9.1A14.82,14.82,0,0,0,52,40.61c-1.62,1.06-2.55.86-3.63-.79a16.43,16.43,0,0,0-16.84-7.33c-7,1.45-12.22,6.59-13.29,13.51-.53,3.41-1.13,3.15-3.77,3.45-12.16,0-13,12.68-12.95,12.87H39.61"
          />
          <path d="M49.24,65a2.64,2.64,0,0,1-2.7-2.73,2.71,2.71,0,1,1,5.41,0A2.65,2.65,0,0,1,49.24,65Z" />
          <line className="cls-2" x1="69.07" y1="28.05" x2="62.2" y2="28.05" />
          <line className="cls-2" x1="75.11" y1="13.96" x2="70.3" y2="9.05" />
          <line className="cls-2" x1="81.32" y1="9.91" x2="78.66" y2="3.56" />
          <line className="cls-2" x1="70.73" y1="20.26" x2="64.42" y2="17.54" />
          <path
            className="cls-1"
            d="M88.72,42.66h0a14.49,14.49,0,0,0,0-29h0a14.49,14.49,0,1,0,0,29h0Z"
          />
          <line
            className="cls-2"
            x1="108.43"
            y1="28.05"
            x2="115.3"
            y2="28.05"
          />
          <line className="cls-2" x1="88.75" y1="8.38" x2="88.75" y2="1.5" />
          <line
            className="cls-2"
            x1="102.97"
            y1="41.82"
            x2="107.92"
            y2="46.59"
          />
          <line className="cls-2" x1="102.39" y1="13.96" x2="107.2" y2="9.05" />
          <line
            className="cls-2"
            x1="106.99"
            y1="35.59"
            x2="113.35"
            y2="38.2"
          />
          <line className="cls-2" x1="96.18" y1="9.91" x2="98.84" y2="3.56" />
          <line
            className="cls-2"
            x1="106.77"
            y1="20.26"
            x2="113.08"
            y2="17.54"
          />
          <path
            className="cls-1"
            d="M23.67,71.78C21.2,73.29,19,74.56,16.82,76a4.44,4.44,0,0,0,3.37,8,4.5,4.5,0,0,0,3.47-4.35C23.71,77.15,23.67,74.68,23.67,71.78Z"
          />
          <path
            className="cls-1"
            d="M45.29,71.78c-2.48,1.51-4.72,2.78-6.85,4.21a4.44,4.44,0,0,0,3.37,8,4.52,4.52,0,0,0,3.47-4.35C45.33,77.15,45.29,74.68,45.29,71.78Z"
          />
          <path
            className="cls-1"
            d="M66.91,71.78c-2.48,1.51-4.72,2.78-6.85,4.21a4.44,4.44,0,0,0,3.36,8,4.49,4.49,0,0,0,3.47-4.35C67,77.15,66.91,74.68,66.91,71.78Z"
          />
          <path
            className="cls-1"
            d="M31.67,88.17c-2.47,1.51-4.71,2.77-6.85,4.2a4.45,4.45,0,0,0,3.37,8A4.52,4.52,0,0,0,31.66,96C31.71,93.53,31.67,91.06,31.67,88.17Z"
          />
          <path
            className="cls-1"
            d="M53.29,88.17c-2.48,1.51-4.72,2.77-6.85,4.2a4.45,4.45,0,0,0,3.37,8A4.53,4.53,0,0,0,53.28,96C53.33,93.53,53.29,91.06,53.29,88.17Z"
          />
          <polygon
            className="cls-3"
            points="86.46 72.09 74.69 84.79 73.44 82.11 85.56 82.71 87.96 82.83 86.31 84.44 71.56 98.87 84.8 83.04 85.56 84.77 73.44 85.38 70.02 85.55 72.18 82.69 82.63 68.88 86.46 72.09"
          />
        </g>
      </g>
    </svg>
  )
}
const ThunderShowersNight = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 102.12 92.88"
      {...props}
    >
      <defs>
        <style>
          {`
          .cls-1 {
            fill: none;
            stroke: #000;
            stroke-miterlimit: 10;
            stroke-width: 3px;
          }
          .cls-2 {
            fill: #231f20;
          }
        `}
        </style>
      </defs>
      <title>thunder-showers-nightAsset 85</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            className="cls-1"
            d="M59.26,51.74H97.15a15.05,15.05,0,0,0-12.1-14.06,15.63,15.63,0,0,0-7.62.47c-1.76.56-2.5.2-3.26-1.53a15.1,15.1,0,0,0-14.88-9.09A14.81,14.81,0,0,0,52,30c-1.62,1.06-2.55.86-3.63-.78A16.42,16.42,0,0,0,31.51,21.9c-7,1.45-12.22,6.6-13.29,13.52-.53,3.41-1.13,3.14-3.77,3.45-12.16,0-13,12.67-12.95,12.87H39.61"
          />
          <path d="M49.24,54.41a2.64,2.64,0,0,1-2.7-2.72,2.71,2.71,0,1,1,5.41,0A2.64,2.64,0,0,1,49.24,54.41Z" />
          <path
            className="cls-1"
            d="M99,17.47h0A10.77,10.77,0,1,1,84.35,1.93,15.07,15.07,0,1,0,97.29,26.41h0a15,15,0,0,0,3.19-11.48A10.56,10.56,0,0,1,99,17.47Z"
          />
          <path
            className="cls-1"
            d="M23.67,62.72C21.2,64.23,19,65.5,16.82,66.93a4.44,4.44,0,0,0,3.37,8,4.51,4.51,0,0,0,3.47-4.36C23.71,68.09,23.67,65.61,23.67,62.72Z"
          />
          <path
            className="cls-1"
            d="M45.29,62.72c-2.48,1.51-4.72,2.78-6.85,4.21a4.44,4.44,0,0,0,3.37,8,4.52,4.52,0,0,0,3.47-4.36C45.33,68.09,45.29,65.61,45.29,62.72Z"
          />
          <path
            className="cls-1"
            d="M66.91,62.72c-2.48,1.51-4.72,2.78-6.85,4.21a4.44,4.44,0,0,0,3.36,8,4.5,4.5,0,0,0,3.47-4.36C67,68.09,66.91,65.61,66.91,62.72Z"
          />
          <path
            className="cls-1"
            d="M31.67,79.11c-2.47,1.5-4.71,2.77-6.85,4.2a4.45,4.45,0,0,0,3.37,8A4.53,4.53,0,0,0,31.66,87C31.71,84.47,31.67,82,31.67,79.11Z"
          />
          <path
            className="cls-1"
            d="M53.29,79.11c-2.48,1.5-4.72,2.77-6.85,4.2a4.45,4.45,0,0,0,3.37,8A4.54,4.54,0,0,0,53.28,87C53.33,84.47,53.29,82,53.29,79.11Z"
          />
          <polygon
            className="cls-2"
            points="86.46 63.03 74.69 75.73 73.44 73.05 85.56 73.65 87.96 73.77 86.31 75.38 71.56 89.81 84.8 73.98 85.56 75.71 73.44 76.32 70.02 76.49 72.18 73.63 82.63 59.82 86.46 63.03"
          />
        </g>
      </g>
    </svg>
  )
}
const Wind = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98.7 50.21" {...props}>
      <defs>
        <style>
          {`
          .cls-1, .cls-2 {
            fill: none;
            stroke: #000;
            stroke-miterlimit: 10;
            stroke-width: 3px;
          }
          .cls-1 {
            stroke-linecap: round;
          }
        `}
        </style>
      </defs>
      <title>windAsset 80</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <line className="cls-1" x1="47.63" y1="24.46" x2="28.53" y2="48.11" />
          <polyline
            className="cls-1"
            points="27.05 39.48 28.16 48.45 36.64 46.9"
          />
          <line className="cls-1" x1="62.8" y1="24.46" x2="43.7" y2="48.11" />
          <polyline
            className="cls-1"
            points="42.22 39.48 43.33 48.45 51.81 46.9"
          />
          <path
            className="cls-2"
            d="M67.26,31.64H97.15a15.06,15.06,0,0,0-12.1-14.06,15.87,15.87,0,0,0-7.62.47c-1.76.56-2.5.2-3.26-1.52a15.1,15.1,0,0,0-14.88-9.1A14.82,14.82,0,0,0,52,9.93c-1.62,1.06-2.55.86-3.63-.79a16.47,16.47,0,0,0-30.13,6.18c-.53,3.41-1.13,3.15-3.77,3.45-12.16,0-13,12.67-12.95,12.87H32.61"
          />
        </g>
      </g>
    </svg>
  )
}
