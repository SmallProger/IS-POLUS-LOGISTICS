import * as React from 'react';
import {PropsWithChildren} from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FormControlLabel from '@mui/material/FormControlLabel';

type CustomSwitcherProps = {
  labels: Array<string>;
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const {children, value, index, ...other} = props;

  return (
    <div
      style={{height: '100%', padding: '0px'}}
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && <Box sx={{height: '100%', padding: '0px', flexGrow: '1'}}>{children}</Box>}
    </div>
  );
}

export const CustomSwitcher = (props: PropsWithChildren<CustomSwitcherProps>) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const arrayOfChildren = React.Children.toArray(props.children);

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        padding: '10px',
      }}>
      <Box>
        <Tabs value={value} onChange={handleChange}>
          {props.labels.map((label) => (
            <Tab label={label}></Tab>
          ))}
        </Tabs>
      </Box>
      <Box sx={{flexGrow: 1, height: '100%'}}>
        {props.labels.map((label, index) => (
          <TabPanel value={value} index={index}>
            {arrayOfChildren[index]}
          </TabPanel>
        ))}
      </Box>
    </Box>
  );
};
