const WeatherData = ({ children, day, conditions, time }) => {
  return (
    <>
      <h2>{day}</h2>
      {children}
      <p>
        <span>conditions: </span>
        {conditions}
      </p>
      <p>
        <span>time: </span>
        {time}
      </p>
    </>
  );
};

export default WeatherData;
