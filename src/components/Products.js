import { useState, useEffect } from "react";
import ProductData from "../ProductsData.json";
import ProductCard from "./ProductCard";

import "../Style/product.css";

import productHero from "../images/heroProduct (2).png";
import edgeai from "../images/edgeAI.png";
import sensor from "../images/sensor.png";
import testMesr from "../images/test&m.png";
import fpga from "../images/fpga.png";
import wireless from "../images/wireless.png";
import dataAcqa from "../images/dataAcqa.png";

const imageMap = {
  1: sensor,
  2: edgeai,
  3: testMesr,
  4: fpga,
  5: wireless,
  6: dataAcqa,
};

const Products = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const mergedData = ProductData.map((item, index) => ({
      ...item,
      image: imageMap[item.id],
      layout: index % 2 === 0 ? "row" : "row-reverse",
    }));

    setProduct(mergedData);
  }, []);

  return (
    <div className="products-container">
      <div className="product-hero-container">
        <div className="product-hero-title">
          <h1 className="products-heading">Our Products</h1>
          <p className="products-info">
            At our company, we specialize in delivering cutting-edge solutions
            in Edge AI, Test and Measurement, FPGA, Wireless technology,
            Sensors, and Data Acquisition. Our expertise empowers businesses to
            harness advanced technologies for smarter, faster, and more
            efficient operations, ensuring they stay ahead in a rapidly evolving
            digital landscape. Whether you're looking to implement intelligent
            systems, enhance data accuracy, or integrate the latest in wireless
            and sensor technology, we're here to provide innovative and reliable
            solutions tailored to your unique needs.
          </p>
        </div>
        <div className="product-hero">
          <img src={productHero}></img>
        </div>
      </div>
      <div className="products-card">
        {product.map((ele) => (
          <ProductCard
            key={ele.id}
            image={ele.image}
            title={ele.title}
            description={ele.description}
            layout={ele.layout}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
