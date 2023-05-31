import React, {useContext} from "react";
import {PreferencesContext} from "../context/PreferencesContext";

const Preferences = () => {
  const {
    unitOfMeasurement,
    setUnitOfMeasurement,
    dateFormat,
    setDateFormat,
    weatherUnit,
    setWeatherUnit,
  } = useContext(PreferencesContext);

  const handleUnitOfMeasurementChange = (e) => {
    setUnitOfMeasurement(e.target.value);
  };

  const handleDateFormatChange = (e) => {
    setDateFormat(e.target.value);
  };

  const handleWeatherUnitChange = (e) => {
    setWeatherUnit(e.target.value);
  };

  return (
    <div className="flex flex-col justify-center pt-8 gap-5 px-6">
      <h1 className="font-bold text-lg">Preferences</h1>
      <div className=" space-y-5">
        <div className="space-y-4 flex flex-col">
          <h2 className="font-bold">Distance</h2>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              value="KM"
              checked={unitOfMeasurement === "KM"}
              onChange={handleUnitOfMeasurementChange}
            />
            <span>KM</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="radio"
              value="M"
              checked={unitOfMeasurement === "M"}
              onChange={handleUnitOfMeasurementChange}
            />
            <span>M</span>
          </label>
        </div>

        <div className="space-y-4 flex flex-col">
          <h2 className="font-bold">Date Format</h2>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              value="MM/DD/YYYY"
              checked={dateFormat === "MM/DD/YYYY"}
              onChange={handleDateFormatChange}
            />
            <span>MM/DD/YYYY</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              value="DD/MM/YYYY"
              checked={dateFormat === "DD/MM/YYYY"}
              onChange={handleDateFormatChange}
            />
            <span>DD/MM/YYYY</span>
          </label>
        </div>

        <div className="space-y-4 flex flex-col">
          <h2 className="font-bold">Weather Unit</h2>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              value="F"
              checked={weatherUnit === "F"}
              onChange={handleWeatherUnitChange}
            />
            <span>F</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              value="C"
              checked={weatherUnit === "C"}
              onChange={handleWeatherUnitChange}
            />
            <span>C</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Preferences;
