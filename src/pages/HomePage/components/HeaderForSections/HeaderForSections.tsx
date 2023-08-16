import "./HeaderForSections.scss";
import "../../../../index.scss";

interface HeaderForSectionsProps {
  header: string;
  buttonText: string;
}

export const HeaderForSections = ({
  header,
  buttonText,
}: HeaderForSectionsProps) => {
  return (
    <>
      <div className="goods-header container">
        <h2>{header}</h2>
        <button className="btn btn-warning shop-btn" type="reset">
          <span>
            {buttonText}
            <i className="fa-solid fa-arrow-right"></i>
          </span>
        </button>
      </div>
    </>
  );
};
