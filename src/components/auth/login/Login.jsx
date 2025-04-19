import { useRef, useState } from "react";
import { Button, Card, Col, Form, FormGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setErrors(prevErrors => ({
        ...prevErrors,
        email: false
    }))
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setErrors(prevErrors => ({
        ...prevErrors,
        password: false
    }))
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!emailRef.current.value.length) {
      setErrors({ ...errors, email: true });
      emailRef.current.focus();
    } else if (!passwordRef.current.value.length || passwordRef.current.value.length < 7) {
      setErrors({ ...errors, password: true });
      passwordRef.current.focus();
    } else {
      setErrors({ email: false, password: false });
      navigate("/brewery");
    }
  };

  return (
    <Card className="mt-5 mx-3 p-3 px-5 shadow">
      <Card.Body>
        <Row className="mb-2">
          <h5>¡Bienvenides a tomar una cerveza!</h5>
        </Row>
        <Form onSubmit={handleSubmit}>
          <FormGroup className="mb-4">
            <Form.Control
              type="email"
              className={`${errors.email ? "border border-danger" : ""}`} // no funciona
              required
              ref={emailRef}
              placeholder="Ingresar email"
              onChange={handleEmailChange}
              value={email}
            />
            {errors.email && <p className="text-danger">El email está vacío</p>}
          </FormGroup>
          <FormGroup className="mb-4">
            <Form.Control
              type="password"
              className={`${errors.password ? "border border-danger" : ""}`} // este si
              required
              ref={passwordRef}
              placeholder="Ingresar contraseña"
              onChange={handlePasswordChange}
              value={password}
            />
            {errors.password && (
              <p className="text-danger">
                La contraseña debe tener al menos 7 caracteres
              </p>
            )}
          </FormGroup>
          <Row>
            <Col />
            <Col md={6} className="d-flex justify-content-end">
              <Button variant="warning" type="submit">
                Iniciar sesión
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Login;
