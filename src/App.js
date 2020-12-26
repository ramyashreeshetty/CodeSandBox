import React from "react";
import "./styles.css";

const s1 = "Cannot decrement value less than zero!!!";
export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      msg: " "
    };
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
      msg: " "
    });
  }

  decrement() {
    if (this.state.count === 0) {
      this.setState({
        count: 0,
        msg: s1
      });
    } else {
      this.setState({
        count: this.state.count - 1
      });
    }
  }
  render() {
    return (
      <div className="App">
        <br />
        <h1>COUNTER</h1>
        <div>
          <button className="inc" onClick={(e) => this.increment(e)}>
            Increment
          </button>
          <h1>{this.state.count}</h1>
          <button className="dec" onClick={(e) => this.decrement(e)}>
            Decrement
          </button>
        </div>
        <h2>{this.state.msg}</h2>
        <br />
      </div>
    );
  }
}
