import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

export default function MeetingRescheduleForm({ date, onSave }) {
  const [formData, setFormData] = useState({
    date: ""
  });

  let initialDateValue = "";

  function handleNewDate({ id, date }) {
    this.setState({
      data: this.data.map((el) =>
        el._id === id ? Object.assign({}, el, { date }) : el
      )
    });
  }
  //   if(date) {
  //       initialDateValue = date.text;
  //   }
  //   const [dateValue, setDateValue] = useState(initialDateValue);
  //   const handleDateChange = (e) => {
  //       setDateValue(e.target.value);
  //   }

  //   const handleSave = () => {
  //       const updatedMeeting = {
  //           text: dateValue,
  //       }
  //       onSave(updatedMeeting);
  //   }

  // const handleSubmit = () => {
  //   const meetingData = {
  //     date: dateValue
  //   };
  //   setDateValue("");
  //   props.createMeeting(meetingData);
  // };

  return (
    <div>
      <Card>
        <h3>Reschedule Meeting</h3>
        <h5>date</h5>
        <Form>
          <Form.Group>
            <Form.Label htmlFor="date">New Date:</Form.Label>
            <Form.Control type="text" name="date" value={initialDateValue} />
          </Form.Group>
          <Button className="btn btn-success" variant="contained">
            Save
          </Button>
        </Form>
      </Card>
    </div>
  );
}
