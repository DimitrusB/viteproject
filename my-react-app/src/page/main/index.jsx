import { useEffect, useState } from "react";
import * as S from "./main.style";
import sunrise from "../../assets/sunrise-white 1.svg";
import sunset from "../../assets/sunset-white 1.svg";
import pressure from "../../assets/pressure-white 1.svg";
import windSpeed from "../../assets/wind 1.svg";
import humidity from "../../assets/humidity 1.svg";
import { fetchWeather, fetchWeatherFiveDays } from "../../api";
import { SunriseFunc, SunsetFunc } from "../../assets/func";
import { WeatherFor5Days } from "../../components/5days";
import { degToCompass } from "../../assets/compaswind";


export const MainPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [weatherData, setWeatherData] = useState();
  const [calendarDate, setCalendarDate] = useState();
  const [city, setCity] = useState("");
  const [iconWeather, setIconWeather] = useState();
  const [windDegCompass, setWindDegCompass] = useState("");
  const [errorCity, setErrorCity] = useState("");
  const [sunriseSys, setSunriseSys] = useState("");
  const [sunsetSys, setSunsetSys] = useState("");



  const handleSearch = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      setCity(searchQuery);
    }
  };

  useEffect(() => {
    if (!city) return;

    fetchWeather(city)
      .then((data) => {
        console.log(data);
        setWeatherData([data]);
        setCalendarDate(data.dt);
        setSunriseSys(data.sys.sunrise);
        setSunsetSys(data.sys.sunset);
        let windDirection = degToCompass(data.wind.deg);
        setWindDegCompass(windDirection);
        let iconCode = data.weather[0].icon;
        let iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";
        setIconWeather(iconUrl);
        setErrorCity("");
      })
      .catch((err) => {
        console.error("Error: ", err);
        if (err.message === "Город не найден в базе") {
          setErrorCity("Город не найден в базе");
        }
      });

  }, [city]);


  let sunsetTime = SunsetFunc({sunsetSys: sunsetSys});
  let sunriseTime = SunriseFunc({sunriseSys: sunriseSys});


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
      <h1>Прогноз погоды</h1>
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
      {errorCity ? <S.errorStatus>{errorCity}</S.errorStatus> : ""}

      {Array.isArray(weatherData) &&
        weatherData[0] &&
        weatherData.map((weather, index) => (
          <>
            <S.weatherToday>
              <S.firstWind>
              <S.cityBox>
                <h1>{weather.name}</h1>
                <p>Прогноз погоды на {today}</p>
                
              </S.cityBox>
              <WeatherFor5Days city={city} />
              </S.firstWind>
              <S.customTemp>
                <div>
                  <S.pTempMain>
                    {weather.main.temp.toFixed(1)}&#8451;
                  </S.pTempMain>
                  <p style={{lineHeight: 'initial'}}>
                    Ощущается как: {weather.main.feels_like.toFixed(1)}&#8451;
                  </p>
                  <img src={sunrise} alt="sunrise" title="восход"/>
                  <p>{sunriseTime}</p>
                  <img src={sunset} alt="sunset" title="закат"/>
                  <p>{sunsetTime}</p>
                </div>
                <div>
                  {Array.isArray(weather.weather) &&
                    weather.weather.map((sun, index) => (
                      <S.divWeather key={index}>
                        <img
                          style={{ width: "webkit-fill-available" }}
                          src={iconWeather}
                          alt="Weather icon"
                          title={sun.description}
                        />

                        <p style={{lineHeight: 'initial'}}>
                          {sun.description.charAt(0).toUpperCase() +
                            sun.description.slice(1)}
                        </p>
                      </S.divWeather>
                    ))}
                </div>
                <S.windandOther>
                  <S.Header>
                  <div>
                    <img src={pressure} alt="pressure" title="давление"/>
                    <p>
                      {weather.main.grnd_level || weather.main.pressure} рт.ст.
                    </p>
                  </div>
                  <div>
                    <img src={humidity} alt="humidity" title="влажность"/>
                    <p>{weather.main.humidity} %</p>
                  </div>
                  </S.Header>
                  <S.Main>
                    <img src={windSpeed} alt="windSpeed" title="сорость ветра"/>
                    <p>{weather.wind.speed} м/с</p>
                    <p>
                      Порывы:{" "}
                      {weather.wind.gust ? `${weather.wind.gust} м/с` : ""}{" "}
                    </p>
                    <p style={{lineHeight: 'initial'}}>Напрвление: {windDegCompass}</p>
                  </S.Main>
                </S.windandOther>
              </S.customTemp>
            </S.weatherToday>
          </>
        ))}
    </S.Wrapper>
  );
};
