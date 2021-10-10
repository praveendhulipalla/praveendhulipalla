import React, { useState } from "react";

import Typography from '@material-ui/core/Typography';
import { createTheme } from '@material-ui/core';
import DomainIcon from '@mui/icons-material/Domain';

import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

const SetupWordpressSite = ({siteName, setSiteName,tempSiteName,setTempSiteName}) => {

  
  //const [domain, setDomain] = useState('');
  const theme = createTheme({
    overrides: {
      MuiInputLabel: {
        root: {
          color: "green",
          "&$focused": {
            color: "blue"
          }
        }
      }
    }
  });

  return (
    <Box sx={{ display: "block" }}>
      <div>
        <span>
        <Typography variant="h6" gutterBottom>
          Enter site details
        </Typography>
        </span>
      </div>
      <div>
        <FormControl sx={{ m: 0, mt: 1}} variant="standard">
          <InputLabel htmlFor="input-with-icon-adornment">Site name</InputLabel>
          <Input
            id="input-with-icon-adornment"
            endAdornment={
              <InputAdornment position="end">
                <DomainIcon />
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
      <div>
        <FormControl sx={{ m: 0, mt: 1 }} variant="standard">
          <InputLabel htmlFor="input-with-icon-adornment">
            Temporary Domain
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            value={tempSiteName}
            onChange={(event) => {
              setTempSiteName(event.target.value);
            }}
            endAdornment={
              <InputAdornment
                  position="end"
                  
                >
                  @roconpass.com
                </InputAdornment>
            }
          />
        </FormControl>
      </div>
    </Box>
  );
};

export default SetupWordpressSite;
