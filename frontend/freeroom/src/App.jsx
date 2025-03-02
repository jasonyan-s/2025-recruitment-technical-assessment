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
  useEffect(() => {
    setBuildings(buildingData);
  }, []);

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

        <Grid
          container
          spacing={2}
          padding={2}
          position="relative"
          sx={{ marginTop: '20vh' }}
        >
          {buildings.map((building) => (
            <Grid item xs={12} sm={6} md={4} key={building.name}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={images[`./assets/${building.building_file}`]?.default}
                  alt={building.name}
                />
                <CardContent
                  sx={{
                    backgroundColor: '#D67232',
                    color: 'white',
                    textAlign: 'center',
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      background: 'white',
                      color: 'black',
                      padding: '3px 7px',
                      borderRadius: 5,
                      position: 'absolute',
                      top: 10,
                      left: 10,
                    }}
                  >
                    {building.rooms_available} rooms available
                  </Typography>
                  <Typography variant="h6">{building.name}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
