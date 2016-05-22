import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { indigo600, white, black } from 'material-ui/styles/colors';

const myTheme = {
  // fontFamily: 'Roboto, Noto Sans S Chinese',
  // fontFamily: 'Segoe UI, microsoft YaHei',

  overlay: {
    backgroundColor: 'none'
  },

  textField: {
    textColor: black,
    // hintColor: 'rgba(255,255,255,0.5)'
    hintColor: 'rgba(0, 0, 0, 0.5)'
  },

  toolbar: {
    height: 64,
    backgroundColor: indigo600,
    iconColor: white,
    titleFontSize: 17
  }
};

const Theme = getMuiTheme(myTheme);

export default Theme;
