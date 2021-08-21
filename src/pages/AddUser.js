import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  formRoot: {
    marginTop: "7rem",
  },
  userForm: {
    display: "flex",
    flexDirection: "column",
    width: "35rem",
    alignItems: "center",
    margin: "3% 0 0 34%",
    "& .MuiFormControl-marginNormal": {
      width: "30rem",
    },
  },
});
const AddUser = () => {
  const classes = useStyles();
  const history = useHistory();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });

  const { name, email, contact, address } = userData;

  return (
    <div className={classes.formRoot}>
      <h2>Add User</h2>
      <form autocomplete="off" className={classes.userForm}>
        <TextField
          id="standard-basic"
          label="NAME"
          type="text"
          variant="standard"
          value={name}
          margin="normal"
        />
        <TextField
          id="standard-basic"
          label="EMAIL"
          type="email"
          variant="standard"
          value={email}
          margin="normal"
        />
        <TextField
          id="standard-basic"
          label="CONTACT"
          type="number"
          variant="standard"
          value={contact}
          margin="normal"
        />
        <TextField
          id="standard-basic"
          label="ADDRESS"
          type="text"
          variant="standard"
          value={address}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.submitButton}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddUser;
