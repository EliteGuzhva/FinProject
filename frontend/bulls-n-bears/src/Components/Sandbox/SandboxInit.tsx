import React from 'react';
import { Button, makeStyles, TextField, Typography } from '@material-ui/core';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';

export interface SandboxInitProps {}
export const SandboxInit: React.FunctionComponent<SandboxInitProps> = (
  props
) => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date()
  );
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  const [amount, setAmount] = useState(0);
  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(event.target.value);
    setAmount(val);
  };
  return (
    <div className={classes.container}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Typography variant="subtitle1">
          Please specify sandbox environment
        </Typography>
        <KeyboardDatePicker
          className={classes.sameWidth}
          margin="normal"
          id="date-picker-dialog"
          label="Virtual start date"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>
      <TextField
        type="number"
        value={amount}
        onChange={handleAmountChange}
        label="Balance"
      />
      <Button className={classes.sameWidth}>Create sandbox</Button>
    </div>
  );
};

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sameWidth: {
    width: '166px',
  },
});
