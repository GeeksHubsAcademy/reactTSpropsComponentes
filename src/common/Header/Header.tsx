import "./Header.css";

//Método de conexión en modo lectura a RDX.
import { useDispatch, useSelector } from "react-redux";
import { userData, userout } from "../../pages/userSlice";
import { deleteFindings, addFindings } from "../../pages/searchSlice";
import { TextInput } from "../TextInput/TextInput";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { bringCharactersName } from "../../services/apiCalls";

export const Header = () => {
  const [searchInfo, setSearchInfo] = useState<any>({});
  // const [token, setToken] = useState<string>("");

  //Guardo los datos de REDUX en una constante para poder acceder a ellos en Header
  const datosCredencialesRedux = useSelector(userData);

  //Instancio Redux en modo escritura....

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (searchInfo.search && searchInfo.search !== "") {

      //Búsqueda con proceso de debouncing manual activado...

      const bringData = setTimeout(() => {
        bringCharactersName(searchInfo)
          .then((resultado) => {
            //Guardo en Redux los resultados de búsqueda
            console.log(resultado, "estoy debounceado??");
            dispatch(addFindings({ findings: resultado }));
          })
          .catch((error) => console.log(error));
      }, 350);

      return () => clearTimeout(bringData)
    } else {
      //Enviaremos a redux .... un vaciado......
      dispatch(deleteFindings({ findings: [] }));
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
            design="my-4 inputDesign"
            state={setSearchInfo}
            errorState={()=>{}}
          />
        </Col>
        <Col
          className="d-flex justify-content-end align-items-end"
          xs={10}
          md={4}
          xl={4}
        >
          <Row>
            {!datosCredencialesRedux.credentials?.token ? (
              <>
                <Col className="linkDesign" onClick={() => navigate("/")}>
                  Home
                </Col>
                <Col className="linkDesign" onClick={() => navigate("/login")}>
                  Login
                </Col>
                <Col
                  className="linkDesign"
                  onClick={() => navigate("/register")}
                >
                  Register
                </Col>
              </>
            ) : (
              <>
                <Col
                  className="linkDesign"
                  onClick={() => navigate("/profile")}
                >
                  {datosCredencialesRedux.credentials?.name}
                </Col>
                <Col
                  className="linkDesign"
                  onClick={() => dispatch(userout({ credentials: {} }))}
                >
                  Log out
                </Col>
              </>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
