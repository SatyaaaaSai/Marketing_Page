import {CiBullhorn} from "react-icons/ci"
const KeyFeatures = (props) => {
  return (
    <div className="key-features">
        <center>
          <h2>Key Features:</h2>
        </center>
        <div className="feature-boxes">
        <div className="feature">
          <CiBullhorn />
          <strong>Feature 1:</strong>
          {props.Feature1}
          <p>{props.descr1}</p>
        </div>
        <div className="feature">
          <CiBullhorn />
          <strong>Feature 2:</strong>
          {props.Feature2}
          <p>{props.descr2}</p>
        </div>
        <div className="feature">
          <CiBullhorn />
          <strong>Feature 3:</strong>
          {props.Feature3}
          <p>{props.descr3}</p>
        </div>
      </div>
    </div>
  );
};
export default KeyFeatures;
