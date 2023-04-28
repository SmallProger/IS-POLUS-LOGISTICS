import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {useState} from 'react';
import Box from '@mui/material/Box';

export function CustomBasicSelect(
  fields: Array<string>,
  title: string,
  options: {} = {minWidth: '120px', background: '#fff'}
) {
  const [field, setField] = useState('');

  const handleChange = (event: SelectChangeEvent<typeof field>) => {
    setField(event.target.value);
  };

  return (
    <Box>
      <FormControl fullWidth key={title}>
        <InputLabel variant='filled'>{title}</InputLabel>
        <Select
          sx={options}
          labelId={`select-${title}`}
          id={`select-${title}`}
          value={field}
          label={title}
          onChange={handleChange}>
          {fields.map((field) => (
            <MenuItem value={field}>{field}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
