import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Brain from '../img/brain.svg';

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

function FeatureCardBrain(props) {
  const { classes } = props;
  return (
    <div>
      <div className={classes.root}>
        <img src={Brain} height='128' width='128' className={classes.imgvector} alt="Neurological Support" />
        <h3 className={classes.heading}>
          Neurological Support
        </h3>
        <p align="justify" className={classes.bodytext}>
          Do you have brain fog? Don't feel like getting up and doing what you're supposed to be doing? You might be suffering from a cognitive decline!
Chiropractics provide services for treating brain and nervous system disorders using safe and powerful techniques producing long-term health benefits.
        </p>
      </div>
    </div>
  );
}

FeatureCardBrain.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FeatureCardBrain);