import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';
import EmailIcon from 'material-ui/svg-icons/communication/email';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import FileDownload from 'material-ui/svg-icons/file/file-download';
import FileUpload from 'material-ui/svg-icons/file/file-upload';
import { blue500, indigo600, yellow600 } from 'material-ui/styles/colors';


class Members extends Component {
  render() {
    return (
      <div>
        <List style={{width: '33.3%', border: '2px solid #333', margin: '0 auto 10px'}}>
          <Subheader>在线</Subheader>
          <ListItem 
            primaryText="Norn"
            leftAvatar={<Avatar />}
            rightIcon={<EmailIcon />}
            />
          <ListItem 
            primaryText="Martin"
            leftAvatar={<Avatar />}
            rightIcon={<EmailIcon />}
            />
          <Divider />
          <Subheader>离线</Subheader>
          <ListItem 
            primaryText="Joe"
            leftAvatar={<Avatar />}
            rightIcon={<EmailIcon />}
            />
        </List>
        
        <List style={{width: '33.3%', border: '2px solid #333', margin: '0 auto 10px'}}>
          <ListItem 
            primaryText="上传文件/文件夹"
            rightIcon={<FileUpload color={indigo600} />}
            />
          <Divider />
          <Subheader>文件夹</Subheader>
          <ListItem 
            primaryText="高数"
            leftIcon={<FileFolder color={blue500} />}
            rightIcon={<FileDownload color={indigo600} />}
            />
          <ListItem 
            primaryText="大物"
            leftIcon={<FileFolder color={indigo600} />}
            rightIcon={<FileDownload color={indigo600} />}
            />
          <Divider />
          <Subheader>文件</Subheader>
          <ListItem 
            primaryText="信号"
            leftIcon={<ActionAssignment color={indigo600} />}
            rightIcon={<FileDownload color={indigo600} />}
            />
        </List>
      </div>
    )
  }
}

export default Members;
