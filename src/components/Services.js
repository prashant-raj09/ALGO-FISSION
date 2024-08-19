import React, { useState, useEffect } from "react";
import Card from "./Card";
import "../Style/services.css";
import data from "../Servicesdata.json";

import web from "../images/new_web.png";
import app from "../images/app.png";
import ui from "../images/ui (2).png";
import iot from "../images/IOT (4).png";
import prototype from "../images/prototype.png";
import ai from "../images/AI.png";

const imageMap = {
  1: web,
  2: app,
  3: ui,
  4: iot,
  5: prototype,
  6: ai,
};

const Services = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    // Merge the image path with the data from data.json
    const mergedData = data.map((item) => ({
      ...item,
      image: imageMap[item.id],
    }));

    setInfo(mergedData);
  }, []);

  return (
    <div className="services-container">
      <div className="services-title">
        <h1 className="services-heading">Our Service</h1>
        <p className="services-info">
          We are ready to scale up your business with our great service.
        </p>
      </div>
      <div className="services-card">
        {info.map((ele) => (
          <Card
            key={ele.id}
            image={ele.image}
            title={ele.title}
            description={ele.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
