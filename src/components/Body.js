import Landing from "../images/Landing.png";
import "../Style/body.css";
import Services from "./Services";
const Body = () => {
  return (
    <>
      <div className="container">
        <div className="container-left">
          <div className="about-us">
            <h1 className="heading">Algo-Fission</h1>
            <p className="description">
              We are dedicated to delivering{" "}
              <span className="highlight">Innovative Solutions</span> that drive
              business success in the digital age. With expertise spanning{" "}
              <span className="highlight">Consultancy</span>,{" "}
              <span className="highlight">Embedded AI Hardware</span>, and{" "}
              <span className="highlight">Web development</span>, we provide
              tailored services that empower our clients to stay ahead of the
              curve. Our team of skilled professionals combines{" "}
              <span className="highlight">Technical Excellence</span> with a
              deep understanding of industry trends, ensuring that we meet the
              unique needs of each client. We believe in fostering strong
              partnerships, grounded in{" "}
              <span className="highlight">Trust and Collaboration</span>, to
              help businesses achieve their full potential in an ever-evolving
              technological landscape.
            </p>
          </div>
        </div>
        <div className="container-right">
          <img alt="Landing" src={Landing}></img>
        </div>
      </div>
      <Services />
    </>
  );
};

export default Body;
