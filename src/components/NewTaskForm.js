import React from "react";
import { Card, TextField, Grid, Stack, Button } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import styles from "./NewTaskForm.module.css";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

function NewTaskForm(props) {
  const [enteredTask, setEnteredTask] = useState("");
  const [enteredOwner, setEnteredOwner] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [error, setError] = useState(null);

  const taskChangeHandler = (event) => {
    setEnteredTask(event.target.value);
  };
  const ownerChangeHandler = (event) => {
    setEnteredOwner(event.target.value);
  };
  const dateChangeHandler = (date) => {
    setEnteredDate(date.format("YYYY-MM-DD"));
  };
  const navigate = useNavigate();
  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredDate === "") {
      setError("Please select a date");
    } else {
      const taskData = {
        task: enteredTask,
        owner: enteredOwner,
        date: enteredDate,
      };

      props.onSaveTaskData(taskData);
      navigate("/");
      setEnteredTask("");
      setEnteredOwner("");
      setEnteredDate("");
    }
  };

  return (
    <Card className={styles.formlayout} variant="outlined">
      <form onSubmit={submitHandler}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              id="standard-required"
              label="Task Name"
              placeholder="Add New Task"
              multiline
              variant="standard"
              value={enteredTask}
              onChange={taskChangeHandler}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              id="standard-required"
              label="Owner"
              placeholder="Add Owner Name"
              variant="standard"
              value={enteredOwner}
              onChange={ownerChangeHandler}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <LocalizationProvider
              dateAdapter={AdapterDayjs}
              className={styles.DatePicker}
            >
              <DatePicker
                label="Date of completion"
                disablePast
                error
                onChange={dateChangeHandler}
                slotProps={{ textField: { helperText: error } }}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
        <Stack spacing={2} direction="row" className={styles.stack}>
          <Link to="/">
            <Button variant="contained" className={styles.button}>
              Cancel
            </Button>
          </Link>
          <Button
            type="submit"
            variant="contained"
            color="success"
            className={styles.button}
          >
            Save
          </Button>
        </Stack>
      </form>
    </Card>
  );
}

export default NewTaskForm;
