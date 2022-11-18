import "./App.css";
import OriginList from "./components/OriginList";
import DestinationList from "./components/DestinationList";
import APIService from "./services/APIService";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [origins, setOrigins] = useState([]);

  useEffect(() => {
    APIService.getOrigins()
      .then(({ data }) => {
        setOrigins(data);
      })
      .catch(function (ex) {
        console.log("Response parsing failed. Error: ", ex);
      });
  }, []);

  if(origins.length === 0) 
  return null;

  return (
    <div className="App container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OriginList origins={origins} />} />
          {origins.map(({id, destinations}) => 
            <Route path={`origin/${id}`} element={<DestinationList destinations={destinations} />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
