import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { AppBar, Toolbar, Typography } from '@mui/material';
import freeRoomsLogo from './assets/freeRoomsLogo.png';

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
        </Toolbar>
      </AppBar>
    </>
  );
}

export default App;
