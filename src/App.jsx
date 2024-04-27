import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/title.jsx';
import MediaCard from './components/employeeCard.jsx';
import Data from './data/data.js';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';

function App() {
  const [showOnLeave, setShowOnLeave] = useState(false);
console.log(showOnLeave);
const filteredData = showOnLeave ? Data.filter((employee) => employee.onLeave) : Data;
const toggleOnLeave = (event) => {if(showOnLeave) {setShowOnLeave(false)} else setShowOnLeave(true)};
  return (
    <Container fixed>
      <Box>
      <Typography variant="h4" component="h2">
      Employee Dashboard
</Typography>
      </Box>
<Switch onChange={toggleOnLeave}/>

    <MediaCard data={filteredData} />
    </Container>
  );
}

export default App
