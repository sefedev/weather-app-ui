import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import useFetch from "./components/UseFetch";

function Home() {
  const [city, setCity] = useState("");
  const [url, setUrl] = useState('');

  const getCity = (e) => {
    setCity(e.target.value);
    
    
  };

  const { data, isPending } = useFetch(url)
  
  
    const handleGetWeather = () => {
      if(city !== "")
      setUrl(`https://goweather.herokuapp.com/weather/${city}`);
      console.log(url)
    };
  

  return (
    <>
      <input type="text" onChange={getCity} value={city} />
      <button onClick={handleGetWeather}>Search</button>
      {isPending && <CircularProgress />}
    </>
  );
}

export default Home;
