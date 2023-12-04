import React from "react";
class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
    console.log('construct called')
  }
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps called')
    return { count: props.count_value }
  }
  componentDidMount(){
    console.log('componentDidMount called')
  }
  render(){
    console.log('render called')
    return (
      <button>Counter : {this.state.count}</button>
    )
  }
}
export default Counter;
