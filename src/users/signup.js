import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
function Signup() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(credentials);
      navigate("/Kanbas/account");
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  const signout = async () => {
    await client.signout();
    navigate("/Kanbas/signin");
  };

  return (
    <div>
      <h1>Signup</h1>
      {error && <div>{error}</div>}
      <input
        value={credentials.username}
        placeholder="username"
        onChange={(e) =>
          setCredentials({
            ...credentials,
            username: e.target.value,
          })
        }
      />
      <input
        value={credentials.password}
        placeholder="password"
        onChange={(e) =>
          setCredentials({
            ...credentials,
            password: e.target.value,
          })
        }
      />
      <input
        value={credentials.firstName}
        placeholder="firstName"
        onChange={(e) =>
          setCredentials({
            ...credentials,
            firstName: e.target.value,
          })
        }
      />
      <input
        value={credentials.lastName}
        placeholder="lastName"
        onChange={(e) =>
          setCredentials({
            ...credentials,
            lastName: e.target.value,
          })
        }
      />
      <input
        value={credentials.email}
        placeholder="email"
        onChange={(e) =>
          setCredentials({
            ...credentials,
            email: e.target.value,
          })
        }
      />
      <button onClick={signup}>Signup</button>
      <button onClick={signout}>Signout</button>
      <button onClick={() => navigate("/Kanbas/signin")}>Signin</button>
    </div>
  );
}
export default Signup;
