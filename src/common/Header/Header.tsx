
import './Header.css';
import { TextInput } from "../TextInput/TextInput";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Header = () => {

  const [searchInfo, setSearchInfo] = useState<string>("");
  const [token, setToken] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    if (searchInfo !== "") {
      console.log("ahora la búsque vale......", searchInfo);
    }
  }, [searchInfo]);

  return (
    <Container fluid>
      <Row className="justify-content-center py-5 bg-info">
        <Col
          className="d-flex justify-content-center"
          xs={10}
          md={4}
          xl={4}
        ></Col>
        <Col className="d-flex justify-content-center" xs={10} md={4} xl={4}>
          <TextInput
            name="search"
            type="text"
            placeholder="search a character..."
            state={setSearchInfo}
          />
        </Col>
        <Col
          className="d-flex justify-content-end align-items-end"
          xs={10}
          md={4}
          xl={4}
        >
          <Row>
            {token === "" ? (
              <>
                <Col className="linkDesign" onClick={()=>navigate("/")}>Home</Col>
                <Col className="linkDesign" onClick={()=>navigate("/login")}>Login</Col>
                <Col className="linkDesign" onClick={()=>navigate("/register")}>Register</Col>
              </>
            ) : (
              <>
                <Col>Name</Col>
                <Col>Log out</Col>
              </>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
