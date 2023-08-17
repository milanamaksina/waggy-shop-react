import "./RegistrationSection.scss";
import "../../../../index.scss";
import print from "./assets/print.svg";

export const RegistrationSection = () => {
  return (
    <>
      <div className="registration-section-container">
        <div className="register-section">
          <img className="left-print desktop-only" src={print} />
          <div className="register-form">
            <p className="register-header">
              Get <span>20% Off</span> on <br />
              first Purchase
            </p>
            <input type="text" placeholder="Enter your email address" />
            <input type="text" placeholder="create a password" />
            <input type="text" placeholder="repeat password" />
            <button className="btn btn-warning register-btn" type="reset">
              <p>Register it now</p>
            </button>
          </div>
          <img className="right-print desktop-only" src={print} />
        </div>
      </div>
    </>
  );
};
