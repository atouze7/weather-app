import "./NewWeather.css";

const NewWeather = (props) => {
  const degrees =
    props.currentWeatherData.main?.temp === undefined
      ? ""
      : `${props.currentWeatherData.main?.temp}°`;

  const high =
    props.currentWeatherData.main?.temp === undefined
      ? ""
      : `H:${props.currentWeatherData.main?.temp_max}°`;

  const low =
    props.currentWeatherData.main?.temp_min === undefined
      ? ""
      : `L:${props.currentWeatherData.main?.temp_min}°`;

  return (
    <div className="div1">
      <p>{props.currentWeatherData.name}</p>
      <p>{degrees}</p>
      <p>{props.currentWeatherData.weather?.[0].description}</p>
      <p>
        {high} {low}
      </p>
    </div>
  );
};

export default NewWeather;
