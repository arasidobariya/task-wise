import { Button, Box } from '@mui/material';
import React from 'react';
import styles from './AddTask.module.css'
function AddTask() {

    return (
        <Box className={styles.box} >
            <Button variant="contained" className={styles.button}>Add Task</Button>
        </Box>
    );
}
export default AddTask;
