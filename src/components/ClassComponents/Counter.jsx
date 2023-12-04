import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("construct called");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps called");
    return state;
  }

  componentDidMount() {
    console.log("componentDidMount called");
  }

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate called");
    return true;
  }

  getSnapshotBeforeUpdate(preProps, preState) {
    console.log("getSnapshotBeforeUpdate called");
    console.log(preProps, preState);
    return null;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate called");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount called");
  }

  incrementCounter = () => {
    this.setState((preState) => ({ count: preState.count + 1 }));
  };

  decrementCounter = () => {
    this.setState((preState) => ({ count: preState.count - 1 }));
  };

  render() {
    console.log("render called");
    return (
      <div>
        <h1>Counter : {this.state.count}</h1>
        <button type="button" onClick={this.incrementCounter}>
          Increment
        </button>
        <button type="button" onClick={this.decrementCounter}>
          Decrement
        </button>
      </div>
    );
  }
}

export default Counter;
