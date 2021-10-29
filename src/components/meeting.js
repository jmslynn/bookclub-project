import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Book from "./book";
import MeetingRescheduleForm from "./meetingRescheduleForm";
import { INITIAL_MEETINGS } from "../shared/meetingData.js";

export default function Meeting(props) {
  const [meetings, setMeetings] = useState(INITIAL_MEETINGS);

  function rescheduleMeeting(meeting) {
    const newArray = Array.from(meetings);
    newArray[meeting._id] = meeting;
    setMeetings(newArray);
  }

  return (
    <React.Fragment>
      {/* <MeetingRescheduleForm rescheduleMeeting={rescheduleMeeting} /> */}
      <div className="col-md-6 col-xl-3 mb-4">
        <Card>
          <Card.Header>
            Meeting: {props.meeting.date}
            <br />
            Location: {props.meeting.location}
            <Button className="float-end me-3">Reschedule</Button>
          </Card.Header>
          <Card.Body>
            <Card.Subtitle></Card.Subtitle>
            <Card.Subtitle>
              Current Book:
              {props.meeting.currentBook}
              <Book meeting={props.meeting} />
            </Card.Subtitle>
          </Card.Body>
          <Card.Footer>
            Next Book:
            {props.meeting.nextBook}
          </Card.Footer>
        </Card>
      </div>
    </React.Fragment>
  );
}
