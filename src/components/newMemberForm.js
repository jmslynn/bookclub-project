import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function NewMemberForm(props) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: ""
  });
  function handleChange(event) {
    event.preventDefault();
    setFormData({
      ...formData,
      // read input name and use it for property name and assign the value
      [event.target.name]: event.target.value
    });
  }
  function handleSubmit(event) {
    console.log(formData);
    props.addMember(formData);
  }
  return (
    <Card>
      <h3>Add A New Member</h3>
      <Form>
        <Form.Group>
          <Form.Label htmlFor="firstName">First Name</Form.Label>
          <Form.Control type="text" name="firstName" onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="lastName">Last Name</Form.Label>
          <Form.Control type="text" name="lastName" onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="phone">Phone</Form.Label>
          <Form.Control type="text" name="phone" onChange={handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="address">Address</Form.Label>
          <Form.Control type="text" name="address" onChange={handleChange} />
        </Form.Group>
        <Button onClick={handleSubmit}>Add</Button>
      </Form>
    </Card>
  );
}
