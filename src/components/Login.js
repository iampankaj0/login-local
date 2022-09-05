import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { activeUser } from "../context/UserContext";
import Menu from "../components/Menu"

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Div = styled.div`
  > input {
    display: block;
    margin-bottom: 15px;
    font-size: 18px;
  }
  > input:focus {
    outline: none;
  }
  > button {
    background: transparent;
    border: 1px solid #000;
    border-radius: 8px;
    padding: 6px 15px;
    text-transform: uppercase;
    display: block;
    margin: 0 auto;
    cursor: pointer;
  }
`;

const Login = ({ addUserLocal, users }) => {
  const URL = "http://35.91.35.188/api/login";
  const history = useHistory();

  const [user, setUser] = useState([]);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
    // console.log(newData);
  };

  //Handle Login
  const handleLogin = async () => {
    const { email, password } = data;
    const response = await axios.post(URL, { email, password });
    try {
      if (response.data.success === false) {
        alert(response.data.message);
      } else if (response.data.success === true) {
        alert(response.data.message);
        const userData = response.data.loginData;
        setUser(userData);
        addUserLocal(userData);
        history.push("/");
      }
    } catch (error) {
      console.log(error);
      alert("pending");
    }
  };

  return (
    <Main>
      <Div>
      <Menu users={users} />
        <input
          name="email"
          onChange={handleInput}
          type="email"
          placeholder="email"
        />
        <input
          name="password"
          onChange={handleInput}
          type="password"
          placeholder="password"
        />
        <button onClick={handleLogin}>login</button>
      </Div>
    </Main>
  );
};

export default Login;
