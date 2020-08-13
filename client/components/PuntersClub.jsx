import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import SubmitForm from "./SubmitForm";

class PuntersClub extends React.Component {
  render() {
    return (
      <div className="bgimg-1 w3-display-container w3-opacity-min" id="home">
        <div className="w3-display-middle" style={{ whiteSpace: "nowrap" }}>
          <span className="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity">
            PuntersClub <span className="w3-hide-small"></span>
          </span>
        </div>
          <SubmitForm />
      </div>
    );
  }
}

export default PuntersClub;
