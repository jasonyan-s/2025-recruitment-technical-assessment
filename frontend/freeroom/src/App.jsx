import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { AppBar, Toolbar } from '@mui/material';

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
            src="../assets/freeRoomsLogo.png"
            alt="Freerooms"
            style={{ height: 30, marginRight: 10 }}
          />
        </Toolbar>
      </AppBar>
    </>
  );
}

export default App;
