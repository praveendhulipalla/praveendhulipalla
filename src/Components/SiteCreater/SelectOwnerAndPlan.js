import React from "react";

import classes from "./SelectOwnerAndPlan.module.css";
import PlanAccordion from "./PlanAccordion";

const SelectOwnerPlan = (props) => {
  return (
    <div>
      <div>
        
        
            <div
              style={{
                fontWeight: "bold",
                fontSize: "18px",
                // marginBottom: "1rem",
                // marginTop: "1rem",
                marginLeft: "7px",
              }}
            >
              Who will own this site?
            </div>
          

        
            
          
      </div>
<div><PlanAccordion /></div>
      <div>
        <div className={classes.divdata}>
          <div
            style={{
              fontWeight: "bold",
              marginLeft: "7px",
              fontSize: "11px",
              color: "rgb(80, 197, 219)",
            }}
          >
            CANCEL SITE CREATION
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectOwnerPlan;
