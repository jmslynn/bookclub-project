import React from "react";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

export default function Book(props) {
  return (
    <div>
      <Card>
        {/* <Card.Img variant="top" src="https://picsum.photos/75/75" /> */}
        <Card.Header>Title: {props.meeting.title}</Card.Header>
        <ListGroup>
          <ListGroup.Item>By: {props.meeting.author}</ListGroup.Item>
          <ListGroup.Item>
            Good Reads Rating: {props.meeting.goodReadsRating}
          </ListGroup.Item>
          <ListGroup.Item>Synopsis: {props.meeting.synopsis}</ListGroup.Item>
          <ListGroup.Item>
            {/* <Button variant="secondary" size="sm">
              Add Review
            </Button> */}
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}
