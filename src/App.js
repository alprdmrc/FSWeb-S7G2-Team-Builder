import React, { useState } from "react";
import Form from "./Form";
import "./App.css";
const TEAM_LIST = [
  {
    id: 1,
    name: "Alper",
    email: "alper@alper.com",
    jobTitle: "Chemical Engineering",
    img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
  },
  {
    id: 2,
    name: "Mehmet",
    email: "mehmet@mehmet.com",
    jobTitle: "Frontend Developer",
    img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
  },
];

const model = {
  name: "",
  email: "",
  jobTitle: "",
  img: "",
};

function App() {
  const [teamList, setTeamList] = useState(TEAM_LIST);
  const [toBeEdit, setToBeEdit] = useState(model);
  const addTeamList = (member) => {
    setTeamList([...teamList, member]);
  };
  const updateTeamList = (updatedMember) => {
    setTeamList(
      teamList.map((member) =>
        member.id === updatedMember.id ? updatedMember : member
      )
    );
    setToBeEdit(model);
  };
  const handleEdit = (member) => {
    toBeEdit.id > 0 ? cancelEdit() : setToBeEdit(member);
  };
  const cancelEdit = () => {
    setToBeEdit(model);
  };

  return (
    <div className="app">
      <Form
        updateMember={updateTeamList}
        editMember={toBeEdit}
        addMember={addTeamList}
        listLength={teamList.length}
      />
      {teamList.map((member) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            key={member.id}
          >
            <img
              style={{ width: "100px", height: "100px" }}
              src={member.img}
              alt={member.name}
            />
            <h4>{member.name}</h4>
            <p>{member.email}</p>
            <h6>{member.jobTitle}</h6>
            <button onClick={() => handleEdit(member)}>
              {member.id === toBeEdit.id ? `Cancel` : `Edit`}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
