import React from "react";

export default function Card(props) {
  return (
    <div className="card bg-dark text-light my-3 p-3">
      <img
        src={`https://openweathermap.org/img/wn/${props.weatherData.weather[0].icon}.png`}
        alt="status"
        height={"10%"}
        width={"10%"}
      />
      <p className="card-text">Weather in your city </p>
      <h3 className="card-text">{props.weatherData.name}</h3>
      <h2 className="card-text">
        {props.weatherData.weather[0].description.toUpperCase()}
      </h2>
      <h2 className="card-text">Temp</h2>
      <p className="card-text">
        {(props.weatherData.main.temp - 273.15).toFixed(2)} ℃
      </p>
      <h3 className="card-text">MAX/MIN Temp</h3>
      <p className="card-text">
        {(props.weatherData.main.temp_max - 273.15).toFixed(2)} ℃ /
        {(props.weatherData.main.temp_min - 273.15).toFixed(2)} ℃
      </p>
      <p className="card-text">Humidity</p>
      <p className="card-text">
        {props.weatherData.main.humidity} g.m<sup>3</sup>
      </p>
      <p className="card-text">Pressure</p>
      <p className="card-text">{props.weatherData.main.pressure} millibar</p>
      <p className="card-text">Visibility</p>
      <p className="card-text">{props.weatherData.visibility} m</p>
    </div>
  );
}
