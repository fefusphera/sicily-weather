import "./index.css";
import { useState, useEffect, useRef } from "react";

const Card = () => {
  const [weather, setWeather] = useState("");
  const [value, setValue] = useState("catania");
  const [text, setText] = useState("Catania");

  const URLPartOne = "https://api.openweathermap.org/data/2.5/weather?q=";
  const URLPartTwo = "&appid=a5d372828b76c7cd5eae441f069eeb17&units=metric";

  const URLImgPartOne = "http://openweathermap.org/img/wn/";
  const URLImgPartTwo = "@2x.png";

  let weatherIcon = URLImgPartOne + weather[0]?.icon + URLImgPartTwo;

  console.log(weather[0]?.icon);

  const province = useRef(null);

  useEffect(() => {
    fetch(URLPartOne + value + URLPartTwo)
      .then((res) => res.json())
      .then((data) => setWeather(data.weather));
  }, [value]);
  const handleOnChange = (e) => {
    setText(e.target.options[e.target.selectedIndex].text);
    setValue(e.target.options[e.target.selectedIndex].value);
  };

  return (
    <div className="card">
      <img className="weatherIcon" src={weatherIcon} alt="img" />
      <p className="city"> {text} </p>
      <p className="mainWeather"> {weather[0]?.main} </p>
      <div className="descriptionDiv">
        <p className="mainWeatherDescription"> {weather[0]?.description} </p>
      </div>

      <select
        onChange={(e) => {
          handleOnChange(e);
        }}
        ref={province}
        id="provinces"
      >
        <option value="catania">Catania</option>
        <option value="enna">Enna</option>
        <option value="messina">Messina</option>
        <option value="agrigento">Agrigento</option>
        <option value="caltanissetta">Caltanissetta</option>
        <option value="palermo">Palermo</option>
        <option value="ragusa">Ragusa</option>
        <option value="trapani">Trapani</option>
        <option value="siracusa">Siracusa</option>
      </select>
    </div>
  );
};

export default Card;
