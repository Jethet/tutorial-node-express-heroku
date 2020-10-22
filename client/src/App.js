import React, { Component } from "react";
import "./App.css";

class App extends Component {
  // initialise state
  state = { passwords: [] };

  // fetch passwords after first mount
  componentDidMount() {
    this.getPasswords();
  }

  getPasswords = () => {
    // get passwords and store them in state
    fetch("/api/passwords")
      .then((res) => res.json())
      .then((passwords) => this.setState({ passwords }));
  };

  render() {
    const { passwords } = this.state;

    return (
      <div className="App">
        {passwords.length ? (
          <div>
            <h1>5 Passwords:</h1>
            <ul className="passwords">
              {passwords.map((password, index) => (
                <li key={index}>{password}</li>
              ))}
            </ul>
            <button className="more" onClick={this.getPasswords}>
              Get more passwords
            </button>
          </div>
        ) : (
          <div>
            <h1>There are no passwords, sorry</h1>
            <button className="more" onClick={this.getPasswords}>
              Try again?
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
