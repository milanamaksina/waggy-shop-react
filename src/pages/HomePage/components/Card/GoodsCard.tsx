import "./GoodsCard.scss";
import "../../../../index.scss";

interface CardProps {
  img: string;
  description: string;
  isDogCard: boolean;
}

export const GoodsCard = ({ img, description, isDogCard = false }: CardProps) => {
  return (
    <>
      <div className="card">
        <div className={isDogCard ? "card-header dog-card" : "card-header food-card"}>
          <img src={img} />
        </div>
        <div className="goods-card-description">
          <p className="card-description-header">{description}</p>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <span className="rating">5.0</span>
          <p className="price">$18.00</p>
          <div className="card-buttons">
            <button
              className="btn btn-warning add-to-cart-btn shop-btn"
              type="reset"
            >
              Add to cart
            </button>
            <button className="btn btn-warning heart-btn shop-btn" type="reset">
              <i className="fa-solid fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
