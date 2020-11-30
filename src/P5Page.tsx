import React, { Component } from "react";
import p5 from "p5";

export default class P5Page extends Component {
  myRef: any;
  constructor(props: any) {
    super(props);
    this.myRef = React.createRef();
  }

  Sketch = (p: any) => {
    p.setup = () => {
      p.createCanvas(800, 600);
      p.background(0);
    };

    p.draw = () => {};
  };

  componentDidMount() {
    new p5(this.Sketch, this.myRef.current);
  }

  render() {
    return <div ref={this.myRef}></div>;
  }
}
