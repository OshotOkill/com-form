import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

class Announcement extends Component {
  render() {
    return (
      <Paper style={{width: '960px', margin: '50px auto', padding: '20px 50px 30px'}}>
        <h2>公告：</h2>
        {this.props.groups.map((group, i) => {
          if (!i) {
            return group.announcement
          }
        })}
      </Paper>
    )
  }
}

export default Announcement;
