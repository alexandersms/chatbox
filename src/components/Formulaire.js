import React, { Component } from "react";

class Formulaire extends Component {
  state = {
    message: ""
  };

  handleChange = event => {
    const message = event.target.value;
    this.setState({ message });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("Submit");
  };

  render() {
    let { message } = this.state;
    return (
      <form value={message} className="form" onSubmit={this.handleSubmit}>
        <textarea onChange={this.handleChange} required maxLength="140" />
        <div className="info">140</div>
        <button type="submit">Envoyer</button>
      </form>
    );
  }
}

export default Formulaire;
