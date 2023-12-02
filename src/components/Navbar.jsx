import React from "react";
import { Button, Menu } from "semantic-ui-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("guest_session_id") != null;

  const logout = () => {
    localStorage.removeItem("guest_session_id");
    navigate("/auth");
  };

  return (
    <Menu fixed="top" size="huge">
      <Menu.Menu>
        <Menu.Item as={Link} to="/" style={{ fontSize: "1.5rem" }}>
          Home
        </Menu.Item>
      </Menu.Menu>

      <Menu.Menu>
        <Menu.Item as={Link} to="/rated" style={{ fontSize: "1.5rem" }}>
          Rated
        </Menu.Item>
      </Menu.Menu>

      <Menu.Menu position="right">
        {isLoggedIn ? (
          <Menu.Item
            as={Button}
            style={{ fontSize: "1.5rem" }}
            onClick={logout}
          >
            Log out
          </Menu.Item>
        ) : (
          <Menu.Item as={Link} to="/auth" style={{ fontSize: "1.5rem" }}>
            Auth
          </Menu.Item>
        )}
      </Menu.Menu>
    </Menu>
  );
};

export default Navbar;
