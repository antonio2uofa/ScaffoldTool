import React from "react";

const Create = () => {
  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <label>
          Title:<input name="title"/>
        </label>
        <label>
          Description:<textarea name="postContent" rows={4} cols={40} />
        </label>
        <label>
          Due Date:<input name="dueDate"/>
        </label>
        <label>
          Status:
          <select name="status">
            <option value="notStarted">Not Started</option>
            <option value="inProgress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </label>
        <label>
          Priority:
          <select name="priority">
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </label>
      </div>
    </div>
  )
}

export default Create;
