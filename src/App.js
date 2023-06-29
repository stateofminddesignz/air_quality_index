
import React, { useState } from "react";
import CitySearch from "./components/CitySearch";
import AirQualityCard from "./components/AirQualityCard";
import PollutantInfo from './components/PollutantInfo'
import AirWualityLevelsTable from './components/AirQualityLevelsTable'
import Header from './components/Header'
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function App() {
  const [airQualityData, setAirQualityData] = useState(null);
  const [error, setError] = useState(null);
 

  const getAirQuality = async (city) => {
    const Api = `https://api.waqi.info/feed/${city}/?token=5afddb699635f0393e6045c4ebae7496aedab264`;

    try {
      const response = await fetch(Api);
      const data = await response.json();
      console.log(data);
      if (response.ok && data.status === "ok") {
        setAirQualityData(data.data);
        setError(null);
      } else {
        setError(
          "Sorry The could not find the city you were looking for.Please try another location or esure your spelling is correct"
        );
        setAirQualityData(null);
      }
    } catch (error) {
      console.error("Network Error:", error);
      setError("Sorry something went wrong"); //set error state
      setAirQualityData(null); //set air quality data to null
    }
  };

  return (
    <div className="container">
      <Header />
      <CitySearch getAirQuality={getAirQuality} />
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
       {airQualityData && (
        <>
         <AirQualityCard data={airQualityData} />
         <PollutantInfo pollutant={airQualityData.dominentpol} />
        </>        
       )}
<AirWualityLevelsTable />  
    </div>
  );
}
