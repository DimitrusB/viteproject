import { useEffect, useState } from "react";
import * as S from "./main.style";

export const MainPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [weatherData, setWeatherData] = useState();
  const [calendarDate, setCalendarDate] = useState();

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };
  useEffect(() => {
    let city = "Санкт-Петербург";
    let apiKey = "2fa6ce00ccea959715cea1bcdcd73110";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=ru&units=metric`;
    let url5 = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&lang=ru&units=metric&cnt=5`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setWeatherData([data]);
        setCalendarDate(data.dt);
      })
      .catch((err) => console.error("Error: ", err));
  }, []);

  console.log(weatherData);


    let unixTimestamp = calendarDate ;
    let date = new Date(unixTimestamp * 1000);
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    let today = ((day<10 ? "0" + day : day) + "." + (month<10 ? "0" + month : month) + "." + year)
    console.log(today);

  return (
    <S.Wrapper>
      <h1>Погода по городам</h1>
      <S.Search__form>
        <S.Search__text
          type="search"
          placeholder="Введите название"
          name="search"
          onChange={handleSearch}
          value={searchQuery}
        />
        <S.Search__btn type="submit">Найти</S.Search__btn>
      </S.Search__form>
      <p>Прогноз погоды на {today}</p>
      {Array.isArray(weatherData) &&
        weatherData.map((weather, index) => (
          <>
            <p>Ветер:</p>
            <p>Скорость: {weather.wind.speed} м/с</p>
            <p>Порывы: {weather.wind.gust} м/с</p>
            {Array.isArray(weather.weather) &&
              weather.weather.map((sun, index) => (
                <p key={index}>{sun.description}</p>
              ))}
          </>
        ))}
    </S.Wrapper>
  );
};
