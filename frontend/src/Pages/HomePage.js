import React from "react";
import AddPage from "./AddPage";

const HomePage = ({ mytodos }) => {
  console.log(mytodos);
  return (
    <div>
      {mytodos?.map((el) => (
        <p>{el.task} </p>
      ))}
    </div>
  );
};

export default HomePage;
