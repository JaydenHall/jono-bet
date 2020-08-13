import React from "react";

class SubmitForm extends React.Component {
  state = {
    race1: "",
    race2: "",
    race3: "",
    race4: "",
    race5: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    event.preventDefault();
  };

  render() {
    return (
      <span>
        <form onSubmit={this.handleSubmit}>
          <span className="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity">
            <label>Race 1</label>
            <input type="text" name="race1" onChange={this.handleChange} />
            <select name="betType">
              <option value="Win">Win</option>
              <option value="Place">place</option>
              <option value="EachWay">Each Way</option>
              <option value="Quinella">Quinella</option>
              <option value="Trifecta">Trifecta</option>
              <option value="First4">First4</option>
            </select>
          <input type="text" name="pick1" onChange={this.handleChange} />
          </span>
          {/* <label>Race 2</label>
          <input type="text" name="race2" onChange={this.handleChange} />
          <label>Race 3</label>
          <input type="text" name="race3" onChange={this.handleChange} />
          <label>Race 4</label>
          <input type="text" name="race4" onChange={this.handleChange} />
          <label>Race 5</label>
          <input type="text" name="race5" onChange={this.handleChange} /> */}
        </form>
      </span>
    );
  }
}

export default SubmitForm;
