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
    
    return (
      <div>
        <Stepper orientation="vertical" activeStep={stepIndex}>
          <Step>
            <StepLabel>2018-1-1</StepLabel>
            <StepContent>
              <p>上课</p>
              {this.renderStepActions(0)}
            </StepContent>
          </Step>
          
          <Step>
            <StepLabel>2018-1-2</StepLabel>
            <StepContent>
              <p>吃饭</p>            
              {this.renderStepActions(1)}
            </StepContent>
          </Step>
          
          <Step>
            <StepLabel>2018-1-3</StepLabel>
            <StepContent>
              <p>写作业</p>            
              {this.renderStepActions(2)}
            </StepContent>
          </Step>
          
          <Step>
            <StepLabel>2018-1-3</StepLabel>
            <StepContent>
              <p>睡觉</p>            
              {this.renderStepActions(3)}
            </StepContent>
          </Step>
          
        </Stepper>
        
        {finished && (
          <p>
            <a href="javascript:void(0)" onClick={ this.handleReset }>Reset</a>
          </p>
        )}
      </div>
    )
  }
}

export default Schedule;
