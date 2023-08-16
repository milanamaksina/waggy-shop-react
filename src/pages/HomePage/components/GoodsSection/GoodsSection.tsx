import "./GoodsSection.scss";
import "../../../../index.scss";
import bird from "./assets/ph_bird.png";
import bowl from "./assets/ph_bowl-food.png";
import cat from "./assets/ph_cat.png";
import dog from "./assets/ph_dog.png";
import fish from "./assets/ph_fish.png";

export const GoodsSection = () => {
  return (
    <>
      <div className="goods-section container">
        <div className="category-section desktop-only">
          <img src={bowl} />
          <img src={bird} />
          <img src={dog} />
          <img src={fish} />
          <img src={cat} />
          <p>Accessories</p>
          <p>Bird shop</p>
          <p>Dog shop</p>
          <p>Fish shop</p>
          <p>Cat shop</p>
        </div>
        <div className="category-section mobile-only">
          <img src={bowl} />
          <img src={bird} />
          <p>Accessories</p>
          <p>Bird shop</p>
          <img src={dog} />
          <img src={fish} />
          <p>Dog shop</p>
          <p>Fish shop</p>
          <div className="col-span-2">
            <img src={cat} />
            <p>Cat shop</p>
          </div>
        </div>
      </div>
    </>
  );
};
