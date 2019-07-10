import React, { Component } from "react";
import Scroll from "../components/Scroll";
import CheckOut from "../components/CheckOut";
import brass from "../img/kw_plain.f1bf831.png";
import botteOpener from "../img/bohk.4948d8b.png";
import dots from "../img/dots.14e3228.png";

const keys = [
  {
    id: 1,
    image: `${brass}?size=200x200`,
    name: "Brass",
    price: 3.99,
    key: "brass"
  },
  {
    id: 2,
    image: botteOpener,
    name: "Bottle Opener",
    price: 5.99,
    key: "bottleOpener"
  },
  {
    id: 3,
    image: dots,
    name: "Dots",
    price: 4.99,
    key: "dots"
  }
];

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      keys: []
    };
  }
  componentDidMount() {
    this.setState({
      keys: keys
    });
  }

  addToCart = e => {
    try {
      e.preventDefault();
      this.setState({
        total: this.state.total + 1
      });
    } catch (error) {
      console.log(error);
    }
  };
  increment = (e, key) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      [key]: this.state[key] ? this.state[key] + 1 : 1
    });
  };
  decrement = (e, key) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      [key]: this.state[key] ? this.state[key] - 1 : 0
    });
  };
  render() {
    const keyList = this.state.keys.map(k => {
      return (
        <div className="single-key" key={k.id}>
          <img src={k.image} alt={`key-img ${k.name}`} />

          <h2>{k.name}</h2>
          <h6>${k.price}</h6>
          <span className="" onClick={e => this.increment(e, k.key)}>
            +
          </span>
          <input
            name={k.key}
            value={this.state[k.key] ? this.state[k.key] : 0}
          />
          <span className="" onClick={e => this.decrement(e, k.key)}>
            -
          </span>
        </div>
      );
    });
    return (
      <div className="tc">
        <h1 className="f1">KeyMe</h1>
        <Scroll>
          {keyList}
          <CheckOut />
        </Scroll>
      </div>
    );
  }
}
