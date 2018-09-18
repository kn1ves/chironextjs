import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from 'react-icons/lib/fa/facebook-square';
import InstagramIcon from 'react-icons/lib/ti/social-instagram';
import TwitterIcon from 'react-icons/lib/fa/twitter-square';

const styles = {
  root: {
    flexGrow: 1,
  }}

function SMButtons(props) {
  const {
    classes
  } = props;
  return (
    <div className={classes.root}>
    <a href='https://www.facebook.com/Chiropractorhunter-2075898506059830/?ref=aymt_homepage_panel' target="_blank">
      <IconButton>
        <FacebookIcon size="24" color="#fff" />
      </IconButton>
    </a>
    <a href='https://www.instagram.com/chiropractorhunter1/' target="_blank">
      <IconButton>
        <InstagramIcon size="24" color="#fff" />
      </IconButton>
    </a>
    <a href='https://twitter.com/kapil_shrotriya' target="_blank">
      <IconButton>
        <TwitterIcon size="24" color="#fff" />
      </IconButton>
    </a>
    </div>
  );
}

SMButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SMButtons);