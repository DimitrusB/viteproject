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

      {Array.isArray(weatherData) &&
        weatherData[0] &&
        weatherData.map((weather, index) => (
          <>
            <S.cityBox>
              <h1>{weather.name}</h1>
              <p>Прогноз погоды на {today}</p>
            </S.cityBox>
            <div>
              <div>
                <h1>Температура</h1>
                <h1>{weather.main.temp.toFixed(1)} &#8451;</h1>
                <p>
                  Ощущается как: {weather.main.feels_like.toFixed(1)} &#8451;
                </p>
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <rect width="48" height="48" fill="url(#pattern0)" />
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use xlinkHref="#image0_13_647" transform="scale(0.02)" />
                    </pattern>
                    <image
                      id="image0_13_647"
                      width="50"
                      height="50"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAA9tJREFUaEPtmU2IHFUQx/810d7oBrw4ghDMCrJh32vXrIPiRdkYgoccFI+CJ0mCxjUKHnKIouYkCCYxfgte9CgiiBBUXNFDCIyTkK43cQ+yUZSA3tYJu6M7JTV2h6FZZ1/3dONu6DnNR72q+tW/3sf0I5T8MsbMaQjn3BtlhqIynYdheFhEXgegcY4w86tlxSsNxBhzkIjejiE0fyGiZ6MoOlkGTCkg2k5EdCJOOIkhfRqRw2W0WeEgxpgDRPSOJk1Ez4nI8fj9kyLyVlkwhYJYa/cDeDdOvN9G1tq+EsxMA+2mXz3DzKeKarPCQNaC0CQHQfTzoGJFwhQCMggBYI6Z30wqnQaJ4Q4BSJbjg8z8/qjKFAXyK4BbATzNzP15MAwkhnkKgLbWb8y8fUOAGGPuBxA4575OJ7SWIomNMWYPgK5z7rsNATIsiWEgoyY/OL6Q1qpACpSkUsS3mNUc8a1U6kCXcZi/eaWIf636ltVk9y3YtdRaevwQZn7AFz6PXemtlSepPGMqkDxVK3NMpUiZ1c3ju1IkT9XKHFO6ImEYfisiNzLzPZsa5Fra2a8+oKsU8ahA6XNkw7VWo9G4CcCVZrP5l0eBrprkBZmdnb1uaWkpaDabV3zieSlijNlGRL8AuBQEwd5Wq/W7j3O1yQMyMzNT73a7pwFs73Q6ty0uLi6vF88LpNFoXL+8vHwWwC4AF4Ig2OMLY63NdIyPIfSJ5Z0AWvV6/d75+fm/CwFRJ6kAF0Vkt3Pu8noBsvyeitEWkQd9Y3gpkiRTJswoELn+s6cCnu90Ovf59PAwZSYmJraOj4+fAXBX1tZN/GZSJKXMlyIyOTY2tiM1X2rGmN21Wu1hEZkBcAeALQB+BHAOwKfMPA+gl/ibnp6+ZXV19ZLaZF1MRgLRwVrFIAi2LSws/JE4C8Nwr4i8BmB6nblxvtfrPd9ut79K7CYnJ2/udrt/5lU3lyJrJEnW2pcAvBA/YjpHRO8R0TdBEPys9isrKzt0gQBwIG4hva5+JYqil/XhRJZFYS3bQkCstccAHNUNk4jmoij6cEhyCv2EiJwkohsAHGPmF/93kDAM94nI5wohIg855773SSq+5TqtML1eb1+73f7CZ9x/2YykSLxR6iS+HcB+Zv4gSzLxDa9eZ/9Ur9d3+mx8pYCEYfioiHyiqxEz352j17XNWjpnROQR59xnWQoxaDuSItbajwE8BuBQ+jbXNyFrrV5VnxKRj5xzj/uOS9uNCnIRwE49GzKzy5PE1NRUWKvVLgBoM7PJ46O/s1trdZPSHXXTvojojIL8oGfCTUvxb+Jn/wFaa9fXIQ8TdAAAAABJRU5ErkJggg=="
                    />
                  </defs>
                </svg>
                <p>Восход {weather.sys.sunrise}</p>
                <svg
                  width="48"
                  height="49"
                  viewBox="0 0 48 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <rect
                    y="0.333374"
                    width="48"
                    height="48"
                    fill="url(#pattern0)"
                  />
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use xlinkHref="#image0_13_642" transform="scale(0.02)" />
                    </pattern>
                    <image
                      id="image0_13_642"
                      width="50"
                      height="50"
                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAA+pJREFUaEPtWU2IHFUQ/mpWe6Mb8JLxFJIVZMO+91xdB8VLZGMIHnJQPAqeNAkY1xjwoKCiyUEESUiMf1HwokcRQYSg4vpzCIFxErarO+5BNgoi6G2dsDvJTkltumEYZ3e6e+ZpAt2Xbuh6VfV99dV7r18TPF/Oue9E5FZmvs9nKPLpXH1ba0XvzOw1llfnJZACMikrkpW0skeyMpXYldLKSlgpraxMldLqwdTk5KQbGRnZEobhXPfrjaRljNktIlfiOP4+ZwH+ZT6UZnfOzYuIBfAMM7/TGWU9INbapwGcAvA7M2+9LoBYa58CcDpJZpaZ304T6wXEWnsQwFuJzQFm/uC6AJLsqfYBeF+fiei5MAxP9tprGWMOENG7SeLPMrNWZeBrKNLqYL8TzOEwDE90VsQXiDXyBqaiy4ExZj8Rvae+ReRFIno9MTkM4Jg+i8ihKIpSaQ0lhaED0ayMMbNEdKJril/7LvEBwktFUno7ZJSSJZ29M5QydDjxUpHUv3PukIgcTyT8AjO/MWwAqT+vQFKZ6X3YPdFNiHcgvipQAvmvmC0ap5RWUeZ8jSsr4ovZon69V6Q8+81ZGu8VKU9Ryor0YaBWq90G4HK9Xr+Sh6yi0pqZmblpaWkpqNfrl7PEy9QjxpjNRPQbgEtBEOxpNBp/ZnGuNkWATE9PV1ut1hkAW5vN5rbFxcXlfvEyAanVajcvLy+fA3APgPkgCHZnBWOt/UE/DJn5wX7J6PsExDcA7gLQqFar98/NzV3tNzYTkB4BLorIriiK/ugXIM/7LhCxiDyUNUZmIL7BDAJCc8sFpAeYC81m84EsGt6oMuPj45vGxsbOArg7r3QH+tRN2PtKRCZGR0e3d/VLxRizq1KpPCIi0wDuBDAC4GcA5wF8xsx6RtxOk5iamrp9dXX1ktrknUwGAqKDlcUgCDYvLCz8lTpzzu0RkTcBTPXpjQvtdvv5OI6/Tu0mJia2tFqtv4tWN7e01kmQrLWvAng5ket5IjpNRN8GQfCrjllZWdmuEwSA/YmE9HjoSBiGr+mslmdS6GU7FCDW2qMAXtIFk4hmwzD8aIPkFPSTInKSiG4BcJSZX/nfgTjn9orIFwpCRB6OoujHLEkZY3YCOKNg2u323jiOv8wybj2bgSqSLJTaxHcA2MfMH+ZJJjkn1hP8X6rV6o4sC58XIM65x0TkU52NmPneAlpXmTW0Z0Tk0SiKPs9DRKftQBWx1n4C4HEAB7v/VGVNKPnpc0pEPo6i6Ims47rtBgVyEcAO3Rsyc1QkCf3/WKlU5gHEzGyK+Fhb2a21ukjpinrDXkR0VoH8pJvOGxbFtcTP/QNKNdzXds+mrgAAAABJRU5ErkJggg=="
                    />
                  </defs>
                </svg>
                <p>Закат {weather.sys.sunset}</p>
              </div>
              <div>
                {Array.isArray(weather.weather) &&
                  weather.weather.map((sun, index) => (
                    <S.divWeather key={index}>
                      <img
                        style={{ width: "webkit-fill-available" }}
                        src={iconWeather}
                        alt="Weather icon"
                      />

                      <p>
                        {sun.description.charAt(0).toUpperCase() +
                          sun.description.slice(1)}
                      </p>
                    </S.divWeather>
                  ))}
              </div>
            </div>
            <p>Давление: {weather.main.grnd_level}</p>
            <p>Ветер:</p>
            <p>Скорость: {weather.wind.speed} м/с</p>
            <p>
              Порывы: {weather.wind.gust ? `${weather.wind.gust} м/с` : ""}{" "}
            </p>
          </>
        ))}
    </S.Wrapper>
  );
};
