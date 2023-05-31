import React, {createContext, useState} from "react";

export const PreferencesContext = createContext();

export const PreferencesProvider = ({children}) => {
  const [unitOfMeasurement, setUnitOfMeasurement] = useState("M");
  const [dateFormat, setDateFormat] = useState("DD/MM/YYYY");
  const [weatherUnit, setWeatherUnit] = useState("C");
  const [currency, setCurrency] = useState("CAD");

  return (
    <PreferencesContext.Provider
      value={{
        unitOfMeasurement,
        setUnitOfMeasurement,
        dateFormat,
        setDateFormat,
        weatherUnit,
        setWeatherUnit,
        currency,
        setCurrency,
      }}
    >
      {children}
    </PreferencesContext.Provider>
  );
};
