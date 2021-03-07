import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Switch, Grid, TextField, Typography, Button } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import EnhancedTableHead from "@material-ui/core/TableHead";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";

import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";
export default class CustomerDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: [],
      name: "",
      address: "",
      phoneNumber: "",
      emailId: "",
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

  handleInput5 = (e) => {
    this.setState({
      emailId: e.target.value
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

  handleAdd = () => {
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
          <AddIcon />
          Add New
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.closeDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"New client"}</DialogTitle>
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
                  label="Email Id"
                  required="true"
                  margin="dense"
                  variant="outlined"
                  required="true"
                  value={this.state.emailId}
                  onChange={this.handleInput5}
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
                  size="small"
                  value={this.state.phoneNumber}
                  onChange={this.handleInput3}
                />

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
                this.state.emailId === ""
              }
              onClick={this.handleAdd}
            >
              <AddIcon />
              add
            </Button>
          </DialogActions>
        </Dialog>
        <center>
          <TableContainer component={Paper}>
            <h1>CLIENTS</h1>
            <Table EnhancedTableHead aria-label="enhanced table">
              <EnhancedTableHead />
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={this.isItemSelected}
                      inputProps={{
                        "aria-labelledby": this.labelId
                      }}
                    />
                  </TableCell>
                  <TableCell>Customer</TableCell>

                  <TableCell align="right">created on</TableCell>
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
                {this.state.a.map(
                  (obj, index, name, isItemSelected, labelId) => {
                    isItemSelected = () => obj.name;
                    labelId = `enhanced-table-checkbox-${index}`;
                    return (
                      <TableRow role="checkbox" key={index}>
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={this.isItemSelected}
                            inputProps={{
                              "aria-labelledby": labelId
                            }}
                          />
                        </TableCell>
                        <TableCell
                          id={labelId}
                          scope="row"
                          component="th"
                          scope="row"
                        >
                          {obj.name}
                        </TableCell>

                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right">{obj.status}</TableCell>

                        <TableCell
                          style={{ paddingRight: "114px" }}
                          align="right"
                        >
                          <Button
                            className="btn"
                            onClick={(e) => {
                              this.handleDelete(e, name);
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
                  }
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </center>
      </Grid>
    );
  }
}
