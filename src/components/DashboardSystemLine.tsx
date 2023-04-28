import {ReactElement} from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {Line} from 'react-chartjs-2';
import {Box} from '@mui/material';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
ChartJS.defaults.color = '#fff';
ChartJS.defaults.borderColor = 'rgb(255, 255, 255, 0.5)';

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  scaleFontColor: '#FFFFFF',
  plugins: {
    legend: {
      position: 'top' as const,
    },
    plugins: {
      colors: {
        enabled: false,
      },
    },
    title: {
      display: true,
      text: 'График загруженности системы за 04.2023',
      color: '#fff',
      font: {
        size: 18,
      },
    },
    labels: {
      display: false,
      color: '#fff',
    },
    scales: {
      y: {
        ticks: {
          fontColor: '#666',
          color: '#fff',
        },
      },
    },
  },
};

const LABELS: Array<string> = [];
for (let i = 1; i < 31; i++) {
  if (i < 10) {
    LABELS.push(`0${i}.04.23`);
  } else {
    LABELS.push(`${i}.04.23`);
  }
}

const DATASETS = [
  {
    label: 'Заказов в день',
    data: LABELS.map(() => Math.floor(Math.random() * 100 + 32)),
    borderColor: '#bc8415',
    backgroundColor: '#fff',
  },
];

type datasetType = {
  label: string;
  data: Array<number>;
  borderColor: string;
  backgroundColor: string;
};

export function DashboardSystemLine(datasets: Array<datasetType> = DATASETS): ReactElement {
  let data = {
    labels: LABELS,
    datasets,
  };
  return (
    <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <Line width={'100%'} color='#fff' height={'500px'} options={options} data={data} />
    </Box>
  );
}
