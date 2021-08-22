import React from "react";
import classes from "./CreateSite.module.css";
import SelectOwnerPlan from "./SelectOwnerPlan";
import SetupWordpressSite from "./SetupWordpressSite";
import LeftArrow from "./LeftArrow";
import { Toast } from "../../utils/notifications";
import request from "../../utils/axiosAPI";

// const TriggerBuild = () => {

//     alert("Hi");
//     const requestOptions = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Content-Length": "6553",
//         "Host":"",
//         "Access-Control-Allow-Origin": "*",
//       },
//       body: JSON.stringify({
//         jobName: "test-rocon-build",
//         buildParams: {
//             input1: "roconinput01",
//         },
//       }),
//     };
//     fetch("http://localhost:8081/rocon/jenkins/job/build2", requestOptions)
//     .then(response => response.json())
//     .then(data => alert(data));
  
//     //fetch('http://localhost:8080/rocon/jenkins/hello');
  
    
//     Toast("Success!!", "Triggered Successfully", "success");
//     // setDidSubmit(true);
//   };

const CreateSite = (props) => {

  const triggerBuild = async () => {
    await request({
        method: "POST",
        url: "/jenkins/job/build",
        data: {
          jobName: "Buildsite",
          buildParams: {
            SERVICENAMEPREFIX: "myroconapp",
          },
        },
      });
    
      Toast("Success!!", "Build is Triggered Successfully", "success");
  }
  
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
            <button className={classes.createbutton} onClick={ triggerBuild }>
              <span>CREATE SITE</span>
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CreateSite;
