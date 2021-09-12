import React from "react";

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import { FormControl } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const SetupWordpressSite = (props) => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Enter site details
      </Typography>
      
        <Grid item xs={12} md={6}>
          <TextField required id="cardName" label=" Site name" fullWidth autoComplete="cc-name" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Temporary domain"
            fullWidth
            autoComplete="cc-number"
          />
           <FormControl
                    type="email"
                    prefix="@flywheelsites.com"
                    placeholder="RandomelyGeneratedName"
                    style={{ borderRight: "none" }}
                  />
                 
        </Grid>
        
        
      
    </React.Fragment>
  );
};

export default SetupWordpressSite;
