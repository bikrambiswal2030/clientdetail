import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactionDate: ""
    };
  }
  handleInput4 = (date) => {
    this.setState({
      transactionDate: date
    });
  };
  render() {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label=""
            format="dd/MM/yyyy"
            value={this.state.transactionDate}
            onChange={this.handleInput4}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    );
  }
}
