import "./TopMainSection.scss";
import "../../../../index.scss";
import dogPicture from "./assets/main-section-dog.png";

export const TopMainSection = () => {
  return (
    <>
      <div className="main-section">
        <div className="main-section-container">
          <div className="main-section-header mobile-only">
            <p className="sale-text">Save 10 - 20 % off</p>
            <h1>
              Best destination <br />
              for<span> your pets</span>
            </h1>
          </div>
          <div className="dog-img-container">
            <img className="dog-img" src={dogPicture} />
          </div>
          <div className="main-section-header">
            <p className="sale-text desktop-only">Save 10 - 20 % off</p>
            <h1 className="desktop-only">
              Best destination <br />
              for<span> your pets</span>
            </h1>
            <button
              className="btn btn-warning shop-btn center-btn"
              type="reset"
            >
              <span>
                Shop now
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
