import React from 'react';
import { Card, TextField, Grid, Stack, Button } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import styles from './NewTaskForm.module.css'
function NewTaskForm() {
    return (

        <Card className={styles.formlayout} variant="outlined">
            <Grid container spacing={3}>
                <Grid item xs={4} md={6}>
                    <TextField fullWidth required
                        id="standard-required"
                        label="Task"
                        placeholder="Add New Task"
                        multiline
                        variant="standard"
                    /> </Grid>
                <Grid item xs={4}>
                    <TextField fullWidth
                        required
                        id="standard-required"
                        label="Owner"
                        placeholder="Add Owner Name"
                        variant="standard"
                    /></Grid>
                <Grid item xs={4}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} className={styles.DatePicker}>
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker label="Date of completion" />
                        </DemoContainer>
                    </LocalizationProvider>
                </Grid>
            </Grid>
            <Stack spacing={2} direction="row" className={styles.stack}>
                <Button variant="contained" className={styles.button}>Cancel</Button>
                <Button variant="contained" color="success" className={styles.button}>Save</Button>

            </Stack>
        </Card>

    )
}

export default NewTaskForm;