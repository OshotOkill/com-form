import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';


class Hub extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      stepIndex: 0,
      finished: false
    }
    this.handlePrev = this.handlePrev.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }
  
  handlePrev() {
    const { stepIndex } = this.state;
    
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  }
  
  handleNext() {
    const { stepIndex } = this.state;
    
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex > 1
    });
  }

  handleReset(e) {
    this.setState({
      stepIndex: 0,
      finished: false
    });
  }
  
  renderContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return '吃饭';
      case 1:
        return '睡觉';
      case 2:
        return '打豆豆';
    }
  }
  
  render() {
    const { stepIndex, finished } = this.state;
    
    return (
      <div style={{maxWidth: '960px', margin: '0 auto'}}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>2018-1-1</StepLabel>
          </Step>
          <Step>
            <StepLabel>2018-1-2</StepLabel>
          </Step>
          <Step>
            <StepLabel>2018-1-3</StepLabel>
          </Step>
        </Stepper>
        
        <div style={{maxWidth: '480px', margin: '0 auto'}}>
          {finished 
            ? <RaisedButton label="reset" onTouchTap={ this.handleReset } />
            : (
                <div>
                  <p>{this.renderContent(stepIndex)}</p>
                  <div>
                    <RaisedButton
                      label="back"
                      disable={stepIndex === 0}
                      onTouchTap={ this.handlePrev }
                      />
                    {' '}
                    <RaisedButton
                      label={stepIndex === 2 ? 'Finish' : 'Next'}
                      primary={true}
                      onTouchTap={ this.handleNext }
                      />
                  </div>
                </div>                 
              )
          }
        </div>
        
        
      </div>
    )
  }
}

export default Hub;
