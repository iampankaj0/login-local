import React from "react";
import styled from "styled-components";
import Moment from "moment";
import Menu from "./Menu";
// import { format } from 'date-fns';

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  overflow-y: auto;
`;

const Div = styled.div`
  padding: 50px 15px;

  > h3 {
    text-align: center;
    margin-bottom: 15px;
    color: #076b85;
    font-weight: 700;
  }

  h5 {
    font-weight: 500;
  }

  h5 > span {
    width: 110px !important;
    display: inline-table;
    color: #076b85;
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

const Home = ({ addUserLocal, users }) => {
  const userBirthDate = Moment(users.dob).format("DD-MM-YYYY");

  return (
    <Main>
      <Div>
        <Menu users={users} />
        <h3>User Details</h3>
        <div>
          <h5>
            <span>Name:</span> {users.first_name} {users.last_name}
          </h5>
          <h5>
            <span>Email Address:</span> {users.email}
          </h5>
          <h5>
            <span>Phone Number:</span> {users.phone_no}
          </h5>
          <h5>
            <span>Birth Date:</span> {users.dob ? userBirthDate : ""}
          </h5>
          <h5>
            <span>Address:</span> {users.address}
          </h5>
          <h5>
            <span>Pin Code:</span> {users.pincode}
          </h5>
          <h5>
            <span>City:</span> {users.city}
          </h5>
          <h5>
            <span>State:</span> {users.state}
          </h5>

          <button onClick={() => addUserLocal({})}>log out</button>
        </div>
      </Div>
    </Main>
  );
};

export default Home;
