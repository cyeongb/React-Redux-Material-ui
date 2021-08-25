import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  TableContainer,
  Paper,
  ButtonGroup,
  Button,
} from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";

import { useDispatch, useSelector } from "react-redux";
import { deleteUser, loadUsers } from "../redux/actions";
import { PersonAdd } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 900,
    marginTop: 100,
  },
  deleteButton: {
    marginRight: "20px",
    borderRadius: "30px !important",
  },
  editButton: {
    borderRadius: "30px !important",
  },
  addButton: {
    marginTop: "2rem",
  },
});

const Home = () => {
  console.log("Home()");
  const classes = useStyles();

  const dispatch = useDispatch();
  const history = useHistory();

  const { users } = useSelector((state) => state.data);

  useEffect(() => {
    console.log("useEffect()");
    dispatch(loadUsers());
  }, []);

  const handleDelete = (id) => {
    console.log("handleDelete()");
    if (window.confirm("정말 삭제 하시겠습니까?")) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <div className="home root">
      <div>
        <Button
          variant="contained"
          color="primary"
          className={classes.addButton}
          onClick={() => history.push("/addUser")}
        >
          Add User
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>NAME</StyledTableCell>
              <StyledTableCell align="center">EMAIL</StyledTableCell>
              <StyledTableCell align="center">CONTRACT</StyledTableCell>
              <StyledTableCell align="center">ADDRESS</StyledTableCell>
              <StyledTableCell align="center">ACTION</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              users.map((user) => (
                <StyledTableRow key={user.id}>
                  <StyledTableCell component="th" scope="row">
                    {user.name}
                  </StyledTableCell>
                  <StyledTableCell align="center">{user.email}</StyledTableCell>
                  <StyledTableCell align="center">
                    {user.contact}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {user.address}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <ButtonGroup variant="text" aria-label="text button group">
                      <Button
                        variant="contained"
                        color="secondary"
                        className={classes.deleteButton}
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.editButton}
                        onClick={() => history.push(`/editUser/${user.id}`)}
                      >
                        Edit
                      </Button>
                    </ButtonGroup>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Home;
