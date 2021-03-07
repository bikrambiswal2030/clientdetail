import React from "react";

import {
  Switch,
  Grid,
  TextField,
  Typography,
  Button,
  Paper
} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from "@material-ui/icons/Delete";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";

export default class Customer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: [],
      name: "",
      address: "",
      phoneNumber: "",
      transactionDate: "",
      amount: "",
      status: "Unpaid",
      open: false
    };
  }

  handleInput1 = (e) => {
    this.setState({
      name: e.target.value
    });
  };

  handleInput2 = (e) => {
    this.setState({
      address: e.target.value
    });
  };

  handleInput3 = (e) => {
    this.setState({
      phoneNumber: e.target.value
    });
  };
  handleInput4 = (e) => {
    this.setState({
      transactionDate: e.target.value
    });
  };

  handleInput5 = (e) => {
    this.setState({
      amount: e.target.value
    });
  };
  handleInput6 = (e) => {
    this.setState({
      status: e.target.value
    });
  };
  openDialog = () => {
    this.setState({ open: true });
  };
  closeDialog = (e) => {
    this.setState({ open: false, status: "unpaid" });
  };

  handleAdd = (e) => {
    var a1 = this.state.a;

    a1.push({
      name: this.state.name,
      address: this.state.address,
      phoneNumber: this.state.phoneNumber,
      transactionDate: this.state.transactionDate,
      amount: this.state.amount,
      status: this.state.status
    });

    this.setState({
      a: a1,
      name: "",
      address: "",
      phoneNumber: "",
      transactionDate: "",
      amount: "",
      status: "unpaid",
      open: false
    });
  };

  handleDelete = (index) => {
    var a1 = this.state.a;
    a1.splice(index, 1);
    this.setState({
      a: a1
    });
  };
  useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200
    }
  }));

  render() {
    return (
      <Grid>
        <Button
          variant="contained"
          color="primary"
          style={{
            top: "20px",
            float: "right",
            borderRadius: "25px"
          }}
          onClick={this.openDialog}
        >
          add new customer
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.closeDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"add new cutomer"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <center>
                <TextField
                  label="Name"
                  required="true"
                  margin="dense"
                  variant="outlined"
                  required="true"
                  value={this.state.name}
                  onChange={this.handleInput1}
                />
                <br />

                <TextField
                  label="address"
                  required="true"
                  required="true"
                  margin="dense"
                  variant="outlined"
                  value={this.state.address}
                  onChange={this.handleInput2}
                />
                <br />

                <TextField
                  label="phone Number"
                  required="true"
                  margin="dense"
                  type="number"
                  variant="outlined"
                  value={this.state.phoneNumber}
                  onChange={this.handleInput3}
                />

                <br />
                <FormControl
                  required
                  variant="outlined"
                  onSubmit={this.handleInput6}
                >
                  <InputLabel htmlFor="age-native-required">status</InputLabel>
                  <Select
                    native
                    value={this.state.status}
                    onChange={this.handleInput6}
                    label="status"
                    required="true"
                  >
                    <option value={"Unpaid"}>Unpaid</option>
                    <option value={"Paid"}>Paid</option>
                  </Select>
                  <FormHelperText>Required</FormHelperText>
                </FormControl>
                <br />
                {this.state.status === "Paid" ? (
                  <TextField
                    label="Amount"
                    required="true"
                    margin="dense"
                    variant="outlined"
                    type="number"
                    value={this.state.amount}
                    onChange={this.handleInput5}
                  />
                ) : (
                  ""
                )}
                <br />
                {this.state.status === "Paid" ? (
                  <form className={this.state.container}>
                    <TextField
                      margin="dense"
                      variant="outlined"
                      id="date-picker-dialog"
                      label="trasaction date"
                      type="date"
                      value={this.state.transactionDate}
                      onChange={this.handleInput4}
                      defaultValue=""
                      className={this.state.textField}
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  </form>
                ) : (
                  ""
                )}
              </center>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              onClick={this.closeDialog}
              color="primary"
            >
              Cancel
            </Button>
            <Button
              color="primary"
              variant="contained"
              disabled={
                this.state.name === "" ||
                this.state.address === "" ||
                this.state.phoneNumber === "" ||
                this.state.status === "" ||
                (this.state.status === "Paid" && this.state.amount === "") ||
                (this.state.status === "Paid" &&
                  this.state.transactionDate === "")
                  ? true
                  : false
              }
              onClick={this.handleAdd}
            >
              add
            </Button>
          </DialogActions>
        </Dialog>
        <center>
          <TableContainer component={Paper}>
            <h1>CLIENT DETAILS</h1>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Address</TableCell>
                  <TableCell align="right">ContactNum</TableCell>
                  <TableCell align="right">Transaction Date</TableCell>
                  <TableCell align="right">Amount</TableCell>
                  <TableCell align="right">Status</TableCell>
                  <TableCell style={{ paddingRight: "60px" }} align="right">
                    Delete Customer
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.a.map((obj, index, phoneNumber) => {
                  return (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {obj.Id}
                      </TableCell>

                      <TableCell align="right">{obj.name}</TableCell>
                      <TableCell align="right">{obj.address}</TableCell>
                      <TableCell align="right">{obj.phoneNumber}</TableCell>
                      <TableCell align="right">{obj.transactionDate}</TableCell>
                      <TableCell align="right">{obj.amount}</TableCell>
                      <TableCell align="right">{obj.status}</TableCell>

                      <TableCell
                        style={{ paddingRight: "114px" }}
                        align="right"
                      >
                        <Button
                          className="btn"
                          onClick={(e) => {
                            this.handleDelete(e, phoneNumber);
                          }}
                          style={{
                            backgroundColor: "darkred"
                          }}
                          size="small"
                        >
                          <DeleteIcon />
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </center>
      </Grid>
    );
  }
}
