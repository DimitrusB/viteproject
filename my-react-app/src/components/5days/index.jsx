import { useEffect, useState } from "react";
import { fetchWeatherFiveDays } from "../../api";
import * as S from "../../page/main/main.style";

export const WeatherFor5Days = ({ city }) => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    if (!city) return;
    fetchWeatherFiveDays(city).then((data) => {
      let dailyData = data.list.filter((item) => {
        return item.dt_txt.includes("12:00:00");
      });

      dailyData = dailyData.map((item) => {
        let date = new Date(item.dt_txt);

        let options = {
          weekday: "long",
          day: "numeric",
          month: "long",
        };
        item.dt_txt = date.toLocaleDateString("ru-RU", options);
        console.log(item);
        return item;
      });
      console.log(dailyData);
      setWeatherData(dailyData);
    });
  }, [city]);

  return (
    <>
      <S.fiveDaysDiv>
        <p>Прогноз на 5 дней</p>
        {Array.isArray(weatherData) &&
          weatherData &&
          weatherData.map((weather, index) => (
            <div
              key={index}
              style={
                index !== weatherData.length - 1
                  ? { borderBottom: "1px solid", color: "antiquewhite" }
                  : {}
              }
            >
              <p>{weather.dt_txt}</p>
              <div>
                <img
                  style={{ width: "webkit-fill-available" }}
                  src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                  alt="Weather icon"
                  title={weather.weather[0].description}
                />
                <p>{weather.main.temp.toFixed(1)} &#8451;</p>
              </div>
            </div>
          ))}
      </S.fiveDaysDiv>
    </>
  );
};
