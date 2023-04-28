import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import {StepContent} from '@mui/material';
import {StepLabel} from '@mui/material';

export function CustomStepper(
  steps: Array<string>,
  stepsContent: Array<React.ReactElement>,
  orientation: string = 'vertical'
) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{padding: '20px'}}>
      <Stepper activeStep={activeStep} orientation={orientation} sx={{width: '100%'}}>
        {steps.map((label, index) => {
          const stepProps: {completed?: boolean} = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel>{label}</StepLabel>
              <StepContent>{stepsContent[index]}</StepContent>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{mt: 2, mb: 1}}>Все шаги пройдены</Typography>
          <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
            <Box sx={{flex: '1 1 auto'}} />
            <Button onClick={handleReset}>Сбросить</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{display: 'flex', flexDirection: 'row', pt: 2}}>
            <Button color='inherit' disabled={activeStep === 0} onClick={handleBack} sx={{mr: 1}}>
              Назад
            </Button>
            <Box sx={{flex: '1 1 auto'}} />
            <Button onClick={handleNext}>{activeStep === steps.length - 1 ? 'Закончить' : 'Следующий'}</Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
