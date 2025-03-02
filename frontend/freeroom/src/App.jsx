import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
} from '@mui/material';
import freeRoomsLogo from './assets/freeRoomsLogo.png';
import { NightsStay, ViewModule, Search, Map } from '@mui/icons-material';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ background: 'white', color: 'black', padding: 1 }}
      >
        <Toolbar sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <img
            src={freeRoomsLogo}
            alt="Freerooms"
            style={{ height: 30, marginRight: 10 }}
          />
          <Typography variant="h6" sx={{ color: 'orange' }}>
            {' '}
            Freerooms
          </Typography>

          <IconButton>
            <Search />
          </IconButton>
          <IconButton>
            <ViewModule />
          </IconButton>
          <IconButton>
            <Map />
          </IconButton>
          <IconButton>
            <NightsStay />
          </IconButton>
        </Toolbar>
      </AppBar>
      <InputBase
        placeholder="Search for a building..."
        sx={{
          background: '#f5f5f5',
          padding: '5px 10px',
          borderRadius: 1,
          flexGrow: 1,
        }}
      />
    </>
  );
}

export default App;
