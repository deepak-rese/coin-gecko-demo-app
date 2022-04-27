import React from 'react';
import TablePagination from '@mui/material/TablePagination';

export const TablePaginationDisplay = (props) => {

  const handleChangePage = (event, newPage) => {
    props.onPageChange(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    props.onPageSizeChange(parseInt(event.target.value, 10));
  };

  return (
    <TablePagination
      sx = {{display:"flex",justifyContent:"center"}}
      component="div"
      count={props.totalSize}
      page={props.pageNumber}
      onPageChange={handleChangePage}
      rowsPerPage={props.pageSize}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}