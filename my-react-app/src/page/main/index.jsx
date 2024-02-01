import { useEffect, useState } from "react";
import * as S from "./main.style";

export const MainPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [weatherData, setWeatherData] = useState();
  const [calendarDate, setCalendarDate] = useState();
  const [city, setCity] = useState("");
  const [iconWeather, setIconWeather] = useState();

  const handleSearch = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      setCity(searchQuery);
    }
  };

  useEffect(() => {
    if (!city) return;
    let apiKey = "2fa6ce00ccea959715cea1bcdcd73110";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=ru&units=metric`;
    let url5 = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&lang=ru&units=metric&cnt=5`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setWeatherData([data]);
        setCalendarDate(data.dt);
        let iconCode = data.weather[0].icon;
        let iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
        setIconWeather(iconUrl);
            })
      .catch((err) => console.error("Error: ", err));
  }, [city]);

  console.log(weatherData);
  console.log(city);
  let date, day, month, year, today;
  if (calendarDate) {
    let unixTimestamp = calendarDate;
    date = new Date(unixTimestamp * 1000);
    day = date.getDate();
    month = date.getMonth() + 1;
    year = date.getFullYear();
    today =
      (day < 10 ? "0" + day : day) +
      "." +
      (month < 10 ? "0" + month : month) +
      "." +
      year;
  }
  return (
    <S.Wrapper>
      <h1>Погода по городам</h1>
      <S.Search__form>
        <S.Search__text
          type="search"
          placeholder="Введите название"
          name="search"
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleSearch}
        />
        <S.Search__btn onClick={handleSearch}>Найти</S.Search__btn>
      </S.Search__form>

      <p>Прогноз погоды на {today}</p>
      {Array.isArray(weatherData) &&
        weatherData[0] &&
        weatherData.map((weather, index) => (
          <>
            <h1>{weather.name}</h1>
            <p>Ветер:</p>
            <p>Скорость: {weather.wind.speed} м/с</p>
            <p>
              Порывы: {weather.wind.gust ? `${weather.wind.gust} м/с` : ""}{" "}
            </p>
            {Array.isArray(weather.weather) &&
              weather.weather.map((sun, index) => (
                <S.divWeather key={index}>
                  <p>{sun.description}</p>
                  <img src={iconWeather} alt="Weather icon" />
                </S.divWeather>
              ))}
          </>
        ))}
    </S.Wrapper>
  );
};
