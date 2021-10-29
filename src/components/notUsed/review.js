import React from "react";
import Card from "react-bootstrap/Card";

export default function Review(props) {
  return (
    <div className="col-md-6 col-xl-3 mb-4">
      <Card>
        <Card.Header>Review On: {props.review.book}</Card.Header>
        <Card.Body>
          <Card.Subtitle>User: {props.review.user}</Card.Subtitle>
          <Card.Subtitle>
            Date:
            {props.review.date}
          </Card.Subtitle>
          <Card.Text>{props.review.review}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
