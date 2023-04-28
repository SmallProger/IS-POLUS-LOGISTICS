import {ReactElement, useRef} from 'react';
import {YMaps, Map, RoutePanel} from '@pbe/react-yandex-maps';
import {Box} from '@mui/material';

export function YandexMultiMap(): ReactElement {
  const routePanel = useRef();
  //todo Сделать вывод данных из ввода пользователя
  return (
    <Box display={'flex'} flexDirection={'column'} gap='20px'>
      <YMaps
        query={{
          load: 'package.full',
          apikey: 'd73c618c-9bf0-464d-af85-4795f926c12d',
        }}>
        <Map
          width={'100%'}
          height={'475px'}
          defaultState={{
            center: [55.751574, 37.573856],
            zoom: 9,
            controls: [],
          }}>
          <RoutePanel instanceRef={routePanel} options={{float: 'right'}} />
        </Map>
      </YMaps>
    </Box>
  );
}
