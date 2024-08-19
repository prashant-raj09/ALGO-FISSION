import { useEffect, useState } from "react";
import "../Style/about.css";

import mission from "../images/mission.png";
import vision from "../images/vission.png";
import ProductCard from "./ProductCard";
import aboutData from "../aboutData.json";
import Logo from "../images/loogoo.png";
const imageMap = {
  1: mission,
  2: vision,
};

const About = () => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const mergedData = aboutData.map((item, index) => ({
      ...item,
      image: imageMap[item.id],
      layout: index % 2 === 0 ? "row" : "row-reverse",
    }));
    setAbout(mergedData);
  }, []);

  console.log(about);

  return (
    <div className="about-container">
      <div className="about-header">
        <div className="about-logo">
          <img alt="logo" src={Logo}></img>
        </div>
        <div className="about-details">
          <div className="about-title">
            <h1 className="about-heading">About Us</h1>
          </div>
          <div className="about-description">
            <p className="about-details">
              Welcome to <span className="highlight">ALGO-FISSION</span>, where
              innovation meets expertise. We are a dynamic consultancy firm
              dedicated to providing top-notch services in{" "}
              <span className="highlight">web development</span>,{" "}
              <span className="highlight">app development</span>, and{" "}
              <span className="highlight">electronic hardware</span>
              solutions. Our team of skilled professionals is committed to
              helping businesses transform their ideas into reality, leveraging
              the latest technologies and industry best practices. At{" "}
              <span className="highlight">ALGO-FISSION</span>, we specialize in
              crafting custom web and mobile applications that are not only
              visually stunning but also highly functional and user-friendly.
              Whether you need a responsive website, a robust e-commerce
              platform, or a cutting-edge mobile app, we have the experience and
              creativity to deliver solutions that drive results. In addition to
              our software development expertise, we offer comprehensive{" "}
              <span className="highlight">electronic hardware</span>
              services. From designing and prototyping to manufacturing and
              testing, we ensure that your electronic products are built to the
              highest standards of quality and reliability. Our mission is to
              empower businesses to succeed in a rapidly evolving digital
              landscape. We believe in building long-term partnerships with our
              clients, understanding their unique needs, and delivering tailored
              solutions that help them achieve their goals. With{" "}
              <span className="highlight">ALGO-FISSION</span>, you gain a
              trusted partner who is committed to your success. Let's work
              together to bring your vision to life.
            </p>
          </div>
        </div>
      </div>
      <div className="about-card">
        {about.map((ele) => (
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

export default About;
