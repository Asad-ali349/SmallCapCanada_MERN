import React, { Fragment, useState } from 'react';
import { Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../AbstractElements';
import {CardHeader,CardFooter} from 'reactstrap';
import { Col, Card, CardBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { H5 ,Btn} from '../../AbstractElements';
import TextEditor from '../../CommonElements/TextEditor'
const Index = () => {
  const [content, setContent]=useState();
  const handleProcedureContentChange = () => {
    console.log("content:", content);
  };
  return (
    <Fragment>
      <Breadcrumbs mainTitle='Disclaimer' parent='Disclaimer' />
      <Container fluid={true}>
        <Row>
          <Col sm='12'>
          <Card>
            <CardHeader ><H5>Disclaimer</H5></CardHeader>
                <Form className="form theme-form">
                    <CardBody>
                        <Row className='mb-3'>
                          <Col sm='12'>
                            <TextEditor value={content} onChange={(e)=>setContent(e)}/>
                          </Col>
                        </Row>
                    </CardBody>
                    <CardFooter className="text-end">
                      <button type='button' className='btn btn-primary mx-1' onClick={handleProcedureContentChange}>Save</button>
                      <button className='btn btn-primary mx-1' type='button'>Clear</button>
                    </CardFooter>
                </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Index;
