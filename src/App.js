import "./styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import MeetingList from "./components/meetingList";
import MemberList from "./components/memberList";
import Settings from "./components/settings";
import TopNav from "./components/topNav";
import ProjectAbout from "./components/projectAbout";
import { INITIAL_MEETINGS } from "./shared/meetingData.js";
import { INITIAL_MEMBERS } from "./shared/memberData.js";
import { INITIAL_BOOKS } from "./shared/bookData.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

export default function App() {
  const [meetings, setMeetings] = useState(INITIAL_MEETINGS);
  const [members, setMembers] = useState(INITIAL_MEMBERS);
  const [books, setBooks] = useState(INITIAL_BOOKS);

  return (
    <React.Fragment>
      <Router>
        <TopNav />
        <div>
          <ButtonGroup>
            <Button variant="outline-secondary">
              {/* changes url to change view */}
              <Link to="/">Home</Link>
            </Button>
            <Button variant="outline-secondary">
              {/* changes url to change view */}
              <Link to="/members">Members</Link>
            </Button>
            <Button variant="outline-secondary">
              {/* changes url to change view */}
              <Link to="/about">About</Link>
            </Button>
          </ButtonGroup>
          {/* routes & components */}
          <Switch>
            <Route path="/members">
              <MemberList members={members} />
            </Route>
            <Route path="/about">
              <ProjectAbout />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/">
              <MeetingList
                meetings={meetings}
                books={books}
                // rescheduleMeeting={rescheduleMeeting}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}
function Home() {
  return <h2>Home</h2>;
}
