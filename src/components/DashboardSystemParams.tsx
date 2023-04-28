import {Box, Grid, Card, CardContent, Typography, Divider} from '@mui/material';
import {ListErrorOrders} from './ListErrorOrders';
import {ReactElement} from 'react';
import {DashboardSystemLine} from './DashboardSystemLine';

type ParametrCardData = {
  description: string;
  amount: number;
};

function ParametrCard({description, amount}: ParametrCardData): ReactElement {
  return (
    <Card
      sx={{
        maxWidth: '250px',
        maxHeight: '100px',
        borderColor: 'var(--white)',
        background: 'var(--cod-gray)',
        color: 'var(--white)',
      }}>
      <CardContent sx={{display: 'flex', flexWrap: 'nowrap', justifyContent: 'space-between'}}>
        <Typography variant='body1' sx={{flexBasis: '60%'}}>
          {description}
        </Typography>
        <Typography variant='body1' sx={{fontSize: '34px'}}>
          {amount}
        </Typography>
      </CardContent>
    </Card>
  );
}

const paramsData = [
  {
    description: 'Cвободных человек',
    amount: 55,
  },
  {
    description: 'Занятых человек',
    amount: 63,
  },
  {
    description: 'Заявок на исполнении',
    amount: 124,
  },
  {
    description: 'Заявок на ожидании',
    amount: 15,
  },
];

export function DashboardSystemParams() {
  return (
    <Box display={'flex'} justifyContent={'space-between'} gap={'20px'} height={'100%'}>
      <ListErrorOrders />
      <Box
        sx={{display: 'flex', flexBasis: '65%', flexDirection: 'column', justifyContent: 'space-between', gap: '20px'}}>
        <Box sx={{display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap'}}>
          {paramsData.map((paramData) => ParametrCard(paramData))}
        </Box>
        <Divider sx={{background: '#fff'}} />
        {DashboardSystemLine()}
      </Box>
    </Box>
  );
}
