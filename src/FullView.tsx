import React, { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import Images2016 from "./assets/images/feed/Images2016";
import Images2017 from "./assets/images/feed/Images2017";
import Images2018 from "./assets/images/feed/Images2018";
import Images2019 from "./assets/images/feed/Images2019";
import Images2020 from "./assets/images/feed/Images2020";
import Images2021 from "./assets/images/feed/Images2021";

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
      currentYearList: Images2019, // Whatever is largest, only for intial render which is never seen
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
      case 2018:
        this.setState({ currentYearList: Images2018 });
        break;
      case 2019:
        this.setState({ currentYearList: Images2019 });
        break;
      case 2020:
        this.setState({ currentYearList: Images2020 });
        break;
      case 2021:
        this.setState({ currentYearList: Images2021 });
        break;
    }
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleArrow);
  }

  handleRight() {
    switch (this.state.index) {
      case Images2021.length - 1:
        if (this.state.year === 2021) {
          this.setState({ index: 0, year: 2020, currentYearList: Images2019 });
        }
        break;
      case Images2020.length - 1:
        if (this.state.year === 2020) {
          this.setState({ index: 0, year: 2019, currentYearList: Images2019 });
        }
        break;
      case Images2019.length - 1:
        if (this.state.year === 2019) {
          this.setState({ index: 0, year: 2018, currentYearList: Images2018 });
        }
        break;
      case Images2018.length - 1:
        if (this.state.year === 2018) {
          this.setState({ index: 0, year: 2017, currentYearList: Images2017 });
        }
        break;
      case Images2017.length - 1:
        if (this.state.year === 2017) {
          this.setState({ index: 0, year: 2016, currentYearList: Images2016 });
        }
        break;
      case Images2016.length - 1:
        break;
      default:
        this.setState({ index: this.state.index + 1 });
        break;
    }
  }
  handleLeft() {
    if (this.state.index === 0) {
      switch (this.state.year) {
        case 2021:
          break;
        case 2020:
          this.setState({
            index: Images2021.length - 1,
            year: 2021,
            currentYearList: Images2021,
          });
          break;
        case 2019:
          this.setState({
            index: Images2020.length - 1,
            year: 2020,
            currentYearList: Images2020,
          });
          break;
        case 2018:
          this.setState({
            index: Images2019.length - 1,
            year: 2019,
            currentYearList: Images2019,
          });
          break;
        case 2017:
          this.setState({
            index: Images2018.length - 1,
            year: 2018,
            currentYearList: Images2018,
          });
          break;
        case 2016:
          this.setState({
            index: Images2017.length - 1,
            year: 2017,
            currentYearList: Images2017,
          });
          break;
      }
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
          <i
            className="fas fa-times mr-5 mt-2 text-dark"
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
            className="fas fa-chevron-left pr-4 text-dark"
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
            className="fas fa-chevron-right pl-4 text-dark"
            onClick={() => this.handleRight()}
          ></i>
        </div>
      </div>
    );
  }
}
