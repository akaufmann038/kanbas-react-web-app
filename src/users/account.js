import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Account() {
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const fetchAccount = async () => {
    const account = await client.account();
    console.log(account);
    setAccount(account);
  };
  useEffect(() => {
    fetchAccount();
  }, []);

  const save = async () => {
    await client.updateUser(account);
  };
  const signout = async () => {
    await client.signout();
    navigate("/Kanbas/signin");
  };

  return (
    <div className="w-50">
      <h1>Account</h1>
      {account ? (
        <div>
          <input
            value={account.username}
            onChange={(e) =>
              setAccount({ ...account, username: e.target.value })
            }
          />
          <input
            value={account.password}
            onChange={(e) =>
              setAccount({ ...account, password: e.target.value })
            }
          />
          <input
            value={account.role}
            onChange={(e) => setAccount({ ...account, role: e.target.value })}
            readOnly
          />
          <select
            onChange={(e) => setAccount({ ...account, role: e.target.value })}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button onClick={save} className="btn btn-primary w-100">
            Save
          </button>
          <Link to="/kanbas/admin/users" className="btn btn-warning w-100">
            Users
          </Link>
          <button onClick={signout}>Signout</button>
        </div>
      ) : (
        <button onClick={() => navigate("/Kanbas/signin")}>Signin!</button>
      )}
    </div>
  );
}
export default Account;
