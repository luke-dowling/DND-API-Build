import React from "react";

function AddUser() {
  return (
    <div>
      <label className="userName">User Name: </label>
      <input className="userInput" type="text" />
      <button className="userSubmit">Submit</button>
    </div>
  );
}

// await function to await for the results to be stored ?

export default AddUser;
