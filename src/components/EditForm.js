import React, { useContext } from "react";
import { Card, TextField, Grid, Stack, Button } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import styles from "./NewTaskForm.module.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import dayjs from "dayjs";
import taskContext from "../taskContext";

function EditForm(props) {
  const tasks = useContext(taskContext);
  const param = useParams();
  const index = param.index;
  const navigate = useNavigate();
  const [enteredTask, setEnteredTask] = useState(tasks[index].task);
  const [enteredOwner, setEnteredOwner] = useState(tasks[index].owner);
  const [enteredDate, setEnteredDate] = useState(tasks[index].date);

  const taskChangeHandler = (event) => {
    setEnteredTask(event.target.value);
  };
  const ownerChangeHandler = (event) => {
    setEnteredOwner(event.target.value);
  };
  const dateChangeHandler = (date) => {
    setEnteredDate(date.format("YYYY-MM-DD"));
  };

  const editHandler = (event) => {
    event.preventDefault();
    const task = {
      task: enteredTask,
      owner: enteredOwner,
      date: enteredDate,
    };
    props.onSaveItem(index, task);
    navigate("/");
  };

  return (
    <Card className={styles.formlayout} variant="outlined">
      <form onSubmit={editHandler}>
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
              onChange={taskChangeHandler}
              defaultValue={tasks[index].task}
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
              onChange={ownerChangeHandler}
              defaultValue={tasks[index].owner}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <LocalizationProvider
              dateAdapter={AdapterDayjs}
              className={styles.DatePicker}
            >
              <DemoContainer required components={["DatePicker"]}>
                <DatePicker
                  label="Date of completion"
                  disablePast
                  slotProps={{
                    textField: {
                      required: true,
                    },
                  }}
                  onChange={dateChangeHandler}
                  defaultValue={dayjs(tasks[index].date)}
                />
              </DemoContainer>
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

export default EditForm;
