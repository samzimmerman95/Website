import React, { Component } from "react";
import p5 from "p5";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default class P5Page extends Component {
  myRef: any;
  constructor(props: any) {
    super(props);
    this.myRef = React.createRef();
  }

  Sketch = (p: any) => {
    class Boid {
      pos: any;
      vel: any;
      acc: any;
      maxForce: number;
      maxSpeed: number;
      constructor() {
        this.pos = p.createVector(p.random(p.width), p.random(p.height));
        this.vel = p5.Vector.random2D();
        this.vel.setMag(p.random(1, 3));
        this.acc = p.createVector();
        this.maxForce = 0.1;
        this.maxSpeed = 3;
      }
      edges() {
        if (this.pos.x > p.width) {
          this.pos.x = 0;
        } else if (this.pos.x < 0) {
          this.pos.x = p.width;
        }
        if (this.pos.y > p.height) {
          this.pos.y = 0;
        } else if (this.pos.y < 0) {
          this.pos.y = p.height;
        }
      }
      update() {
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        this.vel.limit(this.maxSpeed);
        this.acc.mult(0);
      }
      show() {
        p.push();
        // p.strokeWeight(10);
        p.stroke(255);
        // p.fill(0);
        p.translate(this.pos.x, this.pos.y);
        let arrowSize = 8;
        p.rotate(this.vel.heading());
        p.triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize * 1.5, 0);
        // p.circle(0, 0, 100);
        p.pop();
      }

      allForces(boids: any[]) {
        let perceptionRadius = 50;
        let steeringAlign = p.createVector();
        let steeringCohesion = p.createVector();
        let steeringSeperation = p.createVector();
        let boidsInRadius = 0;
        for (let other of boids) {
          let d = p.dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
          if (other != this && d < perceptionRadius) {
            steeringAlign.add(other.vel);
            steeringCohesion.add(other.pos);
            let diff = p5.Vector.sub(this.pos, other.pos);
            diff.div(d * d);
            steeringSeperation.add(diff);
            boidsInRadius++;
          }
        }
        if (boidsInRadius > 0) {
          steeringAlign.div(boidsInRadius);
          steeringAlign.setMag(this.maxSpeed);
          steeringAlign.sub(this.vel);
          steeringAlign.limit(this.maxForce);

          steeringCohesion.div(boidsInRadius);
          steeringCohesion.sub(this.pos);
          steeringCohesion.setMag(this.maxSpeed);
          steeringCohesion.sub(this.vel);
          steeringCohesion.limit(this.maxForce);

          steeringSeperation.div(boidsInRadius);
          steeringSeperation.setMag(this.maxSpeed);
          steeringSeperation.sub(this.vel);
          steeringSeperation.limit(this.maxForce + 0);
        }
        this.acc.add(steeringAlign);
        this.acc.add(steeringCohesion);
        this.acc.add(steeringSeperation);
      }
    }
    const flock: any[] = [];

    p.setup = () => {
      p.createCanvas(800, 500);
      p.background(30);
      for (let i = 0; i < 60; i++) {
        flock.push(new Boid());
      }
    };

    p.draw = () => {
      p.background(30);
      for (let boid of flock) {
        boid.edges();
        boid.allForces(flock);
        boid.update();
        boid.show();
      }
    };
  };

  componentDidMount() {
    new p5(this.Sketch, this.myRef.current);
  }

  render() {
    return (
      <div className="container-fluid d-flex flex-column min-vh-100">
        <div className="flex-grow-1">
          <NavBar />
          <div className="d-flex justify-content-center" ref={this.myRef}></div>
        </div>
        <Footer />
      </div>
    );
  }
}
