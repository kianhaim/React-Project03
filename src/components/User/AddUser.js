import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = props => {
  const addUserHandler = event => {
    event.prevetnDefault();
  };

  return (
    <Card addUserCss={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username'></input>
        <label htmlFor='age'>Age (Year)</label>
        <input type='number' id='age'></input>
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
