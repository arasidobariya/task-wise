import React from 'react';
import { styled } from '@mui/material/styles';

import styles from './Tasks.module.css';
import { TableHead, TableRow, Table, TableBody, TableCell, Grid, tableCellClasses, Button } from '@mui/material';
import AddTask from './AddTask';
function Tasks(props) {



  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.common.white,

    },

  }));
  return (<div>
    <Grid container  >
      <Grid item xs={12} >

        <Table className={styles.table}>
          <TableHead >
            <TableRow >
              <StyledTableCell >Tasks</StyledTableCell>
              <StyledTableCell>Owner</StyledTableCell>
              <StyledTableCell > Date of Completion</StyledTableCell>
              <StyledTableCell >Status </StyledTableCell>
              <StyledTableCell > </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.items.map((task) => (
              <TableRow key={task.id} > <TableCell>{task.task} </TableCell>
                <TableCell> {task.owner}</TableCell>
                <TableCell>{task.date}</TableCell>
                <TableCell></TableCell>
                <TableCell><Button variant="contained" className={styles.button} size="small">Edit</Button>
                  <Button variant="contained" color="error" className={styles.button} size="small" >Delete </Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </Grid>
    </Grid>
    <AddTask />
  </div >
  )
}

export default Tasks;