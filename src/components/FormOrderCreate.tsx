import {Box, Paper, Divider, FormControl, Button} from '@mui/material';
import {CustomBasicSelect} from './CustomBasicSelect';
import {CustomStepper} from './CustomStepper';
import TextField from '@mui/material/TextField';
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {YandexMap} from './YandexMap.jsx';
import {CustomSwitcher} from './CustomSwitcher';
import {YandexMultiMap} from './YandexMultiMap';
import Alert from '@mui/material/Alert';

const CHARACTERISTICS = [
  'Вилочный',
  'Вилочный Диз 3т/6м',
  'Вилочный Диз 5т/6м',
  'Вилочный Диз 7т/6м',
  'Ричтрак контейнерный',
  'с боковым поворотом',
  'Телескопический',
  'Телескопический 6т/8м',
  'Телескопический 9т/6м',
  'Фронтальный',
  'Фронтальный 3м3',
];

export function FormOrderCreate() {
  return (
    <Box sx={{display: 'flex', gap: '10px', width: '100%', justifyContent: 'space-around'}}>
      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexBasis: '30%',
          height: '100%',
        }}>
        {CustomStepper(
          ['Выберите тип техники', 'Выберите характеристику', 'Укажите количество'],
          [
            CustomBasicSelect(['Погрузчик', 'Кран', 'Автовышка'], ''),
            CustomBasicSelect(CHARACTERISTICS, ''),
            <TextField variant='outlined' />,
          ]
        )}
        <Divider />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {CustomStepper(
            ['Укажите дату начала работ', 'Укажите дату окончания работ', 'Дайте описание задачи'],
            [
              <DateTimePicker />,
              <DateTimePicker />,
              <TextField
                sx={{width: '100%'}}
                id='outlined-multiline-static'
                multiline
                rows={3}
                defaultValue='Расчистить дорогу'
              />,
            ]
          )}
        </LocalizationProvider>
      </Paper>
      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          flexBasis: '70%',
          order: 2,
          padding: '10px',
          position: 'relative',
        }}>
        <CustomSwitcher labels={['Указать точку прибытия', 'Указать маршрут перевозок']}>
          <YandexMap />
          <YandexMultiMap />
        </CustomSwitcher>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '20px',
          }}>
          <Alert sx={{width: '100%'}} severity='error'>
            Указаны не все данные
          </Alert>
          <Button variant='outlined'>Сбросить</Button>
          <Button variant='contained' disabled>
            Сохранить
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
