import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/Layout';
import Paper from '@material-ui/core/Paper';
import chiro from '../img/doctor.svg';
import walking from '../img/trekking.svg';
import stairs from '../img/stairs.svg';
import exercise from '../img/exercise.svg';
import diet from '../img/diet.svg';
import conclusion from '../img/clipboard.svg';
import IntroLiverpool from '../components/IntroLiverpool';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  contentwrapper: {
    borderRadius: 12.5,
    marginTop: -160,
    marginLeft: 25,
    marginRight: 25,
    paddingBottom: 45,
  },
  title: {
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 15,
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
    color: '#3C4858',
    minHeight: 32,
    fontWeight: 400,
    fontSize: '32',
    fontFamily: 'Helvetica',
    textDecoration: 'none',
  },
  bodytext: {
    fontFamily: 'Helvetica',
    color: '#999999',
    overflow: 'hidden',
    fontSize: 14,
    fontWeight: 220,
    paddingLeft: 25,
    paddingRight: 25,
    textAlign: 'justify',
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

function Liverpool(props) {
  const { classes } = props;

  return (
    <Layout>
      <div>
        <IntroLiverpool />
      </div>
      <div>
        <Paper className={classes.contentwrapper}>
          <Grid container>
            <Grid item xs={12}>
              <div className={classes.title}>
                <img src={chiro} height="128" width="128" alt="Chiropractor in Liverpool" />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.title}>
                <h2 className={classes.heading}>
                  Chiropractors in Liverpool, England
                </h2>
                <h3 className={classes.bodytext}>
                  The ability to carry on with a healthy lifestyle goes past access to quality doctors, optimal healthcare benefits or even high-class hospitals. A city's health, to a large degree, takes into consideration the decisions its occupants make to bring down their individual health risks. In the event that you are a part of the healthy breed, carrying on with a balanced way of life shouldn't be a troublesome task. There are many ways to guarantee that you remain in a healthy state. The following are a couple of tips to enable you to maintain your well-being.
                </h3>
              </div>
            </Grid>
            <Grid item xs={12} sm={3}>
              <div className={classes.title}>
                <img src={walking} height="80" width="80" alt="Walking 80x80" />
              </div>
            </Grid>
            <Grid item xs={12} sm={9}>
              <h3 className={classes.bodytext}>
                <span className={classes.subheading}>Walk When You Can<br/></span>
                Most individuals incline toward driving rather than walking, especially to their workplaces. Walking is a fantastic low-impact practice that plays an instrumental part in toning up your legs and abs, consuming sugars and making you feel relaxed. Avoid cabs and tubes as much as you can, and instead, walk to any close destination. Guarantee you have comfortable shoes and lightweight garments unless it is winter season. You can also visit better places inside the city as part of the activity. Alternatively, you can take a bike ride to your destination on the off chance that you discover it an additionally appealing choice.
              </h3>
            </Grid>
            <Grid item xs={12} sm={3}>
              <div className={classes.title}>
                <img src={stairs} height="80" width="80" alt="Stairs 80x80" />
              </div>
            </Grid>
            <Grid item xs={12} sm={9}>
              <h3 className={classes.bodytext}>
                <span className={classes.subheading}>Utilize The Stairs<br/></span>
                Most individuals want to utilize escalators and elevators when they are late as well as notwithstanding when the time isn't an issue. They think that it's less tedious and probably more enjoyable. In any case, fortunately, most workplaces have many stairs, something you should take advantage of on the off chance that you plan on leading a healthy way of life. Instead of utilizing the elevator or escalator, use the stairs. It is a phenomenal way to do light activities notwithstanding amid your working hours. Additionally, it is great for your legs and back.
              </h3>
            </Grid>
            <Grid item xs={12} sm={3}>
              <div className={classes.title}>
                <img src={exercise} height="80" width="80" alt="Exercise 80x80" />
              </div>
            </Grid>
            <Grid item xs={12} sm={9}>
              <h3 className={classes.bodytext}>
                <span className={classes.subheading}>Embrace Outdoor Activities<br/></span>
                If you cannot find time to go to the exercise center, it doesn't mean that your mission to lead a healthy life is damned. You should attempt new wellness hacks, for example, energetic walking and run. Moreover, you can as well invest some energy to loosen up with a couple of open-air yoga acts like this will help relax your muscles and consume a couple of calories.
              </h3>
            </Grid>
            <Grid item xs={12} sm={3}>
              <div className={classes.title}>
                <img src={diet} height="80" width="80" alt="Diet 80x80" />
              </div>
            </Grid>
            <Grid item xs={12} sm={9}>
              <h3 className={classes.bodytext}>
                <span className={classes.subheading}>Eat and Drink Healthy<br/></span>
                For one to carry on with a healthy life, he or she should embrace a balanced eating regimen. Guarantee your eating regimen has a broad range of organic products, veggies, lean meat, eggs, angle, nuts, beats, entire grains as well as naturally low dairy fat nourishments. On the off chance that you are the sort of individual who likes attempting new flavors, cocktails, salads or natural products, endeavor to avoid overeating or drinking too much. This may foul up with your healthy eating regimen. On the off chance that you want to snatch a couple of snacks, counterbalance it by drinking more water or doing light physical activities.
              </h3>
            </Grid>
            <Grid item xs={12} sm={3}>
              <div className={classes.title}>
                <img src={conclusion} height="80" width="80" alt="Conclusion 80x80" />
              </div>
            </Grid>
            <Grid item xs={12} sm={9}>
              <h3 className={classes.bodytext}>
                <span className={classes.subheading}>Conclusion<br/></span>
                Although life, in general, can be exorbitantly occupied; regardless you have a chance to lead a healthy life. As noted above, little advances, for example, walking to close destinations, utilizing stairs instead of elevators, embracing outside activities, embracing local facilities as well as eating and drinking healthy can help you in your mission to maintain a healthy living.
              </h3>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </Layout>
  );
}

Liverpool.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Liverpool);