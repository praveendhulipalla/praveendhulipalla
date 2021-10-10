import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardHeader } from '@mui/material';
import Box from '@mui/material/Box';
import CheckIcon from '@mui/icons-material/Check';
import MenuDropdown from "./MenuDropdown";

const PlanCard = (props) => {
  
  //const { apiData } = props;
  //style={correctBackgroundColor(apiData.name)}
  return (
    
    <Card selected sx={{ maxWidth: 345, color: "black",   
    textAlign: "center", paddingTop:"0.8em", backgroundColor: "white",
    fontWeight:"bold", fontStyle:"italic" }}>
      <CardHeader style={{ backgroundColor: "white" }}
        title={props.name}
        subheader={
         
          <Typography color="black">
              <Box component="span" color="cornflowerblue" fontWeight="bold" >{props.price}
              </Box>  /user/month
          </Typography>

        }
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <button 
                  style={{
                    borderRadius: "0px",
                    border: "1px solid blue",
                    fontSize: "13px",
                    width: "95px",
                    height: "36px",
                    backgroundColor: "white",
                    color: "blue",
                    marginTop: "0.5rem"
                  }}
                >Get Started</button>
        </Typography>

        <Typography gutterBottom variant="h5" component="div">
          <MenuDropdown />
        </Typography>
        <Typography variant="body2" color="cornflowerblue">
          {
             props.details.map((data) => (
                <div><span><CheckIcon/>{data}</span></div>
            ))}
        </Typography>
      </CardContent>
      <CardActions>
      <button 
                  style={{
                    borderRadius: "15px",
                    border: "none",
                    fontSize: "13px",
                    width: "90px",
                    height: "26px",
                    backgroundColor: "rgb(81, 187, 122)",
                    color: "white",
                    marginTop: "0.5rem",
                    marginLeft: "5em"
                  }}
                >Subscribe</button>
        
      </CardActions>
    </Card>
  );
}

export default PlanCard;
