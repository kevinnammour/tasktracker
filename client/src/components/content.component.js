import React from "react";
import "../styles/content.css";
import { Search } from "./search.component";
import Add from "./add.component";
import Tasks from "./tasks.component";
import { useState } from "react";
import axios from "axios";
import ReturnHome from "./return-home.component";

export const Content = (props) => {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [newTask, setNewTask] = useState("");
  const _id = props.match.params._id;

  axios
    .get(`/tasks/${_id}`)
    .then((response) => {
      setTasks(response.data);
    })
    .catch((error) => {
    });

  const handleCheck = (_id, newStatus) => {
    const task = {
      checked: newStatus,
    };

    axios
      .post(`/tasks/updateCheckStatus/${_id}`, task)
  };

  const handleDelete = (_id) => {
    axios
      .delete(`/tasks/delete/${_id}`)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      userId: _id,
      checked: false,
      desc: newTask,
    };

    axios
      .post("/tasks/add", task)

    setNewTask("");
  };

  return (
    <>
      <h1 className="your__tasks">Your Tasks</h1>
      <div className="inputs">
        <Search search={search} setSearch={setSearch} />
        <Add
          newTask={newTask}
          setNewTask={setNewTask}
          handleSubmit={handleSubmit}
        />
      </div>
      <Tasks
        tasks={tasks}
        search={search}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <ReturnHome
      />
    </>
  );
};

export default Content;
