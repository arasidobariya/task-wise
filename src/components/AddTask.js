import { Button, Box } from '@mui/material';
import React from 'react';
import styles from './AddTask.module.css'
import { Link } from 'react-router-dom'
function AddTask() {

    return (
        <Box className={styles.box} >
            <Link to='/AddTask'>   <Button variant="contained" className={styles.button}>  Add Task </Button> </Link>
        </Box>
    );
}
export default AddTask;
