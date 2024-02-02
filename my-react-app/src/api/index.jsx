export function fetchWeather(city) {
    let apiKey = "2fa6ce00ccea959715cea1bcdcd73110";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=ru&units=metric`;
  
    return fetch(url)
      .then((response) => {
        if (response.status === 404) {
          throw new Error("Город не найден в базе");
        }
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      });
  }
  
  export async function fetchWeatherFiveDays(city) {
    let apiKey = "2fa6ce00ccea959715cea1bcdcd73110";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&lang=ru&units=metric`;
  
    const response = await fetch(url);
    if (response.status === 404) {
      throw new Error("Город не найден в базе");
    }
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  }
  