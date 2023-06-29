import React, { useState } from "react";

const CitySearch = ({ getAirQuality }) => {
  const [inputVal, setInputVal] = useState(null);

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const formattedCity = inputVal.replace(/ /g, "-");
    getAirQuality(formattedCity);
  };

  return (
    <form onSubmit={handleSearch} className="mb-4">
      <input
        type="text"
        placeholder="Enter City..."
        onChange={handleInputChange}
        className="form-control"
      ></input>
      <button type="submit" className="btn btn-primary mt-3 ">
        Search
      </button>
    </form>
  );
};

export default CitySearch;
