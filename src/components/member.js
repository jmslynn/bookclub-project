import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function Member(props) {
  return (
    <div className="col-md-6 col-xl-3 mb-4">
      <Card>
        <Card.Header>
          {props.member.firstName}&nbsp;
          {props.member.lastName}
          <Button
            className="float-end me-3"
            onClick={() => props.deleteMember(props.member._id)}
          >
            Delete Member
          </Button>
        </Card.Header>
        <Card.Body>
          <Card.Subtitle></Card.Subtitle>
          Phone: {props.member.phone}
          <br />
          {props.member.address}
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
    </div>
  );
}
