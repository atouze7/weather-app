import "./Input.css";
import { useState } from "react";
import NewWeather from "./NewWeather";
import Forecast from "./Forecast";

const Input = (props) => {
  let imgSrc =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Cumulus_clouds_seen_from_10%2C000_meters_above_the_ground%2C_2010.jpg/640px-Cumulus_clouds_seen_from_10%2C000_meters_above_the_ground%2C_2010.jpg";

  const [state, setState] = useState(false);
  const [val, setVal] = useState("");
  const [currentWeatherData, setCurrentWeatherData] = useState({});
  const [foreCastData, setForecastData] = useState({});
  const key1 = process.env.REACT_APP_API_KEY;
  const key2 = process.env.REACT_APP_API_KEY2;

  const changeHandler = (e) => {
    setVal(e.target.value);
  };

  const clickHandler = async () => {
    setState(true);
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=${key1}&units=imperial`
    );
    const data = await res.json();
    console.log(data);
    setCurrentWeatherData(data);

    const res2 = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord?.lat}&lon=${data.coord?.lon}&appid=${key2}&units=imperial`
    );
    const data2 = await res2.json();
    console.log(data2);
    setForecastData(data2);
  };

  if (
    currentWeatherData.weather?.[0].main === "Thunderstorm" ||
    currentWeatherData.weather?.[0].description.includes("rain")
  ) {
    imgSrc =
      "https://hips.hearstapps.com/hmg-prod/images/its-raining-heavily-wearing-an-umbrella-during-the-royalty-free-image-1660153348.jpg";
  } else if (currentWeatherData.main?.temp <= 32) {
    imgSrc =
      "https://www.wkbn.com/wp-content/uploads/sites/48/2021/01/winter-snow-snowing-snowy-winter-weather-generic-2.jpg?w=1280";
  } else if (
    currentWeatherData.main?.temp >= 75 &&
    !currentWeatherData.weather?.[0].description.includes("Thunderstorm")
  ) {
    imgSrc =
      "https://d1hfln2sfez66z.cloudfront.net/07-05-2020/t_66f10e33b9db497a85994c2e8f7c1ae2_name_A9A3BB35A8484F4C874AC4E59D525DF9.jpg";
  }

  const keyEvent = (e) => {
    if (e.key === "Enter") {
      clickHandler();
    }
  };

  return (
    <div>
      <div className="search">
        <h1 className="title">Weather Forecast</h1>
        <input
          placeholder="🔎 Type in your city... "
          onChange={changeHandler}
          onKeyDown={keyEvent}
        ></input>
      </div>
      <img src={imgSrc} className="cover-img"></img>
      {state && (
        <NewWeather currentWeatherData={currentWeatherData}></NewWeather>
      )}
      {state && <Forecast foreCastData={foreCastData}></Forecast>}
    </div>
  );
};
export default Input;
