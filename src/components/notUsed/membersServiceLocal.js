import { INITIAL_MEMBERS } from "./memberData";

let members = INITIAL_MEMBERS;
let nextMemberId = 4;

export const getMembers = async () => {
  return [...members];
};

export const createMember = async (memberData) => {
  const newMember = { _id: nextMemberId++, ...memberData };
  members.push(newMember);
  return { ...newMember };
};

export const deleteMember = async (memberId) => {
  members = members.filter((m) => m._id !== memberId);
};
