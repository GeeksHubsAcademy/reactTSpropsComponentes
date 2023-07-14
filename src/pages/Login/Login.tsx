import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { TextInput } from "../../common/TextInput/TextInput";
import { logMe } from "../../services/apiCalls";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { login, userData } from "../userSlice";

import './Login.css';

export interface Credentials {
  email: string;
  password: string;
}

export const Login = () => {
  const navigate = useNavigate();

  //Conecto a REDUX en modo lectura
  const reduxUserCredentials = useSelector(userData);

  //Conecto a REDUX en modo escritura
  const dispatch = useDispatch();
  

  const [userCredentials, setUserCredentials] = useState<Credentials>({
    email: "",
    password: "",
  });

  const [userError, setUserError] = useState({
    email: "",
    password: ""
  })

  const [welcome, setWelcome] = useState<string>("");

  useEffect(()=> {
    if(reduxUserCredentials.credentials?.token){
      navigate("/");
    }
  },[]);

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
        }, 750);
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
                  design={userError.email ? ("my-4 inputDesign errorInput") : ("my-4 inputDesign")}
                  state={setUserCredentials}
                  errorState={setUserError}
                />
                <div className='msgError'>{userError.email}</div>
                <TextInput
                  name="password"
                  type="password"
                  placeholder="write a password..."
                  design={userError.password ? ("my-4 inputDesign errorInput") : ("my-4 inputDesign")}
                  state={setUserCredentials}
                  errorState={setUserError}
                />
                <div className='msgError'>{userError.password}</div>
                <Button onClick={(e) => submitHandler(e)}>log me!</Button>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </>
  );
};
