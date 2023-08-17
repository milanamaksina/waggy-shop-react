import "./BottomMainSection.scss";
import "../../../../index.scss";
import dogPicture from "./assets/sale-dog.png";

export const BottomMainSection = () => {
  return (
    <>
    <div className="bottom-main-section-container">
      <div className="main-section">
        <div className="sale-poster-section">
          <div className="poster-right-side">
            <p className="poster-discount">Upto 40% off</p>
            <p className="poster-sale">
              Clearance
              <br />
              sale !!!
            </p>
            <button
              className="btn btn-warning shop-btn center-btn"
              type="reset"
            >
              <span>
                Shop all
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </button>
          </div>
          <div className="dog-img-container">
            <img className="dog-img sale-poster-img" src={dogPicture} />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
