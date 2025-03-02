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
  Button,
  Divider,
} from '@mui/material';
import freeRoomsLogo from './assets/freeRoomsLogo.png';
import {
  NightsStay,
  ViewModule,
  Search,
  Map,
  FilterList,
  Sort,
} from '@mui/icons-material';
function App() {
  const [count, setCount] = useState(0);

  return (
    <Box sx={{ backgrundColour: 'white' }}>
      <Box display="flex" sx={{ flexDirection: 'column' }}>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            background: 'white',
            color: 'black',
            padding: 0,
          }}
        >
          <Toolbar
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'space-between',
            }}
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
          <Divider
            sx={{
              width: '100vw ',
              marginBottom: '10px',
            }}
          ></Divider>

          <Box
            sx={{
              display: 'flex',
              position: 'relative',
              justifyContent: 'space-around',
              width: '100%',
              top: '0px',
            }}
            spacing={3}
          >
            <Button
              variant="outlined"
              sx={{ color: '#F07021', border: '2px solid #F07021' }}
              startIcon={<FilterList />}
            >
              <strong> Filters </strong>
            </Button>
            <InputBase
              placeholder="Search for a building..."
              sx={{
                background: '#f5f5f5',
                padding: '5px 10px',
                borderRadius: 1,
                flexGrow: 0.5,
              }}
            />
            <Button
              variant="outlined"
              sx={{
                color: '#F07021',
                border: '2px solid #F07021',
              }}
              startIcon={<Sort />}
            >
              <strong> Sort </strong>
            </Button>
          </Box>
        </AppBar>
      </Box>
    </Box>
  );
}

export default App;
