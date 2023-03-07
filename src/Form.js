import React, { useEffect, useState } from "react";

const Form = (props) => {
  const { addMember, listLength, editMember, updateMember } = props;
  const [userRegister, setUserRegister] = useState({
    name: "",
    email: "",
    jobTitle: "",
    img: "",
  });
  const handleChange = (e) => {
    setUserRegister({
      ...userRegister,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    editMember.id > 0
      ? updateMember(userRegister)
      : addMember({ ...userRegister, id: listLength + 1 });
  };
  useEffect(() => {
    setUserRegister(editMember);
  }, [editMember]);
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={userRegister.name}
        onChange={handleChange}
        required={true}
      />
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={userRegister.email}
        onChange={handleChange}
        required={true}
      />
      <label htmlFor="jobTitle">Job Title</label>
      <input
        type="text"
        name="jobTitle"
        placeholder="Job Title"
        value={userRegister.jobTitle}
        onChange={handleChange}
        required={true}
      />
      <label htmlFor="img">Profile Picture</label>
      <input
        type="text"
        name="img"
        placeholder="Img Url"
        value={userRegister.img}
        onChange={handleChange}
      />
      <button type="submit">{editMember.id > 0 ? `Edit` : `Yeni Ekle`}</button>
    </form>
  );
};

export default Form;
