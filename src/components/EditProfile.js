import React, { useEffect } from "react";
import { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { useHistory } from 'react-router-dom'
import { BsPencil } from "react-icons/bs";
import "./EditProfile.css";

function EditProfile() {
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    const response = await fetch("http://localhost:5000/edit/");
    const data = await response.json();
    setUser(data);
  }
  console.log(user);

function editProfile() {
  history.push('/modal');
}


  return (
    <>
      <Card className="card card-cont">
        <Card.Img
          variant="top"
          src="https://wallpapercave.com/wp/wp1920732.png"
          className="profile-image"
        />
        <div className="profile-circle-image"></div>
        <div id="spacer"></div>
        <Card.Body>
          <Card.Text>
            <Row>
              <Col>
                <h2>
                  <a href="#">Valary Uhuru</a>
                </h2>
                <p>Software Engineer</p>
              </Col>

              <Col sm={4}>
                <BsPencil onClick={ editProfile }/>
              </Col>
            </Row>

            <Row>
              <Col>
                <p>Nairobi, Kenya</p>
              </Col>
              <Col sm={4}>
                <p>
                  <a href="#">Contact Info </a>
                </p>
              </Col>
            </Row>
            <p>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="project-card card-cont">
        <Card.Body>
          <Row>
            <Col sm={8}>
              <h3>Projects</h3>
            </Col>
          </Row>
          You can add projects from this section.
        </Card.Body>
      </Card>
    </>
  );
}

export default EditProfile;
