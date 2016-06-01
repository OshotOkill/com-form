import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';


class Schedule extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      stepIndex: 0,
      finished: false
    }
    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.renderStepActions = this.renderStepActions.bind(this);
  }
  
  handlePrev() {
    const { stepIndex } = this.state;
    
    if (stepIndex > 0)
      this.setState({ stepIndex: stepIndex - 1 });
  }
  
  handleNext() {
    const { stepIndex } = this.state;
    
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex > 2
    });
  }
  
  handleReset(e) {
    e.preventDefault();
    this.setState({
      stepIndex: 0,
      finished: false
    });
  }
  
  renderStepActions(step) {
    const { stepIndex } = this.state;
    
    return (
      <div>
        {step > 0 && (
          <FlatButton 
            label="Back"
            disabled={ stepIndex === 0 }
            onTouchTap={ this.handlePrev }
            />
        )}
        <RaisedButton 
          label={stepIndex === 3 ? 'Finish' : 'Next'}
          primary={true}
          onTouchTap={ this.handleNext }
          />
      </div>
    )
  }
  
  render() {
    const { stepIndex, finished } = this.state;
    const { schedules } = this.props;
    
    return (
      <div style={{width: '400px', height: '600px', margin: '0 auto'}}>
        <Stepper orientation="vertical" activeStep={stepIndex}>
          {schedules.map((schedule, i) => {
            return (
            <Step key={schedule.time}>
              <StepLabel>{schedule.time}</StepLabel>
              <StepContent>
                <p>{schedule.todo}</p>
                {this.renderStepActions(i)}
              </StepContent>
            </Step>
            )
          })}
        </Stepper>
        
        {finished && (
          <p>
            <RaisedButton label="Reset" onTouchTap={ this.handleReset } />
          </p>
        )}
      </div>
    )
  }
}

export default Schedule;
