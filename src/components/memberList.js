import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Member from "./member";
import NewMemberForm from "./newMemberForm";
import { INITIAL_MEMBERS } from "../shared/memberData";

export default function MemberList(props) {
  const [members, setMembers] = useState(INITIAL_MEMBERS);

  function addMember(member) {
    console.log(members);
    // create id for new member
    member._id = members.length + 1;
    // create new array and
    // const newArray = Array.from(members);
    let copy = members.push(member);
    // pushing new array into state
    // setMembers(newArray);
  }

  function handleDeleteMember(memberId) {
    const newMemberList = members.filter((i) => i._id !== memberId);
    setMembers(newMemberList);
  }

  return (
    <Container>
      <h1>Member List</h1>
      <div className="row">
        <NewMemberForm addMember={addMember} />
      </div>
      <div className="row">
        {members.map((m) => (
          <Member deleteMember={handleDeleteMember} member={m} key={m._id} />
        ))}
      </div>
    </Container>
  );
}
