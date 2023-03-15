import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';

interface Column {
  id: 'id' | 'time' | 'user' | 'channel' | 'category';
  label: string;
  minWidth?: number;
  align?: 'left' | 'right' | 'center';
  format?: (value: number | string) => string;
}

const columns: readonly Column[] = [
  { id: 'id', label: 'Id', minWidth: 50 },
  {
    id: 'time',
    label: 'Date',
    minWidth: 100,
    align: 'center',
    format: (value: string) => new Date(Number(value)).toLocaleString(),
  },
  {
    id: 'user',
    label: 'User',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'channel',
    label: 'Channel',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'category',
    label: 'Category',
    minWidth: 170,
    align: 'center',
  },
];

interface Data {
  id: number;
  time: string;
  user: string;
  channel: string;
  category: string;
}

function createData(
  id: number,
  time: string,
  user: string,
  channel: string,
  category: string,
): Data {
  return { id, time, user, channel, category };
}

const rows = [
  createData(1, '1678768776172', 'Caleb Langworth', 'Sports', 'email'),
  createData(2, '1678768776172', 'Caleb Langworth', 'Sports', 'email'),
  createData(3, '1678768776172', 'Caleb Langworth', 'Sports', 'email'),
  createData(4, '1678768776172', 'Caleb Langworth', 'Sports', 'email'),
  createData(5, '1678768776172', 'Caleb Langworth', 'Sports', 'email'),
  createData(6, '1678768776172', 'Caleb Langworth', 'Sports', 'email'),
  createData(7, '1678768776172', 'Caleb Langworth', 'Sports', 'email'),
  createData(8, '1678768776172', 'Caleb Langworth', 'Sports', 'email'),
  createData(9, '1678768776172', 'Caleb Langworth', 'Sports', 'email'),
  createData(10, '1678768776172', 'Caleb Langworth', 'Sports', 'email'),
  createData(11, '1678768776172', 'Caleb Langworth', 'Sports', 'email'),
  createData(12, '1678768776172', 'Caleb Langworth', 'Sports', 'email'),
  createData(13, '1678768776172', 'Caleb Langworth', 'Sports', 'email'),
  createData(14, '1678768776172', 'Caleb Langworth', 'Sports', 'email'),
  createData(15, '1678768776172', 'Caleb Langworth', 'Sports', 'email'),
];

function LogTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper elevation={0} sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default LogTable;
