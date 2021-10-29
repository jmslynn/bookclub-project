import { INITIAL_MEETINGS } from "./meetingData";

let meetings = INITIAL_MEETINGS;

export const getMeetings = async () => {
  return [...meetings];
};

export const updateMeeting = async (meetingId, meetingData) => {
  const meetingIndex = meetings.findIndex((m) => m._id === meetingId);
  const updatedNote = { _id: meetingId, ...meetingData };
  meetings[meetingIndex] = updatedNote;
  return { ...updatedNote };
};
