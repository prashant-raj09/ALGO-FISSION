


import "../Style/product.css";

const ProductCard = ({ image, title, description, layout }) => {
  return (
    <div className="product-card-container" style={{ flexDirection: layout }}>
      <div className="product-card-img">
        <img alt={title} src={image} />
      </div>
      <div className="product-card-info">
        <h2 className="product-card-title">{title}</h2>
        <p className="product-card-details">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
