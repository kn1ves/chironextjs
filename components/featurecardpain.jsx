import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pain from '../img/pain.svg';
{/*import '../assets/fontstyles';*/}

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
  }),
  imgvector: {
    paddingTop: 24,
    paddingBottom: 24,
  },
heading: {
    marginTop: 20,
    marginBottom: 10,
    color: '#3C4858',
    minHeight: 32,
    fontWeight: 400,
    fontSize: '2rem',
    fontFamily: 'Helvetica',
    textDecoration: 'none',
  },
  bodytext: {
  color: '#999999',
  overflow: 'hidden',
  fontSize: 14,
  fontFamily: 'Helvetica',
},
});

function FeatureCardPain(props) {
  const { classes } = props;
  return (
    <div>
      <div className={classes.root}>
        <img src={Pain} height='128' width='128' className={classes.imgvector} alt="Pain Relief" />
        <Typography variant="headline" component="h3" className={classes.heading}>
          Pain Relief
        </Typography>
        <Typography component="p" align="left" className={classes.bodytext}>
          Long ass sales pitch, omg this is the longest sales pitch in sales history, all the customers are already asleep dude bro wtf xD lmfao
        </Typography>
      </div>
    </div>
  );
}

FeatureCardPain.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FeatureCardPain);