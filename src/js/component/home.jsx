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
    <div className="container-sm">
       <div className="d-flex justify-content-between align-items-center m-3 p-3 bg-dark text-white" style={{ height: "17rem" }}>
        <i className="fa-solid fa-clock"></i>
        <p className="p-2">{seconds}</p>
      </div>
    </div>
  );
};

export default Home;
