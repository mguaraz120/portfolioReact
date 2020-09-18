import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Card from "./Card";
import countries from "../assets/images/countries.png";
import train from "../assets/images/Train.png";
import trivia from "../assets/images/Trivia.png";
import turtles from "../assets/images/turtles1.png";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          id: 0,
          name: "countries",
          description:
            "Find information about any country you wish to read about",
          image: countries,
          link: "https://mguaraz120.github.io/Countries-Info-API/",
          selected: false,
        },
        {
          id: 1,
          name: "train",
          description: "This app displays train schedule.",
          image: train,
          link: "https://mguaraz120.github.io/train-time-page/",
          selected: false,
        },
        {
          id: 2,
          name: "trivia",
          description:
            "The trivia will be in form of multiple choice or true/false.",
          image: trivia,
          link: "https://mguaraz120.github.io/trivia-game/",
          selected: false,
        },
        {
          id: 3,
          name: "turtles",
          description: "Help the ninja turtles",
          image: turtles,
          link: "https://mguaraz120.github.io/Ninja-Turtles-Game/",
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id) => {
    let projects = [...this.state.projects];

    projects[id].selected = projects[id].selected ? false : true;

    projects.forEach((project) => {
      if (project.id !== id) {
        project.selected = false;
      }
    });
    this.setState({
      projects,
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.state.projects.map((project) => (
            <Card
              project={project}
              click={(e) => this.handleCardClick(project.id, e)}
              key={project.id}
            />
          ))}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
