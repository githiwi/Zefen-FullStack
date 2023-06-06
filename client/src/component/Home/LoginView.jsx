import React from "react";
import axios from "../../util/axiosInstance.js";
import './LoginView.css'

export default function LoginView() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    //get the data from the form by name
    const data = {
      userName: formData.get("userName"),
      password: formData.get("password"),
    };

    try {  
      const res = await axios.post("/api/users/signin", data );
      console.log(res.data)
    } catch (error) {
      console.error("There was an error", error);
    }
  };

  return <>
  <div className="login-form">
  <h1>Login</h1>
  <form onSubmit={handleSubmit}>
    <label>
      Username
      <input name="userName" type="text" required={true} />
    </label>
    <label>
      Password
      <input name="password" type="password" required={true} />
    </label>
    <button>Login</button>
  </form>
  </div>

  </>;
}
