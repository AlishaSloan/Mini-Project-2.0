import Meal from "./components/Meals"
import './index.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea, Grid } from '@mui/material';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import { withStyles } from "@mui/material";
import ButtonAppBar from "./components/NavBar";





function App() {



  return (
    <>
<ButtonAppBar/>

<h2>What's for Dinner?</h2>



<Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{ minHeight: '100vh'}}>

<Grid item xs={3}>
  <Card> 
      <CardActionArea>
     
        <CardContent>
        
        <Meal/>
       
        </CardContent>
      </CardActionArea>
      
    </Card>
    </Grid>
    </Grid>
    
 
    </>
  )
}

export default App
