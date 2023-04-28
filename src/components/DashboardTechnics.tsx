import {Paper, Box, TextField, Typography} from '@mui/material';
import {ReactElement} from 'react';
import {CustomBasicSelect} from './CustomBasicSelect';
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import technics from '../data/technics.json';

const CHARACTERISTICS = [
  'Вилочный',
  'Вилочный Диз 3т/6м',
  'Вилочный Диз 5т/6м',
  'Вилочный Диз 7т/6м',
  'Ричтрак контейнерный',
  'С боковым поворотом',
  'Телескопический',
  'Телескопический 6т/8м',
  'Телескопический 9т/6м',
  'Фронтальный',
  'Фронтальный 3м3',
];

const columns: GridColDef[] = [
  {field: 'id', headerName: 'ID', width: 90},
  {
    field: 'type',
    headerName: 'Тип техники',
    width: 100,
    editable: false,
  },
  {
    field: 'characteristic',
    headerName: 'Характеристика',
    width: 150,
    editable: false,
  },
  {
    field: 'dateFrom',
    headerName: 'Начало',
    width: 170,
    editable: false,
  },
  {
    field: 'dateTo',
    headerName: 'Конец',
    width: 170,
    editable: false,
  },
];

const rows = [
  {
    id: '234',
    type: 'Погрузчик',
    characteristic: 'Вилочный',
    dateFrom: '24-04-23T12:30:00',
    dateTo: '27-04-23T12:30:00',
  },
  {
    id: '177',
    type: 'Погрузчик',
    characteristic: 'Вилочный',
    dateFrom: '24-04-23T14:31:00',
    dateTo: '27-04-23T11:30:00',
  },
  {
    id: '182',
    type: 'Погрузчик',
    characteristic: 'Вилочный',
    dateFrom: '24-04-23T16:34:00',
    dateTo: '27-04-23T10:30:00',
  },
  {
    id: '184',
    type: 'Погрузчик',
    characteristic: 'Вилочный',
    dateFrom: '24-04-23T17:30:00',
    dateTo: '27-04-23T14:30:00',
  },
  {
    id: '195',
    type: 'Погрузчик',
    characteristic: 'Вилочный',
    dateFrom: '24-04-23T12:30:00',
    dateTo: '27-04-23T16:30:00',
  },
];

function DataGridTitle(): ReactElement {
  return (
    <Typography variant='h6' sx={{textAlign: 'center', padding: '5px'}}>
      Свободная техника за выбранный период
    </Typography>
  );
}

export function DashboardTechnics() {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        gap: '20px',
      }}>
      <Paper
        sx={{
          display: 'flex',
          width: '100%',
          height: '80px',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: '15px',
          gap: '20px',
          backgroundColor: '#fff',
        }}>
        {CustomBasicSelect(['Погрузчик', 'Кран', 'Автовышка'], 'Выберите тип техники', {minWidth: '240px'})}
        {CustomBasicSelect(CHARACTERISTICS, 'Выберите характеристику', {minWidth: '250px'})}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker label={'Начало работ'} sx={{width: '260px'}} />
          <DateTimePicker label={'Конец работ'} sx={{width: '260px'}} />
        </LocalizationProvider>
      </Paper>
      <Paper
        sx={{
          background: 'var(--cod-gray)',
          padding: '20px',
          display: 'flex',
          gap: '20px',
          justifyContent: 'space-between',
        }}>
        <DataGrid
          slots={{
            toolbar: DataGridTitle,
          }}
          sx={{
            padding: '10px',
            color: '#000',
            background: '#fff',
            maxWidth: '720px',
            height: '450px',
          }}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 12,
              },
            },
          }}
        />
        <Box
          sx={{
            backgroundImage: 'url(../../imgs/погрузчикВилочный.jpeg)',
            width: '100%',
            height: '450px',
            backgroundSize: 'cover',
            borderRadius: '5px',
            backgroundPosition: 'right',
          }}></Box>
      </Paper>
    </Box>
  );
}
