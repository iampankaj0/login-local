import React from "react";
import styled from "styled-components";
import Moment from "moment";
import { Link } from "react-router-dom";
import Menu from "./Menu";
// import { format } from 'date-fns';

const Main = styled.div`
  display: flex;
  justify-content: center;
  ${"" /* align-items: center; */}
  height: 100vh;
  overflow-y: auto;
`;

const Div = styled.div`
  padding: 50px 0;

  > h3 {
    text-align: center;
    margin-bottom: 15px;
    color: #076b85;
    font-weight: 700;
  }

  h5 {
    font-weight: 500;
    text-align: center;
  }

  h5 > span {
    color: #076b85;
    font-weight: 700;
  }

  button {
    background: #076b85;
    color: #fff;
    border: 1px solid #076b85;
    border-radius: 8px;
    padding: 6px 15px;
    text-transform: uppercase;
    display: block;
    margin: 0 auto;
    cursor: pointer;
    margin-top: 25px;

    &:hover {
      background: #fff;
      color: #076b85;
      border: 1px solid #076b85;
    }
  }
`;

const HomePage = ({ addUserLocal, users }) => {
  //formating the date which comes from api
  const userBirthDate = Moment(users.dob).format("DD-MM-YYYY");

  return (
    <>
      <Main>
        <Div>
          <Menu users={users} />
          <h3>Home Page</h3>
          <div>
            {users && users.id ? (
              <h5>
                Hello
                <span>
                  {" "}
                  {users.first_name} {users.last_name}.{" "}
                </span>
                <br />
                What is the weather in{" "}
                <span>
                  {" "}
                  {users.address}, {users.city}{" "}
                </span>
                ?
              </h5>
            ) : (
              <h5>
                <span>
                  Please <Link to="/login">Login</Link> to see details...
                </span>
              </h5>
            )}

            {users && users.id ? (
              <button onClick={() => addUserLocal({})}>log out</button>
            ) : (
              <button>
                <Link to="/login">Login</Link>
              </button>
            )}
          </div>
        </Div>
      </Main>
    </>
  );
};

export default HomePage;
