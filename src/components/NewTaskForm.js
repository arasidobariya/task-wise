import React from 'react';
import { Card, TextField } from '@mui/material';

function NewTaskForm() {
    return (
        <div>
            <Card>
                <TextField
                    id="standard-textarea"
                    label="Task"
                    placeholder="Add New Task"
                    multiline
                    variant="standard"
                />
                <TextField
                    required
                    id="standard-required"
                    label="Owner"
                    placeholder="Add Owner Name"
                    variant="standard"
                />

            </Card>
        </div>
    )
}

export default NewTaskForm;