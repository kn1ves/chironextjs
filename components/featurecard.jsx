import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Medicine from '../img/medicine.svg';
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

function FeatureCardMedicine(props) {
  const { classes } = props;
  return (
    <div>
      <div className={classes.root}>
        <img src={Medicine} height='128' width='128' className={classes.imgvector} alt="Medicine Free" />
        <Typography variant="headline" component="h3" className={classes.heading}>
          Medicine Free
        </Typography>
        <Typography component="p" align="justify" className={classes.bodytext}>
          Most modern healthcare professionals lean toward pills for tackling any kind of problem their patients face which can have severe side effects. If you're currently undergoing some kind of treatment for your pain, then chiropractic care will complement the treatment helping you recover quickly.
        </Typography>
      </div>
    </div>
  );
}

FeatureCardMedicine.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FeatureCardMedicine);