import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import { gql } from "@apollo/client";
// import { graphql } from "react-apollo";
import { useQuery, useMutation } from "@apollo/client";
import "bootstrap/dist/css/bootstrap.min.css";
import {} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

//Returns user's education to be displayed in side area
const EDU_QUERY = gql`
   {
    education {
      institution
      degree
      graduationDate
    }
  }
`;

//Adds new education
const NEW_EDU = gql`
  mutation CreateEdu($newEdu: NewEduInput!) {
    addedEdu(input: $newEdu) {
      institution
      degree
      graduationDate
    }
  }
`;

const EducationForm = ({ edu, setEdu, setCurrentForm }) => {
  const [education, setEducation] = useState({
    institution: "",
    degree: "",
    graduationDate: "",
  });

  const handleInputChange = (event) => {
    console.log(event.target)
    const { name, value } = event.target;
    setEducation({ ...education, [name]: value });
  };
  const { emailAddress } = useParams();

  const GQL_API = "http://localhost:3000/conditionals";

  const EDU_QUERY = `
  query education {
    institution
    degree
    graduationDate
  }
`;

  console.log(EDU_QUERY);

  useEffect(() => {
    //Calls GQL API

  })

  // const initialCount = 0;
  // const [count, setCount] = useState(initialCount);
  // const eduQuery = useQuery(ALL_EDU);

  // const [createEdu, newEdu] = useMutation(NEW_EDU, {
  //   update(cache, {data: {addedEdu}}) {
  //     const allEdu = cache.readQuery({query: ALL_EDU})
  //     cache.writeQuery({
  //       query: ALL_EDU,
  //       data: {eduQuery: [addedEdu, ...allEdu.eduQuery]}
  //     })
  //   }
  // })

  // const onSubmit = (input) => {
  //   createEdu({
  //     variables: {newEdu: input},
  //   });
  // };

  // const submit = (e) => {
  //   e.preventDefault();
  //   onSubmit()
  // }

  // const eduList = education.map((education) => (
  //   <div key={education.institution}></div>
  // ))

  // const showEduInput = () => {
  //   let instInput = document.getElementById("institution").value;
  //   let degreeInput = document.getElementById("degree").value;
  //   let gradDateInput = document.getElementById("graduationDate").value;

  //   let eduTable = document.getElementById("eduTable");
  //   let eduRow = eduTable.insertRow(-1);

  //   let instCell = eduRow.insertCell(0);
  //   let degreeCell = eduRow.insertCell(1);
  //   let gradDateCell = eduRow.insertCell(2);

  //   instCell.innerHTML = instInput;
  //   degreeCell.innerHTML = degreeInput;
  //   gradDateCell.innerHTML = gradDateInput;
  // };

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
