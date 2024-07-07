import React, { useState, useEffect } from "react";

const Home = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <div
            className="d-flex justify-content-between align-items-center m-3 p-3 bg-dark text-white"
            style={{ height: "17rem" }}
          >
            <i className="icon fa-solid fa-clock"></i>
            <p className="p-2">{seconds}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
