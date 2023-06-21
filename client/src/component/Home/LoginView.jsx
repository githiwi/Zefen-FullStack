import React, {useContext,useState}from "react";
import axios from "../../util/axiosInstance.js";
import './LoginView.css'
import { useNavigate } from "react-router-dom";
import UserContext from '../../component/userContext/UserContext.jsx'


export default function LoginView() {

  const { setUser } = useContext(UserContext); // get the setUser function from context

  const navigate = useNavigate(); // create a navigate function
  const [errorMessage, setErrorMessage] = useState(""); // add state for the error message

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
          // if login is successful, redirect to home page
          if (res.data) {
            setUser(res.data); // update the user's data
            navigate("/home");
          }
    } catch (error) {
      console.error("There was an error", error);
      setErrorMessage("Login failed. Please check your username and password."); // set the error message when login fails
    }
  };

return (
  <>
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
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>

  
  </>
);
}