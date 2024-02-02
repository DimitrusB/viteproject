export const degToCompass = ({windDeg, setWindDegCompass}) =>{
   

    const val = Math.floor(windDeg / 22.5 + 0.5);
    const arr = [
      "Север",
      "Северо-Северо-Восток",
      "Северо-Восток",
      "Востоко-Северо-Восток",
      "Восток",
      "Востоко-Юго-Восток",
      "Юго-Восток",
      "Юго-Юго-Восток",
      "Юг",
      "Юго-Юго-Запад",
      "Юго-Запад",
      "Западо-Юго-Запад",
      "Запад",
      "Западо-Северо-Запад",
      "Северо-Запад",
      "Северо-Северо-Запад",
    ];

    setWindDegCompass(arr[val % 16]);
  }