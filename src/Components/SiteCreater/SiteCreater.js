import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import SelectOwnerAndPlan from "./SelectOwnerAndPlan";
import SetupWordpressSite from "./SetupWordpressSite";
import CreateWordpressUser from "./CreateWordpressUser";
import { Toast } from "../../utils/notifications";
import request from "../../utils/axiosAPI";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));



function getSteps() {
  return ['Select owner and plan', 'Setup your WordPress site', 'Create your WordPress user'];
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const [tempSiteName, setTempSiteName] = useState('');
  //const [siteName, setSiteName] = useState('');
  const [wordPressUserName, setWordPressUserName] = useState('');

  const getStepContent = (step) => {

    
  
    switch (step) {
      case 0:
        return <SelectOwnerAndPlan />;
      case 1:
        return <SetupWordpressSite tempSiteName={tempSiteName} setTempSiteName={setTempSiteName} />;
      case 2:
        return <CreateWordpressUser wordPressUserName={wordPressUserName} setWordPressUserName={setWordPressUserName} />;
      default:
        return 'Unknown step';
    }
  }

  const handleNext = () => {

    if(activeStep === 1 && tempSiteName.trim()===''){
      window.alert("Enter mandatory text value");
      return true;
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if(activeStep === steps.length-1){
      triggerBuild();
    }
    
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const triggerBuild = async () => {
    await request({
        method: "POST",
        url: "/jenkins/job/build",
        data: {
          jobName: "Buildsite",
          buildParams: {
            SERVICENAMEPREFIX: tempSiteName,//"myroconapp",
          },
        },
      }).then(response => {
        Toast("Success!!", "Build is Triggered Successfully",response.statusMsg, "success");
      })
      .catch(error => {
        Toast("Error!!", "There is an Error in the process", "danger");
        setActiveStep(2);
      });;
    
      
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography color="green">Build is triggered successfully</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset Data
          </Button>
        </Paper>
      )}
    </div>
  );
}
