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
import painimg1 from '../img/pain1.png';
import painimg2 from '../img/pain2.jpg';
import painimg3 from '../img/pain3.png';

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
                  Why To Choose a Chiropractor
                </h2>
                <Typography component="p" align="justify" className={classes.bodytext}>
                  You should go for chiropractic care if you love the idea of achieving health naturally, without the use of drugs and surgery. Most people mock chiropractors saying they are not "real doctors". However, chiropractors, like medical doctors, undergo an uncompromising education in the medical sciences. In areas like anatomy, physiology, rehabilitation, nutrition, and public health, they receive a more intensive, hands-on education than their MD counterparts. A typical applicant at a chiropractic college has already acquired around 4 years of pre-medical education including courses in biology, chemistry, physics, and psychology. After joining a chiropractic college, the requirements become even more demanding. 4-5 years of professional study are the standard and due to the hands-on nature of chiropractic, a significant portion of time is spent in clinical training.
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
                The spine is made up of vertebrae extending from the skull and ending at the sacrum. Cervical discs are present in between to absorb shocks. Inflammation or injury in the spinal joints, muscles, discs or nerves can cause back pain or stiffness. Examples of common conditions causing back pain are herniated or slipped discs, bulging discs, degenerated disc disease, a pinched nerve, or injuries/strain.
              </Typography><br/>
              <Typography component="p" align="justify" className={classes.bodytext2}>
                Generally, drugs taken to cure back pain are drugs like Tylenol (acetaminophen) or Advil (Ibuprofen). However, these come with side effects like nausea, stomach pain, itching, rash, dark urine, etc.
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