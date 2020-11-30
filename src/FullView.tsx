import React, { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import Images2016 from "./assets/images/feed/Images2016";
import Images2017 from "./assets/images/feed/Images2017";

type ImageState = {
  index: number;
  year: number;
  history: any;
  currentYearList: any;
};

export default class FullView extends Component<
  { CompProps: RouteComponentProps<{}> },
  ImageState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      index: props.location.state.id,
      year: props.location.state.year,
      history: props.history,
      currentYearList: Images2017, // Whatever is largest, only for intial render which is never seen
    };

    this.handleArrow = this.handleArrow.bind(this);
    this.handleRight = this.handleRight.bind(this);
    this.handleLeft = this.handleLeft.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleArrow);
    switch (this.state.year) {
      case 2016:
        this.setState({ currentYearList: Images2016 });
        break;
      case 2017:
        this.setState({ currentYearList: Images2017 });
        break;
    }
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleArrow);
  }

  handleRight() {
    if (this.state.index === 75 && this.state.year === 2017) {
      this.setState({ index: 0, year: 2016, currentYearList: Images2016 });
    } else {
      this.setState({ index: this.state.index + 1 });
    }
  }
  handleLeft() {
    if (this.state.index === 0 && this.state.year === 2016) {
      this.setState({ index: 75, year: 2017, currentYearList: Images2017 });
    } else {
      this.setState({ index: this.state.index - 1 });
    }
  }

  handleArrow(event: any) {
    if (event.keyCode === 39) {
      this.handleRight();
    } else if (event.keyCode === 37) {
      this.handleLeft();
    }
  }

  render() {
    return (
      <div>
        <div className="d-flex justify-content-end">
          {/* <Link to={"/feed"} style={{ color: "#999999" }}>
            <i className="fas fa-times mr-5 mt-2"></i>
          </Link> */}
          <i
            className="fas fa-times mr-5 mt-2"
            onClick={() => this.state.history.goBack()}
          ></i>
        </div>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            height: "94vh",
          }}
        >
          <i
            className="fas fa-chevron-left pr-4"
            onClick={() => this.handleLeft()}
          ></i>
          <div className="d-flex justify-content-center mt-0">
            <img
              className="img-fluid"
              src={this.state.currentYearList[this.state.index].src}
              alt={this.state.currentYearList[this.state.index].title}
              style={{
                maxHeight: "94vh",
                objectFit: "contain",
              }}
            ></img>
          </div>
          <i
            className="fas fa-chevron-right pl-4"
            onClick={() => this.handleRight()}
          ></i>
        </div>
      </div>
    );
  }
}
