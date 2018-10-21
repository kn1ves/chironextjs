import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Link from 'next/link';

const theme = createMuiTheme({
  palette: {
    primary: {main: "rgb(12,91,173)"},
    secondary: {main: "rgb(255,255,255)"},
  }
});

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'rgb(12,91,173)',
  },
  logo: {
    height: 650,
    paddingLeft: 72,
    paddingRight: 72,
    display: 'flex',
    backgroundColor: 'rgb(12,91,173)',
    paddingTop: 64,
    
  },
  flex1: {
    flex: 50,
    alignContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex2: {
    flex: 50,
  },
  chiroheading: {
    color: "#fff",
    fontWeight: 700,
    fontSize: "2.5rem",
    display: "inline-block",
    fontFamily: 'Helvetica',
    paddingLeft: 10,
  },
  chirop: {
    color: "#fff",
    align: "left",
    marginTop: 10,
    marginBottom: 10,
    fontSize: "1.125rem",
    fontFamily: 'Helvetica',
    paddingLeft: 10,
  },
  button: {
    margin: theme.spacing.unit+4,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
});

function IntroIndex(props) {
  const { classes } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Grid>
          <Grid item xs={12}>
            <div className={classes.logo}>
              <div className={classes.flex1}>
              <Grid item xs={12}>
                <a href="/" style={{textDecoration: 'none',}}>
                  <Button>
                    <img src={require('../img/logo.png')} alt="Find the best qualified chiropractors through Chiropractorhunter" width="100%" />
                  </Button>
                </a>
              </Grid>
              <Grid item xs={12}>
                <h1 className={classes.chiroheading}>
                  Find Chiropractics Near You<br />
                </h1>
              </Grid>
              <Grid item xs={12}>
                <p className={classes.chirop}>
                  If you're looking for the best chiropractors near you, then you're at the right place. We have carefully chosen the best quality chiropractics for you.
                </p>
              </Grid>
              <Grid>
                <a href="/find-a-chiropractor" style={{textDecoration: 'none',}}>
                  <Button className={classes.button} variant="contained">
                    Find
                    <SearchIcon className={classes.rightIcon} />
                  </Button>
                </a>
              </Grid>
            </div>
            <div className={classes.flex2}>
            </div>
          </div>
        </Grid>
        </Grid>
      </div>
    </MuiThemeProvider>
  );
}

IntroIndex.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(IntroIndex);
