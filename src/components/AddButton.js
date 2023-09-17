import { Button, Box } from "@mui/material";
import React from "react";
import styles from "./AddButton.module.css";
import { Link } from "react-router-dom";
function AddButton() {
  return (
    <Box className={styles.box}>
      <Link to="/AddTask">
        <Button variant="contained" className={styles.button}>
          Add Task
        </Button>
      </Link>
    </Box>
  );
}
export default AddButton;
