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
  Grid,
  CardContent,
  CardMedia,
  Card,
} from '@mui/material';
import freeRoomsLogo from './assets/freeRoomsLogo.png';
import freeroomsDoorClosed from './assets/freeroomsDoorClosed.png';
import buildingData from './assets/data.json';
const images = import.meta.glob('./assets/*', { eager: true });

import {
  NightsStay,
  ViewModule,
  Search,
  Map,
  FilterList,
  Sort,
} from '@mui/icons-material';
function App() {
  const [buildings, setBuildings] = useState([]);
  const [isDoorOpen, setIsDoorOpen] = useState(true);

  useEffect(() => {
    setBuildings(buildingData);
  }, []);

  const handleToggleDoor = () => {
    setIsDoorOpen((prev) => !prev);
  };

  console.log(buildings);
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
              onClick={handleToggleDoor}
              src={isDoorOpen ? freeRoomsLogo : freeroomsDoorClosed}
              alt="Freerooms"
              style={{ height: 30 }}
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
              marginBottom: '10px',
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

        <Grid
          container
          spacing={2}
          padding={2}
          paddingBottom={0}
          position="relative"
          sx={{ marginTop: '15vh', padding: 0 }}
        >
          {buildings.map((building) => (
            <Grid item xs={12} sm={6} md={2.4} key={building.name}>
              <Card
                sx={{
                  backgroundImage: images[
                    `./assets/${building.building_picture}`
                  ]
                    ? `url(${
                        images[`./assets/${building.building_picture}`].default
                      })`
                    : 'none',
                  height: '250px',
                  backgroundSize: 'cover',
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    background: 'white',
                    color: 'black',
                    padding: '3px 7px',
                    borderRadius: 5,
                    position: 'relative',
                    top: 10,
                    left: 10,
                    zIndex: 999,
                    fontSize: '0.5em',
                    margin: '5px',
                    width: '80px',
                  }}
                >
                  {building.rooms_available} rooms available
                </Typography>
                <Button
                  sx={{
                    backgroundColor: '#D67232',
                    color: 'white',
                    alignItems: 'left',
                    borderRadius: '10px',
                    height: '40px',
                    width: '95%',
                    marginTop: '175px',
                    justifyContent: 'flex-start',
                    position: 'relative',
                  }}
                >
                  <Typography sx={{ fontSize: '0.8em', textAlign: 'left' }}>
                    {building.name}
                  </Typography>
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
