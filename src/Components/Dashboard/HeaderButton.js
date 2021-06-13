import React from "react";

import classes from "./HeaderButton.module.css";
import { Toast } from "../../utils/notifications";

//let job = "test-rocon-build";
//let inputName = "roconinput01";

//const [didSubmit, setDidSubmit] = useState(false);
const TriggerBuild = () => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      jobName: "test-rocon-build",
      buildParams: {
        input1: "roconinput01",
      },
    }),
  };
  fetch("http://localhost:8080/rocon/jenkins/job/build", requestOptions);
  //.then(response => response.json())
  //.then(data => this.setState({ postId: data.id }));

  //fetch('http://localhost:8080/rocon/jenkins/hello');

  Toast("Success!!", "Triggered Successfully", "success");
  // setDidSubmit(true);
};

/*await fetch('http://localhost:8080/rocon/jenkins/hello', [{
        method: 'POST',
        body: JSON.stringify({
          jobName: job,
          buildParams: {
            input1: inputName
          }
        })
      }]);*/

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button} onClick={TriggerBuild}>
      <span>CREATE A NEW SITE</span>
    </button>
  );
};

export default HeaderCartButton;
