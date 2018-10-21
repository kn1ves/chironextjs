import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search'
import Head from 'next/head';
import Link from 'next/link';
import favicon from '../img/chiroicon.png'

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
    fontWeight: 400,
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

function IntroLiverpool(props) {
  const { classes } = props;

  return (
    <div>
      <Head>
        <title>Chiropractor Liverpool, England</title>
        <meta itemscope itemtype="http://schema.org/MedicalBusiness" />
        <meta property="og:title" content="Chiropractor in Liverpool, England" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://chiropractohunter.com/chiropractor-liverpool" />
        <meta name="description" content="Looking for the best chiropractor in liverpool? We have the best chiropractor you can find in Liverpool, England. Our selected chiropractic practitioners are highly qualified and trained to deal with your ailments and will help you feel better in no time!" />
        <meta name="keywords" content="chiropractors,chiropractic,pain,clinic,chiropractors,liverpool,england" />
        <link rel="canonical" href="https://chiropractorhunter.com/chiropractor-liverpool" />
        <link rel="icon" href={favicon} type="image/png" />
      </Head>
      <div className={classes.root}>
        <Grid>
          <Grid item xs={12}>
            <div className={classes.logo}>
              <div className={classes.flex1}>
              <Grid item xs={12}>
                <a href="/" style={{textDecoration: 'none',}}>
                  <Button>
                    <img src={require('../img/logo.png')} alt="Looking for the best chiropractors in Liverpool? We have selected our top chiropractor for the job." width="100%" />
                  </Button>
                </a>
              </Grid>
              <Grid item xs={12}>
                <h1 className={classes.chiroheading}>
                  Liverpool Chiropractor<br />
                </h1>
              </Grid>
              <Grid item xs={12}>
                <h2 className={classes.chirop}>
                  If you're looking for the best chiropractics in Liverpool, England then you're at the right place. We have carefully chosen the best quality chiropractics for you.
                </h2>
              </Grid>
              <Grid item xs={12}>
                <h2 className={classes.chirop}>
                  We have carefully handpicked the best quality chiropractic to relieve you from pain.
                </h2>
              </Grid>
            </div>
            <div className={classes.flex2}>
            </div>
          </div>
        </Grid>
        </Grid>
      </div>
    </div>
  );
}

IntroLiverpool.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(IntroLiverpool);