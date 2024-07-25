import "../styles/components/Forecast.css";

export function Forecast({temperature="a", time="b"}) {
  return (
    <div className={`forecast`}>
      <h1 className="title">Day's Forecast</h1>
      <div className="forecast-list">{temperature}°C</div>
    </div>
  );
}
