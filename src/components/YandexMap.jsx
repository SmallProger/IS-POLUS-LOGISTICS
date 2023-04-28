import { ReactElement, useEffect, useState, useRef, createRef } from 'react';
import { YMaps, Map, SearchControl, GeolocationControl, Placemark } from '@pbe/react-yandex-maps';
import { Box, Input, Paper, TextField } from '@mui/material';
import { CustomSwitcher } from './CustomSwitcher';

const mapState = {
  center: [55.76, 37.64],
  zoom: 13,
  controls: [],
};
export function YandexMap() {
  const inputRef = createRef();

  const [addressCoord, setAddressCoord] = useState();
  const [inputValue, setInputValue] = useState('');
  const [savedYmaps, setSavedYmaps] = useState();
  const [isHideYandexInput, setIsHideYandexInput] = useState(false);

  const onClickAddress = (e, ymaps) => {
    console.log(e);
    const name = e.get('item').value;
    setInputValue(name);
    ymaps.geocode(name).then((result) => {
      const coord = result.geoObjects.get(0).geometry.getCoordinates();
      setAddressCoord(coord);
    });
  };

  const onYmapsLoad = (ymaps) => {
    setSavedYmaps(ymaps);
    console.log(inputRef.current);
    const suggestView = new ymaps.SuggestView(inputRef.current);
    suggestView.events.add('select', (e) => {
      return onClickAddress(e, ymaps);
    });
  };

  const onClickToMap = async (e) => {
    const coords = e.get('coords');
    console.log(coords);
    setAddressCoord(coords);
    const result = await savedYmaps.geocode(coords);
    const firstGeoObject = result.geoObjects.get(0);
    setInputValue(firstGeoObject.getAddressLine());
    setIsHideYandexInput(true);
  };

  return (
    <Box display={'flex'} flexDirection={'column'} gap='20px' height={'100%'} padding={0}>
      <Box className={isHideYandexInput ? 'input__wrapper_hide-dropdown' : 'input__wrapper_show-dropdown'}>
        <TextField
          style={{ background: '#fff', width: '100%', borderRadius: '5px' }}
          inputRef={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='Введите адрес'
          onFocus={() => setIsHideYandexInput(false)}
        />
      </Box>
      <YMaps
        query={{
          load: 'package.full',
          apikey: 'd73c618c-9bf0-464d-af85-4795f926c12d',
        }}>
        <Map
          state={addressCoord ? { ...mapState, center: addressCoord } : mapState}
          onLoad={onYmapsLoad}
          width='100%'
          height='400px'
          onClick={onClickToMap}>
          {addressCoord && <Placemark geometry={addressCoord} />}
        </Map>
      </YMaps>
    </Box>
  );
}
