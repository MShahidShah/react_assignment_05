import React from "react";
import "./App.css";
import { useState } from "react";
import { Product_Card } from "./Components/Product_Card";
import { Details_Component } from "./Components/Details_Component";

const App = () => {
  const [show_details, setShow_details] = useState(false);
  const [current_data, setCurrent_data] = useState(null);

  const show_details_handle = (data) => {
    setCurrent_data(data);
    setShow_details(true);
  };
  return (
    <div className="container mx-auto">
      {/* --------- Product Cards */}
      {show_details ? (
        <Details_Component
          title={current_data.title}
          price={current_data.price}
          image_url={current_data.image_url}
          description={current_data.description}
        />
      ) : (
        <div className="grid grid-cols-3">
          <Product_Card
            click_handle={show_details_handle}
            title={"Golden Easy Spot Chair."}
            price={"1500"}
            image_url={"https://api.escuelajs.co/api/v1/files/4b20.png"}
          />
          <Product_Card
            click_handle={show_details_handle}
            title={"w/IPhone Pro Max 15"}
            price={"9999"}
            image_url={"https://api.escuelajs.co/api/v1/files/233f.png"}
          />
          <Product_Card
            click_handle={show_details_handle}
            title={"New Product"}
            price={"123"}
            image_url={"https://i.imgur.com/QkIa5tT.jpeg"}
          />
        </div>
      )}
    </div>
  );
};

export default App;

















import React from "react";

export const Details_Component = (props) => {
  return (
    <div>
      <img src={props.image_url} />
      <h1>Title: {props.title}</h1>
      <h1>Price: {props.price}</h1>

      <p>{props.description}</p>
    </div>
  );
};