import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import {} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const EducationForm = ({ edu, setEdu, setCurrentForm }) => {
  const [education, setEducation] = useState({
    institution: "",
    degree: "",
    graduationDate: "",
  });

  const handleInputChange = (event) => {
    console.log(event.target);
    const { name, value } = event.target;
    setEducation({ ...education, [name]: value });
  };

  return (
    <div>
      <>
        <Container>
          <h1>Education Information</h1>
          <Row>
            <Col>
              <Form>
                <input
                  type="text"
                  id="institution"
                  placeholder="Institution"
                  name="institution"
                  value={education.institution}
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                />
                <input
                  type="text"
                  id="degree"
                  placeholder="Degree"
                  name="degree"
                  value={education.degree}
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                />
                <input
                  type="date"
                  id="graduationDate"
                  placeholder="Graduation Date"
                  name="graduationDate"
                  value={education.graduationDate}
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                />
                <Button
                  id="addEduButton"
                  onClick={() => {
                    setEdu([...edu, education]);
                    setEducation({
                      institution: "",
                      degree: "",
                      graduationDate: "",
                    });

                    // showEduInput();
                  }}
                >
                  Add Education
                </Button>
              </Form>
            </Col>
            <Col
              style={{
                display: "block",
                align: "center",
                width: "500px",
                // textAlign: "center",
              }}
            >
              <Row>
                <h3 className="myEduHeader">My Education</h3>
              </Row>
              <Row>
                <table id="eduTable">
                  <tr
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <th>Institution</th>
                    <th>Degree</th>
                    <th>Graduation Date</th>
                  </tr>
                  {/* <tr id="eduData">{eduList}</tr> */}
                </table>
              </Row>
            </Col>
          </Row>
          <Button
            variant="primary"
            style={{ marginTop: "25px", marginBottom: "10px" }}
            onClick={() => {
              setCurrentForm(3);
            }}
          >
            Continue To Skills
          </Button>{" "}
        </Container>
      </>
    </div>
  );
};

export default EducationForm;
