import "../styles/components/WeatherIcon.css";

export function WeatherIcon({image = "e"}) {
  return (
    <div className={`weather-icon-container`}>
      <img src="" alt="" className="weather-icon" />
      <h3 className="weather-icon-description">{image}</h3>
    </div>
  );
}
