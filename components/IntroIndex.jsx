import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search'

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
                <img src={require('../img/logo.png')} alt="Chiropractorhunter Logo" width="100%" />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="headline" component="h1" className={classes.chiroheading}>
                  Find Chiropractics Near You<br />
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" component="p" className={classes.chirop}>
                  If you're looking for the best chiropractors near you, then you're at the right place. We have carefully chosen the best quality chiropractics for you.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" component="p" className={classes.chirop}>
                  Click on any of the countries in the world map to get started.
                </Typography>
              </Grid>
              <Grid>
                <Button className={classes.button} variant="raised" color="rgb(178,54,52)">
                  Find
                  <SearchIcon className={classes.rightIcon} />
                </Button>
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
