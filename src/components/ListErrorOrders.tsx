import {List, ListItem, ListItemText, Paper, Toolbar, Typography} from '@mui/material';
import {ReactElement} from 'react';
import type {order} from '../types';
import orders from '../data/orders.json';
import {DataGrid, GridColDef} from '@mui/x-data-grid';

const columns: GridColDef[] = [
  {field: 'id', headerName: 'ID', width: 90},
  {
    field: 'dateFrom',
    headerName: 'Начало работ',
    width: 150,
    editable: false,
  },
  {
    field: 'dateTo',
    headerName: 'Конец работ',
    width: 150,
    editable: false,
  },
  {
    field: 'period',
    headerName: 'Период',
    width: 110,
    editable: false,
  },
];

const rows = orders
  .filter((order) => order.state == 'error')
  .map((errorOrder) => ({
    dateFrom: errorOrder.date.from,
    dateTo: errorOrder.date.to,
    period: errorOrder.date.period,
    id: errorOrder.id,
  }));

function DataGridTitle(): ReactElement {
  return (
    <Typography variant='h6' sx={{textAlign: 'center', padding: '5px'}}>
      Неоформленные заявки
    </Typography>
  );
}
export function ListErrorOrders(): ReactElement | null {
  return (
    <Paper elevation={5} sx={{background: 'var(--cod-gray)', height: '630px', color: 'var(--white)', flexBasis: '35%'}}>
      <DataGrid
        slots={{
          toolbar: DataGridTitle,
        }}
        sx={{padding: '10px', color: '#fff'}}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 8,
            },
          },
        }}
      />
    </Paper>
  );
}
