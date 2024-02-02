export const SunsetFunc =({sunsetSys}) => {
    let datesun;
    if (sunsetSys) {
      let unixTimestampSun = sunsetSys;
      let dateObject = new Date(unixTimestampSun * 1000);
      let hours = dateObject.getHours();
      let minutes = "0" + dateObject.getMinutes();
      let seconds = "0" + dateObject.getSeconds();
    
      // форматируем время в виде HH:MM:SS
      datesun = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    }
    return datesun;
}


export const SunriseFunc =({sunriseSys}) => {
    let datesun;
    if (sunriseSys) {
      let unixTimestampSun = sunriseSys;
      let dateObject = new Date(unixTimestampSun * 1000);
      let hours = dateObject.getHours();
      let minutes = "0" + dateObject.getMinutes();
      let seconds = "0" + dateObject.getSeconds();
    
      // форматируем время в виде HH:MM:SS
      datesun = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    }
    return datesun;
}
