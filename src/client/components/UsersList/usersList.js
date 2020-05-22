import React, { useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions";

const UsersList = ({ users, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, []);
  const [usersData] = users;
  return (
    <div>
      <h1>Here's a list of users.</h1>
      {usersData?.map(({ id, name }) => {
        return <div key={id}>{name}</div>;
      })}
    </div>
  );
};

const mapStateToProps = ({ users }) => ({
  users,
});

export default connect(mapStateToProps, { fetchUsers })(UsersList);
