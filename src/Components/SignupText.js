import React from "react";
import styled from "styled-components";

const SignupText = (props) => {
  return (
    <>
      {/* <h1>{props.heading}</h1>
      <p style={{ marginBottom: "1rem" }}>{props.text}</p>
      <SignUpGoogle>
        <BsGoogle />
        <h4>{props.signUpText}</h4>
      </SignUpGoogle>
      <SignUpFacebook>
        <BsFacebook />
        <h4>{props.signupfb}</h4>
      </SignUpFacebook>
      <hr
        style={{
          border: "2px solid #808080",
          margin: "8px 0",
          // backgroundColor: "#808080",
        }}
      />
      <InputText>
        <input type="text" placeholder="Enter first name..." />
        <input type="text" placeholder="Enter last name..." />
        <input type="email" placeholder="Enter email..." />
        <input
          type="password"
          name=""
          id="passowrd"
          placeholder="Enter password..."
        />
      </InputText>
      <AlreadyMemberLogin>
        <p>
          Already a member
          <span>
            <Link to="/login">Login</Link>
          </span>
        </p>
      </AlreadyMemberLogin> */}
    </>
  );
};

export default SignupText;
const SignUpGoogle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 2px solid #dd4b39;
  color: #dd4b39;
  padding: 10px;
  border-radius: 15px;
  gap: 0.75rem;
  width: 14rem;
  transition: all 300ms ease-in;
  cursor: pointer;
  :hover {
    background-color: #dd4b39;
    color: #fff;
  }
`;
const SignUpFacebook = styled(SignUpGoogle)`
  border: 2px solid #3b5998;
  color: #3b5998;
  margin-bottom: 1rem;
  :hover {
    background-color: #3b5998;
    color: #fff;
  }
`;
const InputText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 1rem 0;
  input[type="text"],
  input[type="email"],
  input[type="password"] {
    padding: 12px 10px;
    border: 2px solid white;
    border-radius: 15px;
    transition: all 300ms;
    outline: none;
    width: 100%;
    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: rgba(128, 128, 128, 0.8);
      // font-weight: bold;
      opacity: 1; /* Firefox */
    }
    :-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: rgba(128, 128, 128, 0.7);
      // font-weight: bold;
      opacity: 1;
    }
    ::-ms-input-placeholder {
      /* Microsoft Edge */
      color: rgba(128, 128, 128, 0.7);
      // font-weight: bold;
      opacity: 1;
    }
  }

  input[type="text"]:focus,
  input[type="email"]:focus,
  input[type="password"]:focus {
    // border: 2px solid #ff7f25;
    border: 2px solid #000;
  }
`;

const AlreadyMemberLogin = styled.div`
  p {
    text-align: center;
    span {
      margin-left: 6px;
      text-decoration: underline;
      a {
        text-decoration: none;
        color: #000;
        font-weight: bold;
      }
    }
  }
`;

/* input[type="text"]:focus {
    padding: 5px 10px;
    border: 2px solid #ff7f25;
    width: 200%;
  }
  input[type="email"] {
    padding: 5px 10px;
    border: 2px solid #d9d9d9;
    transition: all 300ms;
    width: 100%;
  }
  input[type="email"]:focus {
    padding: 5px 10px;
    border: 2px solid #ff7f25;
    outline: none;
    width: 200%;
  }
  input[type="password"] {
    padding: 5px 10px;
    border: 2px solid #d9d9d9;
    transition: all 300ms;
    outline: none;
    width: 100%;
  }
  input[type="password"]:focus {
    padding: 5px 10px;
    border: 2px solid #ff7f25;
    width: 200%;
  } */
