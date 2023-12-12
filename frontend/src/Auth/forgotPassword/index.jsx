import React, { Fragment, useState, useEffect, useContext } from "react";
import { Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { Btn, H3, H4, H5, P } from "../../AbstractElements";
import { EmailAddress, ForgotPassword, Password, RememberPassword, SignIn } from "../../Constant";

import { Link, useNavigate } from "react-router-dom";
import man from "../../assets/images/dashboard/profile.png";

import CustomizerContext from "../../_helper/Customizer";

import { ToastContainer, toast } from "react-toastify";
import { Image } from '../../AbstractElements';

const Signin = ({ selected }) => {
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("test123");
  const [togglePassword, setTogglePassword] = useState(false);
  const history = useNavigate();
  const { layoutURL } = useContext(CustomizerContext);

  const [value, setValue] = useState(localStorage.getItem("profileURL" || man));
  const [name, setName] = useState(localStorage.getItem("Name"));

  useEffect(() => {
    localStorage.setItem("profileURL", man);
    localStorage.setItem("Name", "Emay Walter");
  }, [value, name]);

  const loginAuth = async (e) => {
    e.preventDefault();
    setValue(man);
    setName("Emay Walter");
    if (email === "test@gmail.com" && password === "test123") {
      localStorage.setItem("login", JSON.stringify(true));
      history(`${process.env.PUBLIC_URL}/dashboard`);
      toast.success("Successfully logged in!..");
    } else {
      toast.error("You enter wrong password or username!..");
    }
  };

  return (
    <Fragment>
      <Container fluid={true} className="p-0 login-page">
        <Row>
          <Col xs="12">
            <div className="login-card">
              <div className="login-main login-tab">
                <Form className="theme-form">
                    <div className="mb-4"><Image  attrImage={{ className: 'img-fluid d-inline', src: `${require('../../assets/Logo/logo.png')}`, style:{width:"50%"}}} /></div>

                    <H5>{"Recover Your Account With Email"}</H5>
                    <FormGroup>
                        <Label className="col-form-label">{EmailAddress}</Label>
                        <Input className="form-control" type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                    </FormGroup>
                    
                    <div className="position-relative form-group mb-0">
                        
                        <Btn attrBtn={{ color: "primary", className: "d-block w-100 mt-2", onClick: (e) => loginAuth(e) }}>{"Recover"}</Btn>
                    </div>
                  
                    <p className="mt-3 mb-0 text-center">Back to <Link to={"/"}>Signin</Link></p>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </Fragment>
  );
};

export default Signin;
