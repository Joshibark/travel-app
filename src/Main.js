import './main.css';
import React from 'react';
import {Link} from "react-router-dom";
import Box from "@mui/material/Box"
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

function Main() {
  const travelMethod = "Gå";
  let Distans = 0;
  let Emission = 0;


  const [position, setPosition] = React.useState('');
  const handleChange = (event) => {
    setPosition(event.target.value);
  }

  const [destination, setDestination] = React.useState('');
  const handleChange2 = (event) => {
    setDestination(event.target.value);
  }
  
    return (
      <div className="Main">
        <h1>Travel companion</h1>

        <Box sx={{width: '90vw', height: '40vh', borderRadius: '50px'}}>
          <img src="https://google.com/maps/vt/data=FCtdEQ_ApJrhEbnejDnfRzQhgDrYO_LaBopNNDMZTSjuQ-PmUZKgSz7Rkx2YOgtDicBVzsGQ0b0HEt_aVK7Do0QBA738B4Y06Viyv7WehJUgTv4KW9vluR7SbIl00hClhZ2ctHbqmuf-AkZ8G4EhbCdENq8" width='60%' height='100%' title="Map of Helsingborg" alt="Map of Helsingborg"/>
          {/* Exempel bild */}
        </Box>

        <Box>
          <Paper elevation={5}>
            <TextField fullWidth id="position" placeholder="Enter position..." value={position} onChange={handleChange} variant="filled"/>
            <TextField fullWidth id="position" placeholder="Enter position..." value={destination} onChange={handleChange2} variant="filled"/>
            {/* Byt till input kontroll */}
            <FormControl variant='standard'>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Resesätt
            </InputLabel>
            <NativeSelect defaultValue={'Go'} inputProps={{name: 'Resesätt',id: 'uncontrolled-native',}}>
              <option value={'Go'}>Gå</option>
              <option value={'Car'}>Bil</option>
              <option value={'Bus'}>Buss</option>
              <option value={'Bike'}>Cykel</option>
              <option value={'Bolt'}>Bolt</option>
            </NativeSelect>
          </FormControl>
          <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>Details</Typography>
            </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <p>Travel alternative: {travelMethod}</p>
                  <Divider />
                  <p>Distans: {Distans}km</p>
                  <Divider />
                  <p>Emission: {Emission} CO<sub>2</sub></p>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Paper>
        </Box>

        <Link to="/settings/"><Button sx={{backgroundColor: 'white', width: '32.5vw', height: '10vh', color: 'black'}} variant="contained"><Typography>Settings</Typography></Button></Link>
    </div>
    );
  }
  export default Main;