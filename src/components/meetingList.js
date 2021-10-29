import React from "react";
import Meeting from "./meeting";

export default function MeetingList(props) {
  return (
    <div className="row">
      {props.meetings.map((m) => (
        <Meeting
          // rescheduleMeeting={props.rescheduleMeeting}
          meeting={m}
          key={m._id}
        />
      ))}
    </div>
  );
}
