import React from 'react';
import { styled } from '@mui/material/styles';

import styles from './Tasks.module.css';
import { TableHead, TableRow, Table, TableBody, TableCell, Grid, tableCellClasses } from '@mui/material';
function Tasks() {

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.common.white,

    },

  }));
  return (
    <Grid container  >
      <Grid item xs={12} >

        <Table className={styles.table}>
          <TableHead >
            <TableRow >
              <StyledTableCell align='center'>Tasks</StyledTableCell>
              <StyledTableCell align='center'>Owner</StyledTableCell>
              <StyledTableCell align='center'> Date of Completion</StyledTableCell>
              <StyledTableCell align='center'>Status </StyledTableCell>
              <StyledTableCell align='center'> </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            <TableRow

            >
              <TableCell component="th" scope="row">
                increase the temp and cut the lawn
              </TableCell>
              <TableCell >Henish Patel</TableCell>
              <TableCell ></TableCell>
              <TableCell ></TableCell>
              <TableCell ></TableCell>
            </TableRow>

          </TableBody>
        </Table>

      </Grid>
    </Grid>
  )
}

export default Tasks;