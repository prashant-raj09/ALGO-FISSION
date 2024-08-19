
import "../Style/card.css";



const Card = ({image,title, description }) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-img">
          <img alt={title} src={image}></img>
        </div>
        <div className="card-info">
          <h2 className="card-title">{title}</h2>
          <p className="card-details">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;


