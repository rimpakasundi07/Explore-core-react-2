import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries }) => {
  const [visited, setVisited] = useState(false);
  // console.log(country.area.area);
  console.log(handleVisitedCountries);

  const handleVisited = () => {
    // basic method
    // if (visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }
    // second method // better
    // setVisited(visited ? false : true);

    // third method
    setVisited(!visited);
    handleVisitedCountries(country);
  };

  return (
    <div
      // that's better
      className={`country border-lg text-center ${
        visited ? "country-visited" : "country not visited"
      }  `}

      //  className={`country ${visited && "Country-visited"} `}
    >
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>Name: {country.name.common} </h3>
      <p>Population: {country.population.population}</p>
      <p>
        Area:{country.area.area}{" "}
        {country.area.area > 300000 ? "Big Country" : "Small Country"}
      </p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;

/**
 *
 *  1. Inline Css ( Style object)
 *  2.
 */
