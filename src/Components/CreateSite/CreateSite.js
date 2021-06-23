import React from "react";
import classes from "./CreateSite.module.css";
import SelectOwnerPlan from "./SelectOwnerPlan";
import SetupWordpressSite from "./SetupWordpressSite";
import LeftArrow from "./LeftArrow";

const CreateSite = (props) => {
  return (
    <div>
      <div
        style={{ marginBottom: "3rem", marginTop: "3rem", textAlign: "center" }}
      >
        <h2>Create a New Site</h2>
      </div>
      <div
        style={{
          backgroundColor: "white",
          paddingLeft: "1rem",
          paddingRight: "2rem",
        }}
      >
        <div>
          <SelectOwnerPlan />
          <SetupWordpressSite />
        </div>
        <div style={{ marginTop: "1.5rem", paddingBottom: "2rem" }}>
          <span style={{ color: "rgb(80, 197, 219)" }}>
            <LeftArrow />
            Go Back
          </span>
          <span>
            <button className={classes.createbutton}>
              <span>CREATE SITE</span>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CreateSite;
