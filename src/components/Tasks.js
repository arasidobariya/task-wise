import React from 'react';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import styles from './Tasks.module.css';
import { TableHead, TableRow, Table, TableBody, TableCell, Grid, tableCellClasses, Button, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import AddButton from './AddButton';

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
              <StyledTableCell> Tasks </StyledTableCell>
              <StyledTableCell> Owner </StyledTableCell>
              <StyledTableCell> Date of Completion </StyledTableCell>
              <StyledTableCell> Completed </StyledTableCell>
              <StyledTableCell> </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.items.map((task, index) => (
              <TableRow key={task.id} >
                <TableCell>{task.task} </TableCell>
                <TableCell> {task.owner}</TableCell>
                <TableCell>{task.date}</TableCell>
                <TableCell>
                  <FormGroup>
                    <FormControlLabel control={<Checkbox />} />

                  </FormGroup>
                </TableCell>
                <TableCell>
                  <Link to={'/Edit/' + index} >  <Button variant="contained" className={styles.button} size="small" >Edit</Button> </Link>
                  <Button variant="contained" color="error" className={styles.button} size="small" onClick={() => props.onDeleteItem(index)}> Delete </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </Grid>
    </Grid>
    <AddButton />

  </div >
  )
}

export default Tasks;