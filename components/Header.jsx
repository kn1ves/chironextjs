import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import SMButtons from './sm_buttons';
import AppDrawer from './drawer';

const styles = {
  flex: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row-reverse',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const theme = createMuiTheme({
  palette: {
    primary: {main: "rgb(12,91,173)"},
    secondary: {main: "rgb(255,255,255)"},
  }
});

function ChiroAppBar(props) {
  const { classes } = props;
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <AppBar position="fixed">
          <Toolbar>
            <AppDrawer />
            <div className={classes.flex}>
              <div>
                <SMButtons />
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    </div>
  );
}

ChiroAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChiroAppBar);