import {Drawer, List, ListItem, Button} from '@mui/material';
import {useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {ReactElement} from 'react';
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ManIcon from '@mui/icons-material/Man';
import AssignmentIcon from '@mui/icons-material/Assignment';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import {useNavigate} from 'react-router-dom';

//todo: создать объект с ключами ГЛАВНАЯ и тп и внутри {path:, icon:}
const NAVIGATION_LIST = {
  Главная: 'main',
  'Создать заявку': 'form-order',
  Техника: 'dashboard-technics',
  Водители: 'dashboard-drivers',
  Заявки: 'dashboard-orders',
};

const NAVIGATION_LIST_ICONS = [<HomeIcon />, <NoteAltIcon />, <LocalShippingIcon />, <ManIcon />, <AssignmentIcon />];

function NavigationList(): ReactElement {
  let keys = Object.keys(NAVIGATION_LIST);
  let pathes = Object.values(NAVIGATION_LIST);
  let navigate = useNavigate();

  function handleClick(path: string) {
    return () => navigate(path);
  }
  return (
    <List sx={{width: '250px', gap: '20px'}}>
      {keys.map((item, index) => {
        return (
          <>
            <ListItem key={item}>
              <Button
                variant='text'
                sx={{textAlign: 'right', justifyContent: 'flex-start', gap: '20px', width: '100%'}}
                startIcon={NAVIGATION_LIST_ICONS[index]}
                onClick={handleClick(pathes[index])}>
                {item}
              </Button>
            </ListItem>
            <Divider />
          </>
        );
      })}
    </List>
  );
}

export function NavigationBar() {
  let [isOpened, setIsOpened] = useState<boolean>(false);
  const toggleDrawer = (open: boolean) => () => {
    setIsOpened(open);
  };
  return (
    <>
      <MenuIcon sx={{cursor: 'pointer'}} fontSize='large' onClick={toggleDrawer(true)} />
      <Drawer anchor='left' open={isOpened} onClose={toggleDrawer(false)}>
        <CloseIcon
          sx={{cursor: 'pointer', alignSelf: 'flex-end', margin: '10px'}}
          fontSize='large'
          onClick={toggleDrawer(false)}
        />
        <NavigationList />
      </Drawer>
    </>
  );
}
