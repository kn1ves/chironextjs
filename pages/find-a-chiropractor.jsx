import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout';
import IntroIndex from '../components/IntroIndex';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import Head from 'next/head';
import favicon from '../img/chiroicon.png'

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
    <Head>
      <title>Find a Chiropractor | Chiropractorhunter</title>
      <meta property="og:title" content="Find a Chiropractor | Chiropractorhunter" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://chiropractohunter.com/find-a-chiropractor" />
      <meta name="description" content="Find the best chiropractors! We have accumulated the best list of chiropractors in different locations which can help you deal with pain and other ailments." />
      <link rel="canonical" href="https://chiropractorhunter.com/find-a-chiropractor" />
      <meta name="keywords" content="chiropractors,chiropractic,pain,clinic,chiropractors,find" />
      <link rel="icon" href={favicon} type="image/png" />
    </Head>
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
                <a href="/chiropractor-liverpool" style={{textDecoration: 'none',}}>
                  <Button>
                    <a href="/chiropractor-liverpool" style={{textDecoration: 'none', color: '#000',}}>
                      Liverpool, England
                    </a>
                  </Button>
                </a>
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