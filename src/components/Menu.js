import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  border-bottom: 1px solid #f8f8f8;
  > div {
    display: flex;
    justify-content: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  > div > p {
    margin-bottom: 0;
    margin: 0 10px 10px 0;

    @media (max-width: 450px) {
      margin: 0 30px 10px 0;
    }
  }

  > div > p > a {
    text-transform: capitalize;
    text-decoration: none;
    transition: 0.4s;
    color: black;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }

  .username {
    color: #00976a;
  }

  > div > p > span {
    color: #989898;
  }
`;
const Menu = ({ users }) => {
  return (
    <Div>
      <div>
        <p>
          <Link to="/">User Details</Link>
        </p>
        <p>
          <Link to="/home">Home</Link>
        </p>

        {users && users.id ? (
          <p>
            <span>Welcome back, </span>
            <Link to="/" className="username">
              {users.first_name} {users.last_name}
            </Link>
          </p>
        ) : (
          <p>
            <Link to="/login">Log in</Link>
          </p>
        )}
      </div>
    </Div>
  );
};

export default Menu;
