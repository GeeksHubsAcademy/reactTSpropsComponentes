import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { TextInput } from "../../common/TextInput/TextInput";
import { logMe } from "../../services/apiCalls";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { login } from "../userSlice";

export interface Credentials {
  email: string;
  password: string;
}

export const Login = () => {
  const navigate = useNavigate();

  //Conecto a REDUX en modo escritura
  const dispatch = useDispatch();
  

  const [userCredentials, setUserCredentials] = useState<Credentials>({
    email: "",
    password: "",
  });

  const [welcome, setWelcome] = useState<string>("");

  useEffect(()=> {

    if(userCredentials.email !== ""){

        console.log(userCredentials)
    }

  }, [userCredentials])

  const submitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    logMe(userCredentials)
      .then((res) => {
        console.log(res);

        //Guardo en Redux
        dispatch(login({ credentials: res}))

        setWelcome(res.name);

        setTimeout(() => {
          navigate("/");
        }, 4500);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Container fluid>
        {welcome !== "" ? (
          <>
            <Row className="justify-content-center">
              <Col className="d-flex flex-column justify-content-center" xs={10} md={4} xl={3}>
                Bienvenido de nuevo {welcome}....
              </Col>
            </Row>
          </>
        ) : (
          <>
            <Row className="justify-content-center">
              <Col
                className="d-flex flex-column my-2 justify-content-center"
                xs={10}
                md={4}
                xl={3}
              >
                <TextInput
                  name="email"
                  type="email"
                  placeholder="write an email..."
                  state={setUserCredentials}
                />
                <TextInput
                  name="password"
                  type="password"
                  placeholder="write a password..."
                  state={setUserCredentials}
                />
                <Button onClick={(e) => submitHandler(e)}>log me!</Button>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </>
  );
};
