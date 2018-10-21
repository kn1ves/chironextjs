import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
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
  infowrapper: {
    height: 250,
  },
  details: {
    height: 250,
    marginLeft: '8%',
    marginRight: '8%',
    marginTop: 0,
    marginBottom: 0,
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  infohead: {
    backgroundColor: 'rgb(12,91,173)',
    borderRadius: 4,
    height: 60,
    width: '100%',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  infoheading: {
    margin: 0,
    paddingTop: 15,
    color: '#fff',
    minHeight: 16,
    fontWeight: 700,
    fontSize: '1.25rem',
    fontFamily: 'Helvetica',
    textDecoration: 'none',
  },
  infotext: {
    margin: 0,
    fontSize: '1rem',
    fontWeight: 400,
    fontFamily: 'Helvetica',
    textDecoration: 'none',
  },
  fullwidth: {
    width: '100%',
  },

});

function Liverpool(props) {
  const { classes } = props;

  return (
    <Layout>
      <div>
        <IntroLiverpool />
      </div>
      <div itemscope itemtype="http://schema.org/MedicalBusiness">
        <Paper className={classes.contentwrapper}>
          <Grid container>
            <Grid item xs={12}>
              <div className={classes.title}>
                <img src={chiro} itemprop="logo" height="128" width="128" alt="Chiropractor in Liverpool" />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.title}>
                <h2 className={classes.heading}>
                  Chiropractors in Liverpool, England
                </h2>
              </div>
            </Grid>
            <Grid item xs={12}>
              <Grid container className={classes.infowrapper}>
                <Grid item xs={4}>
                  <Paper className={classes.details}>
                    <Paper className={classes.infohead}>
                      <h2 className={classes.infoheading}>Qualified Chiropractors</h2>
                    </Paper>
                    <Grid item xs={12}>
                      <Button className={classes.fullwidth}>
                        <h3 className={classes.infotext}>10 Years of Experience</h3>
                      </Button>
                    </Grid>
                    <Divider />
                    <Grid item xs={12}>
                      <Button className={classes.fullwidth}>
                        <h3 className={classes.infotext}>More than 500 Happy Clients</h3>
                      </Button>
                    </Grid>
                    <Divider />
                    <Grid item xs={12}>
                      <Button className={classes.fullwidth}>
                        <h3 className={classes.infotext}>NIH Accredited</h3>
                      </Button>
                    </Grid>
                    <Divider />
                    <Grid item xs={12}>
                      <Button className={classes.fullwidth}>
                        <h3 itemprop="knowsAbout" className={classes.infotext}>Alternative Medicine</h3>
                      </Button>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.details}>
                    <Paper className={classes.infohead}>
                      <h2 className={classes.infoheading}>Information</h2>
                    </Paper>
                    <Grid item xs={12}>
                      <Button className={classes.fullwidth}>
                        <h3 className={classes.infotext}>Book an Appointment <em itemprop="telephone">+44 3069 990145</em></h3>
                      </Button>
                    </Grid>
                    <Divider />
                    <Grid item xs={12}>
                      <Button className={classes.fullwidth}>
                        <h3 className={classes.infotext}><span itemprop="openingHours" content="Mo-Fr 10:00-18:00">Open Monday to Friday 10AM to 6PM</span></h3>
                      </Button>
                    </Grid>
                    <Divider />
                    <Grid item xs={12}>
                      <Button className={classes.fullwidth}>
                        <h3 itemprop="areaServed" className={classes.infotext}>Liverpool, England</h3>
                      </Button>
                    </Grid>
                    <Divider />
                    <Grid item xs={12}>
                      <Button className={classes.fullwidth}>
                        <h3 itemprop="email" className={classes.infotext}>chiropractorhunter@gmail.com</h3>
                      </Button>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.details}>
                    <Paper className={classes.infohead}>
                      <h2 className={classes.infoheading}>Pricing</h2>
                    </Paper>
                    <Grid item xs={12}>
                      <Button className={classes.fullwidth}>
                        <h3 className={classes.infotext}>&pound;<span itemprop="priceRange">50</span> per visit (<span itemprop="currenciesAccepted">GBP</span>)</h3>
                      </Button>
                    </Grid>
                    <Divider />
                    <Grid item xs={12}>
                      <Button className={classes.fullwidth}>
                        <h3 className={classes.infotext}>&pound;30 for X-RAY</h3>
                      </Button>
                    </Grid>
                    <Divider />
                    <Grid item xs={12}>
                      <Button className={classes.fullwidth}>
                        <h3 className={classes.infotext}>&pound;30 for follow-up visits</h3>
                      </Button>
                    </Grid>
                    <Divider />
                    <Grid item xs={12}>
                      <Button className={classes.fullwidth}>
                        <h3 className={classes.infotext}>&pound;15 for Custom Diet Chart</h3>
                      </Button>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.title}>
                <h3 className={classes.bodytext}>
                  The ability to carry on with a healthy lifestyle goes past access to quality doctors, optimal healthcare benefits or even high-class hospitals. A city's health, to a large degree, takes into consideration the decisions its occupants make to bring down their individual health risks. In the event that you are a part of the healthy breed, carrying on with a balanced way of life shouldn't be a troublesome task. There are many ways to guarantee that you remain in a healthy state. The following are a couple of tips to enable you to maintain your well-being.
                </h3>
              </div>
            </Grid>
            <Grid item xs={12} sm={3}>
              <div className={classes.title}>
                <img src={walking} height="80" width="80" alt="Walking" />
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
                <img src={stairs} height="80" width="80" alt="Stairs" />
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
                <img src={exercise} height="80" width="80" alt="Exercise" />
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
                <img src={diet} height="80" width="80" alt="Diet" />
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
                <img src={conclusion} height="80" width="80" alt="Conclusion" />
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