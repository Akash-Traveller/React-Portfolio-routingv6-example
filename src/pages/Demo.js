import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button, Col, Row, Form, ListGroup } from "react-bootstrap";

const Demo = () => {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState('');
  // const [pwd, setPwd] = useState('');

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    console.log(event.currentTarget)
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      localStorage.setItem('Name', name);
      console.log(name)
      // localStorage.setItem('Password', pwd);
    }
    setValidated(true);
  };
 
  localStorage.setItem('Name', name);

  return (
    <motion.div
      className="contact"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
    >
      <h2>Contact</h2>
      <Row>
        <Col>
          <div className="contact-form">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="validationCustom01">
                <Form.Label>Name</Form.Label>
                <Form.Control required type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationCustom02">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="validationCustom03">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" required placeholder="Message" />
              </Form.Group>
              <Button type="submit">Submit form</Button>
            </Form>
          </div>
        </Col>
        <Col>
          {/* <div className="contact-data">
            <p>
              If you want to chat about a project — email me on
              abc@gmail.com.
            </p>
            <p>
              I can help designing a website, designing a new product, improving
              an existing part of your product, building a strong design system,
              building websites in Webflow, or designing a custom icon set for
              your business.{" "}
            </p>
            <p>
              Currently based in Wroclaw, Poland — available for remote-friendly
              work from December 2022.
            </p>
            <p>
              <ListGroup horizontal>
                <ListGroup.Item>
                  <a href="https://www.youtube.com">Youtube </a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="https://www.linkedin.com">Linkedin</a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="https://www.instagram.com">
                    Instagram
                  </a>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="https://twitter.com">Twitter</a>
                </ListGroup.Item>
              </ListGroup>
            </p>
          </div> */}
        </Col>
      </Row>
    </motion.div>
  );
};

export default Demo;