import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout';
import IntroIndex from '../components/IntroIndex';
import Typography from '@material-ui/core/Typography';
import FeatureCardMedicine from '../components/featurecard';
import FeatureCardPain from '../components/featurecardpain';
import FeatureCardBrain from '../components/featurecardbrain';
import painimg1 from '../img/pain1.jpg';
import painimg2 from '../img/pain2.jpg';
import painimg3 from '../img/pain3.jpg';

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
                  Why to choose a chiropractor
                </h2>
                <Typography component="p" align="center" className={classes.bodytext}>
                  Long ass sales pitcch, omg this is the longest sales pitch in sales history, all the customers are already asleep dude bro wtf xD lmfao
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className={classes.feature}>
                <FeatureCardMedicine />
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className={classes.feature}>
                <FeatureCardPain/>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className={classes.feature}>
                <FeatureCardBrain/>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className={classes.feature}>
                <img src={painimg2} height="256" width="256" alt="Backache" />
              </div>
            </Grid>
            <Grid item xs={12} sm={8}>
              <h3 className={classes.subheading}>
                What causes back pain?
              </h3>
              <Typography component="p" align="justify" className={classes.bodytext2}>
                Your neck is made up of vertebrae that extend from the skull to the upper torso. Cervical discs absorb shock between the bones. The bones, ligaments, and muscles of your neck support your head and allow for motion. Any abnormalities, inflammation, or injury can cause neck pain or stiffness.
                Neck pain can come from a number of disorders and diseases and can involve any of the tissues in the neck. Examples of common conditions causing neck pain are degenerative disc disease, neck strain, neck injury such as in whiplash, a herniated disc, or a pinched nerve. Neck pain is also referred to as cervical pain.
                Creams or gels, such as Bengay, that are rubbed into the neck. Nonsteroidal anti-inflammatory drugs, including ibuprofen (such as Advil) or naproxen (such as Aleve), that can help relieve pain and reduce inflammation.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className={classes.feature}>
                <img src={painimg1} height="256" width="256" alt="Backache treatment" />
              </div>
            </Grid>
            <Grid item xs={12} sm={8}>
              <h3 className={classes.subheading}>
                Treating back pain
              </h3>
              <Typography component="p" align="justify" className={classes.bodytext2}>
                Chiropractic is a health care profession dedicated to the non-surgical treatment of disorders of the nervous system and/or musculoskeletal system. Generally, chiropractors maintain a unique focus on spinal manipulation and treatment of surrounding structures.
                Regular chiropractic treatments usually focus on spinal manipulation and alignment to aid pain management and stimulate the body’s self-healing abilities. Realignment of the spine is thought to reduce pressure on the central nervous system. Headaches and lower back pain are among the most common conditions treated by a chiropractor.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className={classes.feature}>
                <img src={painimg3} height="256" width="256" alt="Headache treatment" />
              </div>
            </Grid>
            <Grid item xs={12} sm={8}>
              <h3 className={classes.subheading}>
                Treating headaches
              </h3>
              <Typography component="p" align="justify" className={classes.bodytext2}>
                Long ass sales pitch, omg this is the longest sales pitch in sales history, all the customers are already asleep dude bro wtf xD lmfao
              </Typography>
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