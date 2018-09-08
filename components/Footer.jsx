import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
  palette: {
    primary: {main: "rgb(12,91,173)"},
    secondary: {main: "rgb(255,255,255)"},
  }
});

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '5%',
    paddingBottom: 0,
  },
  footercopy: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: '0.5%',
  },
  navtext: {
    fontFamily: 'Helvetica',
    color: '#999999',
    overflow: 'hidden',
    fontSize: 14,
    paddingLeft: '1%',
    paddingRight: '1%',
    marginBottom: 10,
    width: '100%',
  },
});

function Footer(props) {
  const { classes } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Grid>
          <Grid item xs={12}>
            <div className={classes.footer}>
              <Button>
                Home
              </Button>
              <Button>
                Find a chiropractor
              </Button>
              <Button>
                Contact Us
              </Button>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.footercopy}>
              <Typography component="p" className={classes.navtext}>
                &copy;&nbsp;Kapil Shrotriya | www.chiropractorhunter.com
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </MuiThemeProvider>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
