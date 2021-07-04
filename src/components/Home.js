import React from "react";
import Card from "./Card";
import { Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import CakeIcon from "@material-ui/icons/Cake";
import MouseIcon from "@material-ui/icons/Mouse";
import "../styles/Home.css";
import bday from "../assets/Wavy_Lst-01_Single-04.webp";

const Home = () => {
  return (
    <>
      <span className="heading">
        <p>BirthDay Wishes</p>
      </span>
      <Container className="home__land">
        <Row className="home__row">
          <Col
            style={{ display: "flex", flexDirection: "column" }}
            className="head__holder"
          >
            <span className="upper__heading">Create Virtual Cards</span>
            <span className="lower__heading">For your loved ones</span>
          </Col>
          <Col className="image__holder">
            <img src={bday} alt="bday_img" />
          </Col>
        </Row>
      </Container>
      <div className="button__holder">
        <a href="#info">
          <button>↓</button>
        </a>
      </div>
      <Container id="info" style={{ height: "100%" }}>
        <div className="work__head">
          <span>
            How it <span className="works">Works</span>.
          </span>
        </div>
        <Row className="align-items-center" style={{ marginTop: "40px" }}>
          <Col md>
            <Card
              num="1"
              next=""
              heading="1. Click on Create"
              text="To get started click on the start button and fill out the info"
            >
              <MouseIcon style={{ fontSize: 35 }} />
            </Card>
          </Col>
          <Col md>
            <Card
              num="2"
              next="second__card"
              heading="2. Customize"
              text="Select the design, date of birth of the receiver, pics and music"
            >
              <AssignmentTurnedInIcon style={{ fontSize: 35 }} />
            </Card>
          </Col>
          <Col md>
            <Card
              num="3"
              next="third__card"
              heading="3. Finalize"
              text="A unique link will be created that you can share"
            >
              <CakeIcon style={{ fontSize: 35 }} />
            </Card>
          </Col>
        </Row>
        <div className="create__card">
          <Link to="/Forms">
            <button>
              <strong>Create your card now →</strong>
            </button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default Home;
