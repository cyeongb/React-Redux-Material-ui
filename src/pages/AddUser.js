import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/actions";

const useStyles = makeStyles({
  gobackButton: {
    marginTop: "2rem",
  },
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
  const dispatch = useDispatch();

  const [error, setError] = useState("");

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
  });

  const { name, email, contact, address } = userData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();

    if (!name || !address || !email || !contact) {
      setError("please input all field");
    } else {
      dispatch(addUser(userData));
      history.push("/");
      setError("");
    }
  };

  return (
    <div className={classes.formRoot}>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => history.push("/")}
        className={classes.gobackButton}
      >
        Go Back
      </Button>
      <h2>Add User</h2>
      {error.length > 0 && <h3 style={{ color: "gray" }}>error: {error}</h3>}
      <form
        autoComplete="off"
        noValidate
        className={classes.userForm}
        onSubmit={handleSubmit}
      >
        <TextField
          id="standard-basic"
          label="NAME"
          type="text"
          variant="standard"
          value={name}
          name="name"
          margin="normal"
          onChange={handleInputChange}
        />
        <TextField
          id="standard-basic"
          label="EMAIL"
          type="email"
          name="email"
          variant="standard"
          value={email}
          margin="normal"
          onChange={handleInputChange}
        />
        <TextField
          id="standard-basic"
          label="CONTACT"
          type="number"
          variant="standard"
          value={contact}
          name="contact"
          margin="normal"
          onChange={handleInputChange}
        />
        <TextField
          id="standard-basic"
          label="ADDRESS"
          type="text"
          variant="standard"
          value={address}
          name="address"
          margin="normal"
          onChange={handleInputChange}
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
