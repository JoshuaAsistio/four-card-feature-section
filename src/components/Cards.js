import React from "react";
import Data from "./Data";

const Cards = () => {
  const [tools, setTools] = React.useState([]);

  React.useEffect(() => {
    setTools(Data);
  }, []);

  return (
    <div>
      {tools.map((item) => {
        return (
          <div className="card">
            <h3 className="card__title">{item.tool}</h3>

            <p className="card__description">{item.description}</p>

            <img src={item.imgSrc} alt="" className="card__image" />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
