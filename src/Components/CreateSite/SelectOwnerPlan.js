import React from "react";

import SelectButton from "./SelectButton";
import classes from "./SelectOwnerPlan.module.css";

const SelectOwnerPlan = (props) => {
  return (
    <div>
      <div>
        <div className={classes.divdata}>
          <div className={classes.circle}>1</div>
          <div style={{ fontWeight: "bold", marginLeft: "7px" }}>
            Select owner and plan
          </div>
        </div>
        <div style={{ paddingTop: "1rem" }}>
          <div
            style={{
              fontWeight: "bold",
              fontSize: "18px",
              marginBottom: "1rem",
              marginTop: "1rem",
              marginLeft: "7px",
            }}
          >
            Who will own this site?
          </div>
          <SelectButton displayText="Me"></SelectButton>
          <SelectButton displayText="Organization"></SelectButton>
        </div>
      </div>
      <div
        style={{
          paddingBottom: "1rem",
          borderBottom: "1px solid rgb(216, 214, 214)",
        }}
      >
        <div style={{ fontWeight: "bold" }}>Select Plan</div>
        <span className={classes.blockborder}>
          <div style={{ textAlign: "center", paddingTop: "1rem" }}>
            Doesn't look like you hav any plans
          </div>
          <div style={{ textAlign: "center", paddingTop: "10px" }}>
            <button
              style={{
                borderRadius: "15px",
                fontSize: "13px",
                width: "150px",
                height: "31px",
              }}
            >
              CREATE A PLAN
            </button>
          </div>
        </span>
      </div>
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
