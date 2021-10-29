import React from "react";

export default function ProjectAbout() {
  return (
    <div className="row">
      <h1>About This Project</h1>
      <h2>Requirements</h2>
      <ul>
        <li>React</li>
        <li>React Router</li>
        <li>React Bootstrap</li>
        <li>3 pages</li>
        <li>10 components</li>
        <li>CRUD processes</li>
      </ul>

      <h2>Planned Updates</h2>
      <ul>
        <li>Connect to GoodReads API</li>
        <li>Connect to mock API for other data</li>
      </ul>
    </div>
  );
}
