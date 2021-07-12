import React,{ useEffect } from "react";
import { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { BsPencil } from "react-icons/bs";
import "./EditProfile.css";

function EditProfile() {
const [ user,setUser ] = useState(null);

useEffect(()=>{
  getUser();
},[])

  async function getUser(){
    const response = await fetch('http://localhost:5000/edit/');
    const data = await response.json();
    setUser(data);
  }
  console.log(user);

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
            <h2 contenteditable="true">Valary Uhuru</h2>
            <p contenteditable="true">Software Engineer</p>
            <Row>
              <Col>
                <p contenteditable="true">Nairobi, Kenya</p>
              </Col>
              <Col>
                <p>< a href="#" >Contact Info </a></p>
              </Col>
            </Row>
            <p contenteditable="true">Some quick example text to build on the card title and make up the
            bulk of the card's content.</p>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="project-card card-cont" contenteditable="true">
        <Card.Body>
          <Row>
            <Col sm={8}>
              <h3>Projects</h3>
            </Col>
            <Col sm={4}>
              <BsPencil/>
            </Col>
          </Row>
          This is some text within a card body.
        </Card.Body>
      </Card>
    </>
  );
}

export default EditProfile;
