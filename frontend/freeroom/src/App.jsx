import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Stack,
  IconButton,
  Box,
} from '@mui/material';
import freeRoomsLogo from './assets/freeRoomsLogo.png';
import { NightsStay, ViewModule, Search, Map } from '@mui/icons-material';
function App() {
  const [count, setCount] = useState(0);

  return (
    <Box sx={{ backgrundColour: 'white' }}>
      <AppBar
        position="fixed"
        elevation={1}
        sx={{ background: 'white', color: 'black', padding: 1 }}
      >
        <Toolbar
          sx={{ flexGrow: 1, display: 'flex', alignItems: 'space-between' }}
        >
          <img
            src={freeRoomsLogo}
            alt="Freerooms"
            style={{ height: 30, marginRight: 10 }}
          />
          <Typography variant="h6" sx={{ color: '#F07021' }}>
            {' '}
            Freerooms
          </Typography>
          <Stack flexGrow={3}></Stack>

          <IconButton
            sx={{
              color: '#F07021',
              border: '1px solid #F07021',
              borderRadius: '5px',
              padding: '7px',
              margin: '7px',
            }}
          >
            <Search />
          </IconButton>
          <IconButton
            sx={{
              color: 'white',
              border: '1px solid #F07021',
              backgroundColor: '#F07021',
              borderRadius: '5px',
              padding: '7px',
            }}
          >
            <ViewModule />
          </IconButton>
          <IconButton>
            <Map
              sx={{
                color: '#F07021',
                border: '1px solid #F07021',
                borderRadius: '5px',
                padding: '7px',
              }}
            />
          </IconButton>
          <IconButton>
            <NightsStay
              sx={{
                color: '#F07021',
                border: '1px solid #F07021',
                borderRadius: '5px',
                padding: '7px',
              }}
            />
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
    </Box>
  );
}

export default App;
