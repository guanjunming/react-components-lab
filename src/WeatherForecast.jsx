import WeatherIcon from "./WeatherIcon.jsx";
import WeatherData from "./WeatherData.jsx";
import "./WeatherForecast.css";

const WeatherForecast = ({ day, img, imgAlt, conditions, time }) => {
  return (
    <div className="weather">
      <WeatherData day={day} conditions={conditions} time={time}>
        <WeatherIcon img={img} imgAlt={imgAlt} />
      </WeatherData>
    </div>
  );
};

export default WeatherForecast;
