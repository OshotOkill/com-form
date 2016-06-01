import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import { indigo500 } from 'material-ui/styles/colors';


const styles = {
  bgColor: indigo500,
  labelColor: '#fff'
}

class UserInfo extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      values: {
        id: 'Norn',
        mail: 'nlfctx@outlook.com',
        phone: '18351927387'
      },
      
      disables: {
        isIdDisable: true,
        isMailDisable: true,
        isPhoneDisable: true
      }
    };
    this.handleIdMutate = this.handleIdMutate.bind(this);
    this.handleMailMutate = this.handleMailMutate.bind(this);
    this.handlePhoneMutate = this.handlePhoneMutate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    const { id, mail, phone } = this.state.values;
    const { id: targetId, value } = e.target;
    
    switch (targetId) {
      case 'user-id':
        this.setState({
          values: { id: value, mail, phone}
        });
        break;
      case 'user-mail':
        this.setState({
          values: { id, mail: value, phone}
        });
        break;
      case 'user-phone':
        this.setState({
          values: { id, mail, phone: value }
        });
        break;
    }
  }
  
  handleIdMutate() {
    this.setState({
      disables: {
        isIdDisable: false,
        isMailDisable: true,
        isPhoneDisable: true
      }
    });
  }
  
  handleMailMutate() {
    this.setState({
      disables: {
        isIdDisable: true,
        isMailDisable: false,
        isPhoneDisable: true
      }
    });
  }
  
  handlePhoneMutate() {
    this.setState({
      disables: {
        isIdDisable: true,
        isMailDisable: true,
        isPhoneDisable: false
      }
    });
  }
  
  render() {
    const {
      values: { id, mail, phone },
      disables: { isIdDisable, isMailDisable, isPhoneDisable } 
    } = this.state;
    
    // RaisedButton style cannot manually configure
    return (
      <div style={{maxWidth: '960px', margin: '0 auto'}}>
        <List>
          <ListItem
            style={{overflow: 'hidden'}}
            initiallyOpen={true}
            primaryText="基本信息"
            nestedItems={[
              <ListItem
                disabled={true} 
                key={1} 
                primaryText={
                  <div>
                    <TextField id="user-id" value={id} onChange={ this.handleChange } disabled={isIdDisable} />
                    <RaisedButton label="修改" style={{margin: '0 70px 0 30px'}} backgroundColor={styles.bgColor} labelColor={styles.labelColor} onClick={ this.handleIdMutate } />
                    <TextField id="user-mail" value={mail} onChange={ this.handleChange } disabled={isMailDisable} />
                    <RaisedButton label="修改" style={{margin: '0 70px 0 30px'}} backgroundColor={styles.bgColor} labelColor={styles.labelColor} onClick={ this.handleMailMutate } />
                  </div>
                } 
                />,
                
              <ListItem
                disabled={true} 
                key={2} 
                primaryText={
                  <div>
                    <TextField id="user-phone" value={phone} onChange={ this.handleChange } disabled={isPhoneDisable} />
                    <RaisedButton label="修改" style={{margin: '0 70px 0 30px'}} backgroundColor={styles.bgColor} labelColor={styles.labelColor} onClick={ this.handlePhoneMutate } />
                    <TextField id="user-level" value="新手" disabled={true} />
                    <RaisedButton label="修改" style={{margin: '0 70px 0 30px'}} backgroundColor={styles.bgColor} labelColor={styles.labelColor} />
                  </div>
                } 
                />,
                
              <ListItem
                disabled={true}
                key={3}
                primaryText={
                  <div>
                    <RaisedButton label="确认修改" style={{marginRight: 0}} backgroundColor={styles.bgColor} labelColor={styles.labelColor}/>
                  </div>
                }
                />
            ]}
            />
        </List>
      </div>
    )
  }
}

export default UserInfo;
