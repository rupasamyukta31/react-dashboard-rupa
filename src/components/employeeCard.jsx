import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';




export default function MediaCard({data}) {
  /* console.log(data); */
  return (
  <>
      {data.map((item,index) => (
        <Card sx={{ maxWidth: 345, margin:5}}>
        <Box sx={{padding:2 }}>
        <CardMedia
          sx={{ height: 240, width: 240, backgroundSize: "contain", margin: "auto" }}
          image={`/react-dashboard-rupa/${item.image}`}
          title="profile image"
          />
     </Box>
        <CardContent>
        <WbSunnyIcon />
          <Typography gutterBottom variant="h5" component="div">
          {item.firstName} {item.lastName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
         Department: UX/UI Design</Typography>
         <Typography variant="body2" color="text.secondary">
        Position: UX Design</Typography>
        <Stack 
        flexWrap="wrap"
        direction="row" 
        spacing={1} 
        sx={{marginTop: 2, justifyContent: "center"}} >
        {item.skills.map((skill, skillIndex) => (
          <Chip sx={{marginTop:1}} key={skillIndex} label={skill} />
        ))}
      </Stack>
      <Stack 
      direction="row" 
      
      spacing={1}
      sx={{ marginTop: 1, justifyContent: "center"}}>
        <Chip label={item.onLeave ? "Inactive" : "Active"} 
        variant="outlined" />
        <Chip label={`Hours: ${item.hoursLoggedThisWeek}` }
        variant="outlined" />
      </Stack>
        </CardContent>   
      </Card>
      )) }
   </>
    
  );
}