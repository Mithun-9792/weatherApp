import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Card from "./Assets/Card";
import Form from "./Assets/Form";
import { useSelector, useDispatch } from "react-redux";
import { addCity } from "./Redux/Reducer";

const baseURL =
  "https://api.openweathermap.org/data/2.5/weather?appid=e83b3c4c08285bf87b99f9bbc0abe3f0&q=";

function App() {
  const [weatherData, setWeatherData] = useState();
  const ReduxCity = useSelector((state) => state.city);
  const [city, setCity] = useState(ReduxCity.City);

  const dispatch = useDispatch();

  const storeCity = () => {
    setCity(ReduxCity.City);
  };

  useEffect(() => {
    getData();
    if (city) {
      storeCity();
    }
  }, [city]);

  const getData = () => {
    if (!city) {
      return;
    }
    axios
      .get(`${baseURL}${city}`)
      .then((res) => {
        setWeatherData(res.data);
      })
      .catch((error) => {
        setWeatherData(undefined);
        Swal.fire({
          title: "City not Found! Try other City!",
          text: error,
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  // User Input
  const onsubmit = (data) => {
    setCity(data.city);
    dispatch(addCity(data.city));
    // console.log(data.city);
  };

  return (
    <div className="container my-3">
      <h1>Check the Weather of your City...</h1>
      <Form onsubmit={(data) => onsubmit(data)} />

      {!weatherData ? (
        <h2>{`Last entered city '${city}' is not found! Try other city!`}</h2>
      ) : (
        <Card weatherData={weatherData} />
      )}
    </div>
  );
}

export default App;
