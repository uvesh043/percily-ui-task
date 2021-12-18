import React from "react";
import "./Css/component.css";
import {
  Typography,
  Grid,
  Grow,
//   Item,
  makeStyles,
  CardContent,
  Card,
  Button,
  CardActionArea,
  CardMedia,
  CardActions,
} from "@material-ui/core";

const Component = () => {
  return (
    <div className="container">
       <Grid container spacing={2}> 
      <div className="conatiner-one">
      <Grid item xs={6} md={8}>

  </Grid>
    <Grid item xs={6} md={8}>
        {/* <Item> */}
            <div className="subconatiner-one">
            <p>Windows -1</p>  
            </div>
            {/* </Item> */}
    </Grid>
        

        <div className="subconatiner-two">
          <p>Windows -1</p>  
        </div>
      
      </div>
      <div  className="below-conatiner">
            <div>
         <h1>Widnow-3</h1>
         <h5>Component-3</h5>
         <h5>(Some HTML component)</h5>
            </div>
        </div>

    </Grid>
   
    </div>
  );
};
export default Component;
