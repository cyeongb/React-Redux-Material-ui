import React, { useState, useEffect } from "react";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser, updateUser } from "../redux/actions";

const useStyles = makeStyles({
  gobackButton: {
    marginTop: "2rem",
  },
  editRoot: {
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
const EditUser = () => {
  console.log("EditUser()");

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

  const { id } = useParams(); //id라는 파라미터를 사용할때
  const { user } = useSelector((state) => state.data); //root-reducer에서 가져온 data

  const { name, email, contact, address } = userData;

  useEffect(() => {
    dispatch(getSingleUser(id));
  }, []);

  useEffect(() => {
    if (user) {
      setUserData({ ...user });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    //  e.preventDefault();

    if (!name || !address || !email || !contact) {
      setError("please input all field");
    } else {
      dispatch(updateUser(userData, userData.id));
      history.push("/");
      setError("");
    }
  };

  return (
    <div className={classes.editRoot}>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => history.push("/")}
        className={classes.gobackButton}
      >
        Go Back
      </Button>
      <h2>Edit User</h2>
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
          value={name || ""}
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
          value={email || ""}
          margin="normal"
          onChange={handleInputChange}
        />
        <TextField
          id="standard-basic"
          label="CONTACT"
          type="number"
          variant="standard"
          value={contact || ""}
          name="contact"
          margin="normal"
          onChange={handleInputChange}
        />
        <TextField
          id="standard-basic"
          label="ADDRESS"
          type="text"
          variant="standard"
          value={address || ""}
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
          Save
        </Button>
      </form>
    </div>
  );
};

export default EditUser;
