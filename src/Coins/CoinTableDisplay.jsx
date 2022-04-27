import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { CoinAvatar } from '../components/CoinAvatar';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ selected, theme }) => {
    return ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
          },
        '&:last-child td, &:last-child th': {
          border: 0,
        },
        ...(selected && {
            '& th, & td':{
                backgroundColor:'rgba(25, 118, 210, 0.5)'
            }
        }),
      });
});

export const CoinTableDisplay = (props) => {
    return (
      <TableContainer component={Paper} id="coin-table">
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead className="coin-table-header">
            <StyledTableRow>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">Symbol</StyledTableCell>
              <StyledTableCell align="left">Current Price</StyledTableCell>
              <StyledTableCell align="left">High 24 hour Price</StyledTableCell>
              <StyledTableCell align="left">Low 24 hour Price</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {props.rows.map((row) => (
              <StyledTableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                onClick = {()=>props.onSelectChange(row.id)}
                selected = {props.selectedCoinID === row.id}
              >
                <StyledTableCell component="th" scope="row">
                <CoinAvatar classNameAttr="coin-avatar-table" imageURL={row.image} name={row.name} width="24px" height="24px"/>
                </StyledTableCell>
                <StyledTableCell align="left">{row.symbol}</StyledTableCell>
                <StyledTableCell align="left">{row.currentPrice}</StyledTableCell>
                <StyledTableCell align="left">{row.high24}</StyledTableCell>
                <StyledTableCell align="left">{row.low24}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }