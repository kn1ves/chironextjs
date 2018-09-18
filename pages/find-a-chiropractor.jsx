import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout';
import IntroIndex from '../components/IntroIndex';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from 'next/link';

const styles = theme => ({
  contentwrapper: {
    borderRadius: 12.5,
    marginTop: -160,
    marginLeft: 25,
    marginRight: 25,
  },
  title: {
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  feature: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    display: 'flex',
  },
  heading: {
    marginTop: 20,
    marginBottom: 10,
    color: '#3C4858',
    minHeight: 32,
    fontWeight: 700,
    fontSize: '2.25rem',
    fontFamily: 'Helvetica',
    textDecoration: 'none',
  },
  subheading: {
    marginTop: 20,
    marginBottom: 10,
    color: '#3C4858',
    minHeight: 32,
    fontWeight: 400,
    fontSize: '2rem',
    fontFamily: 'Helvetica',
    textDecoration: 'none',
    paddingLeft: '8%',
    paddingRight: '8%',
  },
  bodytext: {
    fontFamily: 'Helvetica',
    color: '#999999',
    overflow: 'hidden',
    fontSize: 14,
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  bodytext2: {
    fontFamily: 'Helvetica',
    color: '#999999',
    overflow: 'hidden',
    fontSize: 14,
    paddingRight: '8%',
    paddingLeft: '8%',
  },
});

function Index(props) {
  const { classes } = props;

  return (
    <Layout>
      <div>
        <IntroIndex />
      </div>
      <div>
        <Paper className={classes.contentwrapper}>
          <Grid container>
            <Grid item xs={12}>
              <div className={classes.title}>
                <h2 className={classes.heading}>
                  Find Chiropractors Near You
                </h2>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.title}>
                <Link href="/chiropractor-liverpool">
                  <Button>
                    Liverpool, England
                  </Button>
                </Link>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.title}>
                  <Button>
                    London, England
                  </Button>
                </div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.title}>
                  <Button>
                    Glasgow, Scotland
                  </Button>
                </div>
            </Grid>
            <Grid item xs={12}>
              <div>
                <br/>
                <br/>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </Layout>
  );
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);