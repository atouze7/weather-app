import dayjs from "dayjs";
import "./Forecast.css";

const Forecast = (props) => {
  const dayjs = require("dayjs");
  const day2 = dayjs().add(2, "d").format("MM/DD/YY");
  const day3 = dayjs().add(3, "d").format("MM/DD/YY");
  const day4 = dayjs().add(4, "d").format("MM/DD/YY");
  const day5 = dayjs().add(5, "d").format("MM/DD/YY");

  //const day3 = dayjs().add(2, "day").format("DD/MM/YYYY");
  const dataForecast = props.foreCastData;
  let dayOneMin = dataForecast.list?.[0].main.temp_min;
  let dayOneMax = dataForecast.list?.[0].main.temp_max;
  let dayTwoMin = dataForecast.list?.[8].main.temp_min;
  let dayTwoMax = dataForecast.list?.[8].main.temp_max;
  let dayThreeMin = dataForecast.list?.[16].main.temp_min;
  let dayThreeMax = dataForecast.list?.[16].main.temp_max;
  let dayFourMin = dataForecast.list?.[24].main.temp_min;
  let dayFourMax = dataForecast.list?.[24].main.temp_max;
  let dayFiveMin = dataForecast.list?.[32].main.temp_min;
  let dayFiveMax = dataForecast.list?.[32].main.temp_max;

  let imgSrc =
    "https://static.vecteezy.com/system/resources/previews/002/779/758/original/cartoon-illustration-of-sun-sunny-weather-free-vector.jpg";

  /*
  const calculate = (num1, num2, min, max, dayMin, dayMax) => {
    for (let i = num1; i < num2; i++) {
      if (min.list?.[i].main.temp_min < dayMin) {
        dayMin = min.list?.[i].main.temp_min;
      } else if (max.list?.[i].main.temp_max > dayMax) {
        dayMax = max.list?.[i].main.temp_max;
      }
    }
  };

  calculate(0, 7, dataForecast, dataForecast, dayOneMin, dayOneMax); */

  for (let i = 0; i < 7; i++) {
    if (dataForecast.list?.[i].main.temp_min < dayOneMin) {
      dayOneMin = dataForecast.list?.[i].main.temp_min;
    } else if (dataForecast.list?.[i].main.temp_max > dayOneMax) {
      dayOneMax = dataForecast.list?.[i].main.temp_max;
    }
  }

  for (let i = 8; i < 15; i++) {
    if (dataForecast.list?.[i].main.temp_min < dayTwoMin) {
      dayTwoMin = dataForecast.list?.[i].main.temp_min;
    } else if (dataForecast.list?.[i].main.temp_max > dayTwoMax) {
      dayTwoMax = dataForecast.list?.[i].main.temp_max;
    }
  }

  for (let i = 16; i < 23; i++) {
    if (dataForecast.list?.[i].main.temp_min < dayThreeMin) {
      dayThreeMin = dataForecast.list?.[i].main.temp_min;
    } else if (dataForecast.list?.[i].main.temp_max > dayThreeMax) {
      dayThreeMax = dataForecast.list?.[i].main.temp_max;
    }
  }

  for (let i = 24; i < 31; i++) {
    if (dataForecast.list?.[i].main.temp_min < dayFourMin) {
      dayFourMin = dataForecast.list?.[i].main.temp_min;
    } else if (dataForecast.list?.[i].main.temp_max > dayFourMax) {
      dayFourMax = dataForecast.list?.[i].main.temp_max;
    }
  }

  for (let i = 32; i < 39; i++) {
    if (dataForecast.list?.[i].main.temp_min < dayFiveMin) {
      dayFiveMin = dataForecast.list?.[i].main.temp_min;
    } else if (dataForecast.list?.[i].main.temp_max > dayFiveMax) {
      dayFiveMax = dataForecast.list?.[i].main.temp_max;
    }
  }

  const dayOneString = `H:${dayOneMax}°    L:${dayOneMin}°`;
  const dayTwoString = `H:${dayTwoMax}°    L:${dayTwoMin}°`;
  const dayThreeString = `H:${dayThreeMax}°    L:${dayThreeMin}°`;
  const dayFourString = `H:${dayFourMax}°    L:${dayFourMin}°`;
  const dayFiveString = `H:${dayFiveMax}°    L:${dayFiveMin}°`;

  return (
    <div className="main-div">
      <div className="days">
        <img src={imgSrc}></img>
        <h6>Tomorrow</h6>
        {dayOneString}
      </div>
      <div className="days">
        <img src={imgSrc}></img>
        <h6>{day2}</h6>
        {dayTwoString}
      </div>
      <div className="days">
        <img src={imgSrc}></img>
        <h6>{day3}</h6>
        {dayThreeString}
      </div>
      <div className="days">
        <img src={imgSrc}></img>
        <h6>{day4}</h6>
        {dayFourString}
      </div>
      <div className="days">
        <img src={imgSrc}></img>
        <h6>{day5}</h6>
        {dayFiveString}
      </div>
    </div>
  );
};

export default Forecast;
